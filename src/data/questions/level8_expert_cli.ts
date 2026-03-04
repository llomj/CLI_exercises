// LEVEL 8 EXPERT — Security & Hardening (100 unique questions)
// Topics: Users, PAM, SSH hardening, firewall, SELinux, GPG, encryption (expert depth)

export const level8Expert = [
  (_i: number) => ({
    q: "What does PAM `control_flag` stacking with `[value1=action1 value2=action2]` allow?",
    o: ["Multiple actions based on return value", "Stacked actions", "PAM control", "Value actions"],
    c: 0,
    e: "success=2 default=ignore. Jump 2 on success. Complex flow control.",
    de: "auth [success=2 default=ignore] pam_unix.so. success=ok [default=1]. Jump, skip."
  }),
  (_i: number) => ({
    q: "What does `semanage login -a -s user_u -r s0-s0:c0.c1023 user` do?",
    o: ["Maps Linux user to SELinux user and range (MLS)", "SELinux user map", "Login mapping", "MLS range"],
    c: 0,
    e: "semanage login. -s SELinux user. -r range. MLS/MCS. Multi-level security.",
    de: "semanage login -a -s user_u user. Maps Linux user. Confined. Range for MLS."
  }),
  (_i: number) => ({
    q: "What does `gpg --key-edit` subcommand `addkey` create?",
    o: ["Subkey (encryption/signing under primary)", "Add subkey", "Subkey", "Key hierarchy"],
    c: 0,
    e: "addkey creates subkey. Encrypt or sign. Primary stays offline. Subkey daily.",
    de: "gpg --edit-key. addkey. RSA, ECC. Expiry. Primary offline, subkey on laptop."
  }),
  (_i: number) => ({
    q: "What does `sshd_config` `AuthenticationMethods publickey,keyboard-interactive` enforce?",
    o: ["Key required, then 2FA (key + password/OTP)", "Multi-factor", "2FA SSH", "Auth methods"],
    c: 0,
    e: "AuthenticationMethods. Both required. publickey then keyboard-interactive. 2FA.",
    de: "publickey,keyboard-interactive. Key first. Then OTP/password. Defense in depth."
  }),
  (_i: number) => ({
    q: "What does `pam_sssd.so` integrate with?",
    o: ["SSSD (LDAP, AD, Kerberos cache)", "SSSD PAM", "Enterprise auth", "LDAP cache"],
    c: 0,
    e: "pam_sssd. SSSD daemon. LDAP, AD. Cached credentials. Offline auth.",
    de: "auth sufficient pam_sssd.so. account [default=bad success=ok] pam_sssd.so. Enterprise."
  }),
  (_i: number) => ({
    q: "What does `setsebool -P` write to?",
    o: ["/sys/fs/selinux/booleans (persistent in policy)", "Persistent bool", "SELinux bool store", "Policy bool"],
    c: 0,
    e: "setsebool -P. Writes to policy. Survives reboot. Without -P = runtime only.",
    de: "setsebool -P httpd_can_network_connect 1. /etc/selinux/targeted/booleans. Persistent."
  }),
  (_i: number) => ({
    q: "What does `gpg --quick-add-uid keyid 'Name <email>'` add?",
    o: ["Additional UID to existing key", "Add UID", "Key UID", "Multiple identities"],
    c: 0,
    e: "gpg --quick-add-uid. Adds identity to key. Same key, multiple emails.",
    de: "gpg --edit-key. adduid. Or --quick-add-uid. One key, work+personal."
  }),
  (_i: number) => ({
    q: "What does `iptables -m owner --uid-owner` NOT work on?",
    o: ["INPUT chain (only OUTPUT, FORWARD)", "INPUT chain", "Owner limit", "Chain restriction"],
    c: 0,
    e: "owner module. Only OUTPUT, POSTROUTING. INPUT doesn't know process yet.",
    de: "Packets arrive before process. OUTPUT knows. FORWARD with conntrack. INPUT no."
  }),
  (_i: number) => ({
    q: "What does `semanage permissive -a type_t` do?",
    o: ["Makes type permissive (audit only, no deny)", "Permissive type", "Audit only", "Type permissive"],
    c: 0,
    e: "semanage permissive. Type doesn't deny. Logs only. Debugging. Narrow scope.",
    de: "semanage permissive -a httpd_t. Just httpd. Not whole system. Targeted permissive."
  }),
  (_i: number) => ({
    q: "What does `gpg --export-ssh-key keyid` produce?",
    o: ["SSH public key format from GPG auth subkey", "SSH key from GPG", "GPG to SSH", "Auth subkey SSH"],
    c: 0,
    e: "gpg --export-ssh-key. Auth subkey as SSH. One key, GPG+SSH. Smartcard.",
    de: "gpg --export-ssh-key KEYID >> ~/.ssh/authorized_keys. GPG key for SSH."
  }),
  (_i: number) => ({
    q: "What does `pam_faillock` `even_deny_root` do?",
    o: ["Locks root too after failures", "Root lockout", "Lock root", "Even root"],
    c: 0,
    e: "even_deny_root. Root not exempt. Lock root. Brute force. Careful: lockout.",
    de: "auth required pam_faillock.so even_deny_root. Root lockout. Console access."
  }),
  (_i: number) => ({
    q: "What does `sshd_config` `PermitUserEnvironment` control?",
    o: ["~/.ssh/environment and environment= in authorized_keys", "User env", "SSH environment", "Env vars"],
    c: 0,
    e: "PermitUserEnvironment. ~/.ssh/environment. environment= in authorized_keys. Restricted.",
    de: "PermitUserEnvironment no. environment= in key = override. Security risk."
  }),
  (_i: number) => ({
    q: "What does `firewall-cmd --direct --add-rule ipv4 filter INPUT 0 -p tcp --dport 22 -j ACCEPT` do?",
    o: ["Adds raw iptables rule (bypasses firewalld)", "Direct rule", "iptables passthrough", "Raw rule"],
    c: 0,
    e: "firewall-cmd --direct. Passes to iptables. Bypass firewalld. Low-level.",
    de: "firewall-cmd --direct. iptables -A. When firewalld abstraction insufficient."
  }),
  (_i: number) => ({
    q: "What does `sepolgen` or `audit2why` help with?",
    o: ["Explaining why SELinux denied (human-readable)", "Denial explanation", "Audit2why", "SELinux why"],
    c: 0,
    e: "audit2why. AVC to explanation. Missing rule. Why denied. Fix guidance.",
    de: "ausearch -m avc | audit2why. Missing type. Need allow. Policy fix."
  }),
  (_i: number) => ({
    q: "What does `gpg --card-status` show?",
    o: ["Smartcard status (YubiKey, etc)", "Card status", "Smartcard", "Token status"],
    c: 0,
    e: "gpg --card-status. Smartcard. Keys on card. YubiKey. Touch policy.",
    de: "gpg --card-status. Keys on device. gpg --card-edit. PIN, admin."
  }),
  (_i: number) => ({
    q: "What does `pam_unix.so` `remember=N` do?",
    o: ["Remembers N previous passwords (no reuse)", "Password history", "Remember", "No reuse"],
    c: 0,
    e: "pam_unix.so remember=5. Can't reuse last 5. /etc/security/opasswd.",
    de: "password requisite pam_unix.so remember=12. Password history. Compliance."
  }),
  (_i: number) => ({
    q: "What does `semanage boolean -m --on bool` do?",
    o: ["Modifies existing boolean (persistent)", "Modify bool", "Boolean modify", "Set bool"],
    c: 0,
    e: "semanage boolean -m. Modify. --on. Persistent. Alternative to setsebool -P.",
    de: "semanage boolean -m --on httpd_can_network_connect. Policy. Persistent."
  }),
  (_i: number) => ({
    q: "What does `gpg --passphrase-fd 0` read passphrase from?",
    o: ["Stdin (fd 0)", "Stdin passphrase", "FD 0", "Pipe passphrase"],
    c: 0,
    e: "gpg --passphrase-fd 0. Read from stdin. echo pass | gpg. Scripting.",
    de: "echo $PASS | gpg --batch --passphrase-fd 0 -d file.gpg. Automation."
  }),
  (_i: number) => ({
    q: "What does `Match Block` in sshd_config apply to?",
    o: ["All following directives until next Match", "Match block scope", "Block apply", "Match scope"],
    c: 0,
    e: "Match Block. Indented or until next Match. Applies to matching connections.",
    de: "Match User alice\n  X11Forwarding no. Only alice. Scope. Multiple conditions."
  }),
  (_i: number) => ({
    q: "What does `nft add rule inet filter input ct state new limit rate 5/second burst 10 packets accept` allow?",
    o: ["5 new conn/sec sustained, burst 10 (token bucket)", "Rate with burst", "Connection rate", "Token bucket"],
    c: 0,
    e: "limit rate 5/second burst 10. Sustained 5. Burst 10. DDoS mitigation.",
    de: "nft limit. Token bucket. burst = initial. rate = refill. Flexible."
  }),
  (_i: number) => ({
    q: "What does `pam_cap.so` set?",
    o: ["Linux capabilities for session", "Capabilities", "PAM caps", "Cap set"],
    c: 0,
    e: "pam_cap.so. Sets capabilities. /etc/security/capability.conf. Grant caps.",
    de: "session optional pam_cap.so. cap_net_bind_service. Non-root bind 80."
  }),
  (_i: number) => ({
    q: "What does `semanage module -l` show?",
    o: ["Loaded SELinux policy modules", "Policy modules", "SELinux modules", "Module list"],
    c: 0,
    e: "semanage module -l. Policy modules. semodule -l. Custom modules.",
    de: "semanage module -l. semodule -i custom.pp. Policy structure."
  }),
  (_i: number) => ({
    q: "What does `gpg --list-secret-keys --keyid-format long` show?",
    o: ["Full key IDs (fingerprint)", "Long key ID", "Full fingerprint", "Key format"],
    c: 0,
    e: "gpg -K --keyid-format long. Full key ID. 0x1234567890ABCDEF. Verify.",
    de: "gpg --list-secret-keys --keyid-format 0xlong. Full ID. Key verification."
  }),
  (_i: number) => ({
    q: "What does `pam_namespace.so` do?",
    o: ["Private /tmp, etc per user (namespace)", "Private namespace", "User namespace", "Isolated tmp"],
    c: 0,
    e: "pam_namespace. Per-user /tmp. /etc/security/namespace.conf. Isolation.",
    de: "pam_namespace. Private /tmp. Shared hosting. Multi-tenant. Security."
  }),
  (_i: number) => ({
    q: "What does `sshd_config` `StreamLocalBindUnlink` control?",
    o: ["Unlink existing socket before bind (Agent forwarding)", "Socket unlink", "Agent socket", "Bind unlink"],
    c: 0,
    e: "StreamLocalBindUnlink. Removes stale socket. SSH agent. Forwarding.",
    de: "StreamLocalBindUnlink yes. /tmp/ssh-xxx. Stale socket. Agent forwarding."
  }),
  (_i: number) => ({
    q: "What does `firewall-cmd --panic-on` do?",
    o: ["Drops ALL traffic (emergency lockdown)", "Panic mode", "Emergency block", "Lockdown"],
    c: 0,
    e: "firewall-cmd --panic-on. All traffic dropped. Emergency. --panic-off to restore.",
    de: "firewall-cmd --panic-on. Breach. Isolate. firewall-cmd --panic-off."
  }),
  (_i: number) => ({
    q: "What does `restorecon -F` force?",
    o: ["Reset even if customized (force)", "Force restore", "Overwrite", "Reset context"],
    c: 0,
    e: "restorecon -F. Force. Overwrites. Even user-set. -F = force.",
    de: "restorecon -RFv /var. -F overwrites. Fix corrupted. -n for dry run."
  }),
  (_i: number) => ({
    q: "What does `gpg --verify` with `gpg: Good signature` but `gpg: Can't check signature` mean?",
    o: ["Valid sig but signer key not in keyring (trust unknown)", "Key missing", "Can't verify trust", "Unknown signer"],
    c: 0,
    e: "Good signature = valid. Can't check = key not imported. Import signer's key.",
    de: "gpg --import signer.asc. Then verify. Or keyserver. Trust chain."
  }),
  (_i: number) => ({
    q: "What does `pam_selinux.so` do at session start?",
    o: ["Sets SELinux context for user session", "Session context", "PAM SELinux", "User context"],
    c: 0,
    e: "pam_selinux. Sets context at login. user_u:user_r:user_t. Confined session.",
    de: "session required pam_selinux.so open. Context. Multi-user. Confinement."
  }),
  (_i: number) => ({
    q: "What does `semanage fcontext -d` do?",
    o: ["Deletes fcontext rule", "Delete fcontext", "Remove context", "Fcontext delete"],
    c: 0,
    e: "semanage fcontext -d pattern. Removes rule. restorecon to apply.",
    de: "semanage fcontext -d '/web(/.*)?'. Removed. restorecon. Revert."
  }),
  (_i: number) => ({
    q: "What does `gpg --quick-generate-key` require for batch?",
    o: ["Batch mode with --batch and parameter file", "Batch params", "GPG batch", "Non-interactive"],
    c: 0,
    e: "gpg --batch --quick-gen-key. Needs %no-protection or passphrase. Automation.",
    de: "gpg --batch --quick-generate-key 'Name <e@m>' ed25519 cert 0. CI/CD."
  }),
  (_i: number) => ({
    q: "What does `pam_echo.so` do?",
    o: ["Prints message during PAM (prompt, info)", "PAM echo", "Print message", "Display"],
    c: 0,
    e: "pam_echo. Prints string. file= or string=. Informational. Banner.",
    de: "auth optional pam_echo.so file=/etc/issue. Custom prompt. Rare."
  }),
  (_i: number) => ({
    q: "What does `sshd_config` `HostbasedAuthentication` enable?",
    o: ["Authentication via host key + /etc/hosts.equiv", "Host-based auth", "Rhosts", "Host auth"],
    c: 0,
    e: "HostbasedAuthentication. Trust host. /etc/hosts.equiv. /etc/ssh/shosts.equiv. Insecure.",
    de: "HostbasedAuthentication no. IgnoreRhosts yes. Legacy. Security risk."
  }),
  (_i: number) => ({
    q: "What does `ufw insert 1 deny from 1.2.3.4` do?",
    o: ["Inserts deny rule at position 1", "Insert rule", "Rule position", "Prepend deny"],
    c: 0,
    e: "ufw insert 1. Position. Before others. Order matters. ufw status numbered.",
    de: "ufw insert 1 deny from 1.2.3.4. First rule. Override allow. Block specific."
  }),
  (_i: number) => ({
    q: "What does `sesearch -A -s type_t -t type2_t` find?",
    o: ["SELinux allow rules from type to type2", "Allow rules", "Sesearch", "Policy search"],
    c: 0,
    e: "sesearch. -A allow. -s source. -t target. Policy rules. Debug.",
    de: "sesearch -A -s httpd_t -t var_t. Why allowed/denied. Policy analysis."
  }),
  (_i: number) => ({
    q: "What does `gpg --clearsign` produce?",
    o: ["Inline ASCII signature (text + sig in one)", "Clearsign", "Inline sign", "ASCII sign"],
    c: 0,
    e: "gpg --clearsign. Text + sig. Readable. Verify with --verify. Email.",
    de: "gpg --clearsign file. file.asc. Content visible. Sig at end. --verify."
  }),
  (_i: number) => ({
    q: "What does `pam_wheel.so` restrict?",
    o: ["su to root for wheel group only", "Wheel only su", "Su restriction", "Root su"],
    c: 0,
    e: "pam_wheel. Only wheel can su. use_uid. Restrict root access.",
    de: "auth required pam_wheel.so use_uid. su root. Only wheel. CentOS default."
  }),
  (_i: number) => ({
    q: "What does `semanage port -d -t http_port_t -p tcp 8080` do?",
    o: ["Removes port from type", "Delete port", "Remove port type", "Port delete"],
    c: 0,
    e: "semanage port -d. Removes. 8080 no longer http_port_t. Revert.",
    de: "semanage port -d -t http_port_t -p tcp 8080. Undo. semanage port -l."
  }),
  (_i: number) => ({
    q: "What does `gpg --recipient user --throw-keyids` hide?",
    o: ["Key IDs in encrypted message (metadata privacy)", "Hide key IDs", "Throw keyids", "Metadata privacy"],
    c: 0,
    e: "gpg --throw-keyids. No key ID in ciphertext. Metadata. Privacy.",
    de: "gpg -e -r user --throw-keyids. Recipient tries all keys. Traffic analysis."
  }),
  (_i: number) => ({
    q: "What does `pam_deny.so` always do?",
    o: ["Always fails (block)", "Always deny", "PAM deny", "Block all"],
    c: 0,
    e: "pam_deny. Always fail. Use for default deny. Last in stack.",
    de: "auth required pam_deny.so. Catch-all. Default deny. Security."
  }),
  (_i: number) => ({
    q: "What does `sshd_config` `PermitTTY no` do?",
    o: ["Forces non-interactive (no TTY allocation)", "No TTY", "Force no TTY", "Non-interactive"],
    c: 0,
    e: "PermitTTY no. No TTY. Forced. Scp, rsync. Match block for sftp only.",
    de: "Match User backup\n  PermitTTY no. Backup user. No shell. SCP only."
  }),
  (_i: number) => ({
    q: "What does `nft add set inet filter blocklist { type ipv4_addr; flags timeout; }` enable?",
    o: ["Dynamic set with expiring entries (timeout)", "Timeout set", "Expiring set", "Dynamic blocklist"],
    c: 0,
    e: "flags timeout. Entries expire. nft add element ... { 1.2.3.4 timeout 1h }.",
    de: "Dynamic. Auto-remove. Temporary block. DDoS. Time-based."
  }),
  (_i: number) => ({
    q: "What does `seinfo -t` list?",
    o: ["All SELinux types", "Type list", "SELinux types", "Seinfo types"],
    c: 0,
    e: "seinfo -t. All types. httpd_sys_content_t. Policy types. Thousands.",
    de: "seinfo -t | grep httpd. Types for httpd. sesearch for rules."
  }),
  (_i: number) => ({
    q: "What does `gpg --export-ownertrust` output?",
    o: ["Trust database (who you trust)", "Ownertrust", "Trust export", "Trust levels"],
    c: 0,
    e: "gpg --export-ownertrust. Trust. 1-5. Import on new machine. Backup.",
    de: "gpg --export-ownertrust > trust.txt. gpg --import-ownertrust. Trust web."
  }),
  (_i: number) => ({
    q: "What does `pam_motd.so` display?",
    o: ["Message of the day on login", "MOTD", "Login message", "Banner"],
    c: 0,
    e: "pam_motd. /etc/motd. Message on login. Optional. Informational.",
    de: "session optional pam_motd.so. /etc/motd. /etc/update-motd.d. Dynamic."
  }),
  (_i: number) => ({
    q: "What does `semanage user -l` show?",
    o: ["SELinux user mappings", "SELinux users", "User mappings", "User list"],
    c: 0,
    e: "semanage user -l. user_u, staff_u, sysadm_u. Roles, levels. MLS.",
    de: "semanage user -l. Maps. semanage user -a -s user_u. Add mapping."
  }),
  (_i: number) => ({
    q: "What does `gpg --generate-revocation-certificate` create?",
    o: ["Revocation cert (invalidates key if lost)", "Revocation cert", "Revoke key", "Key revoke"],
    c: 0,
    e: "gpg --gen-revoke. Creates cert. Use if key compromised. Publish to keyserver.",
    de: "gpg --gen-revoke KEYID. Store securely. If lost: gpg --import revoke.asc."
  }),
  (_i: number) => ({
    q: "What does `pam_systemd.so` register?",
    o: ["Session with systemd (logind, scope)", "Systemd session", "Logind", "Session scope"],
    c: 0,
    e: "pam_systemd. Registers with logind. User scope. cgroups. Session tracking.",
    de: "session required pam_systemd.so. loginctl. User sessions. systemd."
  }),
  (_i: number) => ({
    q: "What does `sshd_config` `ForceCommand` override?",
    o: ["Forces specific command (ignores client request)", "Force command", "Override cmd", "Restrict command"],
    c: 0,
    e: "ForceCommand /usr/bin/rrsync. Ignores client. Git, backup. Restricted.",
    de: "Match User backup\n  ForceCommand /usr/local/bin/backup-script. No shell."
  }),
  (_i: number) => ({
    q: "What does `firewall-cmd --zone=dmz --add-source=192.168.1.0/24` do?",
    o: ["Traffic from subnet uses dmz zone", "Source zone", "Zone by source", "Traffic zone"],
    c: 0,
    e: "add-source. Traffic from 192.168.1.0/24 = dmz zone. Source-based zones.",
    de: "firewall-cmd --zone=dmz --add-source=10.0.0.0/8. Internal = dmz rules."
  }),
  (_i: number) => ({
    q: "What does `chcat` do (SELinux)?",
    o: ["Changes file category (MLS/MCS)", "Change category", "File category", "MCS level"],
    c: 0,
    e: "chcat. Category. MCS. Multi-category. chcat +c1,c2 file. Rare.",
    de: "chcat +c0.c1023 file. Category. MLS/MCS. chcon -l for level."
  }),
  (_i: number) => ({
    q: "What does `gpg --list-packets` show for `:pub key packet:`?",
    o: ["Public key packet (key material)", "Pub key packet", "Key packet", "GPG structure"],
    c: 0,
    e: "pub key packet. Key material. Algorithm, size. Not decrypted. Structure.",
    de: "gpg --list-packets. :pub key packet:. :user ID packet:. Packet dump."
  }),
  (_i: number) => ({
    q: "What does `pam_keyinit.so` do?",
    o: ["Initializes kernel keyring for session", "Keyring init", "Kernel keyring", "Session keyring"],
    c: 0,
    e: "pam_keyinit. Kernel keyring. Session keys. keyctl. Encrypted fs, etc.",
    de: "session optional pam_keyinit.so. keyctl show. Kernel key retention."
  }),
  (_i: number) => ({
    q: "What does `semanage boolean --list` show?",
    o: ["Booleans with descriptions", "Boolean list", "Bool descriptions", "SELinux bools"],
    c: 0,
    e: "semanage boolean --list. All + description. setsebool. Policy.",
    de: "semanage boolean -l. httpd_can_network_connect (off). Descriptions."
  }),
  (_i: number) => ({
    q: "What does `gpg --sign-key keyid` do?",
    o: ["Signs another's key (certifies)", "Sign key", "Certify key", "Key signature"],
    c: 0,
    e: "gpg --sign-key. Certifies. Trust. Web of trust. Check fingerprint first.",
    de: "gpg --sign-key 0xABCD. Certify. Keyserver. Trust level. WoT."
  }),
  (_i: number) => ({
    q: "What does `pam_umask.so umask=0027` set?",
    o: ["Session umask (files 640, dirs 750)", "Session umask", "Umask value", "File creation"],
    c: 0,
    e: "pam_umask umask=0027. New files. 666-027=640. 777-027=750. Secure.",
    de: "session optional pam_umask.so umask=0027. Override default. Per-service."
  }),
  (_i: number) => ({
    q: "What does `sshd_config` `PermitOpen` restrict?",
    o: ["Port forwarding destinations (where -L/-R can go)", "Forward restrict", "Port forward", "Forward limit"],
    c: 0,
    e: "PermitOpen host:port. Only these. -L restricted. No arbitrary forward.",
    de: "PermitOpen localhost:3306. Only MySQL. Restrict pivot. Security."
  }),
  (_i: number) => ({
    q: "What does `iptables -A INPUT -m recent --name bad --update --seconds 3600 -j DROP` do?",
    o: ["Drops if IP in bad list within last hour", "Recent update drop", "Temporary block", "1hr block"],
    c: 0,
    e: "recent --update. Check list. --seconds = window. In list = drop. fail2ban-like.",
    de: "Pair with --set. Add on fail. --update --seconds 3600. 1hr block."
  }),
  (_i: number) => ({
    q: "What does `load_policy` in SELinux do?",
    o: ["Loads new policy without reboot", "Load policy", "Policy reload", "Hot reload"],
    c: 0,
    e: "load_policy. New policy. No reboot. semodule -i. Policy update.",
    de: "semodule -i new.pp. load_policy. Or reboot. Policy update."
  }),
  (_i: number) => ({
    q: "What does `gpg --list-config` show?",
    o: ["GPG configuration (internal)", "GPG config", "Internal config", "Config dump"],
    c: 0,
    e: "gpg --list-config. Internal. Keyserver, options. Debug. Not gpg.conf.",
    de: "gpg --list-config. Verbosity. Keyserver. Internal state."
  }),
  (_i: number) => ({
    q: "What does `pam_limits.so` read from?",
    o: ["/etc/security/limits.conf and limits.d/", "Limits config", "Limits source", "Config file"],
    c: 0,
    e: "pam_limits. limits.conf. limits.d/*.conf. nofile, nproc. Per-user.",
    de: "/etc/security/limits.conf. * soft nofile 65535. limits.d override."
  }),
  (_i: number) => ({
    q: "What does `semanage interface` manage?",
    o: ["SELinux policy interfaces (templates)", "Policy interfaces", "Interface templates", "SELinux interface"],
    c: 0,
    e: "semanage interface. Policy interface. Template. Rare. semanage -l.",
    de: "semanage interface -l. Policy layer. Advanced. Module development."
  }),
  (_i: number) => ({
    q: "What does `gpg --keyring /path/to/keyring.gpg` use?",
    o: ["Alternate keyring file", "Alternate keyring", "Keyring path", "Custom keyring"],
    c: 0,
    e: "gpg --keyring. Use different keyring. Not default. Isolated. Testing.",
    de: "gpg --keyring ./project.gpg --list-keys. Project-specific. CI."
  }),
  (_i: number) => ({
    q: "What does `pam_access.so` use?",
    o: ["/etc/security/access.conf (allow/deny by origin)", "Access config", "Access control", "Login access"],
    c: 0,
    e: "pam_access. access.conf. + : ALL : 192.168.1.0/24. - : ALL : ALL. Restrict.",
    de: "account required pam_access.so. /etc/security/access.conf. By IP, user."
  }),
  (_i: number) => ({
    q: "What does `sshd_config` `AllowStreamLocalForwarding` control?",
    o: ["Unix socket forwarding (-L /path)", "Socket forward", "StreamLocal", "Unix forward"],
    c: 0,
    e: "AllowStreamLocalForwarding. -L /tmp/sock. Unix socket. Agent, Docker.",
    de: "AllowStreamLocalForwarding no. Block socket forward. Restrict."
  }),
  (_i: number) => ({
    q: "What does `nft add rule inet filter input ip saddr @blocklist drop` require?",
    o: ["Named set 'blocklist' with type ipv4_addr", "Set blocklist", "IP set", "Named set"],
    c: 0,
    e: "nft add set ... blocklist { type ipv4_addr; }. @blocklist. Set must exist.",
    de: "nft add set inet filter blocklist { type ipv4_addr; }. nft add element ... { 1.2.3.4 }."
  }),
  (_i: number) => ({
    q: "What does `avc_cache` in SELinux store?",
    o: ["Cached AVC decisions (allow/deny)", "AVC cache", "Decision cache", "SELinux cache"],
    c: 0,
    e: "AVC cache. Cached decisions. Performance. /sys/fs/selinux/avc/cache_stats.",
    de: "avc_cache. Hit rate. Tuning. Rare to touch. Kernel internal."
  }),
  (_i: number) => ({
    q: "What does `gpg --fixed-list-mode` change?",
    o: ["Machine-parseable key listing", "Fixed list", "Parseable output", "Script output"],
    c: 0,
    e: "gpg --fixed-list-mode. Stable format. Parsing. Scripts. --with-colons.",
    de: "gpg --list-keys --fixed-list-mode. Parsing. Automation. Stable."
  }),
  (_i: number) => ({
    q: "What does `pam_echo.so file=/path` read from?",
    o: ["File content as message", "File message", "PAM file", "Display file"],
    c: 0,
    e: "pam_echo file=/path. Displays file. /etc/issue. Banner. Optional.",
    de: "auth optional pam_echo.so file=/etc/legal. Login banner. Legal."
  }),
  (_i: number) => ({
    q: "What does `semanage dontaudit` control?",
    o: ["Don't log denied (dontaudit rules)", "Dontaudit", "No audit", "Silent deny"],
    c: 0,
    e: "semanage dontaudit. Policy. Don't log. Reduce noise. semodule -d.",
    de: "semodule -d to disable dontaudit. See all denials. Debug."
  }),
  (_i: number) => ({
    q: "What does `gpg --default-new-key-algo` set?",
    o: ["Default algorithm for new keys", "Key algorithm", "Default algo", "New key algo"],
    c: 0,
    e: "gpg --default-new-key-algo. ed25519, rsa4096. gpg.conf. Key generation.",
    de: "default-new-key-algo ed25519/cert,sign+cv25519/encrypt. ECC default."
  }),
  (_i: number) => ({
    q: "What does `pam_radius.so` authenticate against?",
    o: ["RADIUS server", "RADIUS auth", "RADIUS", "Network auth"],
    c: 0,
    e: "pam_radius. RADIUS. 802.1X. Central auth. Enterprise. VPN.",
    de: "auth sufficient pam_radius.so. /etc/raddb. Network authentication."
  }),
  (_i: number) => ({
    q: "What does `sshd_config` `AcceptEnv` allow?",
    o: ["Environment variables from client", "Accept env", "Client env", "Env pass-through"],
    c: 0,
    e: "AcceptEnv LANG LC_*. Client sends. Server sets. Limited. Security.",
    de: "AcceptEnv LANG LC_* PATH. SendEnv from client. Restricted list."
  }),
  (_i: number) => ({
    q: "What does `firewall-cmd --list-lockdown-whitelist-commands` show?",
    o: ["Commands allowed during lockdown", "Lockdown whitelist", "Lockdown commands", "Whitelist"],
    c: 0,
    e: "Lockdown. Only whitelisted. firewall-cmd --lockdown-on. Commands.",
    de: "firewall-cmd --lockdown-on. D-Bus. Whitelist. Emergency. Restrict."
  }),
  (_i: number) => ({
    q: "What does `genhomedircon` generate?",
    o: ["SELinux context for home dirs", "Home context", "Homedir context", "User home"],
    c: 0,
    e: "genhomedircon. /home/user context. user_home_dir_t. Policy. Generated.",
    de: "genhomedircon. Makes home dirs. Restorecon. Default context."
  }),
  (_i: number) => ({
    q: "What does `gpg --export-options export-minimal` do?",
    o: ["Exports minimum key material", "Minimal export", "Minimal key", "Reduce export"],
    c: 0,
    e: "gpg --export-options export-minimal. Only necessary. Smaller. Subkeys.",
    de: "gpg --export-options export-minimal -a. Backup. Minimal. Keyserver."
  }),
  (_i: number) => ({
    q: "What does `pam_selinux.so open` do?",
    o: ["Opens SELinux context for session", "Open context", "SELinux open", "Session context"],
    c: 0,
    e: "pam_selinux open. Session. Sets context. Multi-user. Required.",
    de: "session required pam_selinux.so open. Context. Confinement."
  }),
  (_i: number) => ({
    q: "What does `semanage login -m` do?",
    o: ["Modifies existing login mapping", "Modify mapping", "Login modify", "Change mapping"],
    c: 0,
    e: "semanage login -m. Modify. -a add. -d delete. Change mapping.",
    de: "semanage login -m -s sysadm_u -r s0-s0:c0.c1023 root. Root mapping."
  }),
  (_i: number) => ({
    q: "What does `gpg --pinentry-mode loopback` enable?",
    o: ["Passphrase from stdin (no GUI)", "Loopback pinentry", "Batch passphrase", "No GUI"],
    c: 0,
    e: "gpg --pinentry-mode loopback. Passphrase from --passphrase-fd. No prompt.",
    de: "gpg --batch --pinentry-mode loopback --passphrase-fd 0. CI/CD. Automation."
  }),
  (_i: number) => ({
    q: "What does `pam_krb5.so` authenticate against?",
    o: ["Kerberos KDC", "Kerberos", "KRB5", "KDC auth"],
    c: 0,
    e: "pam_krb5. Kerberos. KDC. Enterprise. Single sign-on. Tickets.",
    de: "auth sufficient pam_krb5.so. /etc/krb5.conf. Realm. AD integration."
  }),
  (_i: number) => ({
    q: "What does `sshd_config` `PermitUserRC` control?",
    o: ["~/.ssh/rc execution", "User rc", "SSH rc", "Rc file"],
    c: 0,
    e: "PermitUserRC. ~/.ssh/rc. Runs on login. Default yes. PermitUserEnvironment.",
    de: "PermitUserRC no. Disable. Security. ~/.ssh/rc = user script."
  }),
  (_i: number) => ({
    q: "What does `ufw route allow from 10.0.0.0/8` do?",
    o: ["Allows routing/forwarding from subnet", "Route allow", "Forward allow", "Routing rule"],
    c: 0,
    e: "ufw route. Forwarding. Not just input. NAT, routing. ip_forward.",
    de: "ufw route allow from 10.0.0.0/8. Forward. Between interfaces."
  }),
  (_i: number) => ({
    q: "What does `semanage permissive -d type_t` do?",
    o: ["Removes permissive from type (back to enforcing)", "Remove permissive", "Permissive delete", "Re-enforce"],
    c: 0,
    e: "semanage permissive -d. Removes. Type enforcing again. After debug.",
    de: "semanage permissive -d httpd_t. Was permissive. Now enforcing."
  }),
  (_i: number) => ({
    q: "What does `gpg --quick-set-expire keyid 0` do?",
    o: ["Makes key never expire", "No expiry", "Infinite key", "Remove expiry"],
    c: 0,
    e: "gpg --quick-set-expire. 0 = no expiry. Or date. Non-interactive.",
    de: "gpg --quick-set-expire KEYID 0. No expiry. Or 2025-12-31. Batch."
  }),
  (_i: number) => ({
    q: "What does `pam_timestamp.so` cache?",
    o: ["Successful auth for sudo (recent auth)", "Timestamp", "Auth cache", "Sudo cache"],
    c: 0,
    e: "pam_timestamp. /var/run/sudo/ts. Sudo doesn't re-prompt. 5 min default.",
    de: "session optional pam_timestamp.so. timestamp_timeout. Sudo cache."
  }),
  (_i: number) => ({
    q: "What does `sshd_config` `Banner` display?",
    o: ["Message before auth (legal notice)", "Pre-auth banner", "Login banner", "Legal notice"],
    c: 0,
    e: "Banner /etc/issue.net. Before login. Legal. Must accept. Compliance.",
    de: "Banner /etc/ssh/banner. Pre-auth. Legal. Authorized use only."
  }),
  (_i: number) => ({
    q: "What does `nft add rule inet filter input ct state established,related counter accept` count?",
    o: ["Packets/bytes for return traffic", "Established counter", "Return traffic", "Connection counter"],
    c: 0,
    e: "counter. Counts. established,related. Return traffic. Monitoring.",
    de: "counter. nft list ruleset. Packets, bytes. Traffic stats. Per rule."
  }),
  (_i: number) => ({
    q: "What does `sepolicy` command generate?",
    o: ["SELinux policy (modules, interfaces)", "Policy generate", "SELinux policy", "Policy tools"],
    c: 0,
    e: "sepolicy. Policy tools. Generate. audit2allow. Policy development.",
    de: "sepolicy generate. New policy. Module. Development. setools."
  }),
  (_i: number) => ({
    q: "What does `gpg --with-subkey-fingerprint` add to output?",
    o: ["Subkey fingerprints in key listing", "Subkey fingerprint", "Key listing", "Full fingerprint"],
    c: 0,
    e: "gpg --with-subkey-fingerprint. Subkeys. Full ID. Verification.",
    de: "gpg -K --with-subkey-fingerprint. All fingerprints. Verify subkeys."
  }),
  (_i: number) => ({
    q: "What does `pam_ecryptfs.so` do?",
    o: ["Mounts ecryptfs home (encrypted home)", "Encrypted home", "Ecryptfs", "Home encryption"],
    c: 0,
    e: "pam_ecryptfs. Encrypted home. Login mounts. Logout unmounts. Privacy.",
    de: "session optional pam_ecryptfs.so. ecryptfs-mount-private. Encrypted."
  }),
  (_i: number) => ({
    q: "What does `semanage module -a -e base module` do?",
    o: ["Enables module (from disabled)", "Enable module", "Module enable", "Activate module"],
    c: 0,
    e: "semanage module -a -e. Enable. Was disabled. semodule -d disabled.",
    de: "semanage module -l. -e enable. -d disable. Policy modules."
  }),
  (_i: number) => ({
    q: "What does `gpg --quick-sign keyid` do?",
    o: ["Non-interactive key signing", "Quick sign", "Batch sign", "Non-interactive sign"],
    c: 0,
    e: "gpg --quick-sign. No prompts. Batch. Certify key. Trust.",
    de: "gpg --quick-sign 0xABCD. No confirm. Automation. CI."
  }),
  (_i: number) => ({
    q: "What does `pam_unix.so` `nullok` allow?",
    o: ["Empty password (insecure)", "Null password", "Empty pass", "Nullok"],
    c: 0,
    e: "pam_unix nullok. Empty password OK. Insecure. Default no. Legacy.",
    de: "auth sufficient pam_unix.so nullok. Allow blank. Remove for security."
  }),
  (_i: number) => ({
    q: "What does `sshd_config` `MaxSessions` limit?",
    o: ["Concurrent sessions per connection", "Session limit", "Max sessions", "Connection sessions"],
    c: 0,
    e: "MaxSessions. Per connection. Multiplexing. ssh -M. Default 10.",
    de: "MaxSessions 1. One session per. MaxStartups for new connections."
  }),
  (_i: number) => ({
    q: "What does `firewall-cmd --get-zone-of-interface eth0` show?",
    o: ["Zone bound to eth0", "Interface zone", "Zone for iface", "Binding"],
    c: 0,
    e: "firewall-cmd --get-zone-of-interface. Which zone. eth0 = public.",
    de: "firewall-cmd --get-zone-of-interface eth0. public. Zone binding."
  }),
  (_i: number) => ({
    q: "What does `restorecon -D` affect?",
    o: ["Directory only (not contents)", "Directory only", "No recurse", "Top level"],
    c: 0,
    e: "restorecon -D. Directory. Not recursive. Just this. -D = directory.",
    de: "restorecon -D /path. Only /path. Not children. Selective."
  }),
  (_i: number) => ({
    q: "What does `gpg --show-session-key` display?",
    o: ["Session key for encrypted message", "Session key", "Decrypt key", "Symmetric key"],
    c: 0,
    e: "gpg --show-session-key. Session key. Debug. Normally hidden. Decryption.",
    de: "gpg --show-session-key -d file.gpg. Debug. Key used. Rare."
  }),
  (_i: number) => ({
    q: "What does `pam_ldap.so` authenticate against?",
    o: ["LDAP directory", "LDAP auth", "Directory auth", "LDAP server"],
    c: 0,
    e: "pam_ldap. LDAP. /etc/ldap.conf. Central directory. Enterprise.",
    de: "auth sufficient pam_ldap.so. uri ldap://dc. SSSD often wraps."
  }),
  (_i: number) => ({
    q: "What does `sshd_config` `PubkeyAcceptedKeyTypes` restrict?",
    o: ["Allowed public key algorithms", "Key types", "Pubkey types", "Algorithm restrict"],
    c: 0,
    e: "PubkeyAcceptedKeyTypes. ssh-ed25519, rsa-sha2-256. No ssh-rsa. Strong.",
    de: "PubkeyAcceptedKeyTypes ssh-ed25519,rsa-sha2-512. Algorithm policy."
  }),
  (_i: number) => ({
    q: "What does `nft add rule inet filter input tcp flags syn limit rate 10/second accept` protect against?",
    o: ["SYN flood (new connection rate limit)", "SYN flood", "Connection flood", "SYN limit"],
    c: 0,
    e: "tcp flags syn. New connections. limit rate. SYN flood. Per-second.",
    de: "SYN flood. Exhaust backlog. limit rate. DDoS. Balance."
  }),
  (_i: number) => ({
    q: "What does `semanage fcontext -l` show?",
    o: ["All file context rules", "Fcontext list", "Context rules", "File context"],
    c: 0,
    e: "semanage fcontext -l. All rules. Pattern -> type. restorecon uses.",
    de: "semanage fcontext -l | grep httpd. Web context. Policy."
  }),
  (_i: number) => ({
    q: "What does `gpg --default-recipient-self` use when no -r?",
    o: ["Default encrypt to self", "Self default", "Default recipient", "Encrypt to self"],
    c: 0,
    e: "gpg --default-recipient-self. No -r = encrypt to self. Backup.",
    de: "gpg --default-recipient-self -e file. Encrypt to self. Default."
  }),
  (_i: number) => ({
    q: "What does `pam_tty_audit.so` enable?",
    o: ["Audit of TTY input (keystrokes)", "TTY audit", "Keystroke audit", "Input audit"],
    c: 0,
    e: "pam_tty_audit. Audit. Keystrokes. Privacy. Compliance. enable=.",
    de: "session required pam_tty_audit.so enable=root. Root audit. Sensitive."
  }),
  (_i: number) => ({
    q: "What does `sshd_config` `TCPKeepAlive` vs `ClientAliveInterval` differ?",
    o: ["TCPKeepAlive=TCP; ClientAlive=SSH app-level", "TCP vs SSH", "Keepalive types", "Different layers"],
    c: 0,
    e: "TCPKeepAlive = kernel TCP. ClientAlive = SSH. Both detect dead. Different.",
    de: "TCPKeepAlive yes. ClientAliveInterval 60. Redundant. Defense."
  }),
  (_i: number) => ({
    q: "What does `ufw --force reset` do?",
    o: ["Resets UFW to defaults (no confirm)", "Force reset", "UFW reset", "Default UFW"],
    c: 0,
    e: "ufw --force reset. All rules gone. Default policy. No prompt. Careful.",
    de: "ufw --force reset. Clean slate. ufw enable. Rebuild. Destructive."
  }),
  (_i: number) => ({
    q: "What does `audit2allow -M local -i avc.log` produce?",
    o: ["SELinux module from denial log", "Policy module", "Audit2allow output", "Custom module"],
    c: 0,
    e: "audit2allow -M local. Reads avc. Generates .te, .pp. semodule -i.",
    de: "ausearch -m avc | audit2allow -M local. semodule -i local.pp. Fix."
  }),
  (_i: number) => ({
    q: "What does `gpg --export-secret-subkeys` export?",
    o: ["Subkeys only (primary stays)", "Secret subkeys", "Subkey export", "Primary protect"],
    c: 0,
    e: "gpg --export-secret-subkeys. Subkeys. Primary stays. Backup. Laptop.",
    de: "gpg --export-secret-subkeys -a > subkeys.asc. Primary offline."
  }),
  (_i: number) => ({
    q: "What does `pam_loginuid.so` set?",
    o: ["/proc/self/loginuid (audit login UID)", "Loginuid", "Audit UID", "Login tracking"],
    c: 0,
    e: "pam_loginuid. loginuid. Audit. Who logged in. Session tracking.",
    de: "session required pam_loginuid.so. /proc/self/loginuid. Audit trail."
  }),
  (_i: number) => ({
    q: "What does `semanage port -l` show?",
    o: ["Port to type mappings", "Port list", "Port context", "SELinux ports"],
    c: 0,
    e: "semanage port -l. All port mappings. http_port_t: 80, 443, 8080.",
    de: "semanage port -l. Port -> type. Add custom. semanage port -a."
  }),
  (_i: number) => ({
    q: "What does `gpg --no-default-keyring` do?",
    o: ["Uses only specified keyring (no default)", "No default", "Isolated keyring", "Keyring only"],
    c: 0,
    e: "gpg --no-default-keyring. Ignore default. --secret-keyring, --keyring. Isolated.",
    de: "gpg --no-default-keyring --keyring ./keys.gpg. Project. No mix."
  }),
];
