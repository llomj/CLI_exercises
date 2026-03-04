// LEVEL 8: SHARK — Security & Hardening (CLI)
// 100 Beginner questions. Intermediate/Expert use placeholders.

const beginner = [
  (_i: number) => ({
    q: "What does `passwd` do?",
    o: ["Changes user password", "Shows password", "Sets password", "Password command"],
    c: 0,
    e: "passwd changes your password. passwd user (root) changes another user's.",
    de: "passwd. Prompts for current, then new. /etc/shadow stores hashes. chage for expiry."
  }),
  (_i: number) => ({
    q: "What does `useradd` do?",
    o: ["Creates new user account", "Adds user", "Creates user", "User add"],
    c: 0,
    e: "useradd creates user. useradd -m for home. useradd -s /bin/bash. Requires root.",
    de: "useradd -m -s /bin/bash jdoe. -m creates home. -G group for secondary. adduser is wrapper."
  }),
  (_i: number) => ({
    q: "What does `usermod -aG group user` do?",
    o: ["Adds user to supplementary group", "Adds to group", "Modifies user", "Group add"],
    c: 0,
    e: "usermod -aG appends to group list. -a append, -G groups. Without -a replaces.",
    de: "usermod -aG docker jdoe. User must re-login for group to take effect. id to verify."
  }),
  (_i: number) => ({
    q: "What does `chmod 600 file` set?",
    o: ["Owner read+write only (rw-------)", "Read write only", "600 permissions", "Owner only"],
    c: 0,
    e: "600 = rw-------. Owner read+write. Common for private keys, config with secrets.",
    de: "chmod 600 ~/.ssh/id_rsa. No group/other access. Essential for SSH keys."
  }),
  (_i: number) => ({
    q: "What does `chmod 700 dir` set?",
    o: ["Owner full access, none for others (rwx------)", "Directory 700", "Owner only dir", "Private directory"],
    c: 0,
    e: "700 = rwx------. Owner only. Required for ~/.ssh directory.",
    de: "chmod 700 ~/.ssh. SSH requires 700 on .ssh, 600 on private keys."
  }),
  (_i: number) => ({
    q: "What does `visudo` do?",
    o: ["Safely edits sudoers file", "Edit sudoers", "Sudo config", "Sudoers editor"],
    c: 0,
    e: "visudo locks file, checks syntax. Prevents lockout from bad sudoers.",
    de: "visudo. Uses $EDITOR. Validates before save. Never edit /etc/sudoers directly."
  }),
  (_i: number) => ({
    q: "What does `sudo -l` show?",
    o: ["Your sudo privileges", "Sudo list", "Allowed commands", "Sudo permissions"],
    c: 0,
    e: "sudo -l lists what you can run with sudo. NOPASSWD, etc.",
    de: "sudo -l. sudo -l -U user for another user. Shows (ALL) or specific commands."
  }),
  (_i: number) => ({
    q: "What does `su - user` do?",
    o: ["Switches to user with login shell", "Switch user", "Su login", "Login as user"],
    c: 0,
    e: "su - loads user's environment. su user (no -) keeps current env. su - = login shell.",
    de: "su - root. Loads /root/.profile. su root keeps $PATH. - is important."
  }),
  (_i: number) => ({
    q: "What does `id` show?",
    o: ["User and group IDs", "User ID", "Identity", "UID GID"],
    c: 0,
    e: "id shows uid, gid, groups. id user for another. id -un for username.",
    de: "id. uid=1000, gid=1000, groups=1000,adm. id -G for just group IDs."
  }),
  (_i: number) => ({
    q: "What does `who` show?",
    o: ["Logged-in users", "Who is logged in", "Users", "Sessions"],
    c: 0,
    e: "who lists logged-in users. Terminal, time. w is more detailed.",
    de: "who. who am i. w shows load + users. last for login history."
  }),
  (_i: number) => ({
    q: "What does `last` show?",
    o: ["Login history", "Last logins", "Login log", "User history"],
    c: 0,
    e: "last shows login/logout history. last user. last reboot. From /var/log/wtmp.",
    de: "last. last -n 20. last -f /var/log/wtmp.1 for rotated. lastb for failed."
  }),
  (_i: number) => ({
    q: "What does `lastb` show?",
    o: ["Failed login attempts", "Bad logins", "Failed logins", "Login failures"],
    c: 0,
    e: "lastb shows failed logins. From /var/log/btmp. lastb | head for recent.",
    de: "lastb. Requires root to read btmp. Security monitoring. Brute force detection."
  }),
  (_i: number) => ({
    q: "What does `faillock` or `pam_faillock` do?",
    o: ["Locks account after failed attempts (PAM)", "Fail lock", "Account lock", "PAM lock"],
    c: 0,
    e: "PAM module locks account after N failures. faillock --user to unlock. Prevents brute force.",
    de: "pam_faillock. /etc/security/faillock.conf. deny=5, unlock_time=900. faillock --reset."
  }),
  (_i: number) => ({
    q: "What does `gpg --gen-key` do?",
    o: ["Generates GPG key pair", "GPG generate", "Create key", "Key generation"],
    c: 0,
    e: "gpg --gen-key or --full-generate-key. Creates public/private key. For signing, encryption.",
    de: "gpg --full-generate-key. RSA, ECC. Passphrase protects private key. gpg --list-keys."
  }),
  (_i: number) => ({
    q: "What does `gpg -e -r recipient file` do?",
    o: ["Encrypts file for recipient", "GPG encrypt", "Encrypt for recipient", "Public key encrypt"],
    c: 0,
    e: "gpg -e encrypts. -r recipient uses their public key. Output: file.gpg.",
    de: "gpg -e -r alice@example.com secret.txt. Creates secret.txt.gpg. Only Alice can decrypt."
  }),
  (_i: number) => ({
    q: "What does `gpg -d file.gpg` do?",
    o: ["Decrypts GPG file", "GPG decrypt", "Decrypt file", "Decrypt"],
    c: 0,
    e: "gpg -d decrypts. Prompts for passphrase if needed. gpg file.gpg also works.",
    de: "gpg -d secret.gpg. Uses your private key. -o out.txt for output file."
  }),
  (_i: number) => ({
    q: "What does `gpg --sign file` do?",
    o: ["Creates detached signature", "GPG sign", "Signs file", "Digital signature"],
    c: 0,
    e: "gpg --sign creates signature. file.gpg or --detach-sig for file.sig. Proves authenticity.",
    de: "gpg -s file. gpg --detach-sig file. gpg --verify file.sig file. Integrity + identity."
  }),
  (_i: number) => ({
    q: "What does `openssl rand -hex 32` output?",
    o: ["32 random hex bytes", "Random hex", "Random bytes", "Hex random"],
    c: 0,
    e: "openssl rand -hex 32 outputs 64 hex chars (32 bytes). For keys, tokens.",
    de: "openssl rand -hex 32. openssl rand -base64 32. Cryptographically secure. /dev/urandom."
  }),
  (_i: number) => ({
    q: "What does `openssl passwd -6` do?",
    o: ["Generates password hash (SHA-512)", "OpenSSL password", "Password hash", "SHA512 hash"],
    c: 0,
    e: "openssl passwd -6 uses SHA-512 (crypt). For /etc/shadow. -1 for MD5 (legacy).",
    de: "openssl passwd -6. Prompts or -stdin. For shadow. -6 = SHA-512, default on modern."
  }),
  (_i: number) => ({
    q: "What does `ssh-keygen -t ed25519` do?",
    o: ["Generates Ed25519 SSH key pair", "SSH keygen", "Ed25519 key", "Create SSH key"],
    c: 0,
    e: "ssh-keygen -t ed25519 creates key. -t rsa for RSA. Default: ~/.ssh/id_ed25519.",
    de: "ssh-keygen -t ed25519 -C comment. -f for path. Ed25519 preferred over RSA. Shorter, faster."
  }),
  (_i: number) => ({
    q: "What does `PermitRootLogin no` in sshd_config do?",
    o: ["Disables root login via SSH", "No root SSH", "Root login off", "SSH hardening"],
    c: 0,
    e: "PermitRootLogin no prevents root from SSH. Use sudo. Major hardening step.",
    de: "sshd_config. PermitRootLogin no. systemctl restart sshd. Reduces attack surface."
  }),
  (_i: number) => ({
    q: "What does `PasswordAuthentication no` in sshd_config do?",
    o: ["Disables password auth (key-only)", "No password SSH", "Key only", "SSH keys only"],
    c: 0,
    e: "PasswordAuthentication no forces key auth. Prevents password brute force. Have key first!",
    de: "sshd_config. PasswordAuthentication no. PubkeyAuthentication yes. Test before disconnect."
  }),
  (_i: number) => ({
    q: "What does `fail2ban` do?",
    o: ["Bans IPs after failed auth attempts", "Fail2ban", "IP ban", "Brute force protection"],
    c: 0,
    e: "fail2ban monitors logs, bans IPs. fail2ban-client status. Protects SSH, etc.",
    de: "fail2ban-client status sshd. /etc/fail2ban/jail.local. bantime, findtime, maxretry."
  }),
  (_i: number) => ({
    q: "What does `getenforce` show?",
    o: ["SELinux mode (Enforcing/Permissive/Disabled)", "SELinux status", "Enforce mode", "SELinux state"],
    c: 0,
    e: "getenforce: Enforcing, Permissive, or Disabled. setenforce 0 for permissive (temp).",
    de: "getenforce. setenforce 1 for enforcing. /etc/selinux/config for persistent."
  }),
  (_i: number) => ({
    q: "What does `ausearch` do?",
    o: ["Searches audit log", "Audit search", "Search audit", "Audit log search"],
    c: 0,
    e: "ausearch queries audit log. ausearch -m USER_LOGIN. ausearch -ts recent.",
    de: "ausearch -m avc. ausearch -k mykey. auditd required. aureport for summary."
  }),
  (_i: number) => ({
    q: "What does `aureport` show?",
    o: ["Audit report summary", "Audit report", "Report summary", "Audit summary"],
    c: 0,
    e: "aureport summarizes audit. aureport -au for auth. aureport -f for failed.",
    de: "aureport. aureport -x for executable. aureport -n for anomaly. Human-readable."
  }),
  (_i: number) => ({
    q: "What does `umask 077` set?",
    o: ["New files: no group/other access", "Umask 077", "Restrictive umask", "Private files"],
    c: 0,
    e: "umask 077: new files 600, dirs 700. No group/other. Stricter default.",
    de: "umask 077. Add to .bashrc. 077 = rwx------ for dirs, rw------- for files."
  }),
  (_i: number) => ({
    q: "What does `find / -perm -4000` find?",
    o: ["SUID binaries", "Setuid files", "SUID executables", "Privileged executables"],
    c: 0,
    e: "find -perm -4000 finds SUID. Runs as owner (often root). Security audit.",
    de: "find / -perm -4000 2>/dev/null. SUID = 4 in high bits. /usr/bin/passwd, etc."
  }),
  (_i: number) => ({
    q: "What does `find / -perm -2000` find?",
    o: ["SGID binaries and directories", "Setgid files", "SGID", "Group setgid"],
    c: 0,
    e: "find -perm -2000 finds SGID. Runs with group or dirs inherit group. Audit.",
    de: "find / -perm -2000. SGID on dir: new files get dir's group. On file: run as group."
  }),
  (_i: number) => ({
    q: "What does `ls -la /etc/shadow` show about permissions?",
    o: ["Should be readable only by root", "Shadow permissions", "Root only", "Restricted"],
    c: 0,
    e: "/etc/shadow should be 640 or 600. Contains password hashes. Root only read.",
    de: "ls -la /etc/shadow. -rw-r----- or -rw-------. group shadow for passwd to verify."
  }),
  (_i: number) => ({
    q: "What does `chage -l user` show?",
    o: ["Password ageing info", "Chage list", "Password expiry", "Account ageing"],
    c: 0,
    e: "chage -l shows expiry, min/max days, warning. chage -M 90 to force change.",
    de: "chage -l jdoe. Last change, expire, min/max. chage -d 0 forces change on next login."
  }),
  (_i: number) => ({
    q: "What does `userdel -r user` do?",
    o: ["Removes user and home directory", "Delete user", "Remove user", "User delete recursive"],
    c: 0,
    e: "userdel -r removes user and home. userdel alone keeps home. Requires root.",
    de: "userdel -r jdoe. -r = --remove. Check for running processes first. deluser -r on Debian."
  }),
  (_i: number) => ({
    q: "What does `groupadd` do?",
    o: ["Creates new group", "Add group", "Create group", "Group add"],
    c: 0,
    e: "groupadd creates group. groupadd -g 1005 devs. groupmod, groupdel for modify/delete.",
    de: "groupadd devs. groupadd -g GID. /etc/group. getent group."
  }),
  (_i: number) => ({
    q: "What does `newgrp group` do?",
    o: ["Switches primary group for session", "New group", "Switch group", "Change group"],
    c: 0,
    e: "newgrp group switches primary group. Must be member. New shell. sg group cmd for one command.",
    de: "newgrp devs. Creates subshell. sg devs cmd. For accessing group resources."
  }),
  (_i: number) => ({
    q: "What does `sudo -u user cmd` do?",
    o: ["Runs cmd as specified user", "Sudo as user", "Run as user", "Execute as user"],
    c: 0,
    e: "sudo -u www-data cmd runs as www-data. sudo -u nobody. For daemons, least privilege.",
    de: "sudo -u www-data cat /var/www/secret. Drops privileges. Common for web server."
  }),
  (_i: number) => ({
    q: "What does `setfacl -m u:user:rw file` do?",
    o: ["Adds ACL: user gets rw", "Set ACL", "ACL add", "File ACL"],
    c: 0,
    e: "setfacl -m adds ACL. u:user:rw. getfacl to view. Fine-grained beyond user/group/other.",
    de: "setfacl -m u:alice:rw file. setfacl -m g:devs:rx dir. setfacl -x u:alice to remove."
  }),
  (_i: number) => ({
    q: "What does `getfacl file` show?",
    o: ["Access control list", "Get ACL", "ACL list", "File ACL"],
    c: 0,
    e: "getfacl shows ACLs. user::, group::, other::, plus named user/group. setfacl to modify.",
    de: "getfacl file. # file: file, # owner. default: for dir inheritance."
  }),
  (_i: number) => ({
    q: "What does `chattr +i file` do?",
    o: ["Makes file immutable (even root)", "Immutable", "Chattr immutable", "Lock file"],
    c: 0,
    e: "chattr +i prevents modification. chattr -i to remove. lsattr to view. Extra protection.",
    de: "chattr +i /etc/passwd. Root cannot modify. chattr -i to unlock. Protection from malware."
  }),
  (_i: number) => ({
    q: "What does `lsattr` show?",
    o: ["File attributes (chattr flags)", "List attributes", "File attrs", "Chattr flags"],
    c: 0,
    e: "lsattr shows i (immutable), a (append-only), etc. chattr sets them.",
    de: "lsattr file. i=immutable, a=append-only. Extra layer beyond permissions."
  }),
  (_i: number) => ({
    q: "What does `openssl enc -aes-256-cbc -in file -out file.enc` do?",
    o: ["Encrypts file with AES-256-CBC", "OpenSSL encrypt", "AES encrypt", "File encryption"],
    c: 0,
    e: "openssl enc encrypts. -in, -out. Prompts for passphrase. -d to decrypt.",
    de: "openssl enc -aes-256-cbc -salt -in secret -out secret.enc. openssl enc -d to decrypt."
  }),
  (_i: number) => ({
    q: "What does `certbot` do?",
    o: ["Obtains and renews TLS certificates (Let's Encrypt)", "Certbot", "TLS certs", "Let's Encrypt"],
    c: 0,
    e: "certbot obtains free TLS certs. certbot certonly. certbot renew. Auto HTTPS.",
    de: "certbot certonly --webroot -w /var/www -d example.com. /etc/letsencrypt. Auto-renew."
  }),
  (_i: number) => ({
    q: "What does `openssl x509 -in cert.pem -text -noout` show?",
    o: ["Certificate details", "X509 text", "Cert details", "Certificate info"],
    c: 0,
    e: "openssl x509 displays cert. Subject, issuer, dates, SAN. -noout suppresses PEM.",
    de: "openssl x509 -in cert.pem -text -noout. Validity, subject, issuer. Debug certs."
  }),
  (_i: number) => ({
    q: "What does `update-ca-certificates` do?",
    o: ["Updates trusted CA bundle", "Update CA", "CA certificates", "Trust store"],
    c: 0,
    e: "update-ca-certificates rebuilds /etc/ssl/certs. After adding certs to /usr/local/share/ca-certificates.",
    de: "update-ca-certificates. cp cert.pem /usr/local/share/ca-certificates/. Run update. Debian/Ubuntu."
  }),
  (_i: number) => ({
    q: "What does `sealert` or `ausearch -m avc` show?",
    o: ["SELinux denials", "AVC denials", "SELinux audit", "Denied access"],
    c: 0,
    e: "SELinux AVC = Access Vector Cache. Denials when policy blocks. ausearch -m avc.",
    de: "ausearch -m avc -ts recent. sealert -a /var/log/audit/audit.log. Suggests fixes."
  }),
  (_i: number) => ({
    q: "What does `restorecon -Rv /path` do?",
    o: ["Restores default SELinux contexts", "Restore context", "SELinux restore", "Fix context"],
    c: 0,
    e: "restorecon resets contexts from file_contexts. -R recursive, -v verbose. After copy/move.",
    de: "restorecon -Rv /var/www. Fixes wrong context. chcon for one-off. restorecon for policy."
  }),
  (_i: number) => ({
    q: "What does `semanage fcontext -a -t type '/path(/.*)?'` do?",
    o: ["Adds persistent SELinux file context", "Semanage context", "Persistent context", "SELinux fcontext"],
    c: 0,
    e: "semanage fcontext adds rule. restorecon applies. Persistent vs chcon.",
    de: "semanage fcontext -a -t httpd_sys_content_t '/srv/www(/.*)?'. restorecon -Rv /srv/www."
  }),
  (_i: number) => ({
    q: "What does `setsebool -P bool_name 1` do?",
    o: ["Sets SELinux boolean persistently", "Setsebool", "SELinux boolean", "Persistent bool"],
    c: 0,
    e: "setsebool -P persists. setsebool -P httpd_can_network_connect 1. -P = persistent.",
    de: "getsebool -a for list. setsebool httpd_can_network_connect 1 (temp). -P for reboot."
  }),
  (_i: number) => ({
    q: "What does `getsebool -a` show?",
    o: ["All SELinux booleans", "SELinux booleans", "Get booleans", "Bool list"],
    c: 0,
    e: "getsebool -a lists booleans. getsebool httpd_can_network_connect for one.",
    de: "getsebool -a. On/off toggles. Tune policy without writing new. Many for services."
  }),
  (_i: number) => ({
    q: "What does `sshd -T` show?",
    o: ["Effective sshd config (compiled)", "SSH config", "sshd config", "Effective config"],
    c: 0,
    e: "sshd -T dumps effective config. After merging files. Debug what's actually used.",
    de: "sshd -T | grep permitroot. See final values. Test config: sshd -t."
  }),
  (_i: number) => ({
    q: "What does `sshd -t` do?",
    o: ["Tests sshd config syntax", "Test config", "Validate config", "Config check"],
    c: 0,
    e: "sshd -t checks config. Exit 0 if OK. Run before restart. Prevents lockout.",
    de: "sshd -t. Validates syntax. systemctl restart sshd after. Always test first."
  }),
  (_i: number) => ({
    q: "What does `authselect` do?",
    o: ["Configures PAM and nsswitch (RHEL)", "Auth select", "PAM config", "Auth config"],
    c: 0,
    e: "authselect configures auth. authselect select sssd. Replaces authconfig. RHEL 8+.",
    de: "authselect select sssd with-mfa. authselect current. Profiles for different setups."
  }),
  (_i: number) => ({
    q: "What does `pam_tally2` or `pam_faillock` do?",
    o: ["Tracks failed logins, can lock account", "PAM tally", "Failed login", "Account lockout"],
    c: 0,
    e: "PAM module. Counts failures. Locks after threshold. faillock --user to reset.",
    de: "pam_faillock. deny=5, unlock_time=900. /etc/security/faillock.conf. faillock --reset --user jdoe."
  }),
  (_i: number) => ({
    q: "What does `cracklib-check` do?",
    o: ["Checks password strength", "Cracklib", "Password check", "Strength check"],
    c: 0,
    e: "cracklib-check reads password from stdin. Rejects weak. Used by passwd.",
    de: "echo 'password' | cracklib-check. Too short, dictionary, etc. PAM uses it."
  }),
  (_i: number) => ({
    q: "What does `pwgen` do?",
    o: ["Generates random passwords", "Password gen", "Random password", "PW gen"],
    c: 0,
    e: "pwgen generates passwords. pwgen 16. pwgen -s 32 for secure. Alternative to openssl rand.",
    de: "pwgen 16 5. 5 passwords of 16 chars. -s cryptographically secure. -y for symbols."
  }),
  (_i: number) => ({
    q: "What does `gpg --import key.asc` do?",
    o: ["Imports GPG public key", "GPG import", "Import key", "Add key"],
    c: 0,
    e: "gpg --import adds key to keyring. gpg --import private.asc for private. gpg --list-keys.",
    de: "gpg --import alice.asc. gpg --recv-keys KEYID from keyserver. Verify before use."
  }),
  (_i: number) => ({
    q: "What does `gpg --verify file.sig file` do?",
    o: ["Verifies signature against file", "GPG verify", "Verify signature", "Check signature"],
    c: 0,
    e: "gpg --verify checks detached sig. Needs signer's public key. Good signature = OK.",
    de: "gpg --verify file.sig file. gpg --verify file.gpg for clearsigned. Trust chain."
  }),
  (_i: number) => ({
    q: "What does `sha256sum file` output?",
    o: ["SHA-256 hash of file", "SHA256 sum", "File hash", "Checksum"],
    c: 0,
    e: "sha256sum computes hash. sha256sum -c to verify. For integrity.",
    de: "sha256sum file. sha256sum -c checksums.txt. Verify downloads. Prefer over md5sum."
  }),
  (_i: number) => ({
    q: "What does `gpg --clearsign file` do?",
    o: ["Creates inline signed file (ASCII)", "Clearsign", "Inline sign", "ASCII sign"],
    c: 0,
    e: "gpg --clearsign creates text file with embedded sig. Human readable. .asc output.",
    de: "gpg --clearsign message.txt. Creates message.txt.asc. Verify with gpg message.txt.asc."
  }),
  (_i: number) => ({
    q: "What does `security find-identity -v -p codesigning` do (macOS)?",
    o: ["Lists code signing identities", "Find identity", "Code signing", "Keychain identities"],
    c: 0,
    e: "security find-identity lists certs. -p codesigning for signing. Keychain access.",
    de: "macOS security framework. codesigning, ssl. For signing apps, notarization."
  }),
  (_i: number) => ({
    q: "What does `keychain` (software) do?",
    o: ["Manages SSH/GPG agents across sessions", "Keychain", "Agent manager", "SSH agent"],
    c: 0,
    e: "keychain manages ssh-agent, gpg-agent. One agent, multiple shells. eval $(keychain --eval).",
    de: "keychain --eval. Add to .bashrc. Unlock once per session. Shared agent."
  }),
  (_i: number) => ({
    q: "What does `ssh-add -l` show?",
    o: ["Loaded SSH keys in agent", "SSH add list", "Loaded keys", "Agent keys"],
    c: 0,
    e: "ssh-add -l lists keys. ssh-add to add. ssh-add -d to remove. ssh-add -D to clear.",
    de: "ssh-add -l. Fingerprints of loaded keys. ssh-add ~/.ssh/id_ed25519 to add."
  }),
  (_i: number) => ({
    q: "What does `ssh-add -D` do?",
    o: ["Removes all keys from agent", "Delete all keys", "Clear agent", "Remove keys"],
    c: 0,
    e: "ssh-add -D clears agent. Keys still on disk. Agent empty until ssh-add again.",
    de: "ssh-add -D. When switching contexts. ssh-add to reload. -d for single key."
  }),
  (_i: number) => ({
    q: "What does `loginctl list-sessions` show?",
    o: ["Active login sessions", "Sessions", "Login sessions", "User sessions"],
    c: 0,
    e: "loginctl list-sessions. Session IDs, users, seats. loginctl terminate-session ID.",
    de: "loginctl list-sessions. loginctl kill-user user. systemd. For session management."
  }),
  (_i: number) => ({
    q: "What does `systemd-analyze security` show?",
    o: ["Security assessment of services", "Security analyze", "Service security", "Hardening report"],
    c: 0,
    e: "systemd-analyze security rates services. PrivateNetwork, ProtectSystem, etc.",
    de: "systemd-analyze security. systemd-analyze security unit.service. Hardening checklist."
  }),
  (_i: number) => ({
    q: "What does `PrivateNetwork=yes` in systemd do?",
    o: ["Service has no network access", "Private network", "No network", "Network isolation"],
    c: 0,
    e: "PrivateNetwork=yes gives empty network namespace. No interfaces. Strong isolation.",
    de: "PrivateNetwork=true. For services that don't need network. Security hardening."
  }),
  (_i: number) => ({
    q: "What does `ProtectSystem=strict` in systemd do?",
    o: ["Makes /usr, /boot read-only", "Protect system", "Read-only system", "System protection"],
    c: 0,
    e: "ProtectSystem=strict mounts /usr, /boot read-only. Service can't modify. Hardening.",
    de: "ProtectSystem=strict. ReadOnlyPaths=/. /tmp, /var still writable. Limit damage."
  }),
  (_i: number) => ({
    q: "What does `NoNewPrivileges=yes` in systemd do?",
    o: ["Prevents privilege escalation", "No new privs", "Privilege lock", "No setuid"],
    c: 0,
    e: "NoNewPrivileges=yes blocks setuid, capabilities. Process can't gain privileges.",
    de: "NoNewPrivileges=true. setuid binaries won't elevate. Capabilities frozen. Containers use."
  }),
  (_i: number) => ({
    q: "What does `ReadOnlyPaths=/etc` in systemd do?",
    o: ["Makes /etc read-only for service", "Read-only etc", "Protect etc", "Etc read-only"],
    c: 0,
    e: "ReadOnlyPaths makes paths read-only. Service can't modify. /etc often. /var for data.",
    de: "ReadOnlyPaths=/etc. Service reads config, can't change. InaccessiblePaths for deny."
  }),
  (_i: number) => ({
    q: "What does `CapabilityBoundingSet=` in systemd do?",
    o: ["Limits capabilities available to service", "Capability set", "Limit caps", "Cap bounding"],
    c: 0,
    e: "CapabilityBoundingSet= limits caps. CapabilityBoundingSet=CAP_NET_BIND_SERVICE. Drop rest.",
    de: "CapabilityBoundingSet=CAP_NET_BIND_SERVICE. Or empty for none. Least privilege."
  }),
  (_i: number) => ({
    q: "What does `getcap file` show?",
    o: ["File capabilities", "Get capabilities", "File caps", "Capabilities"],
    c: 0,
    e: "getcap shows capabilities. setcap to set. cap_net_bind_service=ep for port <1024.",
    de: "getcap /usr/bin/ping. setcap cap_net_raw+ep /usr/bin/ping. Alternative to setuid."
  }),
  (_i: number) => ({
    q: "What does `setcap cap_net_bind_service=+ep /usr/bin/nginx` do?",
    o: ["Allows nginx to bind to ports <1024", "Set capability", "Bind service cap", "Port 80"],
    c: 0,
    e: "setcap gives capability. cap_net_bind_service = bind to <1024. +ep = effective, permitted.",
    de: "setcap cap_net_bind_service=+ep /usr/bin/nginx. No root for port 80. Better than setuid."
  }),
  (_i: number) => ({
    q: "What does `sysctl kernel.randomize_va_space` show?",
    o: ["ASLR setting (0/1/2)", "ASLR", "VA randomize", "Address randomize"],
    c: 0,
    e: "0=off, 1=conservative, 2=full ASLR. 2 is default. Mitigates exploits.",
    de: "sysctl kernel.randomize_va_space. 2 = full. kernel.randomize_va_space=2 in sysctl.conf."
  }),
  (_i: number) => ({
    q: "What does `sysctl kernel.kptr_restrict` do?",
    o: ["Restricts kernel pointer exposure", "Kptr restrict", "Kernel pointer", "Pointer restrict"],
    c: 0,
    e: "kptr_restrict hides kernel pointers. 0=all, 1=restrict, 2=full. Hardening.",
    de: "sysctl kernel.kptr_restrict=2. /proc/kallsyms restricted. Exploit mitigation."
  }),
  (_i: number) => ({
    q: "What does `dmesg | grep -i secureboot` show?",
    o: ["Secure Boot status", "SecureBoot", "Secure boot", "UEFI secure"],
    c: 0,
    e: "dmesg shows Secure Boot state. Locked down when enabled. Affects module loading.",
    de: "dmesg | grep -i secureboot. Secure Boot = signed kernels only. mokutil --sb-state."
  }),
  (_i: number) => ({
    q: "What does `mokutil --sb-state` show?",
    o: ["Secure Boot state", "MOK util", "Secure Boot", "SB state"],
    c: 0,
    e: "mokutil --sb-state. SecureBoot enabled/disabled. MOK = Machine Owner Key.",
    de: "mokutil --sb-state. mokutil --list-new for pending. Enroll keys for custom kernels."
  }),
  (_i: number) => ({
    q: "What does `cryptsetup luksOpen /dev/sda1 backup` do?",
    o: ["Opens LUKS encrypted partition", "LUKS open", "Decrypt partition", "Crypto open"],
    c: 0,
    e: "cryptsetup luksOpen opens LUKS. Creates /dev/mapper/backup. Mount that.",
    de: "cryptsetup luksOpen /dev/sda1 backup. mount /dev/mapper/backup /mnt. luksClose backup."
  }),
  (_i: number) => ({
    q: "What does `cryptsetup luksClose backup` do?",
    o: ["Closes LUKS mapping", "LUKS close", "Close crypto", "Unmap encrypted"],
    c: 0,
    e: "cryptsetup luksClose backup. Unmount first! Closes /dev/mapper/backup.",
    de: "umount /mnt; cryptsetup luksClose backup. Data encrypted again. Must open to use."
  }),
  (_i: number) => ({
    q: "What does `cryptsetup luksDump /dev/sda1` show?",
    o: ["LUKS header info", "LUKS dump", "LUKS info", "Header info"],
    c: 0,
    e: "cryptsetup luksDump shows LUKS metadata. Keyslots, cipher. No passphrase needed.",
    de: "cryptsetup luksDump /dev/sda1. Version, cipher, keyslots. Add key: luksAddKey."
  }),
  (_i: number) => ({
    q: "What does `fscrypt` do?",
    o: ["Per-file/dir encryption (Linux)", "Fscrypt", "File encryption", "Per-file crypto"],
    c: 0,
    e: "fscrypt encrypts individual dirs. fscrypt encrypt dir. Ext4, F2FS. Per-directory.",
    de: "fscrypt encrypt /home/user/private. fscrypt status. Key in keyring. Transparent."
  }),
  (_i: number) => ({
    q: "What does `auditctl -w /etc/passwd -p wa -k passwd_changes` do?",
    o: ["Audits writes to /etc/passwd", "Audit watch", "Watch passwd", "Audit rule"],
    c: 0,
    e: "auditctl -w adds watch. -p wa = write, attribute. -k key for ausearch. Monitors file.",
    de: "auditctl -w /etc/passwd -p wa -k passwd_changes. ausearch -k passwd_changes. Audit trail."
  }),
  (_i: number) => ({
    q: "What does `lynis` do?",
    o: ["Security audit and hardening tool", "Lynis", "Security audit", "Hardening scan"],
    c: 0,
    e: "lynis audit system. Scans config, suggests hardening. Report in /var/log/lynis.",
    de: "lynis audit system. Checks 200+ items. Warnings, suggestions. Compliance prep."
  }),
  (_i: number) => ({
    q: "What does `rkhunter` do?",
    o: ["Rootkit hunter (scans for rootkits)", "Rkhunter", "Rootkit scan", "Malware scan"],
    c: 0,
    e: "rkhunter --check. Scans for rootkits, backdoors. Compares hashes. Run regularly.",
    de: "rkhunter --check. rkhunter --update for DB. /var/log/rkhunter.log. Part of security suite."
  }),
  (_i: number) => ({
    q: "What does `clamscan -r /home` do?",
    o: ["Scans for malware (ClamAV)", "ClamAV scan", "Virus scan", "Malware scan"],
    c: 0,
    e: "clamscan -r scans recursively. clamscan -r /home. clamd for daemon (faster).",
    de: "clamscan -r /home. clamscan -i infected only. freshclam for updates. Email, file server."
  }),
  (_i: number) => ({
    q: "What does `chroot /mnt` do?",
    o: ["Changes root to /mnt (jail)", "Chroot", "Change root", "Root jail"],
    c: 0,
    e: "chroot /mnt runs shell with /mnt as /. Isolated. For recovery, containers. Limited isolation.",
    de: "chroot /mnt /bin/bash. Need /bin, /lib. Mount /proc, /dev. Not full container."
  }),
  (_i: number) => ({
    q: "What does `unshare --mount --uts --ipc --net --pid --fork bash` do?",
    o: ["Creates isolated namespace environment", "Unshare", "Namespace isolation", "Unshare namespaces"],
    c: 0,
    e: "unshare creates new namespaces. --mount, --uts, etc. Isolated env. Like container light.",
    de: "unshare -m -u -i -n -p -f bash. Each flag = new namespace. No network, own PID, etc."
  }),
  (_i: number) => ({
    q: "What does `bubblewrap` (bwrap) do?",
    o: ["Sandbox using namespaces (used by Flatpak)", "Bubblewrap", "Sandbox", "Namespace sandbox"],
    c: 0,
    e: "bwrap runs command in sandbox. Namespaces, bind mounts. Flatpak uses it.",
    de: "bwrap --ro-bind /usr /usr --dev /dev --proc /proc -- bash. Minimal sandbox."
  }),
  (_i: number) => ({
    q: "What does `firejail` do?",
    o: ["Sandbox for running programs", "Firejail", "App sandbox", "Program sandbox"],
    c: 0,
    e: "firejail firefox. Runs app in sandbox. Seccomp, namespaces. firejail --list.",
    de: "firejail --private firefox. Profiles in /etc/firejail. Restrict network, filesystem."
  }),
  (_i: number) => ({
    q: "What does `seccomp` do?",
    o: ["Restricts system calls (kernel)", "Seccomp", "Syscall filter", "Syscall restrict"],
    c: 0,
    e: "seccomp filters syscalls. Mode 1: allow list. Mode 2: BPF. Docker, systemd use.",
    de: "seccomp in kernel. Applications opt-in. Block dangerous syscalls. Defense in depth."
  }),
  (_i: number) => ({
    q: "What does `sysctl -a` show?",
    o: ["All kernel parameters", "Sysctl all", "Kernel params", "All parameters"],
    c: 0,
    e: "sysctl -a lists all. sysctl -a | grep net. /etc/sysctl.d/ for config. sysctl -w to set.",
    de: "sysctl -a. Many security-related. net.ipv4.*, kernel.*. Persistent in sysctl.conf."
  }),
  (_i: number) => ({
    q: "What does `sysctl -p` do?",
    o: ["Applies sysctl config", "Apply sysctl", "Load config", "Reload sysctl"],
    c: 0,
    e: "sysctl -p loads from file. sysctl -p /etc/sysctl.d/security.conf. Applies params.",
    de: "sysctl -p. Reads /etc/sysctl.conf or specified file. Apply without reboot."
  }),
  (_i: number) => ({
    q: "What does `net.ipv4.tcp_syncookies` do when 1?",
    o: ["Mitigates SYN flood", "Syncookies", "SYN flood protection", "TCP protection"],
    c: 0,
    e: "tcp_syncookies=1 enables. Mitigates SYN flood. Uses cookie instead of backlog.",
    de: "sysctl net.ipv4.tcp_syncookies=1. When backlog full, use syncookie. Default on."
  }),
  (_i: number) => ({
    q: "What does `net.ipv4.conf.all.rp_filter` do?",
    o: ["Reverse path filtering (anti-spoofing)", "RP filter", "Reverse path", "Spoof protection"],
    c: 0,
    e: "rp_filter=1 drops packets with invalid reverse path. Prevents IP spoofing.",
    de: "net.ipv4.conf.all.rp_filter=1. Strict mode 2. Packets must be routable back. Security."
  }),
  (_i: number) => ({
    q: "What does `tail -f /var/log/auth.log` show?",
    o: ["Live auth events (logins, sudo)", "Auth log", "Login log", "Auth events"],
    c: 0,
    e: "tail -f follows auth.log. Logins, sudo, SSH. /var/log/secure on RHEL.",
    de: "tail -f /var/log/auth.log. Failed logins, successful. journalctl -u ssh -f alternative."
  }),
  (_i: number) => ({
    q: "What does `lastlog` show?",
    o: ["Last login time per user", "Last log", "Login times", "User last login"],
    c: 0,
    e: "lastlog shows last login for each user. lastlog -u user for one. From /var/log/lastlog.",
    de: "lastlog. Username, port, from, latest. Audit who's active. Never = never logged in."
  }),
  (_i: number) => ({
    q: "What does `w` show?",
    o: ["Logged-in users and what they're running", "Who and what", "Users and processes", "Logged in"],
    c: 0,
    e: "w shows users, TTY, from, login time, idle, JCPU, PCPU, what. More than who.",
    de: "w. Load average at top. USER, TTY, FROM, LOGIN@, IDLE, JCPU, PCPU, WHAT."
  }),
  (_i: number) => ({
    q: "What does `lsof -i :22` show?",
    o: ["Processes using port 22", "Port 22", "SSH listeners", "Port users"],
    c: 0,
    e: "lsof -i :22 shows what's on port 22. Usually sshd. lsof -i for all. Requires root for all.",
    de: "lsof -i :22. lsof -i -P for numeric ports. See PID, user. Before binding."
  }),
  (_i: number) => ({
    q: "What does `netstat -tlnp` show (legacy)?",
    o: ["Listening TCP ports and processes", "Netstat listen", "TCP listeners", "Listening ports"],
    c: 0,
    e: "netstat -tlnp: TCP, listening, numeric, process. ss -tlnp is replacement.",
    de: "netstat -tlnp. Deprecated. ss -tlnp. What's accepting connections."
  }),
  (_i: number) => ({
    q: "What does `iptables -A INPUT -p tcp --syn -m connlimit --connlimit-above 5 -j REJECT` do?",
    o: ["Limits new connections per IP", "Connection limit", "Connlimit", "Rate limit connections"],
    c: 0,
    e: "connlimit limits concurrent connections. --connlimit-above 5. Mitigates abuse.",
    de: "iptables connlimit. Per-IP or per-dest. --connlimit-mask. Slow down scanners."
  }),
  (_i: number) => ({
    q: "What does `iptables -A INPUT -m limit --limit 5/min -j LOG` do?",
    o: ["Rate-limits logging", "Limit log", "Log rate limit", "Throttle log"],
    c: 0,
    e: "limit module rate-limits. 5/min = max 5 log entries per minute. Prevents log flood.",
    de: "iptables -A INPUT -m limit --limit 5/min -j LOG. Without limit, every packet logs."
  }),
  (_i: number) => ({
    q: "What does `tcp_wrappers` (hosts.allow/deny) do?",
    o: ["Host-based access control for libwrap apps", "TCP wrappers", "Hosts allow", "Access control"],
    c: 0,
    e: "hosts.allow, hosts.deny. Apps linked with libwrap (sshd, etc). Allow/deny by host.",
    de: "/etc/hosts.allow: sshd: 192.168.1.0/24. hosts.deny: ALL: ALL. Legacy, many use firewall."
  }),
  (_i: number) => ({
    q: "What does `security-limits` (limits.conf) control?",
    o: ["Resource limits per user/group", "Limits config", "Resource limits", "PAM limits"],
    c: 0,
    e: "/etc/security/limits.conf. nofile, nproc, etc. PAM reads it. ulimit at login.",
    de: "* soft nofile 65535. user hard nproc 100. Limit open files, processes. DoS prevention."
  }),
];

import { level8Intermediate } from './level8_intermediate_cli';
import { level8Expert } from './level8_expert_cli';

export const level8Patterns = beginner.slice(0, 100);
export const level8IntermediateA = level8Intermediate.slice(0, 50);
export const level8IntermediateB = level8Intermediate.slice(50, 100);
export const level8ExpertA = level8Expert.slice(0, 50);
export const level8ExpertB = level8Expert.slice(50, 100);
