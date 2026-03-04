// LEVEL 7 INTERMEDIATE — Advanced Networking (100 unique questions)
// Topics: ip, iptables, nftables, bridges, VLANs, HTTP, REST, load balancing

export const level7Intermediate = [
  (_i: number) => ({
    q: "What does `ip addr show secondary` display?",
    o: ["Secondary IP addresses on interfaces", "Backup addresses", "Alias IPs only", "Non-primary addresses"],
    c: 0,
    e: "ip addr show secondary filters to show only secondary (alias) addresses.",
    de: "ip addr show secondary. Primary is first address. Secondary = additional IPs on same interface."
  }),
  (_i: number) => ({
    q: "What does `ip route replace` do vs `ip route add`?",
    o: ["Replaces existing route or adds if missing", "Overwrites route", "Updates route", "Replace or add"],
    c: 0,
    e: "ip route replace updates route if exists, adds if not. Safer for idempotent scripts.",
    de: "ip route replace default via 192.168.1.1. Won't fail if route exists. add fails on duplicate."
  }),
  (_i: number) => ({
    q: "What does `iptables -A INPUT -m limit --limit 5/min -j ACCEPT` do?",
    o: ["Rate-limits matching packets to 5 per minute", "Limits connections", "Throttles traffic", "Rate limit rule"],
    c: 0,
    e: "limit module allows N packets per unit. Protects against floods. First 5/min pass.",
    de: "iptables -m limit --limit 5/min. Bucket refills. Excess hits next rule. Often before LOG."
  }),
  (_i: number) => ({
    q: "What does `nft add rule inet filter input ct state established,related accept` do?",
    o: ["Allows return traffic for existing connections", "Stateful accept", "Connection tracking", "Established flow"],
    c: 0,
    e: "ct state = conntrack. established,related = reply traffic. Usually first accept rule.",
    de: "nft ct state established,related accept. Like iptables -m state. Essential for stateful firewall."
  }),
  (_i: number) => ({
    q: "What does `bridge fdb show` display?",
    o: ["Bridge forwarding database (MAC table)", "Bridge FDB", "MAC learning table", "Bridge cache"],
    c: 0,
    e: "bridge fdb shows learned MACs. Which port each MAC is on. Aging, static entries.",
    de: "bridge fdb show. bridge fdb add for static. MAC learning. brctl showmacs on older systems."
  }),
  (_i: number) => ({
    q: "What does `ip link set eth0.10 type vlan egress-qos-map` configure?",
    o: ["VLAN egress QoS mapping (priority)", "Egress QoS", "VLAN priority", "QoS mapping"],
    c: 0,
    e: "Maps internal priority to 802.1Q PCP. For QoS on VLAN egress.",
    de: "egress-qos-map maps priority. ingress too. 802.1p for VLAN QoS."
  }),
  (_i: number) => ({
    q: "What does `curl -X POST -d 'key=value' URL` send?",
    o: ["POST request with form data in body", "POST with data", "Form POST", "POST body"],
    c: 0,
    e: "curl -X POST -d sends application/x-www-form-urlencoded. -d for body.",
    de: "curl -X POST -d 'a=1&b=2' URL. -H 'Content-Type: application/json' -d '{}' for JSON."
  }),
  (_i: number) => ({
    q: "What does REST idempotency mean for PUT?",
    o: ["Same PUT request yields same result (safe to retry)", "PUT is idempotent", "Repeatable PUT", "Safe retry"],
    c: 0,
    e: "PUT same resource multiple times = same state. Safe to retry on timeout.",
    de: "PUT /users/1 with same body. Result identical. POST creates new, not idempotent."
  }),
  (_i: number) => ({
    q: "What does `nginx -t` do?",
    o: ["Tests config syntax without applying", "Config test", "Validate nginx config", "Syntax check"],
    c: 0,
    e: "nginx -t checks config. Exits 0 if valid. Run before reload.",
    de: "nginx -t. Catches syntax errors. nginx -s reload applies. Safe before reload."
  }),
  (_i: number) => ({
    q: "What does HAProxy `balance roundrobin` do?",
    o: ["Distributes requests sequentially across backends", "Round-robin LB", "Sequential distribution", "Cyclic LB"],
    c: 0,
    e: "Round-robin: each backend gets next request. Simple, even distribution.",
    de: "balance roundrobin. Other: leastconn, source, uri. In backend block."
  }),
  (_i: number) => ({
    q: "What does `ip link set br0 stp on` enable?",
    o: ["Spanning Tree Protocol on bridge", "STP on bridge", "Loop prevention", "Bridge STP"],
    c: 0,
    e: "STP prevents loops in bridged topology. Blocks redundant paths until needed.",
    de: "ip link set br0 stp on. Prevents broadcast storms. brctl stp br0 on on older."
  }),
  (_i: number) => ({
    q: "What does `iptables -t nat -A PREROUTING -p tcp --dport 80 -j DNAT --to 192.168.1.10:8080` do?",
    o: ["Redirects incoming port 80 to internal host:8080", "Port forward", "DNAT redirect", "NAT port forward"],
    c: 0,
    e: "DNAT rewrites destination. External :80 -> internal 192.168.1.10:8080.",
    de: "PREROUTING for incoming. Need FORWARD allow. SNAT for return. Full port forward."
  }),
  (_i: number) => ({
    q: "What does `nft add set inet filter blacklist { type ipv4_addr; }` create?",
    o: ["Named set of IPv4 addresses for rules", "IP set", "Blacklist set", "Address set"],
    c: 0,
    e: "Creates set. Add elements: nft add element inet filter blacklist { 1.2.3.4 }. Use in rules.",
    de: "nft add rule inet filter input ip saddr @blacklist drop. Dynamic blocklists."
  }),
  (_i: number) => ({
    q: "What does `ip link add link eth0 name eth0.20 type vlan id 20 egress-qos-map 0:1` do?",
    o: ["Creates VLAN 20 with egress priority mapping", "VLAN with QoS", "VLAN 20 egress", "Tagged VLAN"],
    c: 0,
    e: "Creates eth0.20. egress-qos-map maps priority. 0:1 = default to PCP 1.",
    de: "VLAN 20 on eth0. QoS for prioritization. Requires switch 802.1Q support."
  }),
  (_i: number) => ({
    q: "What does `curl -u user:pass URL` add to request?",
    o: ["Basic Auth header (Base64 user:pass)", "Basic auth", "Credentials", "Auth header"],
    c: 0,
    e: "curl -u adds Authorization: Basic base64(user:pass). For HTTP Basic Auth.",
    de: "curl -u alice:secret https://api.example.com. -n for .netrc. Bearer for tokens."
  }),
  (_i: number) => ({
    q: "What does HTTP 301 vs 302 differ?",
    o: ["301 permanent redirect, 302 temporary", "Permanent vs temporary", "Redirect types", "301 vs 302"],
    c: 0,
    e: "301 = permanent, cacheable. 302 = temporary. Browsers may cache 301.",
    de: "301 Moved Permanently. 302 Found (temp). 307/308 preserve method. SEO implications."
  }),
  (_i: number) => ({
    q: "What does `nginx upstream` block define?",
    o: ["Backend server pool for load balancing", "Upstream servers", "LB backends", "Proxy targets"],
    c: 0,
    e: "upstream name { server 1.2.3.4; server 5.6.7.8; }. proxy_pass http://name;",
    de: "upstream app { server 10.0.0.1; server 10.0.0.2; }. Round-robin by default."
  }),
  (_i: number) => ({
    q: "What does `ip rule add to 8.8.8.8 lookup 200` do?",
    o: ["Traffic to 8.8.8.8 uses routing table 200", "Policy route by dest", "Destination-based routing", "Table 200 for dest"],
    c: 0,
    e: "to = destination. Packets to 8.8.8.8 use table 200. Policy routing.",
    de: "ip rule add to 8.8.8.8 lookup 200. Split routing: some dests via different gateway."
  }),
  (_i: number) => ({
    q: "What does `iptables -A INPUT -m connlimit --connlimit-above 10 -j REJECT` do?",
    o: ["Rejects new connections when >10 from same client", "Connection limit", "Per-IP limit", "Connlimit rule"],
    c: 0,
    e: "connlimit limits concurrent connections per IP. --connlimit-above 10 rejects 11th.",
    de: "Protects against connection exhaustion. --connlimit-mask 24 for per-/24. DDoS mitigation."
  }),
  (_i: number) => ({
    q: "What does `nft add rule inet filter input ip saddr 10.0.0.0/8 drop` do?",
    o: ["Drops packets from private 10.x.x.x range", "Drop RFC1918", "Block 10/8", "Drop private"],
    c: 0,
    e: "ip saddr = source. 10.0.0.0/8 = 10.x.x.x. Often drop spoofed private on WAN.",
    de: "Anti-spoofing. Private IPs shouldn't come from internet. 192.168/16, 172.16/12 too."
  }),
  (_i: number) => ({
    q: "What does `bridge link set dev eth0 cost 100` set?",
    o: ["STP path cost for that port", "Bridge port cost", "STP cost", "Path cost"],
    c: 0,
    e: "STP cost influences path selection. Lower = preferred. 100 = 100Mbps equiv.",
    de: "bridge link set dev eth0 cost 100. 1G = 4, 100M = 19. Root path cost."
  }),
  (_i: number) => ({
    q: "What does `curl -H 'Content-Type: application/json' -d @file.json URL` do?",
    o: ["POSTs JSON from file with correct header", "POST JSON file", "JSON body from file", "API POST"],
    c: 0,
    e: "curl -d @file sends file as body. -H sets Content-Type. For REST APIs.",
    de: "curl -X POST -H 'Content-Type: application/json' -d @payload.json https://api.example.com."
  }),
  (_i: number) => ({
    q: "What does REST resource naming convention prefer?",
    o: ["Nouns (plural) for collections: /users not /getUsers", "Plural nouns", "REST naming", "Resource nouns"],
    c: 0,
    e: "REST: /users not /getUsers. Verbs in HTTP method. Nouns in URL.",
    de: "GET /users, POST /users, GET /users/1. HTTP method = action. URL = resource."
  }),
  (_i: number) => ({
    q: "What does `haproxy -c -f haproxy.cfg` do?",
    o: ["Validates config file syntax", "HAProxy config check", "Validate config", "Syntax validation"],
    c: 0,
    e: "haproxy -c checks config. -f specifies file. Exit 0 if valid.",
    de: "haproxy -c -f /etc/haproxy/haproxy.cfg. Like nginx -t. Before reload."
  }),
  (_i: number) => ({
    q: "What does `ip addr flush dev eth0` do?",
    o: ["Removes all addresses from eth0", "Flush interface", "Clear addresses", "Remove IPs"],
    c: 0,
    e: "ip addr flush removes all IPs from interface. Careful: can lose connectivity.",
    de: "ip addr flush dev eth0. Then ip addr add to set fresh. For reconfig."
  }),
  (_i: number) => ({
    q: "What does `iptables -A FORWARD -o eth0 -j MASQUERADE` require?",
    o: ["IP forwarding enabled (net.ipv4.ip_forward=1)", "IP forward", "Kernel forwarding", "Routing enabled"],
    c: 0,
    e: "FORWARD chain + MASQUERADE. Packets must be forwarded. sysctl ip_forward=1.",
    de: "sysctl net.ipv4.ip_forward=1. Otherwise packets never reach FORWARD. NAT gateway."
  }),
  (_i: number) => ({
    q: "What does `nft list ruleset` vs `nft list table inet filter` differ?",
    o: ["ruleset = all tables; table = one table only", "All vs one table", "Ruleset scope", "Table scope"],
    c: 0,
    e: "nft list ruleset dumps everything. nft list table inet filter = one table.",
    de: "nft list ruleset > backup.nft. nft -f backup.nft to restore. Selective for one table."
  }),
  (_i: number) => ({
    q: "What does `ip link set eth0 master br0` do?",
    o: ["Adds eth0 as bridge port (slave to br0)", "Add to bridge", "Bridge port", "Slave to bridge"],
    c: 0,
    e: "eth0 becomes port of br0. Traffic between br0 ports. eth0 loses IP (typically).",
    de: "ip link set eth0 master br0. Bridge gets IP. br0 is L2 switch. No IP on ports."
  }),
  (_i: number) => ({
    q: "What does `tc qdisc add dev eth0 root htb default 30` do?",
    o: ["Root HTB qdisc, default class 1:30", "HTB root", "Traffic control root", "Default class"],
    c: 0,
    e: "htb = hierarchy token bucket. default 30 = unmatched to class 1:30. Need classes.",
    de: "tc qdisc add dev eth0 root htb default 30. Then tc class add for 1:30, etc."
  }),
  (_i: number) => ({
    q: "What does `curl -I URL` fetch?",
    o: ["Headers only (HEAD request)", "HEAD request", "Headers only", "No body"],
    c: 0,
    e: "curl -I sends HEAD. Gets headers, no body. For checking status, headers.",
    de: "curl -I https://example.com. 200 OK, Content-Length, etc. Fast check."
  }),
  (_i: number) => ({
    q: "What does HTTP Keep-Alive enable?",
    o: ["Reuse TCP connection for multiple requests", "Connection reuse", "Persistent connection", "TCP reuse"],
    c: 0,
    e: "Keep-Alive: connection stays open. Multiple requests on same TCP. Less overhead.",
    de: "HTTP/1.1 default. Connection: keep-alive. Reduces latency. Pipelining possible."
  }),
  (_i: number) => ({
    q: "What does `nginx proxy_pass` with trailing slash do?",
    o: ["Strips location prefix from URI before forwarding", "URI rewrite", "Path stripping", "Proxy path"],
    c: 0,
    e: "location /api/ { proxy_pass http://backend/; } strips /api. /api/foo -> /foo.",
    de: "Trailing slash on proxy_pass = replace. No slash = pass full URI. Critical for routing."
  }),
  (_i: number) => ({
    q: "What does HAProxy `balance leastconn` do?",
    o: ["Sends to backend with fewest active connections", "Least connections", "Connection-based LB", "Dynamic LB"],
    c: 0,
    e: "leastconn = least connections. Good for long-lived (DB, WebSocket). Better than roundrobin.",
    de: "balance leastconn. Suits variable request duration. roundrobin assumes equal."
  }),
  (_i: number) => ({
    q: "What does `ip route add 192.168.1.0/24 dev eth0 proto static` do?",
    o: ["Adds direct route via eth0 (same subnet)", "Direct route", "Connected route", "Static route"],
    c: 0,
    e: "dev = directly connected. No gateway. proto static = manually added.",
    de: "ip route add 192.168.1.0/24 dev eth0. For local subnet. Kernel adds automatically often."
  }),
  (_i: number) => ({
    q: "What does `iptables -A INPUT -p icmp --icmp-type echo-request -m limit --limit 1/s -j ACCEPT` do?",
    o: ["Allows ping but rate-limits to 1 per second", "Rate-limited ping", "ICMP limit", "Ping throttle"],
    c: 0,
    e: "echo-request = ping. limit 1/s. Prevents ping flood while allowing normal ping.",
    de: "ICMP rate limit. DDoS mitigation. Excess pings hit next rule (often DROP)."
  }),
  (_i: number) => ({
    q: "What does `nft add rule inet filter input tcp flags syn counter drop` do?",
    o: ["Drops SYN packets (no handshake) with counter", "SYN drop", "Block SYN", "Counter drop"],
    c: 0,
    e: "tcp flags syn = SYN only. Drops new connections. counter counts. Syn flood mitigation.",
    de: "Careful: drops ALL new TCP. Use with limit or specific dest. synproxy for proper mitigation."
  }),
  (_i: number) => ({
    q: "What does `bridge vlan show` display?",
    o: ["VLAN membership of bridge ports", "Bridge VLANs", "Port VLAN config", "VLAN table"],
    c: 0,
    e: "bridge vlan show. Which VLANs on which ports. Tagged/untagged.",
    de: "bridge vlan show. bridge vlan add vid 10 dev eth0. VLAN-aware bridge."
  }),
  (_i: number) => ({
    q: "What does `ip link add vlan10 type vlan id 10 protocol 802.1ad` create?",
    o: ["QinQ (802.1ad) outer tag, VLAN 10", "QinQ interface", "Stacked VLAN", "802.1ad"],
    c: 0,
    e: "802.1ad = QinQ. Double tagging. Service provider VLAN. id 10 = outer.",
    de: "QinQ for L2 VPN. Outer tag (S-VLAN), inner (C-VLAN). Carrier Ethernet."
  }),
  (_i: number) => ({
    q: "What does `curl -x http://proxy:8080 URL` do?",
    o: ["Uses HTTP proxy for request", "Proxy request", "Via proxy", "HTTP proxy"],
    c: 0,
    e: "curl -x or --proxy. Requests go via proxy. proxy:8080.",
    de: "curl -x http://proxy.example.com:3128 https://target.com. -U user:pass for proxy auth."
  }),
  (_i: number) => ({
    q: "What does REST HATEOAS mean?",
    o: ["Hypermedia: responses include links to related resources", "Hypermedia links", "Discoverable API", "Link relations"],
    c: 0,
    e: "HATEOAS = links in response. Client discovers next actions. Self-describing.",
    de: "{\"user\":1,\"_links\":{\"orders\":\"/users/1/orders\"}}. Client follows links."
  }),
  (_i: number) => ({
    q: "What does `nginx limit_req_zone` define?",
    o: ["Rate limit zone (requests per key)", "Rate limit zone", "Req limit", "Limit zone"],
    c: 0,
    e: "limit_req_zone $binary_remote_addr zone=one:10m rate=10r/s;. Then limit_req zone=one burst=20;",
    de: "Zone stores state. 10m ~160k IPs. rate=10r/s. limit_req in location."
  }),
  (_i: number) => ({
    q: "What does `ip link set eth0 nomaster` do?",
    o: ["Removes eth0 from bridge (releases from master)", "Remove from bridge", "Nomaster", "Unslave"],
    c: 0,
    e: "nomaster removes from bridge. Interface becomes standalone again.",
    de: "ip link set eth0 nomaster. Reverse of master br0. For reconfiguring topology."
  }),
  (_i: number) => ({
    q: "What does `iptables -A INPUT -m recent --name badguy --update --seconds 60 -j DROP` do?",
    o: ["Drops packets from IPs seen in badguy list within 60s", "Recent module drop", "Temporary block", "Recent DROP"],
    c: 0,
    e: "recent module tracks IPs. --update checks list. --seconds = list window. Port scan response.",
    de: "Pair with --set to add to list. --rcheck. Automatic block for scanners."
  }),
  (_i: number) => ({
    q: "What does `nft add map inet filter ports { type inet_service : verdict; }` create?",
    o: ["Map from port to verdict (port-based routing)", "Port map", "Verdict map", "Service map"],
    c: 0,
    e: "Map: key -> value. inet_service = port. verdict = accept/drop. nft add element ... { 22 : accept };",
    de: "Dynamic port handling. Add/remove without rule changes. Flexible firewall."
  }),
  (_i: number) => ({
    q: "What does `bridge link set dev eth0 state disabled` do?",
    o: ["Disables port in bridge (admin down)", "Disable bridge port", "Port down", "Admin disable"],
    c: 0,
    e: "state disabled = admin down. Port excluded from forwarding. For maintenance.",
    de: "bridge link set dev eth0 state disabled. Like ip link set eth0 down for bridge."
  }),
  (_i: number) => ({
    q: "What does `curl --connect-timeout 5 URL` do?",
    o: ["Fails if connection takes >5 seconds", "Connection timeout", "Connect limit", "5s timeout"],
    c: 0,
    e: "curl --connect-timeout 5. Connection phase only. -m for total timeout.",
    de: "--connect-timeout vs -m (max-time). Connect vs total. For slow/failing servers."
  }),
  (_i: number) => ({
    q: "What does HTTP 100 Continue mean?",
    o: ["Server ready for body; client should send it", "Expect 100-continue", "Send body", "Proceed"],
    c: 0,
    e: "100 Continue: client sent Expect: 100-continue. Server says OK, send body.",
    de: "Client: Expect: 100-continue, then body. Server: 100 or 417. For large uploads."
  }),
  (_i: number) => ({
    q: "What does `nginx upstream backup` do?",
    o: ["Server used only when all primaries are down", "Backup server", "Failover only", "Standby backend"],
    c: 0,
    e: "upstream { server 1.2.3.4; server 5.6.7.8 backup; }. Backup only when primaries fail.",
    de: "backup = standby. Primary servers first. Failover to backup. High availability."
  }),
  (_i: number) => ({
    q: "What does HAProxy `option httpchk` do?",
    o: ["Uses HTTP request for backend health check", "HTTP health check", "Layer 7 check", "HTTP probe"],
    c: 0,
    e: "option httpchk. Sends HTTP request. 2xx = healthy. Better than TCP check.",
    de: "option httpchk GET /health. httpchk sends request. option tcp-check for TCP only."
  }),
  (_i: number) => ({
    q: "What does `ip route get` show for policy routing?",
    o: ["Resolved route after rules applied", "Effective route", "Policy result", "Final route"],
    c: 0,
    e: "ip route get applies ip rule. Shows which table, gateway. Debug policy routing.",
    de: "ip route get 8.8.8.8 from 10.0.0.1. from = source. iif = incoming interface."
  }),
  (_i: number) => ({
    q: "What does `iptables -A INPUT -m string --string 'bad' --algo bm -j DROP` do?",
    o: ["Drops packets containing 'bad' in payload", "String match", "Content filter", "Payload DROP"],
    c: 0,
    e: "string module matches payload. --algo bm = Boyer-Moore. L7 filtering.",
    de: "iptables -m string. CPU intensive. Can block exploits. --from, --to for offset."
  }),
  (_i: number) => ({
    q: "What does `nft add chain inet filter forward { type filter hook forward priority 0; policy drop; }` set?",
    o: ["Forward chain with default DROP policy", "Forward policy", "Default drop", "Chain policy"],
    c: 0,
    e: "policy drop = default action. Packets not accepted are dropped. Secure default.",
    de: "policy drop. Must explicitly accept. policy accept = allow by default. Security posture."
  }),
  (_i: number) => ({
    q: "What does `ip link add macvlan0 link eth0 type macvlan mode bridge` create?",
    o: ["Macvlan in bridge mode (multiple MACs on eth0)", "Macvlan bridge", "Multiple MACs", "Macvlan interface"],
    c: 0,
    e: "macvlan: virtual interfaces, same physical. mode bridge = L2 between them.",
    de: "macvlan for containers. Each gets own MAC. mode bridge/vepa/private. No host comm in bridge."
  }),
  (_i: number) => ({
    q: "What does `curl -v` add to output?",
    o: ["Verbose: request/response details", "Verbose mode", "Detailed output", "Debug info"],
    c: 0,
    e: "curl -v shows headers, TLS info, redirects. -vv or -vvv for more.",
    de: "curl -v URL. See request sent, response received. Debugging API calls."
  }),
  (_i: number) => ({
    q: "What does REST idempotent method mean?",
    o: ["Same request multiple times = same effect (GET, PUT, DELETE)", "Repeatable effect", "Idempotent", "Safe retry"],
    c: 0,
    e: "GET, PUT, DELETE idempotent. POST not. Retry safe for idempotent.",
    de: "PUT /users/1 twice = same. POST /users creates two. Network retry safety."
  }),
  (_i: number) => ({
    q: "What does `nginx proxy_connect_timeout` control?",
    o: ["Timeout for connecting to upstream", "Upstream connect timeout", "Backend connect", "Proxy timeout"],
    c: 0,
    e: "proxy_connect_timeout 60s;. Time to establish connection to backend.",
    de: "proxy_connect_timeout, proxy_send_timeout, proxy_read_timeout. Different phases."
  }),
  (_i: number) => ({
    q: "What does `ip addr add 192.168.1.1/24 dev br0` typically imply?",
    o: ["Bridge has IP; bridge is L3 gateway for that subnet", "Bridge gateway", "Bridge IP", "L3 on bridge"],
    c: 0,
    e: "Bridge with IP = gateway. Host receives traffic for that subnet. Common for VM bridges.",
    de: "br0 = 192.168.1.1. VMs use 192.168.1.1 as gateway. Bridge forwards L2, host does L3."
  }),
  (_i: number) => ({
    q: "What does `iptables -I INPUT 1 -i lo -j ACCEPT` do?",
    o: ["Allows loopback traffic first (before other rules)", "Loopback accept", "Allow localhost", "Lo first"],
    c: 0,
    e: "-i lo = incoming on loopback. Usually first rule. Localhost must work.",
    de: "iptables -I INPUT 1 -i lo -j ACCEPT. -I 1 = insert at top. Critical for local services."
  }),
  (_i: number) => ({
    q: "What does `nft add element inet filter allowed { 192.168.1.0/24 }` do?",
    o: ["Adds subnet to set for use in rules", "Add to set", "Set element", "Populate set"],
    c: 0,
    e: "nft add element adds to set. Set used: ip saddr @allowed. Dynamic.",
    de: "nft add element inet filter allowed { 192.168.1.0/24, 10.0.0.1 }. Rule: ip saddr @allowed accept."
  }),
  (_i: number) => ({
    q: "What does `bridge link set dev eth0 guard on` enable?",
    o: ["BPDU guard (disables port on BPDU receipt)", "BPDU guard", "STP guard", "Root guard"],
    c: 0,
    e: "guard on = BPDU guard. Port receiving BPDU goes to disabled. Prevents rogue switches.",
    de: "bridge link set dev eth0 guard on. Access port protection. No BPDU expected."
  }),
  (_i: number) => ({
    q: "What does `curl -L` do?",
    o: ["Follows redirects (3xx)", "Follow redirects", "Redirect follow", "Location header"],
    c: 0,
    e: "curl -L follows up to 50 redirects. Without -L, returns 3xx response.",
    de: "curl -L URL. 301/302/307/308. -L --max-redirs 10 to limit. Default no follow."
  }),
  (_i: number) => ({
    q: "What does HTTP ETag header enable?",
    o: ["Conditional requests (If-None-Match) for cache validation", "Cache validation", "Conditional GET", "ETag cache"],
    c: 0,
    e: "ETag = entity tag. Client sends If-None-Match: etag. 304 if unchanged.",
    de: "Server: ETag \"abc\". Client: If-None-Match \"abc\". 304 Not Modified. Saves bandwidth."
  }),
  (_i: number) => ({
    q: "What does `nginx proxy_set_header Host $host` do?",
    o: ["Forwards original Host header to backend", "Preserve Host", "Host header", "Original host"],
    c: 0,
    e: "proxy_set_header overrides. $host = original. Backend sees correct virtual host.",
    de: "proxy_set_header Host $host;. Default nginx sends backend's hostname. Critical for vhosts."
  }),
  (_i: number) => ({
    q: "What does HAProxy `server` line `check inter 2s` mean?",
    o: ["Health check every 2 seconds", "Check interval", "2s health check", "Probe interval"],
    c: 0,
    e: "check = enable health check. inter 2s = every 2 seconds. fall 3 = 3 failures = down.",
    de: "server web1 10.0.0.1:80 check inter 2s fall 3 rise 2. Health check config."
  }),
  (_i: number) => ({
    q: "What does `ip link add ipip0 type ipip local 1.2.3.4 remote 5.6.7.8` create?",
    o: ["IP-in-IP tunnel (L3 over L3)", "IPIP tunnel", "IP tunnel", "Point-to-point tunnel"],
    c: 0,
    e: "ipip = IP in IP. Encapsulates IP in IP. local/remote = endpoints. Simple VPN.",
    de: "ip link add ipip0 type ipip local 1.2.3.4 remote 5.6.7.8. ip link set ipip0 up. Route via ipip0."
  }),
  (_i: number) => ({
    q: "What does `iptables -A OUTPUT -m owner --uid-owner 1000 -j ACCEPT` do?",
    o: ["Allows outbound from processes owned by UID 1000", "Owner match", "UID filter", "User match"],
    c: 0,
    e: "owner module matches process owner. --uid-owner, --gid-owner. OUTPUT chain only.",
    de: "iptables -m owner. Only in OUTPUT. For user-based filtering. Requires root."
  }),
  (_i: number) => ({
    q: "What does `nft add rule inet filter input tcp dport { 22, 80, 443 } accept` do?",
    o: ["Accepts TCP ports 22, 80, 443 in one rule", "Port set accept", "Multiple ports", "Set of ports"],
    c: 0,
    e: "tcp dport { 22, 80, 443 } = set. One rule for multiple. Efficient.",
    de: "nft set syntax. { 22, 80, 443 }. Add/remove without rule change. Clean."
  }),
  (_i: number) => ({
    q: "What does `ip link add veth1 type veth peer name veth2` create?",
    o: ["Paired virtual Ethernet (veth) interfaces", "Veth pair", "Virtual ethernet pair", "Connected pair"],
    c: 0,
    e: "veth pair: two interfaces, connected. Traffic in one = out other. For namespaces.",
    de: "ip link add veth1 type veth peer name veth2. Move each to different netns for connectivity."
  }),
  (_i: number) => ({
    q: "What does `curl -X DELETE URL` send?",
    o: ["HTTP DELETE method request", "DELETE request", "Delete method", "HTTP DELETE"],
    c: 0,
    e: "curl -X DELETE. REST: delete resource. Some APIs use POST for delete (legacy).",
    de: "curl -X DELETE https://api.example.com/users/1. Idempotent. 204 No Content typical."
  }),
  (_i: number) => ({
    q: "What does REST stateless mean?",
    o: ["Each request self-contained; no server-side session", "No server session", "Stateless", "Self-contained"],
    c: 0,
    e: "Server doesn't store client state. All in request. Scalable, cacheable.",
    de: "Token in header. No session store. Horizontal scaling. JWT, API keys."
  }),
  (_i: number) => ({
    q: "What does `nginx resolver` directive do?",
    o: ["DNS resolver for proxy_pass with variables", "DNS resolver", "Proxy DNS", "Variable resolve"],
    c: 0,
    e: "resolver 8.8.8.8;. Required when proxy_pass has variable. Dynamic upstream.",
    de: "resolver 8.8.8.8 valid=300s;. proxy_pass http://$host; needs resolver."
  }),
  (_i: number) => ({
    q: "What does `ss -t state established` show?",
    o: ["Only established TCP connections", "Established only", "Active connections", "TCP established"],
    c: 0,
    e: "ss -t state established. Filters by state. established, syn-sent, time-wait, etc.",
    de: "ss -t state established '( dport = :80 or sport = :80 )'. Filter connections."
  }),
  (_i: number) => ({
    q: "What does `iptables -A INPUT -p tcp --syn -m connlimit --connlimit-above 20 --connlimit-mask 24 -j REJECT` limit?",
    o: ["20 connections per /24 subnet", "Per-subnet limit", "Connlimit /24", "Subnet limit"],
    c: 0,
    e: "connlimit-mask 24 = per /24. Without = per IP. Limits whole subnet.",
    de: "--connlimit-mask 24. 192.168.1.0/24 shares limit. DDoS from botnet mitigation."
  }),
  (_i: number) => ({
    q: "What does `nft add rule inet filter input limit rate 10/second accept` do?",
    o: ["Accepts up to 10 packets/sec, rest hit next rule", "Rate limit accept", "10/sec limit", "Limit rule"],
    c: 0,
    e: "limit rate 10/second. First 10 pass. 11th+ go to next rule. Per-rule limit.",
    de: "limit rate 10/second accept. Or limit rate 10/second drop. Inline rate limiting."
  }),
  (_i: number) => ({
    q: "What does `bridge link set dev eth0 priority 10` set?",
    o: ["Port priority for STP (lower = preferred for root)", "STP port priority", "Bridge priority", "Port priority"],
    c: 0,
    e: "Port priority 0-240, step 16. Lower = preferred. Root port selection.",
    de: "bridge link set dev eth0 priority 10. When costs equal, priority breaks tie."
  }),
  (_i: number) => ({
    q: "What does `curl -o - URL` output?",
    o: ["Writes response to stdout (hyphen = stdout)", "Output to stdout", "Pipe output", "Stdout"],
    c: 0,
    e: "curl -o - or -o /dev/stdout. Response to stdout. For piping.",
    de: "curl -s -o - URL | jq . -s for JSON. -s silent. Pipe to processor."
  }),
  (_i: number) => ({
    q: "What does HTTP Cache-Control max-age specify?",
    o: ["Seconds response is fresh (cacheable)", "Cache freshness", "Max age seconds", "Cache TTL"],
    c: 0,
    e: "Cache-Control: max-age=3600. Fresh for 3600s. no-cache = revalidate. no-store = don't cache.",
    de: "max-age=3600. Client caches. no-cache = must validate. no-store = no cache at all."
  }),
  (_i: number) => ({
    q: "What does `nginx proxy_buffering off` do?",
    o: ["Disables buffering; streams response to client", "No buffering", "Stream response", "Real-time proxy"],
    c: 0,
    e: "proxy_buffering off. Response streams. For long-polling, SSE, streaming.",
    de: "proxy_buffering off. proxy_request_buffering off for request. Low latency."
  }),
  (_i: number) => ({
    q: "What does HAProxy `stick-table` do?",
    o: ["Tracks client state for persistence or rate limiting", "Session table", "Client tracking", "Stick table"],
    c: 0,
    e: "stick-table stores client info. For stickiness, rate limiting. type ip size 100k.",
    de: "stick-table type ip size 100k expire 30m. stick on src. Rate limiting, persistence."
  }),
  (_i: number) => ({
    q: "What does `ip route add default via 10.0.0.1 metric 100` use metric for?",
    o: ["Route preference when multiple defaults exist", "Route priority", "Default preference", "Metric for selection"],
    c: 0,
    e: "metric = administrative distance. Lower = preferred. Multiple gateways.",
    de: "ip route add default via 10.0.0.1 metric 100. metric 200 = backup. Failover order."
  }),
  (_i: number) => ({
    q: "What does `iptables -t raw -A PREROUTING -j TRACE` do?",
    o: ["Traces packets for debugging (hits trace target)", "Packet trace", "Iptables debug", "TRACE target"],
    c: 0,
    e: "raw table before conntrack. TRACE logs to dmesg. iptables -t raw -A PREROUTING -j TRACE.",
    de: "echo 1 > /proc/net/nf_conntrack_log. dmesg for trace. Debug rule order."
  }),
  (_i: number) => ({
    q: "What does `nft add flowtable inet filter ft { hook ingress devices = { eth0 }; }` create?",
    o: ["Hardware offload flowtable for eth0", "Flowtable offload", "Hardware offload", "Netdev flowtable"],
    c: 0,
    e: "flowtable = hardware offload. Bypasses CPU for established. Requires driver support.",
    de: "nft add flowtable. add flowtable inet filter ft. add rule ... flow offload @ft. Fast path."
  }),
  (_i: number) => ({
    q: "What does `ip link add ipvlan0 link eth0 type ipvlan mode l2` create?",
    o: ["IPvlan L2 mode (shared MAC, different IPs)", "IPvlan L2", "IP VLAN", "Shared MAC"],
    c: 0,
    e: "ipvlan: same MAC, different IPs. mode l2 = L2. l3 = L3. Lighter than macvlan.",
    de: "ipvlan vs macvlan. ipvlan shares MAC. Good for containers. mode l2/l3."
  }),
  (_i: number) => ({
    q: "What does `curl --compressed` request?",
    o: ["Accepts compressed encoding (gzip, etc)", "Compression", "Compressed response", "Accept-Encoding"],
    c: 0,
    e: "curl --compressed adds Accept-Encoding: gzip, deflate, br. Server may compress.",
    de: "curl --compressed URL. Smaller transfer. Automatic decompress. br = Brotli."
  }),
  (_i: number) => ({
    q: "What does REST resource URI /users/1/orders represent?",
    o: ["Orders sub-resource of user 1", "Nested resource", "User orders", "Sub-resource"],
    c: 0,
    e: "Nested resource. Orders belonging to user 1. Hierarchical.",
    de: "GET /users/1/orders. Collection under user. RESTful nesting. Avoid deep nesting."
  }),
  (_i: number) => ({
    q: "What does `nginx proxy_http_version 1.1` enable?",
    o: ["HTTP/1.1 to backend (enables keepalive)", "HTTP/1.1 upstream", "Keepalive upstream", "Backend 1.1"],
    c: 0,
    e: "proxy_http_version 1.1. Required for keepalive. Default 1.0 = close each time.",
    de: "proxy_http_version 1.1; proxy_set_header Connection \"\";. Upstream connection pooling."
  }),
  (_i: number) => ({
    q: "What does `ip link set eth0 type bridge_slave` fail with?",
    o: ["eth0 is not a valid type; use 'master' to attach to bridge", "Invalid type", "Wrong command", "Use master"],
    c: 0,
    e: "bridge_slave not a type. Use: ip link set eth0 master br0. master = attach.",
    de: "ip link set eth0 master br0. No 'type bridge_slave'. master/nomaster for bridge."
  }),
  (_i: number) => ({
    q: "What does `iptables -A INPUT -m hashlimit --hashlimit 10/sec --hashlimit-mode srcip -j ACCEPT` do?",
    o: ["Allows 10 packets/sec per source IP", "Per-IP rate limit", "Hashlimit", "Rate per IP"],
    c: 0,
    e: "hashlimit: per-bucket limit. srcip = bucket per IP. 10/sec each IP.",
    de: "hashlimit more flexible than limit. Per-IP, per-port. DDoS mitigation."
  }),
  (_i: number) => ({
    q: "What does `nft add rule inet filter input ip daddr 192.168.1.0/24 drop` do?",
    o: ["Drops packets destined to private range (anti-spoof)", "Drop dest private", "Dest block", "Spoof drop"],
    c: 0,
    e: "ip daddr = destination. Dropping dest to private on WAN = anti-spoof.",
    de: "Private as destination from internet = invalid. Smurf, spoofing protection."
  }),
  (_i: number) => ({
    q: "What does `tc filter add dev eth0 parent 1: protocol ip prio 1 u32 match ip dst 1.2.3.4 flowid 1:10` do?",
    o: ["Directs traffic to 1.2.3.4 to class 1:10", "TC filter", "Traffic match", "Class assignment"],
    c: 0,
    e: "tc filter matches and classifies. u32 = packet match. flowid = target class.",
    de: "tc filter. u32 match. flowid 1:10. For traffic shaping, QoS. Complex syntax."
  }),
  (_i: number) => ({
    q: "What does `curl -N` disable?",
    o: ["Buffering (stream output for SSE)", "No buffer", "Stream mode", "Unbuffered"],
    c: 0,
    e: "curl -N disables buffering. For Server-Sent Events. Real-time stream.",
    de: "curl -N URL. SSE, streaming. Output as received. -N = --no-buffer."
  }),
  (_i: number) => ({
    q: "What does HTTP 206 Partial Content indicate?",
    o: ["Response is partial (Range request)", "Partial response", "Range request", "206 partial"],
    c: 0,
    e: "206 = Range request satisfied. Content-Range header. Resume downloads.",
    de: "Range: bytes=0-1023. 206 + Content-Range. Partial content. Resumable downloads."
  }),
  (_i: number) => ({
    q: "What does `nginx proxy_cache_valid 200 10m` set?",
    o: ["Caches 200 responses for 10 minutes", "Cache 200", "Cache validity", "200 cache TTL"],
    c: 0,
    e: "proxy_cache_valid 200 10m;. Cache 200 OK for 10 min. 301 1h; etc.",
    de: "proxy_cache_valid 200 10m 301 1h;. Different TTL per status. proxy_cache zone."
  }),
  (_i: number) => ({
    q: "What does HAProxy `cookie SERVERID insert indirect` do?",
    o: ["Inserts cookie for session persistence", "Cookie persistence", "Sticky session", "Insert cookie"],
    c: 0,
    e: "cookie SERVERID insert. Server adds cookie. indirect = don't send to server.",
    de: "stickiness via cookie. insert = HAProxy adds. indirect = backend doesn't see. Persistence."
  }),
  (_i: number) => ({
    q: "What does `ip route add 0.0.0.0/0 via 192.168.1.1 table 100` require to take effect?",
    o: ["ip rule directing traffic to table 100", "Matching rule", "Policy rule", "Rule for table"],
    c: 0,
    e: "Table 100 used only if rule points to it. ip rule add ... lookup 100.",
    de: "ip rule add from 10.0.0.0/24 lookup 100. Without rule, table 100 unused."
  }),
  (_i: number) => ({
    q: "What does `iptables -A INPUT -m comment --comment 'Allow SSH' -j ACCEPT` add?",
    o: ["Comment for rule (documentation only)", "Rule comment", "Documentation", "Rule note"],
    c: 0,
    e: "comment module. --comment 'text'. Shows in iptables -L -v. For documentation.",
    de: "iptables -m comment --comment 'Allow SSH from office'. iptables-save preserves."
  }),
  (_i: number) => ({
    q: "What does `nft delete rule inet filter input handle 5` do?",
    o: ["Deletes rule with handle 5", "Delete by handle", "Remove rule", "Handle delete"],
    c: 0,
    e: "nft delete rule ... handle 5. Handle = rule ID. nft -a list ruleset shows handles.",
    de: "nft -a list ruleset. handle 5. nft delete rule inet filter input handle 5. Precise delete."
  }),
  (_i: number) => ({
    q: "What does `bridge mdb show` display?",
    o: ["Multicast group membership (IGMP/MLD)", "Multicast MDB", "IGMP groups", "Multicast table"],
    c: 0,
    e: "bridge mdb = multicast forwarding database. Which groups on which ports.",
    de: "bridge mdb show. Multicast routing. IGMP snooping. For streaming, discovery."
  }),
  (_i: number) => ({
    q: "What does `curl --retry 3` do on failure?",
    o: ["Retries request up to 3 times", "Retry on fail", "3 retries", "Retry logic"],
    c: 0,
    e: "curl --retry 3. On transient failure, retry. --retry-delay for spacing.",
    de: "curl --retry 3 --retry-delay 5 URL. Transient errors. Exponential backoff with --retry-delay."
  }),
  (_i: number) => ({
    q: "What does REST 204 No Content mean?",
    o: ["Success, no response body (e.g. DELETE)", "No content", "Empty success", "204 success"],
    c: 0,
    e: "204 = success, no body. Common for DELETE. 200 with body for GET.",
    de: "DELETE /users/1 returns 204. Success, nothing to return. Idempotent."
  }),
  (_i: number) => ({
    q: "What does `nginx upstream least_conn` do?",
    o: ["Sends to backend with fewest connections", "Least connections", "Connection-based LB", "Dynamic LB"],
    c: 0,
    e: "upstream backend { least_conn; server ...; }. Picks least loaded. Good for variable duration.",
    de: "least_conn. Better than round-robin when request duration varies. DB, long requests."
  }),
  (_i: number) => ({
    q: "What does HAProxy `mode http` vs `mode tcp` differ?",
    o: ["http = L7 (inspect); tcp = L4 (opaque)", "L7 vs L4", "HTTP vs TCP", "Layer difference"],
    c: 0,
    e: "mode http: inspect, rewrite, stick on cookie. mode tcp: just forward bytes.",
    de: "mode http for HTTP. mode tcp for MySQL, custom. frontend/backend mode."
  }),
];
