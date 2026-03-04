// LEVEL 8 INTERMEDIATE — Security & Hardening (100 unique questions)
// Topics: Users, PAM, SSH hardening, firewall, SELinux, GPG, encryption

export const level8Intermediate = [
  (_i: number) => ({
    q: "What does `useradd -r` create?",
    o: ["System user (UID < 1000, no login)", "System user", "Reserved user", "Daemon user"],
    c: 0,
    e: "useradd -r creates system user. UID from system range. No home by default.",
    de: "useradd -r nginx. For daemons. adduser --system. Often UID 100-999."
  }),
  (_i: number) => ({
    q: "What does `chage -l user` show?",
    o: ["Password aging info (expiry, last change)", "Password aging", "Chage list", "Expiry info"],
    c: 0,
    e: "chage -l lists password aging. Last change, expiry, min/max days.",
    de: "chage -l jdoe. chage -M 90 for max days. chage -d 0 to force change."
  }),
  (_i: number) => ({
    q: "What does PAM stand for?",
    o: ["Pluggable Authentication Modules", "PAM acronym", "Auth modules", "Pluggable auth"],
    c: 0,
    e: "PAM = Pluggable Authentication Modules. /etc/pam.d/. Modular auth.",
    de: "PAM: auth, account, password, session. Stackable. pam_unix, pam_ldap, etc."
  }),
  (_i: number) => ({
    q: "What does `pam_tally2` or `pam_faillock` do?",
    o: ["Locks account after failed login attempts", "Login lockout", "Fail lock", "Account lock"],
    c: 0,
    e: "Tracks failed attempts. Locks after N. pam_tally2, pam_faillock. Brute force protection.",
    de: "pam_faillock. deny=5 unlock_time=900. /var/run/faillock. RHEL 7+."
  }),
  (_i: number) => ({
    q: "What does `PermitRootLogin no` in sshd_config do?",
    o: ["Disables root login via SSH", "No root SSH", "Root disable", "SSH root block"],
    c: 0,
    e: "PermitRootLogin no. Root cannot SSH. Use sudo. Security hardening.",
    de: "PermitRootLogin no. prohibit-password = key only. yes = allow (insecure)."
  }),
  (_i: number) => ({
    q: "What does `PasswordAuthentication no` in sshd_config require?",
    o: ["Key-based auth only (keys must be set up)", "Keys only", "No password", "Key auth"],
    c: 0,
    e: "PasswordAuthentication no. Only keys. Disable password. Ensure keys first.",
    de: "PasswordAuthentication no. ssh-copy-id. Test before disconnect. Lockout risk."
  }),
  (_i: number) => ({
    q: "What does `ufw default deny incoming` set?",
    o: ["Default policy: deny all incoming", "Deny default", "Default deny", "Block all"],
    c: 0,
    e: "ufw default deny incoming. Deny by default. Allow explicitly. Secure default.",
    de: "ufw default deny incoming. ufw allow 22. Then ufw enable. Whitelist approach."
  }),
  (_i: number) => ({
    q: "What does `getenforce` show?",
    o: ["SELinux mode (Enforcing, Permissive, Disabled)", "SELinux mode", "Enforce status", "SELinux state"],
    c: 0,
    e: "getenforce. Enforcing, Permissive, or Disabled. setenforce 0 = permissive.",
    de: "getenforce. setenforce 1 = enforcing. /etc/selinux/config for persistent."
  }),
  (_i: number) => ({
    q: "What does `gpg --gen-key` create?",
    o: ["New GPG key pair (public + private)", "GPG key pair", "Generate key", "New key"],
    c: 0,
    e: "gpg --gen-key. Interactive. Creates key pair. RSA, ECC. For signing, encryption.",
    de: "gpg --full-generate-key. Key size, expiry. ~/.gnupg/. Backup private key."
  }),
  (_i: number) => ({
    q: "What does `gpg --encrypt -r recipient file` do?",
    o: ["Encrypts file for recipient's public key", "Encrypt for recipient", "GPG encrypt", "Public key encrypt"],
    c: 0,
    e: "gpg --encrypt -r email. Uses recipient's public key. Only they can decrypt.",
    de: "gpg -e -r alice@example.com file. Creates file.gpg. gpg -d to decrypt."
  }),
  (_i: number) => ({
    q: "What does `usermod -L user` do?",
    o: ["Locks user account (password)", "Lock account", "Disable login", "Account lock"],
    c: 0,
    e: "usermod -L locks. Adds ! to password hash. usermod -U to unlock.",
    de: "usermod -L jdoe. passwd -l same. ! in /etc/shadow. Login disabled."
  }),
  (_i: number) => ({
    q: "What does `groupadd -g 1005 devs` do?",
    o: ["Creates group with GID 1005", "Group with GID", "Create group", "Specific GID"],
    c: 0,
    e: "groupadd -g 1005. Specifies GID. -g for numeric. Consistency across systems.",
    de: "groupadd -g 1005 devs. id shows GID. /etc/group. NFS, shared storage."
  }),
  (_i: number) => ({
    q: "What does `/etc/pam.d/system-auth` control?",
    o: ["Default PAM stack for local auth", "System auth PAM", "Default auth", "PAM config"],
    c: 0,
    e: "system-auth = default. Included by others. auth, account, password, session.",
    de: "/etc/pam.d/system-auth. pam_unix.so. password requisite pam_pwquality. Central config."
  }),
  (_i: number) => ({
    q: "What does `pam_limits.so` in PAM do?",
    o: ["Sets resource limits (ulimit) for session", "Resource limits", "PAM limits", "ulimit PAM"],
    c: 0,
    e: "pam_limits.so. Reads /etc/security/limits.conf. nofile, nproc, etc.",
    de: "session required pam_limits.so. limits.conf. * soft nofile 65535. Per-user limits."
  }),
  (_i: number) => ({
    q: "What does `Port 2222` in sshd_config change?",
    o: ["SSH listens on port 2222 instead of 22", "SSH port", "Custom port", "Non-default port"],
    c: 0,
    e: "Port 2222. SSH on 2222. Reduces automated scans. Security through obscurity.",
    de: "Port 2222. ssh -p 2222. firewall allow 2222. Not security alone."
  }),
  (_i: number) => ({
    q: "What does `MaxAuthTries 3` in sshd_config limit?",
    o: ["Max password/key attempts per connection", "Auth tries", "Login attempts", "Try limit"],
    c: 0,
    e: "MaxAuthTries 3. After 3 failures, disconnect. Brute force mitigation.",
    de: "MaxAuthTries 3. Per connection. fail2ban for IP block. Defense in depth."
  }),
  (_i: number) => ({
    q: "What does `firewall-cmd --add-rich-rule='rule family=ipv4 source address=192.168.1.0/24 accept'` do?",
    o: ["Adds rule: accept from subnet", "Rich rule", "Source accept", "Subnet allow"],
    c: 0,
    e: "firewall-cmd rich rules. source address. accept. Complex rules.",
    de: "firewall-cmd --add-rich-rule. --permanent for persistent. --reload."
  }),
  (_i: number) => ({
    q: "What does `ausearch -m avc` show?",
    o: ["SELinux AVC (denial) messages", "AVC denials", "SELinux denials", "Audit denials"],
    c: 0,
    e: "ausearch -m avc. AVC = Access Vector Cache. SELinux denials. Troubleshooting.",
    de: "ausearch -m avc. Or sealert. Why was access denied? Fix with setsebool, semanage."
  }),
  (_i: number) => ({
    q: "What does `gpg --sign file` create?",
    o: ["Detached or inline signature (proves authenticity)", "GPG sign", "File signature", "Sign file"],
    c: 0,
    e: "gpg --sign. Creates signature. Proves you signed. gpg --verify to check.",
    de: "gpg -s file. file.gpg or file.sig. gpg --clearsign for inline. Verify with --verify."
  }),
  (_i: number) => ({
    q: "What does `gpg --list-keys` show?",
    o: ["Public keys in keyring", "Key list", "Public keys", "Keyring"],
    c: 0,
    e: "gpg --list-keys. Public keys. --list-secret-keys for private. Key ID, fingerprint.",
    de: "gpg -k. gpg -K for secret. Fingerprint for verification. Trust levels."
  }),
  (_i: number) => ({
    q: "What does `passwd -e user` do?",
    o: ["Expires password (force change on next login)", "Expire password", "Force change", "Password expiry"],
    c: 0,
    e: "passwd -e. Expires immediately. User must change on next login.",
    de: "passwd -e jdoe. chage -d 0 same. Force password change. Compliance."
  }),
  (_i: number) => ({
    q: "What does `newgrp group` do?",
    o: ["Switches primary group for session", "Switch group", "New group", "Primary group"],
    c: 0,
    e: "newgrp group. Primary group for this shell. Without usermod -aG. Temporary.",
    de: "newgrp docker. Now primary. id shows. sg group cmd for single command."
  }),
  (_i: number) => ({
    q: "What does PAM `required` vs `requisite` differ?",
    o: ["requisite fails immediately; required continues stack then fails", "Requisite vs required", "PAM control", "Fail behavior"],
    c: 0,
    e: "requisite = fail fast, no more PAM. required = run all, then fail. requisite for 2FA.",
    de: "required: all run. requisite: stop on first fail. sufficient: stop on first success."
  }),
  (_i: number) => ({
    q: "What does `pam_securetty.so` restrict?",
    o: ["Root login to secure TTYs only", "Root TTY", "Secure TTY", "Root restriction"],
    c: 0,
    e: "pam_securetty. Root only from /etc/securetty. Blocks root on network TTYs.",
    de: "auth required pam_securetty.so. /etc/securetty lists tty1, etc. No root SSH if not in list."
  }),
  (_i: number) => ({
    q: "What does `AllowUsers alice bob` in sshd_config do?",
    o: ["Only alice and bob can SSH (whitelist)", "User whitelist", "Allow users", "SSH whitelist"],
    c: 0,
    e: "AllowUsers alice bob. Whitelist. Only these users. DenyUsers for blacklist.",
    de: "AllowUsers alice bob. root not in list = no root. Combine with PermitRootLogin."
  }),
  (_i: number) => ({
    q: "What does `ClientAliveInterval 60` in sshd_config do?",
    o: ["Sends keepalive every 60s (detect dead connections)", "Keepalive", "Alive interval", "Connection check"],
    c: 0,
    e: "ClientAliveInterval 60. Server sends keepalive. ClientAliveCountMax. Dead connection cleanup.",
    de: "ClientAliveInterval 60. ClientAliveCountMax 3. 3*60=180s then disconnect. NAT timeout."
  }),
  (_i: number) => ({
    q: "What does `iptables -A INPUT -p tcp --dport 22 -s 192.168.1.0/24 -j ACCEPT` do?",
    o: ["Allows SSH only from subnet", "SSH from subnet", "Restrict SSH", "Source filter"],
    c: 0,
    e: "iptables -A INPUT. -s source. -p tcp --dport 22. Restrict SSH source.",
    de: "Allow SSH from office only. -s 192.168.1.0/24. Then DROP. Defense in depth."
  }),
  (_i: number) => ({
    q: "What does `semanage fcontext -a -t httpd_sys_content_t '/web(/.*)?'` do?",
    o: ["Sets SELinux context for /web (Apache can read)", "SELinux context", "Fcontext", "Type for web"],
    c: 0,
    e: "semanage fcontext. -t type. httpd_sys_content_t = web content. restorecon applies.",
    de: "semanage fcontext -a -t httpd_sys_content_t '/web(/.*)?'. restorecon -R /web. Apache access."
  }),
  (_i: number) => ({
    q: "What does `restorecon -Rv /path` do?",
    o: ["Restores SELinux contexts recursively", "Restore context", "Fix SELinux", "Reset context"],
    c: 0,
    e: "restorecon -Rv. Restores default contexts. -R recursive, -v verbose.",
    de: "restorecon -Rv /var/www. After fcontext change. Fixes wrong labels."
  }),
  (_i: number) => ({
    q: "What does `gpg --armor` produce?",
    o: ["Base64 ASCII output (not binary)", "ASCII armor", "Armored output", "Base64"],
    c: 0,
    e: "gpg --armor. ASCII. .asc files. For email, paste. vs binary .gpg.",
    de: "gpg -a -e -r user file. file.asc. gpg --armor --export. Paste in email."
  }),
  (_i: number) => ({
    q: "What does `gpg --verify file.sig file` check?",
    o: ["Signature validity (signer's key in keyring)", "Verify signature", "Check signer", "Sig verify"],
    c: 0,
    e: "gpg --verify file.sig file. Checks signature. Needs signer's public key.",
    de: "gpg --verify package.sig package.tar. Good signature from... Import key first."
  }),
  (_i: number) => ({
    q: "What does `userdel -r user` do?",
    o: ["Removes user and home directory", "Delete user and home", "User remove", "Full delete"],
    c: 0,
    e: "userdel -r removes user and home. -r = recursive. Without -r keeps home.",
    de: "userdel -r jdoe. Removes /home/jdoe. Check for running processes. -f force."
  }),
  (_i: number) => ({
    q: "What does `gpasswd -A alice group` do?",
    o: ["Makes alice group admin (can add/remove members)", "Group admin", "Gpasswd admin", "Group manager"],
    c: 0,
    e: "gpasswd -A alice. alice is group admin. Can add/remove. -M for member list.",
    de: "gpasswd -A alice devs. alice manages devs. gpasswd -a bob devs. Delegation."
  }),
  (_i: number) => ({
    q: "What does PAM `sufficient` mean?",
    o: ["Success here skips rest of stack", "Sufficient = skip", "PAM sufficient", "Early success"],
    c: 0,
    e: "sufficient = if success, skip rest. If fail, continue. Optional auth.",
    de: "auth sufficient pam_sss.so. LDAP success = done. Fail = try local."
  }),
  (_i: number) => ({
    q: "What does `pam_nologin.so` do?",
    o: ["Blocks non-root if /etc/nologin exists", "Nologin", "Block logins", "Maintenance mode"],
    c: 0,
    e: "pam_nologin. If /etc/nologin exists, only root can login. Maintenance.",
    de: "touch /etc/nologin. Only root. rm /etc/nologin to allow. Shutdown creates it."
  }),
  (_i: number) => ({
    q: "What does `PubkeyAuthentication yes` in sshd_config enable?",
    o: ["Key-based authentication", "Public key auth", "SSH keys", "Key auth"],
    c: 0,
    e: "PubkeyAuthentication yes. Enables key auth. Default on. ~/.ssh/authorized_keys.",
    de: "PubkeyAuthentication yes. PasswordAuthentication no. Keys only. Secure."
  }),
  (_i: number) => ({
    q: "What does `X11Forwarding no` in sshd_config disable?",
    o: ["SSH X11 tunneling (no remote GUI)", "No X11", "Disable X forwarding", "GUI block"],
    c: 0,
    e: "X11Forwarding no. No ssh -X. Remote GUI disabled. Security.",
    de: "X11Forwarding no. AllowTcpForwarding. Reduce attack surface. No xeyes."
  }),
  (_i: number) => ({
    q: "What does `ufw allow from 10.0.0.0/8 to any` do?",
    o: ["Allows all traffic from 10.x to this host", "Allow subnet", "From 10/8", "Subnet allow"],
    c: 0,
    e: "ufw allow from 10.0.0.0/8. Source 10/8. Any dest, any port. Internal trust.",
    de: "ufw allow from 10.0.0.0/8. Trust internal. ufw allow from 10.0.0.0/8 to any port 22."
  }),
  (_i: number) => ({
    q: "What does `getsebool -a` list?",
    o: ["All SELinux booleans (on/off)", "SELinux booleans", "Boolean list", "sebool list"],
    c: 0,
    e: "getsebool -a. All booleans. setsebool httpd_can_network_connect 1 to enable.",
    de: "getsebool -a | grep httpd. setsebool -P for persistent. Tune SELinux."
  }),
  (_i: number) => ({
    q: "What does `gpg --export -a user@email` output?",
    o: ["ASCII public key for sharing", "Export public key", "Public key ASCII", "Key export"],
    c: 0,
    e: "gpg --export -a. Public key. -a = armor. Share. Others import.",
    de: "gpg --export -a alice@example.com > alice.asc. gpg --import alice.asc."
  }),
  (_i: number) => ({
    q: "What does `gpg --import key.asc` do?",
    o: ["Adds public key to keyring", "Import key", "Add to keyring", "Key import"],
    c: 0,
    e: "gpg --import. Adds key. Now can encrypt for them, verify their signatures.",
    de: "gpg --import alice.asc. gpg --list-keys. Trust with gpg --edit-key."
  }),
  (_i: number) => ({
    q: "What does `chmod 2770 dir` set?",
    o: ["Setgid + rwxrwx--- (group sticky)", "Setgid directory", "Group dir", "2770 perms"],
    c: 0,
    e: "2770 = setgid + rwxrwx---. New files inherit group. Collaborative dirs.",
    de: "chmod 2770 /shared. New files get group. setgid = group inheritance."
  }),
  (_i: number) => ({
    q: "What does `id -Gn user` show?",
    o: ["Group names for user", "Group names", "User groups", "Group list"],
    c: 0,
    e: "id -Gn. Group names. -G = GIDs. -n = names. Supplementary groups.",
    de: "id -Gn jdoe. docker, adm, sudo. id -G for GIDs only."
  }),
  (_i: number) => ({
    q: "What does `/etc/pam.d/sshd` control?",
    o: ["PAM config for SSH daemon", "SSH PAM", "sshd auth", "SSH PAM stack"],
    c: 0,
    e: "/etc/pam.d/sshd. PAM for SSH. Different from login. SSH-specific.",
    de: "auth, account, password, session for sshd. 2FA, fail2ban integration."
  }),
  (_i: number) => ({
    q: "What does `pam_env.so` do?",
    o: ["Sets environment variables from /etc/security/pam_env.conf", "PAM env", "Set env", "Environment"],
    c: 0,
    e: "pam_env. Sets vars. /etc/security/pam_env.conf. Default env for session.",
    de: "session required pam_env.so. Read env. Override defaults. Per-user env."
  }),
  (_i: number) => ({
    q: "What does `AllowGroups wheel` in sshd_config do?",
    o: ["Only wheel group members can SSH", "Group allow", "Wheel only", "SSH group"],
    c: 0,
    e: "AllowGroups wheel. Only wheel. usermod -aG wheel. Restrict by group.",
    de: "AllowGroups wheel admins. DenyGroups guests. Group-based access control."
  }),
  (_i: number) => ({
    q: "What does `LoginGraceTime 30` in sshd_config set?",
    o: ["30 seconds to complete login before disconnect", "Login timeout", "Grace time", "Login window"],
    c: 0,
    e: "LoginGraceTime 30. 30s to login. Prevents connection hanging. Brute force.",
    de: "LoginGraceTime 30. Default 120. Shorter = less resource for attackers."
  }),
  (_i: number) => ({
    q: "What does `firewall-cmd --zone=public --add-service=ssh` do?",
    o: ["Allows SSH in public zone", "Add SSH service", "Allow SSH", "Open port 22"],
    c: 0,
    e: "firewall-cmd --add-service=ssh. Service = port 22. Zone = public.",
    de: "firewall-cmd --zone=public --add-service=ssh --permanent. --reload."
  }),
  (_i: number) => ({
    q: "What does `chcon -t type path` do?",
    o: ["Changes SELinux context (temporary)", "Change context", "Chcon", "Set type"],
    c: 0,
    e: "chcon -t type. Changes context. Temporary. restorecon overwrites. For testing.",
    de: "chcon -t httpd_sys_content_t /var/www/html. restorecon -Rv to reset."
  }),
  (_i: number) => ({
    q: "What does `ls -Z` show?",
    o: ["SELinux context (user:role:type)", "SELinux context", "Security context", "Z context"],
    c: 0,
    e: "ls -Z. Shows user:role:type. selinux= on. For debugging SELinux.",
    de: "ls -Z /var/www. unconfined_u:object_r:httpd_sys_content_t. Type matters."
  }),
  (_i: number) => ({
    q: "What does `gpg --decrypt file.gpg` require?",
    o: ["Private key and passphrase", "Private key", "Decrypt key", "Secret key"],
    c: 0,
    e: "gpg --decrypt. Needs private key. Passphrase for secret. Output to stdout.",
    de: "gpg -d file.gpg. gpg -d file.gpg > file. Private key in keyring. Passphrase."
  }),
  (_i: number) => ({
    q: "What does `gpg --edit-key user` allow?",
    o: ["Interactive key management (edit, sign, revoke)", "Edit key", "Key management", "Interactive GPG"],
    c: 0,
    e: "gpg --edit-key. addphoto, sign, revoke, trust. Interactive. quit to exit.",
    de: "gpg --edit-key alice. trust, sign, revkey. Subkeys. Expiry."
  }),
  (_i: number) => ({
    q: "What does `last` read from?",
    o: ["/var/log/wtmp (login records)", "Wtmp", "Login log", "Last source"],
    c: 0,
    e: "last reads wtmp. Login history. last -f for alternate file. lastb for failed.",
    de: "last. /var/log/wtmp. last -f /var/log/wtmp.1. lastb = /var/log/btmp."
  }),
  (_i: number) => ({
    q: "What does `w` show?",
    o: ["Logged-in users and their commands", "Who and what", "Users commands", "W output"],
    c: 0,
    e: "w shows users, TTY, from, login time, idle, JCPU, PCPU, what.",
    de: "w. More than who. uptime. what = current command. Security monitoring."
  }),
  (_i: number) => ({
    q: "What does `faillock` or `pam_tally2 --reset` do?",
    o: ["Resets failed login counter for user", "Reset fail count", "Unlock account", "Clear failures"],
    c: 0,
    e: "faillock --reset -u user. Clears failed attempts. Unlocks. pam_tally2 --reset.",
    de: "faillock --reset -u jdoe. After lockout. pam_tally2 -u jdoe --reset. Unlock."
  }),
  (_i: number) => ({
    q: "What does `pam_umask.so` set?",
    o: ["Default umask for new files", "Umask PAM", "File umask", "Default umask"],
    c: 0,
    e: "pam_umask. Sets umask. /etc/login.defs. Default file permissions.",
    de: "session optional pam_umask.so umask=0022. New files 644, dirs 755."
  }),
  (_i: number) => ({
    q: "What does `AuthorizedKeysFile` in sshd_config specify?",
    o: ["Path to authorized_keys file", "Keys file path", "Authorized keys", "Key file location"],
    c: 0,
    e: "AuthorizedKeysFile .ssh/authorized_keys. Path. Relative to home. Can override.",
    de: "AuthorizedKeysFile .ssh/authorized_keys .ssh/authorized_keys2. Multiple paths."
  }),
  (_i: number) => ({
    q: "What does `PermitEmptyPasswords no` in sshd_config enforce?",
    o: ["No login with empty password", "No empty password", "Password required", "Empty block"],
    c: 0,
    e: "PermitEmptyPasswords no. Empty password = reject. Default. Security.",
    de: "PermitEmptyPasswords no. passwd -d removes password. Insecure. Block it."
  }),
  (_i: number) => ({
    q: "What does `ufw deny 23` do?",
    o: ["Explicitly denies port 23 (telnet)", "Deny port", "Block port", "Explicit deny"],
    c: 0,
    e: "ufw deny 23. Explicit deny. Telnet. Order matters. Deny before allow.",
    de: "ufw deny 23. ufw deny from 1.2.3.4. Explicit rules. Logging."
  }),
  (_i: number) => ({
    q: "What does `setsebool -P bool 1` do?",
    o: ["Permanently enables SELinux boolean", "Set boolean", "Enable bool", "Persistent bool"],
    c: 0,
    e: "setsebool -P. -P = persistent. Survives reboot. Without -P = temporary.",
    de: "setsebool -P httpd_can_network_connect 1. Reboot persists. /etc/selinux."
  }),
  (_i: number) => ({
    q: "What does `gpg --recipient user --encrypt file` require?",
    o: ["Recipient's public key in keyring", "Recipient key", "Public key", "Import first"],
    c: 0,
    e: "Need recipient's public key. gpg --import. Then encrypt. -r = --recipient.",
    de: "gpg --import alice.asc. gpg -e -r alice@example.com file. Key must be present."
  }),
  (_i: number) => ({
    q: "What does `openssl rand -base64 32` generate?",
    o: ["32 random bytes as base64", "Random base64", "Secure random", "32 bytes base64"],
    c: 0,
    e: "openssl rand -base64 32. Cryptographically random. For secrets, tokens.",
    de: "openssl rand -base64 32. 32 bytes = 256 bits. Passwords, API keys."
  }),
  (_i: number) => ({
    q: "What does `chattr +i file` do?",
    o: ["Makes file immutable (no change, delete)", "Immutable", "Lock file", "No modify"],
    c: 0,
    e: "chattr +i. Immutable. Even root can't change. chattr -i to remove.",
    de: "chattr +i /etc/passwd. Protection. lsattr to see. -i to unlock."
  }),
  (_i: number) => ({
    q: "What does `umask 077` set for new files?",
    o: ["Owner only (rw-------)", "Umask 077", "Private files", "Restrictive umask"],
    c: 0,
    e: "umask 077. New files 600, dirs 700. No group/other. Secure default.",
    de: "umask 077. 666-077=600. 777-077=700. Scripts, cron. Secure."
  }),
  (_i: number) => ({
    q: "What does `authconfig` or `authselect` configure?",
    o: ["System authentication (PAM, nsswitch)", "Auth config", "PAM config", "System auth"],
    c: 0,
    e: "authselect, authconfig. Configures PAM, nsswitch. LDAP, Kerberos. RHEL.",
    de: "authselect select sssd. PAM, nsswitch. Central auth. Enterprise."
  }),
  (_i: number) => ({
    q: "What does `pam_cracklib.so` or `pam_pwquality.so` enforce?",
    o: ["Password strength (length, complexity)", "Password quality", "Strong password", "PAM password"],
    c: 0,
    e: "pam_pwquality. minlen, dcredit, etc. Password policy. /etc/security/pwquality.conf.",
    de: "password requisite pam_pwquality.so. minlen=12. Complexity. Cracklib legacy."
  }),
  (_i: number) => ({
    q: "What does `Match User` block in sshd_config do?",
    o: ["Applies following config only to that user", "User match", "Per-user config", "Match block"],
    c: 0,
    e: "Match User alice. Following directives for alice only. Conditional config.",
    de: "Match User alice\n  AllowTcpForwarding no. User-specific. Multiple Match."
  }),
  (_i: number) => ({
    q: "What does `AllowTcpForwarding no` in sshd_config prevent?",
    o: ["SSH port forwarding (-L, -R)", "No port forward", "Disable forwarding", "Forward block"],
    c: 0,
    e: "AllowTcpForwarding no. No -L, -R. Reduces pivot. Security.",
    de: "AllowTcpForwarding no. ssh -L 8080:localhost:80 blocked. Gateway prevention."
  }),
  (_i: number) => ({
    q: "What does `nft add rule inet filter input tcp dport 22 accept` do?",
    o: ["Allows SSH (port 22) in nftables", "Allow SSH nft", "Nft SSH", "Port 22 accept"],
    c: 0,
    e: "nft add rule. tcp dport 22. accept. nftables. Modern iptables.",
    de: "nft add rule inet filter input tcp dport 22 ct state new limit rate 5/second accept."
  }),
  (_i: number) => ({
    q: "What does `semanage port -a -t http_port_t -p tcp 8080` do?",
    o: ["Allows httpd to listen on 8080", "Add port type", "SELinux port", "Port context"],
    c: 0,
    e: "semanage port. Adds 8080 to http_port_t. Apache on 8080. SELinux allows.",
    de: "semanage port -a -t http_port_t -p tcp 8080. Apache :8080. semanage port -l."
  }),
  (_i: number) => ({
    q: "What does `ps auxZ` show?",
    o: ["Processes with SELinux context", "SELinux processes", "Context column", "Z context"],
    c: 0,
    e: "ps auxZ. Adds SELinux context. user:role:type. Debugging.",
    de: "ps auxZ | grep nginx. Label. ls -Z. Context for process."
  }),
  (_i: number) => ({
    q: "What does `gpg --keyserver keyserver.ubuntu.com --recv-keys KEYID` do?",
    o: ["Downloads public key from keyserver", "Fetch key", "Import from keyserver", "Recv key"],
    c: 0,
    e: "gpg --recv-keys. Fetches from keyserver. KEYID = fingerprint or short ID.",
    de: "gpg --keyserver keys.openpgp.org --recv-keys 0xABCD. Import. Verify."
  }),
  (_i: number) => ({
    q: "What does `gpg --symmetric file` create?",
    o: ["Password-encrypted file (no key pair)", "Symmetric encrypt", "Password encrypt", "Passphrase only"],
    c: 0,
    e: "gpg --symmetric. Password only. No key. -c same. Shared secret.",
    de: "gpg -c file. Prompts passphrase. file.gpg. gpg -d file.gpg to decrypt."
  }),
  (_i: number) => ({
    q: "What does `lsof -u user` show?",
    o: ["Files open by that user's processes", "User files", "User lsof", "Process files"],
    c: 0,
    e: "lsof -u user. All open files by user. -u root. For auditing.",
    de: "lsof -u jdoe. Open files. Before userdel. Kill processes first."
  }),
  (_i: number) => ({
    q: "What does `vigr` edit?",
    o: ["/etc/group (with lock)", "Edit group", "Group editor", "Safe group edit"],
    c: 0,
    e: "vigr. Like vipw for group. Locks /etc/group. Prevents corruption.",
    de: "vigr. /etc/group. vipw for passwd. Locking. Concurrent edit protection."
  }),
  (_i: number) => ({
    q: "What does PAM `optional` mean?",
    o: ["Ignore success/failure (don't affect result)", "Optional", "PAM optional", "No effect"],
    c: 0,
    e: "optional = run but don't affect. Logging, display. Success/fail ignored.",
    de: "auth optional pam_motd.so. Runs. Doesn't block. Informational."
  }),
  (_i: number) => ({
    q: "What does `pam_mkhomedir.so` do?",
    o: ["Creates home on first login if missing", "Create home", "Mkhomedir", "Auto home"],
    c: 0,
    e: "pam_mkhomedir. First login creates ~. LDAP users. No pre-created home.",
    de: "session required pam_mkhomedir.so. umask=0022. LDAP, NFS homes."
  }),
  (_i: number) => ({
    q: "What does `HostKeyAlgorithms` in sshd_config restrict?",
    o: ["Allowed host key algorithms", "Key algorithms", "SSH algorithms", "Host key types"],
    c: 0,
    e: "HostKeyAlgorithms. ssh-ed25519, rsa-sha2-256. Disable weak. Security.",
    de: "HostKeyAlgorithms ssh-ed25519,rsa-sha2-256. No ssh-rsa (weak). Algorithm policy."
  }),
  (_i: number) => ({
    q: "What does `KexAlgorithms` in sshd_config control?",
    o: ["Key exchange algorithms", "KEX algorithms", "Key exchange", "Diffie-Hellman"],
    c: 0,
    e: "KexAlgorithms. Key exchange. curve25519-sha256. Disable weak DH.",
    de: "KexAlgorithms curve25519-sha256. No diffie-hellman-group1-sha1. Modern only."
  }),
  (_i: number) => ({
    q: "What does `ufw status numbered` show?",
    o: ["Rules with numbers (for delete)", "Numbered rules", "Rule numbers", "Delete index"],
    c: 0,
    e: "ufw status numbered. [1], [2]. ufw delete 3. By number.",
    de: "ufw status numbered. ufw delete 5. Easier than full rule. Order matters."
  }),
  (_i: number) => ({
    q: "What does `sealert -a /var/log/audit/audit.log` do?",
    o: ["Analyzes SELinux denials, suggests fixes", "SELinux alert", "Denial analysis", "Sealert"],
    c: 0,
    e: "sealert. Reads audit. Suggests setsebool, semanage. Troubleshooting.",
    de: "sealert -a /var/log/audit/audit.log. setsebool, fcontext. Fix suggestions."
  }),
  (_i: number) => ({
    q: "What does `gpg --list-packets file` show?",
    o: ["Raw packet structure of GPG file", "Packet dump", "GPG structure", "Debug packets"],
    c: 0,
    e: "gpg --list-packets. Low-level. Packet types. Debugging. Not decrypt.",
    de: "gpg --list-packets file.gpg. pub key, sym encrypted. Structure."
  }),
  (_i: number) => ({
    q: "What does `gpg --refresh-keys` do?",
    o: ["Updates keys from keyservers (revocations, etc)", "Refresh keys", "Update keys", "Key refresh"],
    c: 0,
    e: "gpg --refresh-keys. Fetches updates. Revocations. Key validity.",
    de: "gpg --refresh-keys. Keyserver. Revocation. Expiry. Keep current."
  }),
  (_i: number) => ({
    q: "What does `find / -nouser` find?",
    o: ["Files owned by deleted user (orphaned)", "No user", "Orphaned files", "Deleted user files"],
    c: 0,
    e: "find / -nouser. UID not in passwd. Orphaned. After userdel.",
    de: "find / -nouser -o -nogroup. Cleanup. chown. Orphaned after userdel."
  }),
  (_i: number) => ({
    q: "What does `login.defs` control?",
    o: ["Useradd defaults (UID range, home, etc)", "User defaults", "Login defs", "User config"],
    c: 0,
    e: "/etc/login.defs. UID_MIN, CREATE_HOME, PASS_MAX_DAYS. useradd uses.",
    de: "/etc/login.defs. UID_MIN 1000. SYS_UID_MAX 999. System vs user range."
  }),
  (_i: number) => ({
    q: "What does `pam_succeed_if.so` do?",
    o: ["Conditional PAM (skip based on condition)", "PAM condition", "Succeed if", "Conditional auth"],
    c: 0,
    e: "pam_succeed_if. uid gt 1000. Skip for system. Conditional. Flexible.",
    de: "auth [success=1 default=ignore] pam_succeed_if.so user in root:bin."
  }),
  (_i: number) => ({
    q: "What does `pam_time.so` restrict?",
    o: ["Login by time/date (access hours)", "Time restrict", "Access hours", "PAM time"],
    c: 0,
    e: "pam_time. /etc/security/time.conf. Allow login 09-17. Time-based access.",
    de: "pam_time. ;*;*;Al0900-1700. Day, time. Restrict access hours."
  }),
  (_i: number) => ({
    q: "What does `Match Address` in sshd_config do?",
    o: ["Applies config based on client IP", "IP match", "Address match", "Client IP"],
    c: 0,
    e: "Match Address 192.168.1.0/24. Client IP. Per-subnet config.",
    de: "Match Address 10.0.0.0/8\n  PasswordAuthentication yes. Internal only."
  }),
  (_i: number) => ({
    q: "What does `GatewayPorts no` in sshd_config prevent?",
    o: ["Remote forwarding to non-localhost only", "Gateway ports", "Bind restrict", "Forward bind"],
    c: 0,
    e: "GatewayPorts no. -R binds localhost only. No 0.0.0.0. Security.",
    de: "GatewayPorts no. ssh -R 80:local:80. Only localhost:80. No external bind."
  }),
  (_i: number) => ({
    q: "What does `firewall-cmd --get-active-zones` show?",
    o: ["Zones and their interfaces", "Active zones", "Zone interfaces", "Current zones"],
    c: 0,
    e: "firewall-cmd --get-active-zones. Which zone per interface. public: eth0.",
    de: "firewall-cmd --get-active-zones. public, dmz. Interface binding."
  }),
  (_i: number) => ({
    q: "What does `runcon -t type cmd` do?",
    o: ["Runs command with specified SELinux type", "Run with context", "Runcon", "Change context"],
    c: 0,
    e: "runcon -t type. Run with type. Testing. runcon -u -r -t.",
    de: "runcon -t httpd_t /usr/sbin/httpd. Test context. Debug SELinux."
  }),
  (_i: number) => ({
    q: "What does `seinfo -b` list?",
    o: ["SELinux booleans", "Boolean list", "Seinfo bools", "SELinux booleans"],
    c: 0,
    e: "seinfo -b. All booleans. setsebool. Policy analysis.",
    de: "seinfo -b. sesearch for rules. Policy inspection. setools."
  }),
  (_i: number) => ({
    q: "What does `gpg --batch --gen-key key-spec` do?",
    o: ["Non-interactive key generation", "Batch gen key", "Script key gen", "Non-interactive"],
    c: 0,
    e: "gpg --batch. No prompts. For scripts. --gen-key with config file.",
    de: "gpg --batch --gen-key <<EOF. Automation. CI/CD. No interaction."
  }),
  (_i: number) => ({
    q: "What does `gpg --recipient user --sign --encrypt file` create?",
    o: ["Signed and encrypted file", "Sign and encrypt", "Both", "S+MIME like"],
    c: 0,
    e: "gpg -s -e -r user. Signs then encrypts. Confidentiality + integrity.",
    de: "gpg -se -r alice file. Sign (you) + encrypt (alice). Verify + decrypt."
  }),
  (_i: number) => ({
    q: "What does `passwd -n 7 user` set?",
    o: ["Minimum days between password changes", "Min days", "Password min", "Change interval"],
    c: 0,
    e: "passwd -n 7. Min 7 days between changes. Prevents rapid change bypass.",
    de: "passwd -n 7 jdoe. chage -m 7. Can't change daily. Policy."
  }),
  (_i: number) => ({
    q: "What does `getent group groupname` show?",
    o: ["Group entry from NSS (passwd, LDAP)", "Group entry", "NSS lookup", "Getent group"],
    c: 0,
    e: "getent group. NSS. /etc/group or LDAP. All sources. Consistent.",
    de: "getent group docker. getent passwd jdoe. NSS. LDAP, files, sssd."
  }),
  (_i: number) => ({
    q: "What does `/etc/nsswitch.conf` control?",
    o: ["Name service switch order (files, ldap, dns)", "NSS order", "Lookup order", "Name resolution"],
    c: 0,
    e: "nsswitch.conf. passwd: files sss. group: files. Order of lookup.",
    de: "passwd: files sss. Try /etc/passwd, then sssd. hosts: files dns."
  }),
  (_i: number) => ({
    q: "What does `pam_exec.so` do?",
    o: ["Runs external program during PAM", "PAM exec", "Run script", "External PAM"],
    c: 0,
    e: "pam_exec. Runs script. On login. Custom logic. Logging, notification.",
    de: "session optional pam_exec.so /usr/local/bin/on-login.sh. Hook."
  }),
  (_i: number) => ({
    q: "What does `Ciphers` in sshd_config restrict?",
    o: ["Allowed symmetric ciphers", "SSH ciphers", "Encryption ciphers", "Cipher suite"],
    c: 0,
    e: "Ciphers chacha20-poly1305,aes256-gcm. Disable weak. aes128-cbc no.",
    de: "Ciphers chacha20-poly1305@openssh.com,aes256-gcm@openssh.com. Strong only."
  }),
  (_i: number) => ({
    q: "What does `MACs` in sshd_config restrict?",
    o: ["Message authentication codes (HMAC)", "MAC algorithms", "Integrity", "HMAC"],
    c: 0,
    e: "MACs hmac-sha2-512. Integrity. Disable MD5, SHA1. Strong MACs.",
    de: "MACs hmac-sha2-512-etm@openssh.com. EtM = encrypt then MAC. Secure."
  }),
  (_i: number) => ({
    q: "What does `ufw logging on` enable?",
    o: ["Firewall rule hit logging", "UFW logging", "Rule logging", "Firewall log"],
    c: 0,
    e: "ufw logging on. Logs to kernel. dmesg, journalctl. Low, medium, high.",
    de: "ufw logging medium. /var/log/ufw. Debug. Rate limit with high."
  }),
  (_i: number) => ({
    q: "What does `audit2allow` generate?",
    o: ["SELinux policy module from denials", "Policy from denials", "Audit to allow", "Generate module"],
    c: 0,
    e: "audit2allow. Reads denials. Generates .te. Custom policy. Fix denials.",
    de: "ausearch -m avc | audit2allow -M mymodule. semodule -i mymodule.pp."
  }),
  (_i: number) => ({
    q: "What does `gpg --export-secret-keys` output?",
    o: ["Private keys (backup carefully)", "Secret keys", "Private export", "Backup keys"],
    c: 0,
    e: "gpg --export-secret-keys. Private key. Backup. Secure. Passphrase.",
    de: "gpg --export-secret-keys -a > backup.asc. ENCRYPT backup. Restore with --import."
  }),
  (_i: number) => ({
    q: "What does `gpg --delete-secret-key keyid` do?",
    o: ["Removes private key from keyring", "Delete secret key", "Remove private", "Key delete"],
    c: 0,
    e: "gpg --delete-secret-key. Removes private. --delete-key for public. Irreversible.",
    de: "gpg --delete-secret-key 0x1234. Confirm. Key gone. Backup first."
  }),
  (_i: number) => ({
    q: "What does `crontab -u user -l` do?",
    o: ["Lists crontab for specified user (root)", "List user crontab", "User crontab", "Crontab list"],
    c: 0,
    e: "crontab -u user -l. Root or same user. View another's crontab.",
    de: "crontab -u www-data -l. Audit. Backup. sudo required."
  }),
  (_i: number) => ({
    q: "What does `at.allow` and `at.deny` control?",
    o: ["Who can use at command", "At access", "At allow", "At permissions"],
    c: 0,
    e: "at.allow: whitelist. at.deny: blacklist. /etc/at.allow. Root always.",
    de: "/etc/at.allow. If exists, only listed. cron.allow, cron.deny same."
  }),
];
