// LEVEL 7 EXPERT — Advanced Networking (100 unique questions)
// Topics: ip, iptables, nftables, bridges, VLANs, HTTP, REST, load balancing (expert depth)

export const level7Expert = [
  (_i: number) => ({
    q: "What does `nft add rule inet filter input ct state invalid drop` protect against?",
    o: ["Invalid conntrack state (malformed, spoofed packets)", "Invalid state drop", "Conntrack invalid", "Spoof protection"],
    c: 0,
    e: "ct state invalid = packets that don't match known flow. Often malicious. Drop first.",
    de: "ct state invalid. New, malformed, or spoofed. First rule in many secure configs. Before established."
  }),
  (_i: number) => ({
    q: "What does `iptables -t mangle -A PREROUTING -j TTL --ttl-set 64` do?",
    o: ["Sets TTL to 64 (hides hop count, anti-traceroute)", "TTL rewrite", "Mangle TTL", "Hop count mask"],
    c: 0,
    e: "mangle table. TTL target. --ttl-set 64. Normalizes TTL, obscures path.",
    de: "iptables -t mangle. TTL rewrite. Anti-traceroute. Or --ttl-dec 1. PREROUTING for incoming."
  }),
  (_i: number) => ({
    q: "What does `tc qdisc add dev eth0 root netem delay 100ms 20ms` simulate?",
    o: ["100ms delay with ±20ms jitter", "Network delay", "Netem jitter", "Latency simulation"],
    c: 0,
    e: "netem = network emulation. delay 100ms 20ms = 100±20. For testing.",
    de: "tc qdisc add dev eth0 root netem delay 100ms 20ms. loss 1%, duplicate 0.1%. Test resilience."
  }),
  (_i: number) => ({
    q: "What does `nft add rule inet filter input tcp flags syn / syn,rst drop` match?",
    o: ["SYN without ACK (new connection) or RST", "SYN or RST", "New connection drop", "Flag match"],
    c: 0,
    e: "tcp flags syn / syn,rst = SYN set, RST set. / = mask. Drops malformed.",
    de: "nft tcp flags. syn = new. syn,rst = both (invalid). / is mask. Bitwise match."
  }),
  (_i: number) => ({
    q: "What does `ip route add 10.0.0.0/8 nexthop via 1.2.3.4 weight 1 nexthop via 5.6.7.8 weight 2` create?",
    o: ["Multipath route with 1:2 ratio", "ECMP weighted", "Multipath route", "Weighted nexthop"],
    c: 0,
    e: "nexthop ... weight. Weight 1 vs 2 = 1:2 traffic split. ECMP with bias.",
    de: "ip route add ... nexthop via A weight 1 nexthop via B weight 2. 33% vs 67% traffic."
  }),
  (_i: number) => ({
    q: "What does `bridge vlan add vid 10 dev eth0 tagged` do?",
    o: ["Adds VLAN 10 as tagged on port eth0", "Tagged VLAN port", "VLAN tagged", "802.1Q tagged"],
    c: 0,
    e: "bridge vlan add vid 10 dev eth0 tagged. Frames carry 802.1Q tag. Trunk port.",
    de: "tagged = trunk. untagged = access. bridge vlan. VLAN-aware bridge. Multiple VLANs per port."
  }),
  (_i: number) => ({
    q: "What does HTTP/2 multiplexing mean?",
    o: ["Multiple streams over single TCP connection", "Stream multiplexing", "Single connection", "Parallel streams"],
    c: 0,
    e: "HTTP/2: one TCP, many streams. No head-of-line blocking at HTTP layer. Parallel requests.",
    de: "Single connection. Streams interleaved. TCP head-of-line still applies. HTTP/3 uses QUIC."
  }),
  (_i: number) => ({
    q: "What does `nginx limit_conn_zone $binary_remote_addr zone=addr:10m` define?",
    o: ["Zone for limiting connections per IP", "Conn limit zone", "Per-IP conn zone", "Connection zone"],
    c: 0,
    e: "limit_conn_zone. $binary_remote_addr = key. zone=addr:10m. limit_conn addr 10; in location.",
    de: "limit_conn_zone $binary_remote_addr zone=addr:10m; limit_conn addr 10;. Max 10 conn per IP."
  }),
  (_i: number) => ({
    q: "What does HAProxy `option forwardfor` add?",
    o: ["X-Forwarded-For header (client IP)", "Forward for", "Client IP header", "XFF header"],
    c: 0,
    e: "option forwardfor. Adds X-Forwarded-For. Backend sees real client IP.",
    de: "option forwardfor. option forwardfor except 127.0.0.1. Append client IP. Logging, geo."
  }),
  (_i: number) => ({
    q: "What does `ip rule add iif eth0 lookup 100` mean?",
    o: ["Traffic arriving on eth0 uses table 100", "Input interface rule", "iif policy", "Incoming interface"],
    c: 0,
    e: "iif = incoming interface. Packets from eth0 use table 100. Policy by source interface.",
    de: "iif eth0 lookup 100. Different routing for different interfaces. Multi-homed, VPN."
  }),
  (_i: number) => ({
    q: "What does `iptables -A INPUT -m conntrack --ctstate INVALID -j DROP` require?",
    o: ["conntrack module loaded", "Conntrack module", "nf_conntrack", "Connection tracking"],
    c: 0,
    e: "conntrack module. lsmod nf_conntrack. iptables -m conntrack. Stateful filtering.",
    de: "modprobe nf_conntrack. /proc/net/nf_conntrack. INVALID = bad packets. Drop first."
  }),
  (_i: number) => ({
    q: "What does `nft add rule inet filter input meta iiftype ethernet accept` do?",
    o: ["Accepts only from Ethernet interfaces (not loopback, etc)", "Interface type filter", "Ethernet only", "Meta iiftype"],
    c: 0,
    e: "meta iiftype = interface type. ethernet, loopback, etc. Filter by interface type.",
    de: "meta iiftype ethernet. Reject tunnel, loopback. meta iif, oif for interface name."
  }),
  (_i: number) => ({
    q: "What does `tc qdisc add dev eth0 ingress` enable?",
    o: ["Ingress qdisc for incoming traffic shaping", "Ingress qdisc", "Input shaping", "Ingress filter"],
    c: 0,
    e: "ingress qdisc. Filters/shapes incoming. Different from root (egress). Asymmetric.",
    de: "tc qdisc add dev eth0 ingress. tc filter add dev eth0 parent ffff:. For ingress policing."
  }),
  (_i: number) => ({
    q: "What does REST API versioning via URL /v1/users vs header differ?",
    o: ["URL = visible, cacheable; header = transparent", "URL vs header versioning", "Version placement", "API version"],
    c: 0,
    e: "URL: /v1/users. Clear, cacheable. Header: Accept: application/vnd.api+v1. Transparent.",
    de: "URL versioning: simple, cache-friendly. Header: same URL, content negotiation. Tradeoffs."
  }),
  (_i: number) => ({
    q: "What does `nginx map $http_x_forwarded_proto $redirect_https` do?",
    o: ["Maps X-Forwarded-Proto to variable for redirect logic", "Map header to var", "HTTPS redirect", "Proxy protocol"],
    c: 0,
    e: "map creates variable from another. $http_x_forwarded_proto = X-Forwarded-Proto header.",
    de: "map $http_x_forwarded_proto $redirect_https { default 0; https 1; }. if ($redirect_https = 0) redirect."
  }),
  (_i: number) => ({
    q: "What does `ip link add dummy0 type dummy` and `ip addr add 192.168.99.1/24 dev dummy0` achieve?",
    o: ["Creates always-up interface for binding services", "Dummy interface", "Bind address", "Always-up IP"],
    c: 0,
    e: "dummy: no hardware. Always up. Bind services when no physical. Testing, routing.",
    de: "dummy for loopback-like. Services bind 192.168.99.1. No cable. Docker, K8s use."
  }),
  (_i: number) => ({
    q: "What does `iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE` need for full NAT?",
    o: ["FORWARD chain allowing established/related and NEW", "Forward rules", "NAT + forward", "Full NAT setup"],
    c: 0,
    e: "MASQUERADE in POSTROUTING. Need FORWARD -m state ESTABLISHED,RELATED -j ACCEPT and NEW.",
    de: "PREROUTING DNAT, FORWARD allow, POSTROUTING MASQUERADE. Plus ip_forward. Full NAT."
  }),
  (_i: number) => ({
    q: "What does `nft add rule inet filter input meta nftrace set 1` enable?",
    o: ["Packet tracing for this rule (nft monitor trace)", "Nftrace", "Rule tracing", "Debug trace"],
    c: 0,
    e: "meta nftrace set 1. nft monitor trace shows packets hitting rule. Debugging.",
    de: "nft add rule ... meta nftrace set 1. nft monitor trace. See packet flow. Remove after debug."
  }),
  (_i: number) => ({
    q: "What does `bridge link set dev eth0 learning off` do?",
    o: ["Disables MAC learning on port (static FDB only)", "No learning", "Static FDB", "Learning off"],
    c: 0,
    e: "learning off. Port doesn't learn MACs. Use with static fdb. Security, special topo.",
    de: "bridge link set dev eth0 learning off. bridge fdb add for static. No dynamic learning."
  }),
  (_i: number) => ({
    q: "What does `curl --resolve host:443:ip URL` do?",
    o: ["Overrides DNS for host to use specific IP", "DNS override", "Resolve override", "Manual resolution"],
    c: 0,
    e: "curl --resolve example.com:443:1.2.3.4. Connects to 1.2.3.4 for example.com. Testing.",
    de: "curl --resolve api.example.com:443:10.0.0.1 https://api.example.com. Bypass DNS."
  }),
  (_i: number) => ({
    q: "What does HTTP Expect: 100-continue optimize?",
    o: ["Avoids sending large body if server will reject", "Large upload optimization", "100-continue", "Reject early"],
    c: 0,
    e: "Client sends headers, waits. Server 100 = send body. 417 = don't. Saves bandwidth on reject.",
    de: "POST large file. Expect: 100-continue. Server checks auth, size. 100 = OK send. 413 = no."
  }),
  (_i: number) => ({
    q: "What does HAProxy `tcp-request connection reject` do?",
    o: ["Rejects before content inspection (L4 only)", "Early reject", "Connection reject", "Pre-inspect reject"],
    c: 0,
    e: "tcp-request connection. Before data. reject if ... . Saves resources. L4 only.",
    de: "tcp-request connection reject if src_conn_rate gt 10. Before accept. DDoS mitigation."
  }),
  (_i: number) => ({
    q: "What does `ip route add 192.168.1.0/24 via 10.0.0.1 src 10.0.0.2` use src for?",
    o: ["Source IP for packets sent via this route", "Route source", "Outgoing source", "Src for route"],
    c: 0,
    e: "src = source IP when using this route. Multi-homed. Reply source.",
    de: "ip route add ... src 10.0.0.2. Outgoing packets get 10.0.0.2. Asymmetric routing."
  }),
  (_i: number) => ({
    q: "What does `iptables -A INPUT -p tcp --dport 22 -m recent --name ssh --set` do?",
    o: ["Adds source IP to 'ssh' recent list", "Recent set", "Track SSH", "Add to list"],
    c: 0,
    e: "recent --set adds IP to list. Pair with --rcheck, --update for rate limit.",
    de: "--set on connect. --update --seconds 60 -j DROP for limit. Port scan detection."
  }),
  (_i: number) => ({
    q: "What does `nft add rule inet filter input ct state new limit rate 10/second accept` do?",
    o: ["Accepts new connections at 10/sec (SYN flood mitigation)", "New conn limit", "SYN rate limit", "Connection rate"],
    c: 0,
    e: "ct state new = new connections. limit rate 10/second. Per-rule. SYN flood protection.",
    de: "New connections limited. Established unlimited. Balance security vs usability."
  }),
  (_i: number) => ({
    q: "What does `bridge vlan del vid 1 dev eth0` do?",
    o: ["Removes VLAN 1 from port (disables untagged)", "Remove VLAN 1", "VLAN delete", "Untagged remove"],
    c: 0,
    e: "bridge vlan del. vid 1 = default. Removes from port. Careful: can lose connectivity.",
    de: "bridge vlan del vid 1 dev eth0. Port no longer in VLAN 1. VLAN pruning."
  }),
  (_i: number) => ({
    q: "What does `curl --cert client.pem --key key.pem URL` do?",
    o: ["Client certificate for mTLS", "Client cert", "mTLS", "Mutual TLS"],
    c: 0,
    e: "curl --cert, --key. Client certificate. Server verifies client. mTLS.",
    de: "curl --cert client.pem --key key.pem https://api. mTLS. Both sides authenticated."
  }),
  (_i: number) => ({
    q: "What does REST Richardson Maturity Level 2 mean?",
    o: ["HTTP verbs + status codes (no hypermedia)", "Verbs and codes", "RMM Level 2", "HTTP semantics"],
    c: 0,
    e: "Level 2: GET, POST, PUT, DELETE. Proper status. No links. Common level.",
    de: "RMM: 0=HTTP tunnel, 1=resources, 2=verbs, 3=HATEOAS. Level 2 = standard REST."
  }),
  (_i: number) => ({
    q: "What does `nginx proxy_ssl_verify on` require?",
    o: ["Valid cert for upstream; proxy_ssl_trusted_certificate", "Upstream TLS verify", "Backend cert verify", "Proxy SSL"],
    c: 0,
    e: "proxy_ssl_verify on. Verifies upstream cert. proxy_ssl_trusted_certificate for CA.",
    de: "proxy_ssl_verify on; proxy_ssl_trusted_certificate /etc/ssl/certs/ca.pem;. Secure upstream."
  }),
  (_i: number) => ({
    q: "What does `ip link add vxlan0 type vxlan id 100 remote 192.168.1.1 dstport 4789` create?",
    o: ["VXLAN overlay tunnel (L2 over UDP)", "VXLAN tunnel", "Overlay network", "L2 overlay"],
    c: 0,
    e: "vxlan = VXLAN. id 100 = VNI. remote = VTEP. dstport 4789. L2 over L3.",
    de: "VXLAN for SDN, containers. 16M VNIs. UDP 4789. Encapsulation. Cloud networking."
  }),
  (_i: number) => ({
    q: "What does `iptables -A INPUT -m u32 --32 '6&0xFF=6' -j DROP` match?",
    o: ["IP protocol 6 (TCP) by u32 bit match", "U32 protocol match", "TCP protocol", "Bit match"],
    c: 0,
    e: "u32: raw packet match. 6&0xFF=6 = byte 6 (protocol) = 6 (TCP). Complex matching.",
    de: "u32 offset extraction. 6 = IP header + 6. Protocol field. Advanced filtering."
  }),
  (_i: number) => ({
    q: "What does `nft add rule inet filter input meta length 64-128 drop` do?",
    o: ["Drops packets 64-128 bytes (tiny packets, often malicious)", "Length filter", "Small packet drop", "Size filter"],
    c: 0,
    e: "meta length = packet length. 64-128 = very small. Often scans, fragments.",
    de: "meta length 64-128 drop. Filter odd sizes. Anti-scan. Adjust for your MTU."
  }),
  (_i: number) => ({
    q: "What does `tc filter add dev eth0 parent 1:0 protocol ip u32 match ip protocol 1 0xff flowid 1:20` classify?",
    o: ["ICMP (protocol 1) to class 1:20", "ICMP classifier", "Protocol match", "U32 ICMP"],
    c: 0,
    e: "u32 match ip protocol 1. 1 = ICMP. flowid 1:20. Traffic class assignment.",
    de: "tc filter. u32. protocol 1 = ICMP, 6 = TCP, 17 = UDP. QoS classification."
  }),
  (_i: number) => ({
    q: "What does `curl --cert-type P12 --cert bundle.p12:password URL` use?",
    o: ["PKCS#12 client cert bundle", "P12 cert", "PKCS12", "Cert bundle"],
    c: 0,
    e: "curl --cert-type P12. PKCS#12 = .p12. Contains cert + key. :password for passphrase.",
    de: "curl --cert bundle.p12:pass https://. Enterprise mTLS. P12 = PFX."
  }),
  (_i: number) => ({
    q: "What does HTTP/2 server push allow?",
    o: ["Server sends resources before client requests", "Push resources", "Proactive push", "Preload"],
    c: 0,
    e: "Server push: PUSH_PROMISE. Server sends CSS/JS before request. Reduces RTT.",
    de: "HTTP/2 push. Client can decline. Reduces waterfall. Replaced by preload in many cases."
  }),
  (_i: number) => ({
    q: "What does `nginx auth_request` do?",
    o: ["Subrequest to validate before serving", "Auth subrequest", "External auth", "Auth check"],
    c: 0,
    e: "auth_request /validate;. Subrequest. 2xx = allow. 401/403 = deny. External auth.",
    de: "auth_request /auth;. Microservice auth. 401 = unauthorized. Flexible auth backend."
  }),
  (_i: number) => ({
    q: "What does HAProxy `tcp-request content reject` do?",
    o: ["Rejects after receiving data (L7 inspect)", "Content reject", "L7 reject", "Data reject"],
    c: 0,
    e: "tcp-request content. After data. reject if { req.hdr(Host) -m found }. L7.",
    de: "Content = has data. connection = no data. reject if ACL. After accept."
  }),
  (_i: number) => ({
    q: "What does `ip route add 0.0.0.0/0 via 10.0.0.1 metric 50 table 200` in table 200 mean?",
    o: ["Default route in table 200 (used only if rule points here)", "Table 200 default", "Alternate default", "Policy default"],
    c: 0,
    e: "Table 200 isolated. ip rule add ... lookup 200. Separate routing domain.",
    de: "Multiple routing tables. VPN, multi-WAN. Table 200 = VPN default. Rule selects."
  }),
  (_i: number) => ({
    q: "What does `iptables -A INPUT -m addrtype --dst-type LOCAL` match?",
    o: ["Packets destined to local addresses", "Local dest", "Addrtype", "Local only"],
    c: 0,
    e: "addrtype --dst-type LOCAL. Destined to host. Not forwarded. For INPUT chain.",
    de: "iptables -m addrtype. LOCAL, UNICAST, etc. Filter by address type."
  }),
  (_i: number) => ({
    q: "What does `nft add rule inet filter input ip protocol icmp limit rate 5/second accept` do?",
    o: ["Accepts ICMP at 5/sec (ping rate limit)", "ICMP limit", "Ping rate", "ICMP throttle"],
    c: 0,
    e: "ip protocol icmp. limit rate 5/second. Ping flood protection. Allow normal ping.",
    de: "ICMP rate limit. Smurf, ping flood. 5/sec usually enough. Balance usability."
  }),
  (_i: number) => ({
    q: "What does `bridge link set dev eth0 root_block on` do?",
    o: ["Prevents port from becoming root (root guard)", "Root guard", "No root", "Root block"],
    c: 0,
    e: "root_block = root guard. Port won't accept root. Prevents topology change.",
    de: "bridge link set dev eth0 root_block on. Designated port protection. STP hardening."
  }),
  (_i: number) => ({
    q: "What does `curl --proto '=https' --tlsv1.2 URL` enforce?",
    o: ["TLS 1.2 only (no 1.0, 1.1)", "TLS 1.2 only", "Protocol restriction", "TLS version"],
    c: 0,
    e: "curl --tlsv1.2. Only TLS 1.2. --tlsv1.3 for 1.3. Security hardening.",
    de: "curl --tlsv1.2 --tls-max 1.2. Disable TLS 1.0/1.1. Compliance, security."
  }),
  (_i: number) => ({
    q: "What does REST 429 Too Many Requests require?",
    o: ["Retry-After header for client backoff", "Retry-After", "Rate limit response", "429 headers"],
    c: 0,
    e: "429 = rate limited. Retry-After: 60 or Retry-After: <date>. Client should wait.",
    de: "429 Too Many Requests. Retry-After. X-RateLimit-* headers. Standard rate limit."
  }),
  (_i: number) => ({
    q: "What does `nginx proxy_bind $remote_addr transparent` do?",
    o: ["Binds to client IP (requires policy routing)", "Transparent proxy", "Bind client IP", "Source binding"],
    c: 0,
    e: "proxy_bind $remote_addr transparent. Backend sees real client IP. Needs policy route.",
    de: "Requires ip rule, routing. Backend gets real source. DSR-like. Complex setup."
  }),
  (_i: number) => ({
    q: "What does `ip link add gre0 type gretap remote 1.2.3.4` create?",
    o: ["GRETAP: L2 over GRE (Ethernet over GRE)", "GRETAP", "L2 GRE", "Ethernet tunnel"],
    c: 0,
    e: "gretap = GRE + tap. L2. Carries Ethernet. vs gre = L3. Point-to-point L2.",
    de: "gretap for L2 VPN. Ethernet frames. gre for IP. Different encapsulation."
  }),
  (_i: number) => ({
    q: "What does `iptables -A INPUT -m statistic --mode random --probability 0.1 -j DROP` do?",
    o: ["Randomly drops 10% of packets", "Random drop", "Statistic module", "10% drop"],
    c: 0,
    e: "statistic --mode random --probability 0.1. 10% random drop. Chaos testing.",
    de: "iptables -m statistic. random, nth. Simulate loss. Testing resilience."
  }),
  (_i: number) => ({
    q: "What does `nft add chain inet filter input { type filter hook input priority -300; }` use -300 for?",
    o: ["Runs before normal priority 0 (raw/early)", "Early priority", "Pre-filter", "Negative priority"],
    c: 0,
    e: "priority -300 = before 0. Lower number = earlier. For raw, connection tracking.",
    de: "Priority order. -300 before 0. -200 conntrack. 0 filter. 300 nat. Chain order."
  }),
  (_i: number) => ({
    q: "What does `bridge fdb add 00:11:22:33:44:55 dev eth0 static` do?",
    o: ["Static FDB entry (no aging, no learning)", "Static MAC", "Permanent FDB", "No learn"],
    c: 0,
    e: "bridge fdb add ... static. Permanent. Won't age. For specific MAC on port.",
    de: "bridge fdb add MAC dev eth0 static. Virtual hosts, special topology. No learning."
  }),
  (_i: number) => ({
    q: "What does `curl --haproxy-protocol URL` send?",
    o: ["HAProxy PROXY protocol header (client info)", "PROXY protocol", "HAProxy header", "Client info"],
    c: 0,
    e: "curl --haproxy-protocol. Sends PROXY line. For HAProxy upstream. Client IP, etc.",
    de: "PROXY TCP4 1.2.3.4 5.6.7.8 12345 443. Binary or text. Preserve client."
  }),
  (_i: number) => ({
    q: "What does HTTP Alt-Svc header enable?",
    o: ["Alternative service (HTTP/2, different host)", "Alt service", "Service hint", "HTTP/2 hint"],
    c: 0,
    e: "Alt-Svc: h2=\"otherhost:443\". Use HTTP/2 on other host. Migration, optimization.",
    de: "Alt-Svc for QUIC, HTTP/3. Client can upgrade. Service discovery."
  }),
  (_i: number) => ({
    q: "What does HAProxy `balance uri consistent` do?",
    o: ["Consistent hashing on URI (same URI = same backend)", "URI consistent hash", "Sticky by URI", "Cache affinity"],
    c: 0,
    e: "balance uri consistent. Hash URI. Same URI -> same backend. Cache affinity.",
    de: "balance uri consistent. Backend cache. Same resource = same server. CDN-like."
  }),
  (_i: number) => ({
    q: "What does `ip route add 10.0.0.0/8 nexthop dev eth0 weight 1 nexthop dev eth1 weight 1` create?",
    o: ["ECMP over two interfaces", "Multipath ECMP", "Dual path", "Load balance routes"],
    c: 0,
    e: "nexthop dev eth0, nexthop dev eth1. Equal weight. Traffic split. ECMP.",
    de: "Two interfaces. Per-flow or per-packet. Hash-based. Bonding alternative."
  }),
  (_i: number) => ({
    q: "What does `iptables -A INPUT -m length --length 0:64 -j DROP` match?",
    o: ["Packets 0-64 bytes (tiny, often invalid)", "Length match", "Small packet", "Size filter"],
    c: 0,
    e: "length --length 0:64. Very small packets. Often malformed, scans.",
    de: "iptables -m length. 0:64 = 0 to 64 bytes. Minimum Ethernet 64. Filter junk."
  }),
  (_i: number) => ({
    q: "What does `nft add rule inet filter input meta mark 0x1 accept` do?",
    o: ["Accepts packets with mark 0x1 (pre-marked)", "Mark match", "Packet mark", "Fwmark"],
    c: 0,
    e: "meta mark 0x1. Packets marked elsewhere. Mark = 32-bit. Policy routing, QoS.",
    de: "meta mark set 1. meta mark 1. Mark in mangle. Match in filter. Cross-table."
  }),
  (_i: number) => ({
    q: "What does `tc qdisc add dev eth0 root htb default 30` with `tc class add ... htb rate 10mbit ceil 20mbit` set?",
    o: ["Guaranteed 10Mbps, burst to 20Mbps", "HTB rate ceil", "Bandwidth limit", "Rate guarantee"],
    c: 0,
    e: "rate = guaranteed. ceil = maximum. HTB hierarchy. Borrow from parent.",
    de: "tc class add ... htb rate 10mbit ceil 20mbit. Minimum and maximum. Traffic shaping."
  }),
  (_i: number) => ({
    q: "What does `curl --trace-ascii - URL` output?",
    o: ["ASCII trace of full exchange to stdout", "Trace ASCII", "Debug trace", "Full trace"],
    c: 0,
    e: "curl --trace-ascii -. Full request/response. - = stdout. Debugging.",
    de: "curl --trace-ascii trace.txt. Or - for stdout. See bytes. --trace for binary."
  }),
  (_i: number) => ({
    q: "What does HTTP 103 Early Hints allow?",
    o: ["Preload hints before final response", "Early hints", "103 preload", "Resource hints"],
    c: 0,
    e: "103 Early Hints. Link: preload. Client can start before 200. Optimization.",
    de: "103 + Link: </style.css>; rel=preload. Parallel fetch. Faster page load."
  }),
  (_i: number) => ({
    q: "What does `nginx proxy_cache_use_stale error timeout updating` do?",
    o: ["Serves stale cache on backend error, timeout, or during update", "Stale on error", "Cache fallback", "Stale conditions"],
    c: 0,
    e: "proxy_cache_use_stale. When to serve stale. error, timeout, updating. Resilience.",
    de: "proxy_cache_use_stale error timeout updating http_500;. Backend down = stale OK."
  }),
  (_i: number) => ({
    q: "What does HAProxy `retries 3` with `option redispatch` do?",
    o: ["Retries on different backend if first fails", "Redispatch retry", "Backend retry", "Failover retry"],
    c: 0,
    e: "retries 3. option redispatch. On failure, try different server. Not just same.",
    de: "retries 3 option redispatch. Connection fail = try next. Idempotent requests."
  }),
  (_i: number) => ({
    q: "What does `ip route add 192.168.1.0/24 via 10.0.0.1 proto 42` use proto for?",
    o: ["Routing protocol identifier (display/origin)", "Route protocol", "Proto field", "Origin"],
    c: 0,
    e: "proto = protocol. 42 = custom. kernel, static, boot, etc. Informational.",
    de: "ip route show proto static. proto 42. Doesn't affect forwarding. Metadata."
  }),
  (_i: number) => ({
    q: "What does `iptables -A PREROUTING -t raw -p tcp --dport 80 -j CT --notrack` do?",
    o: ["Bypasses conntrack for port 80 (performance)", "Notrack", "Skip conntrack", "CT bypass"],
    c: 0,
    e: "CT --notrack. No connection tracking. Raw table. Performance for high traffic.",
    de: "raw table, PREROUTING. --notrack. Packets skip conntrack. Stateful rules won't match."
  }),
  (_i: number) => ({
    q: "What does `nft add rule inet filter input ip saddr . tcp dport vmap { 22 : accept, 80 : accept, 443 : accept }` do?",
    o: ["Maps (saddr, dport) pairs to verdict (accept listed)", "Verdict map", "Compound key", "Vmap"],
    c: 0,
    e: "vmap = verdict map. Compound key. saddr . dport -> verdict. Compact rules.",
    de: "nft vmap. Multiple keys. { key : verdict }. Efficient multi-rule."
  }),
  (_i: number) => ({
    q: "What does `bridge link set dev eth0 isolated on` do?",
    o: ["Port cannot forward to other isolated ports", "Isolated port", "Port isolation", "No forward"],
    c: 0,
    e: "isolated = no forwarding to other isolated. Like PVLAN isolated. Guest isolation.",
    de: "bridge link set dev eth0 isolated on. VMs can't talk. Only to non-isolated (gateway)."
  }),
  (_i: number) => ({
    q: "What does `curl --pinnedpubkey sha256//hash URL` enforce?",
    o: ["Certificate pinning (specific public key)", "Cert pinning", "Key pinning", "Pin public key"],
    c: 0,
    e: "curl --pinnedpubkey. Only accept cert with this key. MitM protection.",
    de: "curl --pinnedpubkey sha256//abc123... URL. Key pinning. Certificate rotation care."
  }),
  (_i: number) => ({
    q: "What does REST 412 Precondition Failed indicate?",
    o: ["Condition (If-Match, etc) failed", "Precondition failed", "412 condition", "ETag mismatch"],
    c: 0,
    e: "412 = precondition failed. If-Match, If-Unmodified-Since. Optimistic locking.",
    de: "PUT with If-Match: \"old-etag\". 412 if changed. Concurrent edit detection."
  }),
  (_i: number) => ({
    q: "What does `nginx realip_module` with `set_real_ip_from` do?",
    o: ["Sets client IP from X-Forwarded-For (trusted proxy)", "Real IP", "Proxy client IP", "XFF trust"],
    c: 0,
    e: "set_real_ip_from 10.0.0.0/8; real_ip_header X-Forwarded-For;. $remote_addr = real.",
    de: "Trust proxy. real_ip_header X-Forwarded-For. Logging, geo, limit_conn get real IP."
  }),
  (_i: number) => ({
    q: "What does `ip link add geneve0 type geneve id 100 remote 192.168.1.1 dstport 6081` create?",
    o: ["GENEVE tunnel (generic overlay)", "GENEVE tunnel", "Overlay tunnel", "Generic VXLAN"],
    c: 0,
    e: "geneve = Generic Network Virtualization. Like VXLAN, extensible. dstport 6081.",
    de: "GENEVE: variable options. Cloud native. Kubernetes, OpenStack. UDP 6081."
  }),
  (_i: number) => ({
    q: "What does `iptables -A INPUT -m quota --quota 1000000000 -j ACCEPT` do?",
    o: ["Accepts until quota (1GB) exhausted", "Quota limit", "Byte quota", "Traffic quota"],
    c: 0,
    e: "quota module. --quota bytes. Accepts until exceeded. Per-rule. Traffic cap.",
    de: "iptables -m quota --quota 1g. Next rule after. Per-IP with recent. Data limits."
  }),
  (_i: number) => ({
    q: "What does `nft add rule inet filter input ct state new tcp flags syn limit rate 20/second accept` do?",
    o: ["Accepts new SYNs at 20/sec (SYN flood protection)", "SYN rate limit", "New connection limit", "SYN throttle"],
    c: 0,
    e: "ct state new + tcp flags syn. New connections. limit rate 20/second. SYN flood.",
    de: "More specific than just 'new'. SYN only. Established not limited. Balance."
  }),
  (_i: number) => ({
    q: "What does `tc qdisc add dev eth0 root netem loss 0.1% 25%` simulate?",
    o: ["0.1% loss with 25% correlation (bursty loss)", "Correlated loss", "Loss simulation", "Burst loss"],
    c: 0,
    e: "loss 0.1% 25%. 0.1% base. 25% = correlation. Bursty. Realistic.",
    de: "netem loss 0.1% 25%. Not random. Clustered. Network simulation."
  }),
  (_i: number) => ({
    q: "What does `curl --tlsv1.3 --tls-max 1.3 URL` enforce?",
    o: ["TLS 1.3 only (most secure)", "TLS 1.3 only", "Max TLS 1.3", "Modern TLS"],
    c: 0,
    e: "curl --tlsv1.3 --tls-max 1.3. No 1.0, 1.1, 1.2. TLS 1.3 only.",
    de: "Maximum security. TLS 1.3. No legacy. Check server support."
  }),
  (_i: number) => ({
    q: "What does HTTP 308 Permanent Redirect preserve?",
    o: ["Request method (POST stays POST)", "Method preservation", "308 vs 301", "Redirect method"],
    c: 0,
    e: "308 = permanent, method preserved. 301 may change POST to GET. 308 keeps POST.",
    de: "308 Permanent Redirect. POST -> POST. 301 historically POST->GET. 308 correct."
  }),
  (_i: number) => ({
    q: "What does `nginx proxy_cache_lock` do?",
    o: ["Only one request populates cache; others wait", "Cache lock", "Single populate", "Cache mutex"],
    c: 0,
    e: "proxy_cache_lock. First request fetches. Others wait. Prevents thundering herd.",
    de: "proxy_cache_lock on; proxy_cache_lock_timeout 5s;. One fetches, rest wait. Backend protection."
  }),
  (_i: number) => ({
    q: "What does HAProxy `source` balance use?",
    o: ["Client IP hash (same IP = same backend)", "Source IP hash", "IP stickiness", "Client hash"],
    c: 0,
    e: "balance source. Hash client IP. Same client = same server. No cookie needed.",
    de: "balance source. Session affinity by IP. /24 for subnet. Predictable."
  }),
  (_i: number) => ({
    q: "What does `ip route add 10.0.0.0/8 via 192.168.1.1 realm 10` use realm for?",
    o: ["Traffic classifier for policy (tc, fwmark)", "Realm", "Traffic class", "Policy tag"],
    c: 0,
    e: "realm = traffic classifier. Used by tc, iptables. Policy routing, QoS.",
    de: "realm 10. iptables -m realm. tc filter. Cross-layer classification."
  }),
  (_i: number) => ({
    q: "What does `iptables -A INPUT -m bpf --bytecode '...' -j ACCEPT` use?",
    o: ["eBPF bytecode for custom packet match", "BPF match", "eBPF filter", "Custom match"],
    c: 0,
    e: "bpf module. Load eBPF. Custom matching. Complex logic. Performance.",
    de: "iptables -m bpf. nfbpf_compile. Custom filters. Advanced use."
  }),
  (_i: number) => ({
    q: "What does `nft add rule inet filter input oifname \"eth*\" accept` do?",
    o: ["Accepts if output interface matches eth*", "Output interface match", "oifname", "Interface pattern"],
    c: 0,
    e: "oifname \"eth*\". Output interface. Wildcard. eth0, eth1, etc.",
    de: "oifname for output. iifname for input. Wildcards. meta oif, iif."
  }),
  (_i: number) => ({
    q: "What does `bridge link set dev eth0 flood off` do?",
    o: ["Disables flooding (no unknown unicast flood)", "No flood", "Flood off", "Unknown unicast"],
    c: 0,
    e: "flood off. Unknown unicast not flooded. Only known MACs. Security, efficiency.",
    de: "bridge link set dev eth0 flood off. Reduces traffic. Requires static FDB or learning elsewhere."
  }),
  (_i: number) => ({
    q: "What does `curl --request-target '*'' URL` send?",
    o: ["OPTIONS * (asterisk) for CORS preflight", "OPTIONS *", "CORS preflight", "Asterisk target"],
    c: 0,
    e: "curl --request-target '*'. OPTIONS *. CORS preflight. Max-age, methods.",
    de: "OPTIONS * HTTP/1.1. CORS. Server lists allowed. Browser preflight."
  }),
  (_i: number) => ({
    q: "What does REST 303 See Other differ from 302?",
    o: ["303 = GET for redirect (POST->GET)", "303 vs 302", "See Other", "Redirect method"],
    c: 0,
    e: "303 = See Other. Redirect to GET. POST response. 302 ambiguous. 303 clear.",
    de: "303 after POST. Client GETs new URL. PRG pattern. 302 may keep POST."
  }),
  (_i: number) => ({
    q: "What does `nginx proxy_ssl_server_name on` do?",
    o: ["Sends SNI with upstream hostname", "Upstream SNI", "TLS SNI", "Server name"],
    c: 0,
    e: "proxy_ssl_server_name on. SNI = Server Name Indication. Required for vhosts.",
    de: "proxy_ssl_server_name on; proxy_ssl_name $proxy_host;. Backend TLS vhost."
  }),
  (_i: number) => ({
    q: "What does `ip route add 192.168.1.0/24 via 10.0.0.1 rto_min 100ms` set?",
    o: ["Minimum RTO for TCP retransmits on this path", "RTO min", "Retransmit timeout", "TCP RTO"],
    c: 0,
    e: "rto_min = retransmit timeout minimum. TCP. Per-route. Tuning.",
    de: "ip route ... rto_min 100ms. TCP retransmit. Long paths. Advanced tuning."
  }),
  (_i: number) => ({
    q: "What does `iptables -A INPUT -m hbh --hbh-len 0 -j DROP` match?",
    o: ["IPv6 Hop-by-Hop with zero length (invalid)", "HBH match", "IPv6 HBH", "Extension header"],
    c: 0,
    e: "hbh = Hop-by-Hop. IPv6. --hbh-len 0 = empty. Often invalid.",
    de: "iptables -m hbh. IPv6 only. Extension headers. Security filtering."
  }),
  (_i: number) => ({
    q: "What does `nft add rule inet filter input ct state established counter accept` add?",
    o: ["Packet/byte counter for this rule", "Rule counter", "Accept counter", "Traffic stats"],
    c: 0,
    e: "counter. Counts packets, bytes. nft list ruleset shows. Monitoring.",
    de: "counter. Per-rule stats. nft reset ruleset to zero. Traffic analysis."
  }),
  (_i: number) => ({
    q: "What does `bridge link set dev eth0 mcast_flood off` do?",
    o: ["Disables multicast flooding on port", "No mcast flood", "Multicast flood off", "IGMP only"],
    c: 0,
    e: "mcast_flood off. Multicast only to members. IGMP snooping. Reduces traffic.",
    de: "bridge link set dev eth0 mcast_flood off. Requires IGMP snooping. Efficient multicast."
  }),
  (_i: number) => ({
    q: "What does `curl --path-as-is URL` prevent?",
    o: ["Prevents path normalization (../, .)", "Path as-is", "No normalize", "Raw path"],
    c: 0,
    e: "curl --path-as-is. Don't resolve .., . in path. Security testing.",
    de: "curl --path-as-is http://host/../etc/passwd. Path traversal test. Default normalizes."
  }),
  (_i: number) => ({
    q: "What does HTTP 407 Proxy Authentication Required mean?",
    o: ["Proxy requires auth (Proxy-Authenticate)", "Proxy auth", "407 proxy", "Proxy login"],
    c: 0,
    e: "407 = proxy auth. Proxy-Authenticate. Client: Proxy-Authorization.",
    de: "407. Proxy needs credentials. curl -x proxy -U user:pass. Corporate proxy."
  }),
  (_i: number) => ({
    q: "What does `nginx proxy_ssl_protocols TLSv1.2 TLSv1.3` restrict?",
    o: ["Allowed TLS versions to upstream", "Upstream TLS", "Protocol restriction", "TLS versions"],
    c: 0,
    e: "proxy_ssl_protocols. TLS versions for upstream. Security. No TLS 1.0.",
    de: "proxy_ssl_protocols TLSv1.2 TLSv1.3;. proxy_ssl_ciphers. Secure backend."
  }),
  (_i: number) => ({
    q: "What does HAProxy `timeout client` vs `timeout server` differ?",
    o: ["client = client->HAProxy; server = HAProxy->backend", "Client vs server timeout", "Timeout direction", "HAProxy timeouts"],
    c: 0,
    e: "timeout client = client side. timeout server = backend side. Different limits.",
    de: "timeout client 30s. timeout server 10s. Asymmetric. Backend may be slower."
  }),
  (_i: number) => ({
    q: "What does `ip route add 10.0.0.0/8 via 192.168.1.1 initcwnd 10` set?",
    o: ["Initial congestion window (TCP) for this route", "Init cwnd", "TCP init window", "Slow start"],
    c: 0,
    e: "initcwnd = initial congestion window. TCP. Per-route. Faster slow start.",
    de: "ip route ... initcwnd 10. First 10 segments. High BDP paths. Tuning."
  }),
  (_i: number) => ({
    q: "What does `iptables -A INPUT -m owner --uid-owner 0-100 -j ACCEPT` match?",
    o: ["Packets from processes with UID 0-100 (system)", "UID range", "Owner range", "System UIDs"],
    c: 0,
    e: "owner --uid-owner 0-100. UID range. System processes. OUTPUT only (usually).",
    de: "iptables -m owner. UID 0-100 = root, daemons. OUTPUT chain. User filtering."
  }),
  (_i: number) => ({
    q: "What does `nft add rule inet filter input ct state new limit rate 5/second burst 10 packets accept` do?",
    o: ["Accepts new at 5/sec with burst of 10", "Rate with burst", "Burst allowance", "Token bucket"],
    c: 0,
    e: "limit rate 5/second burst 10. 5/sec sustained. Burst 10. Token bucket.",
    de: "Burst = initial tokens. Refill rate. Allows short spikes. More flexible."
  }),
  (_i: number) => ({
    q: "What does `tc qdisc add dev eth0 root fq_codel` provide?",
    o: ["Fair queuing + CoDel (AQM, bufferbloat mitigation)", "FQ CoDel", "Bufferbloat", "Fair queue"],
    c: 0,
    e: "fq_codel = Fair Queue CoDel. Per-flow. CoDel = delay-based. Bufferbloat fix.",
    de: "fq_codel. Default on many Linux. No config. Good default. Replaces pfifo_fast."
  }),
  (_i: number) => ({
    q: "What does `curl --limit-rate 100K URL` do?",
    o: ["Limits download to 100 KB/s", "Rate limit", "Throttle download", "Speed limit"],
    c: 0,
    e: "curl --limit-rate 100K. Max speed. K, M, G. For bandwidth control.",
    de: "curl --limit-rate 1M URL. Don't saturate. Fair share. Testing."
  }),
  (_i: number) => ({
    q: "What does HTTP 451 Unavailable For Legal Reasons indicate?",
    o: ["Censorship/legal block (e.g. DMCA)", "Legal block", "451 censored", "Unavailable legal"],
    c: 0,
    e: "451 = legal restriction. Censorship. Optional Link: to explanation.",
    de: "451. Ray Bradbury. Jurisdiction block. Transparency. Link header."
  }),
  (_i: number) => ({
    q: "What does `nginx proxy_cache_background_update on` do?",
    o: ["Updates stale in background while serving", "Background update", "Stale-while-revalidate", "Async refresh"],
    c: 0,
    e: "proxy_cache_background_update. Serve stale, update async. No wait.",
    de: "proxy_cache_background_update on;. proxy_cache_use_stale updating;. Stale-while-revalidate."
  }),
  (_i: number) => ({
    q: "What does HAProxy `option srvtcpka` do?",
    o: ["Server-side TCP keepalive", "TCP keepalive", "Server keepalive", "Connection keepalive"],
    c: 0,
    e: "option srvtcpka. TCP keepalive to backend. Detects dead connections.",
    de: "option srvtcpka. timeout server. Dead backend detection. Connection cleanup."
  }),
  (_i: number) => ({
    q: "What does `ip route add 192.168.1.0/24 via 10.0.0.1 mtu 1400` set?",
    o: ["Path MTU for this route (fragmentation)", "Route MTU", "Path MTU", "MTU hint"],
    c: 0,
    e: "mtu 1400. Path MTU. Kernel uses for PMTUD. VPN, tunnels.",
    de: "ip route ... mtu 1400. Avoid fragmentation. VPN often 1400. MSS clamping."
  }),
  (_i: number) => ({
    q: "What does `iptables -A INPUT -m iprange --src-range 192.168.1.1-192.168.1.50 -j ACCEPT` do?",
    o: ["Accepts from IP range", "IP range match", "Range accept", "Src range"],
    c: 0,
    e: "iprange --src-range. IP range. No CIDR. Arbitrary range.",
    de: "iptables -m iprange. --src-range, --dst-range. 1.1.1.1-1.1.1.50."
  }),
  (_i: number) => ({
    q: "What does `nft add set inet filter ports { type inet_service; flags interval; }` use flags interval for?",
    o: ["Allows port ranges in set (e.g. 80-90)", "Port ranges", "Interval set", "Range support"],
    c: 0,
    e: "flags interval. Set can have 80-90. Not just 80, 81. Efficient.",
    de: "nft add element inet filter ports { 80-90, 443 }. Interval. Compact."
  }),
  (_i: number) => ({
    q: "What does `bridge link set dev eth0 self on` do?",
    o: ["Enables self (bridge receives own traffic)", "Self on", "Bridge self", "Receive own"],
    c: 0,
    e: "self on. Bridge receives frames to its MAC. For bridge IP. Default often on.",
    de: "bridge link set dev eth0 self on. Bridge as endpoint. L3 on bridge."
  }),
  (_i: number) => ({
    q: "What does `curl --proxy-insecure` do with HTTPS proxy?",
    o: ["Skips proxy cert verification", "Proxy cert skip", "Insecure proxy", "Proxy TLS skip"],
    c: 0,
    e: "curl --proxy-insecure. Don't verify proxy's cert. -k for target. Proxy only.",
    de: "HTTPS proxy. --proxy-insecure. Testing. Not for production."
  }),
  (_i: number) => ({
    q: "What does REST 503 Service Unavailable imply?",
    o: ["Temporary overload; Retry-After optional", "Temporary", "503 retry", "Overload"],
    c: 0,
    e: "503 = temporary. Retry-After. Server overload, maintenance. Retry later.",
    de: "503. Not 500 (bug). Transient. Retry-After: 60. Load balancer, maintenance."
  }),
  (_i: number) => ({
    q: "What does `nginx proxy_ssl_certificate` specify?",
    o: ["Client cert for upstream mTLS", "Upstream client cert", "mTLS cert", "Backend auth"],
    c: 0,
    e: "proxy_ssl_certificate. Client cert for upstream. mTLS to backend.",
    de: "proxy_ssl_certificate client.pem; proxy_ssl_certificate_key key.pem;. mTLS."
  }),
  (_i: number) => ({
    q: "What does HAProxy `option httplog` add to logs?",
    o: ["HTTP-specific fields (method, URI, status)", "HTTP log", "Extended log", "HTTP fields"],
    c: 0,
    e: "option httplog. Log format includes HTTP. Method, URI, status. vs tcplog.",
    de: "option httplog. %r %b %s. Request, bytes, status. Debugging, analytics."
  }),
  (_i: number) => ({
    q: "What does `ip route add 10.0.0.0/8 via 192.168.1.1 expires 300` do?",
    o: ["Route expires in 300 seconds", "Route expiry", "Temporary route", "Expiring route"],
    c: 0,
    e: "expires 300. Route removed after 300s. Temporary. Dynamic.",
    de: "ip route add ... expires 300. Auto-remove. DHCP, dynamic. Kernel removes."
  }),
  (_i: number) => ({
    q: "What does `iptables -A INPUT -m tcp --tcp-flags ALL RST -j DROP` match?",
    o: ["RST-only packets (often scan/probe)", "RST drop", "TCP RST", "Reset packets"],
    c: 0,
    e: "tcp --tcp-flags ALL RST. RST only. No SYN, ACK. Often invalid.",
    de: "RST without prior connection. Scan response. Invalid. Drop or log."
  }),
  (_i: number) => ({
    q: "What does `nft add rule inet filter input ct state new limit rate 10/second burst 20 packets drop` do?",
    o: ["Drops excess new connections (rate + burst)", "Drop excess", "Connection limit drop", "Rate drop"],
    c: 0,
    e: "limit rate ... drop. Excess dropped. Not accepted. Strict limit.",
    de: "limit rate 10/second burst 20 drop. Over limit = drop. No accept. DDoS."
  }),
  (_i: number) => ({
    q: "What does `bridge link set dev eth0 hairpin on` allow?",
    o: ["Port can receive its own transmitted traffic", "Hairpin", "Reflect traffic", "Loopback port"],
    c: 0,
    e: "hairpin on. Port receives what it sends. For VMs, containers. NAT hairpin.",
    de: "bridge link set dev eth0 hairpin on. Same port in/out. Special topologies."
  }),
  (_i: number) => ({
    q: "What does `curl --unix-socket` with `http://localhost` do?",
    o: ["HTTP over Unix socket (no TCP)", "Unix socket HTTP", "Local socket", "No network"],
    c: 0,
    e: "curl --unix-socket /path http://localhost. HTTP over Unix socket. Docker, local.",
    de: "curl --unix-socket /var/run/docker.sock http://localhost/containers/json. Docker API."
  }),
  (_i: number) => ({
    q: "What does HTTP 101 Switching Protocols mean?",
    o: ["Upgrade to WebSocket or other protocol", "Protocol upgrade", "101 upgrade", "WebSocket"],
    c: 0,
    e: "101 = upgrade. WebSocket, HTTP/2. Connection: Upgrade. Protocol switch.",
    de: "101 Switching Protocols. Upgrade: websocket. New protocol on same connection."
  }),
  (_i: number) => ({
    q: "What does `nginx proxy_ssl_session_reuse on` optimize?",
    o: ["Reuses TLS session to backend (fewer handshakes)", "Session reuse", "TLS reuse", "Resume session"],
    c: 0,
    e: "proxy_ssl_session_reuse on. Session ticket. Fewer full handshakes.",
    de: "proxy_ssl_session_reuse on;. Backend TLS. Performance. Session cache."
  }),
  (_i: number) => ({
    q: "What does HAProxy `option http-server-close` do?",
    o: ["Closes server connection after response (no keepalive)", "Server close", "No keepalive", "Close backend"],
    c: 0,
    e: "option http-server-close. Close after each response. vs keep-alive.",
    de: "http-server-close. Backend connection per request. When keepalive problematic."
  }),
];
