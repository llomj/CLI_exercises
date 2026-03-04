// LEVEL 9 EXPERT — Hacking & Pentest (107 unique questions)
// Topics: Recon, enumeration, Metasploit, privilege escalation, XSS, SQLi, Hashcat (expert depth)

export const level9Expert = [
  (_i: number) => ({
    q: "What does `nmap --script-args 'http-enum.basepath=/admin'` customize?",
    o: ["Base path for http-enum script", "Script args", "Enum path", "Custom basepath"],
    c: 0,
    e: "nmap --script-args. Pass args. http-enum.basepath. Custom. Path.",
    de: "nmap --script http-enum --script-args http-enum.basepath=/app target."
  }),
  (_i: number) => ({
    q: "What does `nmap -f` fragment packets for?",
    o: ["IDS/IPS evasion (split across packets)", "Fragmentation", "IDS evasion", "Packet split"],
    c: 0,
    e: "nmap -f. Fragment. 8 bytes. IDS. Evasion. Split. Bypass.",
    de: "nmap -f target. Fragment. Evasion. IDS. Nmap. Stealth."
  }),
  (_i: number) => ({
    q: "What does `nmap --script http-domino-enum-passwords` target?",
    o: ["IBM Domino default creds", "Domino enum", "IBM Domino", "Default passwords"],
    c: 0,
    e: "http-domino-enum-passwords. IBM. Domino. Default. Credentials. Enum.",
    de: "nmap -p 80 --script http-domino-enum-passwords target. IBM. Default."
  }),
  (_i: number) => ({
    q: "What does `msfvenom -p payload -i 10` do?",
    o: ["10 encoding iterations", "Iterations", "Encode iterations", "Encode 10x"],
    c: 0,
    e: "msfvenom -i 10. Iterations. Encoder. 10x. Polymorphic. AV.",
    de: "msfvenom -p payload -e x86/shikata_ga_nai -i 10. More iterations."
  }),
  (_i: number) => ({
    q: "What does `set ReverseAllowProxy true` in Metasploit enable?",
    o: ["Reverse connection via proxy", "Proxy reverse", "Allow proxy", "Proxy connection"],
    c: 0,
    e: "ReverseAllowProxy. Proxy. SOCKS. Reverse. Connection. Tunneling.",
    de: "set ReverseAllowProxy true. Proxy. SOCKS. Meterpreter. Reverse."
  }),
  (_i: number) => ({
    q: "What does `sqlmap --second-url` use for?",
    o: ["Second request (e.g. after login)", "Two requests", "Second URL", "Auth flow"],
    c: 0,
    e: "sqlmap --second-url. Two. Request. Login. Flow. Session. Auth.",
    de: "sqlmap -u URL1 --second-url=URL2. Login. Then. Test. Flow."
  }),
  (_i: number) => ({
    q: "What does `sqlmap --chunked` split for?",
    o: ["Bypass WAF (chunked transfer)", "Chunked bypass", "WAF evasion", "Transfer encoding"],
    c: 0,
    e: "sqlmap --chunked. Chunked. Transfer. WAF. Bypass. Encoding.",
    de: "sqlmap -u URL --chunked. Chunked. WAF. Evasion. Bypass."
  }),
  (_i: number) => ({
    q: "What does DOM-based XSS differ from reflected?",
    o: ["Vulnerability in client JS, not server", "Client-side", "DOM XSS", "No server reflect"],
    c: 0,
    e: "DOM XSS. Client. JavaScript. document. Server. No. Reflect.",
    de: "DOM. location.hash. document.write. Client. No server. Sink."
  }),
  (_i: number) => ({
    q: "What does `hashcat -m 2100` crack?",
    o: ["Domain Cached Credentials (DCC2)", "DCC2", "Hash 2100", "Cached creds"],
    c: 0,
    e: "hashcat -m 2100. DCC2. Cached. Domain. Credentials. Windows.",
    de: "hashcat -m 2100 dcc2.txt wordlist. Cached. Domain. Offline."
  }),
  (_i: number) => ({
    q: "What does `linux-exploit-suggester.sh` use?",
    o: ["uname, package versions for CVE match", "Kernel CVE", "Exploit suggester", "Version match"],
    c: 0,
    e: "linux-exploit-suggester. uname. Packages. CVE. Match. Exploit.",
    de: "./linux-exploit-suggester.sh. Kernel. Packages. CVE. Suggestions."
  }),
  (_i: number) => ({
    q: "What does `nmap --script smb2-vuln-ms17-010` check?",
    o: ["EternalBlue (MS17-010)", "EternalBlue", "MS17-010", "SMB vuln"],
    c: 0,
    e: "smb2-vuln-ms17-010. EternalBlue. WannaCry. MS17-010. Check.",
    de: "nmap -p 445 --script smb2-vuln-ms17-010 target. EternalBlue."
  }),
  (_i: number) => ({
    q: "What does `nmap --script-args 'smbdomain=domain,smbuser=user,smbpass=pass'` provide?",
    o: ["SMB credentials for auth-required scripts", "SMB creds", "Domain auth", "Script auth"],
    c: 0,
    e: "smbdomain, smbuser, smbpass. Auth. Scripts. SMB. Credentials.",
    de: "nmap --script smb-enum-shares --script-args smbuser=admin,smbpass=pass."
  }),
  (_i: number) => ({
    q: "What does `set AutoRunScript post/windows/gather/hashdump` do?",
    o: ["Auto-runs hashdump on new session", "Auto hashdump", "Session autorun", "Post auto"],
    c: 0,
    e: "AutoRunScript. New. Session. Auto. Run. Hashdump. Post.",
    de: "set AutoRunScript post/windows/gather/hashdump. Auto. Session."
  }),
  (_i: number) => ({
    q: "What does `msfvenom -p payload --smallest` optimize?",
    o: ["Minimum payload size", "Smallest size", "Size optimize", "Min payload"],
    c: 0,
    e: "msfvenom --smallest. Size. Minimum. Optimize. Small. Payload.",
    de: "msfvenom -p payload --smallest. Size. Constraint. Limit."
  }),
  (_i: number) => ({
    q: "What does `sqlmap --reg-add` do?",
    o: ["Add registry for persistence/config", "Registry add", "Reg add", "Persistence"],
    c: 0,
    e: "sqlmap --reg-add. Registry. Windows. Persistence. Config. Add.",
    de: "sqlmap --reg-add. Registry. Windows. Persist. Config."
  }),
  (_i: number) => ({
    q: "What does `sqlmap --file-read` exploit?",
    o: ["File read via SQLi (LOAD_FILE, etc)", "File read", "SQLi file read", "Read file"],
    c: 0,
    e: "sqlmap --file-read. LOAD_FILE. Read. File. SQLi. MySQL.",
    de: "sqlmap -u URL --file-read=/etc/passwd. File. Read. SQLi."
  }),
  (_i: number) => ({
    q: "What does `Mutation XSS (mXSS)` exploit?",
    o: ["Parser re-serialization (sanitizer creates XSS)", "Parser mutation", "mXSS", "Sanitizer bypass"],
    c: 0,
    e: "mXSS. Parser. Re-serialize. Sanitizer. Create. XSS. Bypass.",
    de: "mXSS. DOM. Parser. Mutation. Sanitizer. Creates. XSS."
  }),
  (_i: number) => ({
    q: "What does `hashcat -m 11600` crack?",
    o: ["7-Zip archives", "7-Zip", "Hash 11600", "Archive"],
    c: 0,
    e: "hashcat -m 11600. 7-Zip. Archive. Password. Crack.",
    de: "hashcat -m 11600 7z.txt wordlist. 7-Zip. Archive. Password."
  }),
  (_i: number) => ({
    q: "What does `capsh --print` show for priv esc?",
    o: ["Current capabilities (inherited, etc)", "Capabilities", "Capsh", "Cap print"],
    c: 0,
    e: "capsh --print. Current. Capabilities. Inherited. Bounding. Set.",
    de: "capsh --print. cap_net_raw. cap_setuid. Exploit. Escalate."
  }),
  (_i: number) => ({
    q: "What does `nmap --script-args 'http-enum.displayall=true'` do?",
    o: ["Shows all paths (not just 200)", "Display all", "All paths", "Show all"],
    c: 0,
    e: "http-enum.displayall. All. Paths. Not just 200. 403, 401. etc.",
    de: "nmap --script http-enum --script-args http-enum.displayall=true."
  }),
  (_i: number) => ({
    q: "What does `nmap -D RND:10` do?",
    o: ["10 random decoy IPs (evasion)", "Decoy scan", "Random decoys", "Evasion"],
    c: 0,
    e: "nmap -D RND:10. Decoy. 10. Random. IP. Evasion. IDS.",
    de: "nmap -D RND:10 target. Decoy. Random. Evasion. Stealth."
  }),
  (_i: number) => ({
    q: "What does `nmap --script http-aspnet-debug` target?",
    o: ["ASP.NET debug disclosure", "ASP.NET debug", "Debug info", "Info disclosure"],
    c: 0,
    e: "http-aspnet-debug. ASP.NET. Debug. Info. Disclosure. Version.",
    de: "nmap -p 80 --script http-aspnet-debug target. ASP.NET. Debug."
  }),
  (_i: number) => ({
    q: "What does `set EnableStageEncoding true` in Metasploit do?",
    o: ["Encodes stage (evade AV)", "Stage encoding", "AV evasion", "Encode stage"],
    c: 0,
    e: "EnableStageEncoding. Stage. Encode. AV. Evasion. Meterpreter.",
    de: "set EnableStageEncoding true. set StageEncoder x86/fnstenv_mov. Stage."
  }),
  (_i: number) => ({
    q: "What does `msfvenom -p payload -b '\\x00\\x0a'` exclude?",
    o: ["Null and newline (badchars)", "Badchars", "Exclude bytes", "Shellcode filter"],
    c: 0,
    e: "msfvenom -b. Badchars. Exclude. \\x00. \\x0a. Shellcode. Overflow.",
    de: "msfvenom -p payload -b '\\x00\\x0a\\x0d'. Badchars. Exploit."
  }),
  (_i: number) => ({
    q: "What does `sqlmap --fresh-queries` do?",
    o: ["Ignores stored session (fresh run)", "Fresh run", "No session", "Ignore cache"],
    c: 0,
    e: "sqlmap --fresh-queries. Session. Ignore. Fresh. No cache. New.",
    de: "sqlmap -u URL --fresh-queries. No session. Fresh. Run."
  }),
  (_i: number) => ({
    q: "What does `sqlmap --hex` convert for?",
    o: ["Binary data (avoid encoding issues)", "Hex conversion", "Binary data", "Encoding"],
    c: 0,
    e: "sqlmap --hex. Hex. Binary. Encode. Avoid. Issue. Data.",
    de: "sqlmap -u URL --hex. Binary. Hex. Conversion. Data."
  }),
  (_i: number) => ({
    q: "What does `postMessage` XSS exploit?",
    o: ["Cross-origin messaging (target window)", "postMessage", "Cross-origin", "Message XSS"],
    c: 0,
    e: "postMessage. Cross-origin. Target. Window. XSS. Message. Exploit.",
    de: "postMessage. targetWindow. Origin. XSS. Cross-origin. Trust."
  }),
  (_i: number) => ({
    q: "What does `hashcat -m 18300` crack?",
    o: ["Apple SHA512 (PBKDF2)", "Apple SHA512", "Hash 18300", "macOS"],
    c: 0,
    e: "hashcat -m 18300. Apple. SHA512. PBKDF2. macOS. Password.",
    de: "hashcat -m 18300 apple.txt wordlist. macOS. Apple. Crack."
  }),
  (_i: number) => ({
    q: "What does `pspy` monitor for priv esc?",
    o: ["Process spawns (cron, etc) without root", "Process monitor", "pspy", "Cron monitor"],
    c: 0,
    e: "pspy. Process. Monitor. Cron. Spawn. No root. See. Commands.",
    de: "pspy. Process. Cron. Root. Command. Enum. Privilege."
  }),
  (_i: number) => ({
    q: "What does `nmap --script http-majordomo2-dir-traversal` exploit?",
    o: ["Path traversal in Majordomo", "Dir traversal", "Majordomo", "LFI"],
    c: 0,
    e: "http-majordomo2-dir-traversal. Majordomo. Path. Traversal. LFI.",
    de: "nmap -p 80 --script http-majordomo2-dir-traversal. LFI."
  }),
  (_i: number) => ({
    q: "What does `nmap --scan-delay 1s` add?",
    o: ["1s delay between probes (evade detection)", "Scan delay", "Rate limit", "Throttle"],
    c: 0,
    e: "nmap --scan-delay. Delay. Probes. Evade. Detection. Rate. Limit.",
    de: "nmap --scan-delay 1s target. Slow. Stealth. Evasion."
  }),
  (_i: number) => ({
    q: "What does `nmap --script http-joomla-brute` do?",
    o: ["Joomla admin brute force", "Joomla brute", "CMS brute", "Admin brute"],
    c: 0,
    e: "http-joomla-brute. Joomla. Admin. Brute. Wordlist. Credentials.",
    de: "nmap -p 80 --script http-joomla-brute target. Joomla. Admin."
  }),
  (_i: number) => ({
    q: "What does `set SessionCommunicationTimeout 300` in Metasploit do?",
    o: ["Session timeout (seconds)", "Session timeout", "Comm timeout", "Idle timeout"],
    c: 0,
    e: "SessionCommunicationTimeout. Seconds. Idle. Timeout. Session. Die.",
    de: "set SessionCommunicationTimeout 300. 5 min. Idle. Timeout."
  }),
  (_i: number) => ({
    q: "What does `msfvenom -p payload -o payload.bin` write?",
    o: ["Payload to file", "Output file", "Write file", "Save payload"],
    c: 0,
    e: "msfvenom -o. Output. File. Save. Payload. Binary.",
    de: "msfvenom -p payload LHOST=1.2.3.4 -o shell.bin. File. Output."
  }),
  (_i: number) => ({
    q: "What does `sqlmap --os-cmd` require?",
    o: ["File write + exec (INTO OUTFILE, etc)", "RCE prereqs", "OS cmd", "File write"],
    c: 0,
    e: "sqlmap --os-cmd. RCE. INTO OUTFILE. Privilege. MySQL. Write.",
    de: "sqlmap --os-cmd. File_write. Exec. Privilege. RCE."
  }),
  (_i: number) => ({
    q: "What does `sqlmap --union-cols` specify?",
    o: ["Column count for UNION (skip detection)", "UNION cols", "Column count", "Skip detect"],
    c: 0,
    e: "sqlmap --union-cols. Columns. UNION. Skip. Detection. Known.",
    de: "sqlmap -u URL --union-cols=5. Known. Columns. Faster."
  }),
  (_i: number) => ({
    q: "What does `javascript:` URL in XSS allow?",
    o: ["JS execution via URL (legacy)", "javascript URL", "URL XSS", "Legacy XSS"],
    c: 0,
    e: "javascript:alert(1). URL. Execute. Legacy. Browser. XSS.",
    de: "javascript:void(0). URL. Execute. Legacy. Blocked. Modern."
  }),
  (_i: number) => ({
    q: "What does `hashcat -m 13400` crack?",
    o: ["KeePass 1", "KeePass", "Hash 13400", "KeePass crack"],
    c: 0,
    e: "hashcat -m 13400. KeePass. 1. Database. Password. Crack.",
    de: "hashcat -m 13400 keepass.txt wordlist. KeePass. Database."
  }),
  (_i: number) => ({
    q: "What does `dmesg` show for priv esc?",
    o: ["Kernel messages (driver load, etc)", "Kernel log", "Dmesg", "Driver info"],
    c: 0,
    e: "dmesg. Kernel. Messages. Driver. Load. Module. Info.",
    de: "dmesg. Kernel. Module. Load. Version. Exploit. Info."
  }),
  (_i: number) => ({
    q: "What does `nmap --script http-coldfusion-subzero` check?",
    o: ["ColdFusion CVE-2010-2861", "ColdFusion vuln", "Subzero", "CVE"],
    c: 0,
    e: "http-coldfusion-subzero. ColdFusion. CVE. LFI. Vulnerability.",
    de: "nmap -p 80 --script http-coldfusion-subzero. ColdFusion. LFI."
  }),
  (_i: number) => ({
    q: "What does `nmap --spoof-mac 0` do?",
    o: ["Random MAC address", "MAC spoof", "Random MAC", "Spoof MAC"],
    c: 0,
    e: "nmap --spoof-mac 0. Random. MAC. Spoof. Evasion. Network.",
    de: "nmap --spoof-mac 0 target. Random. MAC. Evasion."
  }),
  (_i: number) => ({
    q: "What does `nmap --script http-wordpress-enum` find?",
    o: ["WordPress users, plugins, themes", "WordPress enum", "WP enum", "Users plugins"],
    c: 0,
    e: "http-wordpress-enum. WordPress. Users. Plugins. Themes. Enum.",
    de: "nmap -p 80 --script http-wordpress-enum target. WP. Enum."
  }),
  (_i: number) => ({
    q: "What does `set HttpUserAgent` in Metasploit change?",
    o: ["User-Agent for HTTP requests", "User-Agent", "HTTP UA", "Request UA"],
    c: 0,
    e: "set HttpUserAgent. User-Agent. HTTP. Request. Evasion. Custom.",
    de: "set HttpUserAgent 'Mozilla/5.0...'. Custom. Evasion. Request."
  }),
  (_i: number) => ({
    q: "What does `msfvenom -p payload -n 10` add?",
    o: ["10 NOP sled bytes", "NOP sled", "NOP padding", "NOP n"],
    c: 0,
    e: "msfvenom -n 10. NOP. Sled. 10. Bytes. Padding. Overflow.",
    de: "msfvenom -p payload -n 10. NOP. Sled. Buffer. Overflow."
  }),
  (_i: number) => ({
    q: "What does `sqlmap --forms` do?",
    o: ["Parses and tests forms on page", "Form parse", "Forms", "Form test"],
    c: 0,
    e: "sqlmap --forms. Forms. Parse. Test. Input. Fields. SQLi.",
    de: "sqlmap -u URL --forms. Forms. Parse. Test. Automate."
  }),
  (_i: number) => ({
    q: "What does `sqlmap --crawl` do?",
    o: ["Crawls site for injection points", "Crawl", "Site crawl", "Find params"],
    c: 0,
    e: "sqlmap --crawl. Crawl. Site. Links. Params. Find. Inject.",
    de: "sqlmap -u URL --crawl=2. Crawl. Depth. 2. Params."
  }),
  (_i: number) => ({
    q: "What does `data:` URL in XSS allow?",
    o: ["Inline HTML/JS (data URI)", "Data URI", "data URL", "Inline XSS"],
    c: 0,
    e: "data:text/html,<script>. Data. URI. Inline. HTML. XSS.",
    de: "data:text/html;base64,PHNjcmlwdD4. Base64. Inline. XSS."
  }),
  (_i: number) => ({
    q: "What does `hashcat -m 6211` crack?",
    o: ["TrueCrypt RIPEMD160 + AES", "TrueCrypt", "Hash 6211", "Volume"],
    c: 0,
    e: "hashcat -m 6211. TrueCrypt. RIPEMD160. AES. Volume. Password.",
    de: "hashcat -m 6211 truecrypt.txt wordlist. TrueCrypt. Volume."
  }),
  (_i: number) => ({
    q: "What does `ld.so.preload` hijack for priv esc?",
    o: ["Preload library (inject before exec)", "Preload", "Library inject", "LD_PRELOAD"],
    c: 0,
    e: "ld.so.preload. Preload. Library. Inject. Before. Exec. Root.",
    de: "/etc/ld.so.preload. Writable. Inject. Library. Root. Escalate."
  }),
  (_i: number) => ({
    q: "What does `nmap --script http-shellshock` check?",
    o: ["Bash Shellshock (CVE-2014-6271)", "Shellshock", "Bash vuln", "CVE-2014-6271"],
    c: 0,
    e: "http-shellshock. Shellshock. Bash. CVE-2014-6271. CGI. Check.",
    de: "nmap -p 80 --script http-shellshock target. Shellshock. Bash."
  }),
  (_i: number) => ({
    q: "What does `nmap --data-length 25` add?",
    o: ["25 random bytes to packets (evasion)", "Data length", "Packet padding", "Evasion"],
    c: 0,
    e: "nmap --data-length. Random. Bytes. Packet. Evasion. IDS. Padding.",
    de: "nmap --data-length 25 target. Padding. Evasion. Random."
  }),
  (_i: number) => ({
    q: "What does `nmap --script http-dombased-xss` test?",
    o: ["DOM-based XSS vectors", "DOM XSS", "DOM test", "Client XSS"],
    c: 0,
    e: "http-dombased-xss. DOM. XSS. Client. JavaScript. Test.",
    de: "nmap -p 80 --script http-dombased-xss target. DOM. XSS."
  }),
  (_i: number) => ({
    q: "What does `set ReverseListenerBindPort` in Metasploit do?",
    o: ["Binds listener to specific port", "Bind port", "Listener port", "Port bind"],
    c: 0,
    e: "ReverseListenerBindPort. Port. Bind. Listener. Specific. Port.",
    de: "set ReverseListenerBindPort 4444. Port. Listener. Bind."
  }),
  (_i: number) => ({
    q: "What does `msfvenom -p payload -a x64` specify?",
    o: ["x64 architecture", "Architecture", "x64", "64-bit"],
    c: 0,
    e: "msfvenom -a x64. Architecture. 64-bit. x86. ARM. Platform.",
    de: "msfvenom -p linux/x64/shell_reverse_tcp -a x64. 64-bit."
  }),
  (_i: number) => ({
    q: "What does `sqlmap --mobile` use?",
    o: ["Mobile User-Agent", "Mobile UA", "Phone UA", "User-Agent"],
    c: 0,
    e: "sqlmap --mobile. Mobile. User-Agent. Phone. Tablet. Evasion.",
    de: "sqlmap -u URL --mobile. Mobile. UA. Evasion. WAF."
  }),
  (_i: number) => ({
    q: "What does `sqlmap --prefix` and `--suffix` add?",
    o: ["Custom SQL around injection", "Custom SQL", "Prefix suffix", "Wrap injection"],
    c: 0,
    e: "sqlmap --prefix. --suffix. Custom. SQL. Wrap. Injection. Bypass.",
    de: "sqlmap -u URL --prefix=\"'\" --suffix=\"--\". Custom. Wrap."
  }),
  (_i: number) => ({
    q: "What does `srcdoc` attribute XSS use?",
    o: ["iframe srcdoc (inline HTML)", "srcdoc", "iframe", "Inline HTML"],
    c: 0,
    e: "srcdoc. iframe. Inline. HTML. XSS. Attribute. Bypass.",
    de: "<iframe srcdoc=\"<script>alert(1)</script>\">. Inline. XSS."
  }),
  (_i: number) => ({
    q: "What does `hashcat -m 11000` crack?",
    o: ["Pre-Auth PBKDF2-HMAC-SHA256", "PBKDF2", "Hash 11000", "Pre-auth"],
    c: 0,
    e: "hashcat -m 11000. PBKDF2. SHA256. Pre-auth. Kerberos. Crack.",
    de: "hashcat -m 11000 hash.txt wordlist. PBKDF2. Pre-auth."
  }),
  (_i: number) => ({
    q: "What does `checksec` show for binary?",
    o: ["Protections (NX, PIE, RELRO, etc)", "Binary protections", "Checksec", "Security"],
    c: 0,
    e: "checksec. NX. PIE. RELRO. Canary. Binary. Protection.",
    de: "checksec --file=/bin/ls. NX, PIE, RELRO. Exploit. Mitigation."
  }),
  (_i: number) => ({
    q: "What does `nmap --script http-iis-webdav-vuln` check?",
    o: ["IIS WebDAV vulnerabilities", "IIS WebDAV", "WebDAV vuln", "IIS vuln"],
    c: 0,
    e: "http-iis-webdav-vuln. IIS. WebDAV. Vulnerability. Check. CVE.",
    de: "nmap -p 80 --script http-iis-webdav-vuln target. IIS. WebDAV."
  }),
  (_i: number) => ({
    q: "What does `nmap -S spoofed_ip` do?",
    o: ["Spoofs source IP (requires root)", "Source spoof", "IP spoof", "Spoof IP"],
    c: 0,
    e: "nmap -S. Source. IP. Spoof. Evasion. Requires. Root.",
    de: "nmap -S 192.168.1.100 target. Spoof. Source. Evasion."
  }),
  (_i: number) => ({
    q: "What does `nmap --script http-vmware-path-vuln` check?",
    o: ["VMware path traversal", "VMware vuln", "Path vuln", "VMware LFI"],
    c: 0,
    e: "http-vmware-path-vuln. VMware. Path. Traversal. LFI. Vulnerability.",
    de: "nmap -p 80 --script http-vmware-path-vuln. VMware. LFI."
  }),
  (_i: number) => ({
    q: "What does `set PrependMigrate true` in Metasploit do?",
    o: ["Migrates before stage (stability)", "Prepend migrate", "Migrate first", "Stage migrate"],
    c: 0,
    e: "PrependMigrate. Migrate. Before. Stage. Stability. Process.",
    de: "set PrependMigrate true. Migrate. Before. Stage. Stable."
  }),
  (_i: number) => ({
    q: "What does `msfvenom -p payload -x template.exe` use?",
    o: ["Template executable (inject into)", "Template", "Inject template", "Host exe"],
    c: 0,
    e: "msfvenom -x. Template. Inject. Into. Executable. Trojan.",
    de: "msfvenom -p payload -x legit.exe -o trojan.exe. Template."
  }),
  (_i: number) => ({
    q: "What does `sqlmap --parse-errors` use?",
    o: ["DB errors for detection", "Error parse", "DB errors", "Error-based"],
    c: 0,
    e: "sqlmap --parse-errors. Errors. Database. Detection. Error-based. SQLi.",
    de: "sqlmap -u URL --parse-errors. Errors. Detection. Verbose."
  }),
  (_i: number) => ({
    q: "What does `sqlmap --skip-urlencode` do?",
    o: ["Skips URL encoding (raw payload)", "Skip encode", "Raw payload", "No encode"],
    c: 0,
    e: "sqlmap --skip-urlencode. Skip. Encode. Raw. Payload. Bypass.",
    de: "sqlmap -u URL --skip-urlencode. Raw. No encode. WAF."
  }),
  (_i: number) => ({
    q: "What does `blob:` URL in XSS create?",
    o: ["Blob object (in-memory)", "Blob URL", "Blob", "In-memory"],
    c: 0,
    e: "blob:. Blob. URL. In-memory. Object. XSS. Create.",
    de: "blob:https://... UUID. In-memory. XSS. Object."
  }),
  (_i: number) => ({
    q: "What does `hashcat -m 15600` crack?",
    o: ["Ethereum Wallet", "Ethereum", "Hash 15600", "Wallet"],
    c: 0,
    e: "hashcat -m 15600. Ethereum. Wallet. Keccak. Password. Crack.",
    de: "hashcat -m 15600 ethereum.txt wordlist. Ethereum. Wallet."
  }),
  (_i: number) => ({
    q: "What does `strings` on binary show for priv esc?",
    o: ["Hardcoded paths, passwords, config", "Strings", "Hardcoded", "Secrets"],
    c: 0,
    e: "strings binary. Hardcoded. Path. Password. Config. Secret.",
    de: "strings /usr/bin/backup. /tmp/secret. Password. Path."
  }),
  (_i: number) => ({
    q: "What does `nmap --script http-stored-xss` test?",
    o: ["Stored XSS in inputs", "Stored XSS", "Persistent XSS", "Form XSS"],
    c: 0,
    e: "http-stored-xss. Stored. XSS. Input. Form. Persistent. Test.",
    de: "nmap -p 80 --script http-stored-xss target. Stored. XSS."
  }),
  (_i: number) => ({
    q: "What does `nmap --script-trace` show?",
    o: ["Script execution trace", "Script trace", "Execution trace", "Debug"],
    c: 0,
    e: "nmap --script-trace. Trace. Script. Execution. Debug. Verbose.",
    de: "nmap --script http-enum --script-trace target. Trace. Debug."
  }),
  (_i: number) => ({
    q: "What does `nmap --script http-php-version` detect?",
    o: ["PHP version from headers/X-Powered-By", "PHP version", "Version detect", "PHP"],
    c: 0,
    e: "http-php-version. PHP. Version. Header. X-Powered-By. Detect.",
    de: "nmap -p 80 --script http-php-version target. PHP. Version."
  }),
  (_i: number) => ({
    q: "What does `set StagerRetryCount 10` in Metasploit do?",
    o: ["Retries stager 10 times", "Stager retry", "Retry count", "Connection retry"],
    c: 0,
    e: "StagerRetryCount. Retry. Stager. 10. Connection. Fail.",
    de: "set StagerRetryCount 10. Retry. Stager. Connection."
  }),
  (_i: number) => ({
    q: "What does `msfvenom -p payload -o -` output?",
    o: ["Payload to stdout", "Stdout", "Output stdout", "Pipe"],
    c: 0,
    e: "msfvenom -o -. Stdout. Pipe. No file. Redirect. Output.",
    de: "msfvenom -p payload LHOST=1.2.3.4 -o - > shell.bin. Stdout."
  }),
  (_i: number) => ({
    q: "What does `sqlmap --test-filter` use?",
    o: ["Regex to filter tests", "Test filter", "Filter tests", "Selective test"],
    c: 0,
    e: "sqlmap --test-filter. Regex. Filter. Tests. Selective. Run.",
    de: "sqlmap -u URL --test-filter=ROW. Filter. Tests. Specific."
  }),
  (_i: number) => ({
    q: "What does `sqlmap --predict-output` do?",
    o: ["Predicts output (optimize extraction)", "Predict output", "Optimize", "Extraction"],
    c: 0,
    e: "sqlmap --predict-output. Predict. Output. Optimize. Extraction. Faster.",
    de: "sqlmap -u URL --predict-output. Optimize. Extraction."
  }),
  (_i: number) => ({
    q: "What does `document.domain` manipulation enable?",
    o: ["Same-origin bypass (legacy)", "Origin bypass", "document.domain", "Same origin"],
    c: 0,
    e: "document.domain. Same-origin. Bypass. Legacy. Subdomain. Trust.",
    de: "document.domain. Subdomain. Same. Origin. Bypass. Legacy."
  }),
  (_i: number) => ({
    q: "What does `hashcat -m 13200` crack?",
    o: ["AxCrypt 1", "AxCrypt", "Hash 13200", "AxCrypt crack"],
    c: 0,
    e: "hashcat -m 13200. AxCrypt. 1. Encryption. Password. Crack.",
    de: "hashcat -m 13200 axcrypt.txt wordlist. AxCrypt. File."
  }),
  (_i: number) => ({
    q: "What does `strace` on SUID binary show?",
    o: ["Syscalls (file access, etc)", "Syscalls", "Strace", "Trace"],
    c: 0,
    e: "strace. Syscalls. SUID. File. Access. Trace. Exploit.",
    de: "strace /usr/bin/suid_binary. open. read. Path. Exploit."
  }),
  (_i: number) => ({
    q: "What does `nmap --script http-ntlm-info` extract?",
    o: ["NTLM auth info (domain, etc)", "NTLM info", "Auth info", "Domain info"],
    c: 0,
    e: "http-ntlm-info. NTLM. Info. Domain. Version. Extract.",
    de: "nmap -p 80 --script http-ntlm-info target. NTLM. Domain."
  }),
  (_i: number) => ({
    q: "What does `nmap --badsum` send?",
    o: ["Invalid checksum (filter detection)", "Bad checksum", "Invalid sum", "Filter detect"],
    c: 0,
    e: "nmap --badsum. Invalid. Checksum. Filter. Detection. Firewall.",
    de: "nmap --badsum target. Invalid. Checksum. Filter. Detect."
  }),
  (_i: number) => ({
    q: "What does `nmap --script http-methods.nse` show?",
    o: ["Allowed HTTP methods per path", "HTTP methods", "Method enum", "REST methods"],
    c: 0,
    e: "http-methods. OPTIONS. GET. POST. PUT. DELETE. Path. Allowed.",
    de: "nmap -p 80 --script http-methods target. Methods. Enum."
  }),
  (_i: number) => ({
    q: "What does `set OverrideRequestHost true` in Metasploit do?",
    o: ["Uses RHOST in Host header", "Host override", "Request host", "Host header"],
    c: 0,
    e: "OverrideRequestHost. Host. Header. RHOST. Override. Request.",
    de: "set OverrideRequestHost true. Host. Header. RHOST."
  }),
  (_i: number) => ({
    q: "What does `msfvenom -p payload -l payloads` do?",
    o: ["Lists available payloads", "List payloads", "Payload list", "Show payloads"],
    c: 0,
    e: "msfvenom -l payloads. List. Available. Payloads. Show.",
    de: "msfvenom -l payloads. List. Payloads. Available."
  }),
  (_i: number) => ({
    q: "What does `sqlmap --beep` do?",
    o: ["Beeps on finding", "Beep", "Alert", "Sound"],
    c: 0,
    e: "sqlmap --beep. Beep. Find. Alert. Sound. Notification.",
    de: "sqlmap -u URL --beep. Beep. Find. Alert."
  }),
  (_i: number) => ({
    q: "What does `sqlmap --eta` show?",
    o: ["Estimated time to completion", "ETA", "Time estimate", "Progress"],
    c: 0,
    e: "sqlmap --eta. ETA. Estimated. Time. Completion. Progress.",
    de: "sqlmap -u URL --eta. ETA. Time. Estimate."
  }),
  (_i: number) => ({
    q: "What does `import()` in dynamic import XSS use?",
    o: ["ES module import (code execution)", "Import XSS", "ES module", "Dynamic import"],
    c: 0,
    e: "import(). Dynamic. ES. Module. Code. Execution. XSS.",
    de: "import('data:text/javascript,evil'). Dynamic. Import. XSS."
  }),
  (_i: number) => ({
    q: "What does `hashcat -m 11300` crack?",
    o: ["Bitcoin/Litecoin wallet", "Bitcoin", "Hash 11300", "Wallet"],
    c: 0,
    e: "hashcat -m 11300. Bitcoin. Litecoin. Wallet. Password. Crack.",
    de: "hashcat -m 11300 bitcoin.txt wordlist. Bitcoin. Wallet."
  }),
  (_i: number) => ({
    q: "What does `lsof -p PID` show for priv esc?",
    o: ["Open files (config, creds?)", "Open files", "Lsof", "File handles"],
    c: 0,
    e: "lsof -p. Open. Files. Config. Credentials. Process. Enum.",
    de: "lsof -p 1234. Open. Files. Config. Creds. Enum."
  }),
  (_i: number) => ({
    q: "What does `nmap --script http-robots.txt` fetch?",
    o: ["robots.txt (disallowed paths)", "Robots.txt", "Disallowed", "Paths"],
    c: 0,
    e: "http-robots.txt. robots.txt. Disallow. Paths. Enum. Hidden.",
    de: "nmap -p 80 --script http-robots.txt target. Robots. Paths."
  }),
  (_i: number) => ({
    q: "What does `nmap --ttl 5` set?",
    o: ["IP TTL (hop limit)", "TTL", "Hop limit", "Packet TTL"],
    c: 0,
    e: "nmap --ttl. TTL. Hop. Limit. Packet. Evasion. Network.",
    de: "nmap --ttl 5 target. TTL. Hop. Limit."
  }),
  (_i: number) => ({
    q: "What does `nmap --script http-sitemap-generator` find?",
    o: ["Sitemap.xml or generates one", "Sitemap", "Site map", "URL discovery"],
    c: 0,
    e: "http-sitemap-generator. Sitemap. XML. Generate. URLs. Discover.",
    de: "nmap -p 80 --script http-sitemap-generator target. Sitemap."
  }),
  (_i: number) => ({
    q: "What does `set ExitOnSession false` in Metasploit do?",
    o: ["Keeps listener after session", "No exit", "Keep listener", "Multiple sessions"],
    c: 0,
    e: "ExitOnSession false. Keep. Listener. Multiple. Sessions. No exit.",
    de: "set ExitOnSession false. Listener. Multiple. Sessions."
  }),
  (_i: number) => ({
    q: "What does `msfvenom -l encoders` show?",
    o: ["Available encoders", "Encoder list", "Encoders", "List encoders"],
    c: 0,
    e: "msfvenom -l encoders. List. Encoders. Available. Show.",
    de: "msfvenom -l encoders. x86/shikata_ga_nai. List."
  }),
  (_i: number) => ({
    q: "What does `sqlmap --identify-waf` do?",
    o: ["Detects WAF type", "WAF detect", "Identify WAF", "WAF type"],
    c: 0,
    e: "sqlmap --identify-waf. Detect. WAF. Type. ModSecurity. Cloudflare.",
    de: "sqlmap -u URL --identify-waf. WAF. Detect. Type."
  }),
  (_i: number) => ({
    q: "What does `sqlmap --flush-session` do?",
    o: ["Clears stored session", "Flush session", "Clear session", "Reset session"],
    c: 0,
    e: "sqlmap --flush-session. Clear. Session. Stored. Reset. Fresh.",
    de: "sqlmap --flush-session. Clear. Session. Reset."
  }),
  (_i: number) => ({
    q: "What does `srcdoc` + `sandbox` iframe bypass?",
    o: ["Some CSP (sandbox allows srcdoc)", "CSP bypass", "Sandbox", "iframe bypass"],
    c: 0,
    e: "srcdoc. sandbox. iframe. CSP. Bypass. Some. Policy.",
    de: "<iframe sandbox srcdoc=\"<script>...\">. CSP. Bypass. Sandbox."
  }),
  (_i: number) => ({
    q: "What does `hashcat -m 14600` crack?",
    o: ["OpenPGP (GPG)", "GPG", "Hash 14600", "OpenPGP"],
    c: 0,
    e: "hashcat -m 14600. OpenPGP. GPG. Symmetric. Password. Crack.",
    de: "hashcat -m 14600 gpg.txt wordlist. GPG. Symmetric."
  }),
  (_i: number) => ({
    q: "What does `readelf -d binary` show for priv esc?",
    o: ["Dynamic section (RPATH, NEEDED)", "Dynamic", "RPATH", "Library path"],
    c: 0,
    e: "readelf -d. Dynamic. RPATH. NEEDED. Library. Path. Hijack.",
    de: "readelf -d binary. RPATH. Writable. Library. Hijack."
  }),
  (_i: number) => ({
    q: "What does `nmap --script http-trace` show?",
    o: ["HTTP request/response trace", "HTTP trace", "Trace", "Request response"],
    c: 0,
    e: "http-trace. Trace. Request. Response. HTTP. Debug. Verbose.",
    de: "nmap -p 80 --script http-trace target. Trace. HTTP."
  }),
  (_i: number) => ({
    q: "What does `nmap --script http-default-accounts` test?",
    o: ["Default creds (admin/admin, etc)", "Default accounts", "Default creds", "Common passwords"],
    c: 0,
    e: "http-default-accounts. Default. Admin. Password. Common. Test.",
    de: "nmap -p 80 --script http-default-accounts target. Default."
  }),
  (_i: number) => ({
    q: "What does `nmap --script http-enum` use for paths?",
    o: ["Database of common paths", "Path database", "Common paths", "Path list"],
    c: 0,
    e: "http-enum. Database. Paths. Common. Admin. Backup. Enum.",
    de: "nmap --script http-enum. Paths. Database. Common. Enum."
  }),
  (_i: number) => ({
    q: "What does `set VERBOSE true` in Metasploit do?",
    o: ["Verbose output", "Verbose", "Debug output", "More output"],
    c: 0,
    e: "set VERBOSE true. Verbose. Output. Debug. More. Info.",
    de: "set VERBOSE true. Verbose. Exploit. Output."
  }),
  (_i: number) => ({
    q: "What does `msfvenom -p payload -v varname` set?",
    o: ["Variable name for output", "Var name", "Variable", "Output var"],
    c: 0,
    e: "msfvenom -v. Variable. Name. Output. C. Python. Var.",
    de: "msfvenom -p payload -f c -v shellcode. Variable. Name."
  }),
  (_i: number) => ({
    q: "What does `sqlmap --dbs` enumerate?",
    o: ["Database names", "Databases", "DB list", "Schema names"],
    c: 0,
    e: "sqlmap --dbs. Databases. Names. Enumerate. List. Schema.",
    de: "sqlmap -u URL --dbs. Databases. Enumerate. List."
  }),
  (_i: number) => ({
    q: "What does `sqlmap --tables -D db` list?",
    o: ["Tables in database", "Tables", "Table list", "DB tables"],
    c: 0,
    e: "sqlmap --tables -D. Tables. Database. List. Enumerate.",
    de: "sqlmap -u URL -D db --tables. Tables. List."
  }),
  (_i: number) => ({
    q: "What does `WebSocket` XSS allow?",
    o: ["Real-time data exfil (persistent)", "WebSocket", "Real-time", "Persistent XSS"],
    c: 0,
    e: "WebSocket. XSS. Real-time. Exfil. Persistent. Data. Steal.",
    de: "WebSocket. XSS. Send. Data. Attacker. Real-time. Exfil."
  }),
  (_i: number) => ({
    q: "What does `hashcat -m 2611` crack?",
    o: ["vBulletin (v3)", "vBulletin", "Hash 2611", "Forum"],
    c: 0,
    e: "hashcat -m 2611. vBulletin. v3. Forum. MD5. Salt. Crack.",
    de: "hashcat -m 2611 vbulletin.txt wordlist. Forum. vBulletin."
  }),
  (_i: number) => ({
    q: "What does `ss` show for priv esc?",
    o: ["Sockets (listening, connections)", "Sockets", "SS", "Network"],
    c: 0,
    e: "ss. Sockets. Listening. Connections. Internal. Redis. MySQL.",
    de: "ss -tulpn. Listening. 127.0.0.1. Internal. Exploit."
  }),
];
