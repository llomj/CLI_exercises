// LEVEL 7: DOLPHIN — Advanced Networking (CLI)
// 100 Beginner questions. Intermediate/Expert use placeholders.

const beginner = [
  (_i: number) => ({
    q: "What does `ip addr add` do?",
    o: ["Adds IP address to interface", "Adds address", "Assigns IP", "Sets IP"],
    c: 0,
    e: "ip addr add 192.168.1.10/24 dev eth0. Part of iproute2. Replaces ifconfig.",
    de: "ip addr add/del. /24 = prefix. ip addr flush dev eth0. Temporary until reboot."
  }),
  (_i: number) => ({
    q: "What does `ip link set eth0 up` do?",
    o: ["Brings interface up", "Enables interface", "Activates eth0", "Turns on interface"],
    c: 0,
    e: "ip link set eth0 up enables interface. down to disable.",
    de: "ip link set eth0 up. ifconfig eth0 up equivalent. Must be up to pass traffic."
  }),
  (_i: number) => ({
    q: "What does `ip route add default via 192.168.1.1` do?",
    o: ["Adds default gateway", "Adds route", "Sets gateway", "Default route"],
    c: 0,
    e: "ip route add default via gw sets default gateway. ip route del default to remove.",
    de: "ip route add default via 192.168.1.1. Replaces route add default gw. Required for internet."
  }),
  (_i: number) => ({
    q: "What does `iptables -L` do?",
    o: ["Lists firewall rules", "Lists iptables", "Shows rules", "Firewall list"],
    c: 0,
    e: "iptables -L lists rules. -L INPUT, -L FORWARD, -L OUTPUT. -n for numeric, -v verbose.",
    de: "iptables -L -n -v. Chain policy. iptables -A to append. Legacy, nftables replacing."
  }),
  (_i: number) => ({
    q: "What does `iptables -A INPUT -p tcp --dport 22 -j ACCEPT` do?",
    o: ["Allows incoming SSH (port 22)", "Accepts TCP 22", "Allows port 22", "SSH rule"],
    c: 0,
    e: "Appends rule: accept TCP port 22 (SSH) on INPUT. -A append, -j jump to target.",
    de: "iptables -A INPUT -p tcp --dport 22 -j ACCEPT. Order matters. First match wins."
  }),
  (_i: number) => ({
    q: "What does `iptables -P INPUT DROP` do?",
    o: ["Sets default policy for INPUT to DROP", "Policy drop", "Default drop", "INPUT policy"],
    c: 0,
    e: "iptables -P sets chain policy. DROP = deny by default. ACCEPT = allow by default.",
    de: "iptables -P INPUT DROP. Policy when no rule matches. Careful: can lock you out."
  }),
  (_i: number) => ({
    q: "What does `nft list ruleset` show?",
    o: ["All nftables rules", "Nft ruleset", "Nftables rules", "Firewall rules"],
    c: 0,
    e: "nft list ruleset shows all tables, chains, rules. nftables is iptables successor.",
    de: "nft list ruleset. nft add table, chain, rule. Modern replacement for iptables."
  }),
  (_i: number) => ({
    q: "What does `ip link add br0 type bridge` do?",
    o: ["Creates bridge interface", "Adds bridge", "Creates bridge", "Bridge interface"],
    c: 0,
    e: "Creates bridge br0. ip link set eth0 master br0 adds port. For VMs, containers.",
    de: "ip link add br0 type bridge. ip link set eth1 master br0. Bridge = L2 switch."
  }),
  (_i: number) => ({
    q: "What is a VLAN?",
    o: ["Virtual LAN (802.1Q tagged network)", "Virtual network", "VLAN tag", "Tagged network"],
    c: 0,
    e: "VLAN splits one physical network into logical segments. 802.1Q tag in Ethernet frame.",
    de: "ip link add link eth0 name eth0.10 type vlan id 10. Isolates traffic. L2 segmentation."
  }),
  (_i: number) => ({
    q: "What does `ip link add link eth0 name eth0.10 type vlan id 10` do?",
    o: ["Creates VLAN 10 on eth0", "Adds VLAN", "VLAN interface", "Creates tagged interface"],
    c: 0,
    e: "Creates eth0.10 for VLAN 10. Traffic tagged with 802.1Q. ip addr on eth0.10.",
    de: "VLAN 10 on eth0. eth0.10 gets its own IP. Requires switch support for tagged."
  }),
  (_i: number) => ({
    q: "What does `tcpdump port 80` do?",
    o: ["Captures packets on port 80", "Tcpdump port 80", "HTTP capture", "Port 80 capture"],
    c: 0,
    e: "tcpdump port 80 captures HTTP. -i eth0 for interface. -w file to save. Requires root.",
    de: "tcpdump -i eth0 port 80. tcpdump -w cap.pcap. tcpdump -r cap.pcap to read."
  }),
  (_i: number) => ({
    q: "What does `ss -t state established` show?",
    o: ["Established TCP connections", "TCP established", "Active connections", "Connected sockets"],
    c: 0,
    e: "ss -t state established shows active TCP. state time-wait, state listening, etc.",
    de: "ss -t state established. ss -t state listening. Quick connection overview."
  }),
  (_i: number) => ({
    q: "What does `conntrack -L` show?",
    o: ["Connection tracking table", "Conntrack list", "Tracked connections", "NAT connections"],
    c: 0,
    e: "conntrack -L shows tracked connections. Used by iptables NAT, stateful firewall.",
    de: "conntrack -L. conntrack -D to delete. Part of netfilter. Stateful inspection."
  }),
  (_i: number) => ({
    q: "What does `iptables -t nat -L` show?",
    o: ["NAT table rules", "NAT rules", "Nat table", "Translation rules"],
    c: 0,
    e: "iptables -t nat lists NAT rules. PREROUTING, POSTROUTING, OUTPUT.",
    de: "iptables -t nat -L. MASQUERADE for outbound. DNAT for port forward. SNAT for source."
  }),
  (_i: number) => ({
    q: "What does `iptables -t nat -A POSTROUTING -j MASQUERADE` do?",
    o: ["Enables outbound NAT (masquerade)", "NAT masquerade", "Outbound NAT", "Source NAT"],
    c: 0,
    e: "MASQUERADE does SNAT for outbound. For routers. Uses interface IP automatically.",
    de: "iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE. Typical for gateway."
  }),
  (_i: number) => ({
    q: "What does `bridge link show` do?",
    o: ["Shows bridge port status", "Bridge links", "Bridge ports", "Bridge status"],
    c: 0,
    e: "bridge link or brctl show. Which interfaces are in bridge. STP state.",
    de: "bridge link show. ip link show type bridge. brctl show on older systems."
  }),
  (_i: number) => ({
    q: "What does `ip netns add foo` do?",
    o: ["Creates network namespace", "Adds namespace", "Network namespace", "Creates netns"],
    c: 0,
    e: "ip netns add creates namespace. ip netns exec foo cmd runs in namespace. Isolation.",
    de: "ip netns add foo. ip netns exec foo bash. Isolated network stack. For containers."
  }),
  (_i: number) => ({
    q: "What does `ip netns exec ns1 ping ns2` do?",
    o: ["Runs ping in network namespace ns1", "Exec in namespace", "Ping from ns", "Namespace exec"],
    c: 0,
    e: "ip netns exec runs command in that namespace. Sees only that namespace's interfaces.",
    de: "ip netns exec ns1 ping 10.0.0.2. Command runs with ns1's network view."
  }),
  (_i: number) => ({
    q: "What does `ip link add veth0 type veth peer name veth1` do?",
    o: ["Creates veth pair (virtual Ethernet)", "Veth pair", "Virtual ethernet", "Connected pair"],
    c: 0,
    e: "Creates two linked interfaces. Traffic in veth0 goes to veth1. For namespaces, bridges.",
    de: "ip link add veth0 type veth peer name veth1. Like cable between two interfaces."
  }),
  (_i: number) => ({
    q: "What does `tc qdisc add dev eth0 root tbf rate 1mbit` do?",
    o: ["Traffic shaping: limits eth0 to 1 Mbps", "TC rate limit", "Traffic control", "Bandwidth limit"],
    c: 0,
    e: "tc qdisc adds queue discipline. tbf = token bucket. rate limits egress.",
    de: "tc qdisc add dev eth0 root tbf rate 1mbit burst 32kbit. Traffic shaping."
  }),
  (_i: number) => ({
    q: "What does `iptables -I INPUT 1 -s 192.168.1.0/24 -j ACCEPT` do?",
    o: ["Inserts rule at position 1: accept from subnet", "Insert rule", "Accept subnet", "Rule insert"],
    c: 0,
    e: "iptables -I inserts at position. -s source. Accepts from 192.168.1.0/24.",
    de: "iptables -I INPUT 1 -s 192.168.1.0/24 -j ACCEPT. -I = insert, -A = append."
  }),
  (_i: number) => ({
    q: "What does `iptables -F` do?",
    o: ["Flushes all rules in chain", "Flush rules", "Clears chain", "Removes rules"],
    c: 0,
    e: "iptables -F flushes chain. iptables -F INPUT. Clears rules, not policy. Careful!",
    de: "iptables -F. iptables -F INPUT. Policy remains. Can lock you out if default DROP."
  }),
  (_i: number) => ({
    q: "What does `nft add table inet filter` do?",
    o: ["Creates nftables table", "Adds table", "Nft table", "Creates filter table"],
    c: 0,
    e: "nft add table inet filter. inet = IPv4+IPv6. Tables hold chains.",
    de: "nft add table inet filter. nft add chain inet filter input { type filter hook input priority 0; }."
  }),
  (_i: number) => ({
    q: "What does `ip rule add from 10.0.0.0/8 lookup 100` do?",
    o: ["Adds policy routing rule", "IP rule", "Policy route", "Routing rule"],
    c: 0,
    e: "ip rule adds policy rule. Traffic from 10/8 uses table 100. ip rule list.",
    de: "ip rule add from 10.0.0.0/8 lookup 100. Policy routing. Multiple tables."
  }),
  (_i: number) => ({
    q: "What does `ip route add 10.0.0.0/8 via 192.168.1.1 table 100` do?",
    o: ["Adds route in specific table", "Route in table", "Table route", "Adds to table 100"],
    c: 0,
    e: "ip route add ... table 100. Table 100 has its own routes. Used with ip rule.",
    de: "ip route add 10.0.0.0/8 via 192.168.1.1 table 100. ip route show table 100."
  }),
  (_i: number) => ({
    q: "What does `ebtables -L` show?",
    o: ["Ethernet bridge firewall rules", "Ebtables list", "Bridge firewall", "L2 rules"],
    c: 0,
    e: "ebtables filters at Ethernet layer. For bridges. L2 vs L3 (iptables).",
    de: "ebtables -L. Filter, NAT, broute tables. Less common than iptables."
  }),
  (_i: number) => ({
    q: "What does `arping -I eth0 192.168.1.1` do?",
    o: ["Sends ARP request on eth0", "ARP ping", "ARP request", "Layer 2 ping"],
    c: 0,
    e: "arping sends ARP. Checks if host responds at L2. -I interface. Good for same subnet.",
    de: "arping -I eth0 192.168.1.1. -c 3 for count. Works when ICMP blocked."
  }),
  (_i: number) => ({
    q: "What does `nc -u host port` do?",
    o: ["UDP mode (vs TCP default)", "NC UDP", "UDP connect", "Netcat UDP"],
    c: 0,
    e: "nc -u uses UDP. nc -u host 53 for DNS. nc -ul -p 1234 for UDP listen.",
    de: "nc -u 192.168.1.1 53. UDP is connectionless. Different from TCP nc."
  }),
  (_i: number) => ({
    q: "What does `socat` do?",
    o: ["Multipurpose relay (like netcat++)", "Socket cat", "Relay tool", "Bidirectional relay"],
    c: 0,
    e: "socat connects two channels. socat TCP-LISTEN:80,fork TCP:host:80. More flexible than nc.",
    de: "socat STDIO TCP:host:80. socat TCP-LISTEN:8080,fork EXEC:./server. Fork for multi-connect."
  }),
  (_i: number) => ({
    q: "What does `curl --unix-socket /tmp/sock http://localhost/` do?",
    o: ["Uses Unix socket instead of TCP", "Curl unix socket", "Unix socket HTTP", "Socket curl"],
    c: 0,
    e: "curl --unix-socket talks to HTTP server via Unix socket. Docker, nginx local.",
    de: "curl --unix-socket /var/run/docker.sock http://localhost/containers/json. Docker API."
  }),
  (_i: number) => ({
    q: "What does `wireshark` (CLI: tshark) do?",
    o: ["Packet capture and analysis", "Packet analyzer", "Wireshark capture", "Protocol analyzer"],
    c: 0,
    e: "tshark is CLI Wireshark. tshark -i eth0. Captures, decodes protocols.",
    de: "tshark -i eth0 -w cap.pcap. tshark -r cap.pcap. Decodes HTTP, TLS, etc."
  }),
  (_i: number) => ({
    q: "What does `iptables-save` output?",
    o: ["Current rules in restore-friendly format", "Iptables save", "Rules dump", "Backup rules"],
    c: 0,
    e: "iptables-save dumps rules. iptables-save > file. iptables-restore < file to restore.",
    de: "iptables-save. iptables-save > /etc/iptables.rules. For backup, migration."
  }),
  (_i: number) => ({
    q: "What does `nft flush ruleset` do?",
    o: ["Removes all nftables rules", "Flush nft", "Clears ruleset", "Removes all rules"],
    c: 0,
    e: "nft flush ruleset removes everything. nft add for new. Careful: drops all filtering.",
    de: "nft flush ruleset. Clean slate. Then nft add table, chain, rule. Or load from file."
  }),
  (_i: number) => ({
    q: "What does `ip link set eth0 mtu 1500` do?",
    o: ["Sets MTU (max transmission unit)", "Set MTU", "MTU 1500", "Packet size"],
    c: 0,
    e: "ip link set eth0 mtu 1500. Default often 1500. Jumbo 9000. Lower for VPN/PPPoE.",
    de: "ip link set eth0 mtu 1500. MTU = max frame size. Too high = fragmentation. VPN often 1400."
  }),
  (_i: number) => ({
    q: "What does `ethtool -K eth0 gro off` do?",
    o: ["Disables GRO (generic receive offload)", "Disable GRO", "Ethtool offload", "Kernel offload"],
    c: 0,
    e: "ethtool -K toggles offloads. gro, tso, gso. Off for debugging, some VPN.",
    de: "ethtool -K eth0 gro off. -k shows current. Offloads can cause issues with packet capture."
  }),
  (_i: number) => ({
    q: "What does `ss -x` show?",
    o: ["Unix domain sockets", "Unix sockets", "SS unix", "Local sockets"],
    c: 0,
    e: "ss -x shows Unix sockets. -t TCP, -u UDP, -x Unix. Path in Peer column.",
    de: "ss -x. Unix sockets for local IPC. /var/run/docker.sock, MySQL socket, etc."
  }),
  (_i: number) => ({
    q: "What does `ip -6 addr` show?",
    o: ["IPv6 addresses", "IPv6 addrs", "IP v6", "IPv6 only"],
    c: 0,
    e: "ip -6 or ip -4 filters by family. ip -6 addr show. IPv6 addresses.",
    de: "ip -6 addr. inet6. Scope link, global. ip -4 for IPv4 only."
  }),
  (_i: number) => ({
    q: "What does `radvd` do?",
    o: ["Router Advertisement daemon (IPv6)", "RA daemon", "IPv6 RA", "Router ads"],
    c: 0,
    e: "radvd sends Router Advertisements. IPv6 autoconfig. Clients get prefix, default route.",
    de: "radvd. Sends RAs on link. SLAAC. Replaced by systemd-networkd or other in some distros."
  }),
  (_i: number) => ({
    q: "What does `ndp -a` show (macOS/BSD)?",
    o: ["IPv6 neighbor table (like ip neigh)", "NDP table", "IPv6 neighbors", "Neighbor discovery"],
    c: 0,
    e: "ndp -a shows IPv6 neighbor cache. Like arp for IPv6. Linux: ip -6 neigh.",
    de: "ndp -a. IPv6 equivalent of arp -a. Neighbor Discovery Protocol."
  }),
  (_i: number) => ({
    q: "What does `iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT` do?",
    o: ["Allows return traffic for established connections", "Stateful rule", "Established accept", "Connection tracking"],
    c: 0,
    e: "Allows replies. Stateful: allow established/related. Usually first rule after loopback.",
    de: "conntrack module. ESTABLISHED = reply to outbound. RELATED = FTP data, etc. Essential for stateful."
  }),
  (_i: number) => ({
    q: "What does `ip route get 8.8.8.8` show?",
    o: ["Which route would be used for that IP", "Route lookup", "Get route", "Which route"],
    c: 0,
    e: "ip route get shows path for packet to that IP. Gateway, interface, source.",
    de: "ip route get 8.8.8.8. Debug routing. Shows via, dev, src. Policy routing applied."
  }),
  (_i: number) => ({
    q: "What does `tracepath host` do?",
    o: ["Path discovery (like traceroute, no root)", "Trace path", "Path to host", "Route trace"],
    c: 0,
    e: "tracepath discovers path. No root needed. Uses UDP. tracepath6 for IPv6.",
    de: "tracepath example.com. Similar to traceroute. Some systems prefer it (no privs)."
  }),
  (_i: number) => ({
    q: "What does `ab -n 1000 -c 10 URL` do?",
    o: ["ApacheBench: 1000 requests, 10 concurrent", "AB benchmark", "HTTP benchmark", "Load test"],
    c: 0,
    e: "ab benchmarks HTTP. -n total requests, -c concurrency. ab -n 1000 -c 10 http://...",
    de: "ApacheBench. Requests per second, latency. Simple load test. wrk, hey alternatives."
  }),
  (_i: number) => ({
    q: "What does `wrk -t4 -c100 -d30s URL` do?",
    o: ["HTTP benchmark: 4 threads, 100 conn, 30 sec", "Wrk benchmark", "Load test", "HTTP stress"],
    c: 0,
    e: "wrk -t threads, -c connections, -d duration. Lua scripting. High-performance benchmark.",
    de: "wrk -t4 -c100 -d30s http://localhost. More efficient than ab. wrk -s script.lua."
  }),
  (_i: number) => ({
    q: "What does `httpie` (http) do?",
    o: ["User-friendly HTTP client", "HTTP client", "Httpie", "REST client"],
    c: 0,
    e: "http GET URL. Pretty output. http POST URL key=value. Alternative to curl.",
    de: "http GET example.com. http POST api.com data:=@file.json. Colored, formatted."
  }),
  (_i: number) => ({
    q: "What does `jq` do?",
    o: ["JSON processor for CLI", "JSON query", "JQ processor", "JSON parser"],
    c: 0,
    e: "jq parses JSON. echo '{\"a\":1}' | jq .a. curl API | jq .field. Filtering, formatting.",
    de: "curl api | jq .data[].name. jq -r for raw. jq '.items[] | select(.id==1)'."
  }),
  (_i: number) => ({
    q: "What does `curl -H 'Accept: application/json' URL` do?",
    o: ["Requests JSON response", "Accept JSON", "JSON header", "API request"],
    c: 0,
    e: "curl -H adds header. Accept tells server preferred format. Content-Type for request body.",
    de: "curl -H 'Accept: application/json' -H 'Authorization: Bearer x' https://api.example.com."
  }),
  (_i: number) => ({
    q: "What does `iptables -N MYCHAIN` do?",
    o: ["Creates new chain", "New chain", "Custom chain", "Creates chain"],
    c: 0,
    e: "iptables -N creates chain. iptables -A INPUT -j MYCHAIN to jump. Organize rules.",
    de: "iptables -N LOGDROP. iptables -A LOGDROP -j LOG. iptables -A LOGDROP -j DROP. Modular."
  }),
  (_i: number) => ({
    q: "What does `iptables -A INPUT -j LOG --log-prefix 'DROP: '` do?",
    o: ["Logs matching packets with prefix", "Iptables log", "Log rule", "Packet log"],
    c: 0,
    e: "LOG target logs packet. --log-prefix for identification. Check dmesg, journalctl.",
    de: "iptables -A INPUT -j LOG --log-prefix 'FIREWALL: '. Debugging. Usually before DROP."
  }),
  (_i: number) => ({
    q: "What does `nft add rule inet filter input tcp dport 22 accept` do?",
    o: ["Adds nftables rule: accept SSH", "Nft accept SSH", "Allow port 22", "Nft rule"],
    c: 0,
    e: "nft add rule inet filter input tcp dport 22 accept. Simpler syntax than iptables.",
    de: "nft add rule inet filter input tcp dport { 22, 80, 443 } accept. Sets for multiple."
  }),
  (_i: number) => ({
    q: "What does `ip tunnel add tun0 mode gre remote 1.2.3.4 local 5.6.7.8` do?",
    o: ["Creates GRE tunnel", "IP tunnel", "GRE tunnel", "Tunnel interface"],
    c: 0,
    e: "Creates GRE (Generic Routing Encapsulation) tunnel. L3 over L3. VPN, overlay.",
    de: "ip tunnel add tun0 mode gre remote 1.2.3.4 local 5.6.7.8. ip link set tun0 up. Route via tun0."
  }),
  (_i: number) => ({
    q: "What does `wg` (WireGuard) do?",
    o: ["WireGuard VPN management", "WireGuard", "WG VPN", "VPN config"],
    c: 0,
    e: "wg show displays WireGuard status. wg-quick up wg0. Modern, simple VPN.",
    de: "wg show. wg set wg0 peer ... add. Config in /etc/wireguard. Kernel module."
  }),
  (_i: number) => ({
    q: "What does `openvpn --config client.ovpn` do?",
    o: ["Starts OpenVPN client", "OpenVPN connect", "VPN client", "OVPN connect"],
    c: 0,
    e: "openvpn --config loads config. Connects to VPN server. Creates tun/tap interface.",
    de: "openvpn --config client.ovpn. --daemon for background. Routes, DNS via config."
  }),
  (_i: number) => ({
    q: "What does `ip link add dummy0 type dummy` do?",
    o: ["Creates dummy interface (for testing)", "Dummy interface", "Add dummy", "Test interface"],
    c: 0,
    e: "dummy is virtual interface. No hardware. For testing, binding services.",
    de: "ip link add dummy0 type dummy. ip link set dummy0 up. ip addr add 192.168.99.1/24."
  }),
  (_i: number) => ({
    q: "What does `tc class add` do?",
    o: ["Adds traffic control class", "TC class", "Traffic class", "Qdisc class"],
    c: 0,
    e: "tc class defines traffic classes. For HTB, etc. Hierarchy: qdisc -> class -> filter.",
    de: "tc class add dev eth0 parent 1:1 classid 1:10 htb rate 10mbit. Traffic shaping."
  }),
  (_i: number) => ({
    q: "What does `iptables -D INPUT 3` do?",
    o: ["Deletes rule 3 from INPUT chain", "Delete rule", "Remove rule", "Iptables delete"],
    c: 0,
    e: "iptables -D deletes by number. iptables -L --line-numbers to see numbers.",
    de: "iptables -L INPUT --line-numbers. iptables -D INPUT 3. Or -D with full rule spec."
  }),
  (_i: number) => ({
    q: "What does `nft add chain inet filter input { type filter hook input priority 0; }` do?",
    o: ["Creates input chain with hook", "Nft chain", "Input chain", "Filter chain"],
    c: 0,
    e: "Creates chain attached to input hook. priority 0. Packets hit this chain on input.",
    de: "nft add chain. Hook: input, output, forward, prerouting, postrouting. Priority orders."
  }),
  (_i: number) => ({
    q: "What does `ip maddr show` show?",
    o: ["Multicast addresses on interfaces", "Multicast addrs", "IP maddr", "Multicast groups"],
    c: 0,
    e: "ip maddr shows multicast membership. For multicast routing, IGMP.",
    de: "ip maddr show. 224.0.0.0/4 range. Used by streaming, discovery protocols."
  }),
  (_i: number) => ({
    q: "What does `sysctl net.ipv4.ip_forward` show?",
    o: ["IP forwarding setting", "Sysctl forward", "IP forward", "Forwarding"],
    c: 0,
    e: "sysctl net.ipv4.ip_forward. 1 = enabled (router). 0 = disabled. /etc/sysctl.conf for persist.",
    de: "sysctl net.ipv4.ip_forward=1 to enable. Required for NAT, routing. net.ipv6.conf.all.forwarding."
  }),
  (_i: number) => ({
    q: "What does `firewalld` do?",
    o: ["Dynamic firewall manager (D-Bus)", "Firewall daemon", "Firewalld", "Dynamic firewall"],
    c: 0,
    e: "firewalld manages iptables/nftables via D-Bus. Zones, services. firewall-cmd.",
    de: "firewall-cmd --list-all. firewall-cmd --add-service=http. RHEL, Fedora default."
  }),
  (_i: number) => ({
    q: "What does `firewall-cmd --list-all` show?",
    o: ["Current zone rules and services", "Firewall list", "Zone rules", "Firewall config"],
    c: 0,
    e: "firewall-cmd --list-all shows zone, services, ports. firewall-cmd --get-default-zone.",
    de: "firewall-cmd --list-all. firewall-cmd --add-port=8080/tcp --permanent. --reload."
  }),
  (_i: number) => ({
    q: "What does `ufw status` show?",
    o: ["UFW firewall status and rules", "UFW status", "Firewall status", "UFW rules"],
    c: 0,
    e: "ufw status. ufw allow 22. ufw enable. Ubuntu's simplified firewall.",
    de: "ufw status verbose. ufw allow from 192.168.1.0/24. ufw default deny."
  }),
  (_i: number) => ({
    q: "What does `ufw allow 22/tcp` do?",
    o: ["Allows TCP port 22 (SSH)", "UFW allow", "Allow SSH", "Open port 22"],
    c: 0,
    e: "ufw allow 22/tcp. ufw deny 22. ufw enable to activate. Simple syntax.",
    de: "ufw allow 22/tcp. ufw allow from 10.0.0.0/8. ufw reload after changes."
  }),
  (_i: number) => ({
    q: "What does `ss -l` show?",
    o: ["Listening sockets only", "SS listening", "Listen sockets", "Listening ports"],
    c: 0,
    e: "ss -l shows listening. ss -tlnp = TCP listening with process. Replaces netstat -tlnp.",
    de: "ss -tlnp. -l = listening. What's accepting connections. -a for all."
  }),
  (_i: number) => ({
    q: "What does `ip link add type vrf table 100` do?",
    o: ["Creates VRF (Virtual Routing and Forwarding)", "VRF interface", "VRF table", "Virtual routing"],
    c: 0,
    e: "VRF isolates routing tables. ip link add vrf0 type vrf table 100. L3 VPN, multi-tenant.",
    de: "VRF = multiple routing tables. ip link set eth0 master vrf0. Each VRF has own table."
  }),
  (_i: number) => ({
    q: "What does `curl --interface eth1 URL` do?",
    o: ["Binds to specific interface", "Curl interface", "Source interface", "Bind interface"],
    c: 0,
    e: "curl --interface uses that interface's IP. For multi-homed hosts.",
    de: "curl --interface eth1 https://example.com. Source IP from eth1. Test routing."
  }),
  (_i: number) => ({
    q: "What does `ping -I eth1 host` do?",
    o: ["Pings from specific interface", "Ping interface", "Source interface", "Bind to interface"],
    c: 0,
    e: "ping -I eth1 uses that interface. For multi-homed. Source IP from eth1.",
    de: "ping -I eth1 8.8.8.8. When host has multiple IPs. Which path to use."
  }),
  (_i: number) => ({
    q: "What does `tcpdump -nn` do?",
    o: ["No port/name resolution (faster)", "Tcpdump numeric", "No resolve", "Numeric only"],
    c: 0,
    e: "tcpdump -n no DNS. -nn no port resolution. Faster, less noise. -nnn for no service names.",
    de: "tcpdump -nn -i eth0. Shows IPs not hostnames. Port numbers not names. Less overhead."
  }),
  (_i: number) => ({
    q: "What does `tcpdump -c 100` do?",
    o: ["Stops after 100 packets", "Tcpdump count", "100 packets", "Packet limit"],
    c: 0,
    e: "tcpdump -c 100 captures 100 then exits. -c for count. Good for sampling.",
    de: "tcpdump -c 100 -w cap.pcap. Limit capture size. Avoid filling disk."
  }),
  (_i: number) => ({
    q: "What does `ip link set eth0 master br0` do?",
    o: ["Adds eth0 to bridge br0", "Bridge add", "Add to bridge", "Bridge port"],
    c: 0,
    e: "Makes eth0 a bridge port. Traffic between ports. ip link set eth0 nomaster to remove.",
    de: "ip link set eth0 master br0. br0 sees all traffic. L2 switching. For VMs, containers."
  }),
  (_i: number) => ({
    q: "What does `brctl addbr br0` do (legacy)?",
    o: ["Creates bridge (legacy brctl)", "Add bridge", "Brctl bridge", "Create bridge"],
    c: 0,
    e: "brctl addbr br0. Legacy. Prefer ip link add br0 type bridge. brctl addif br0 eth0.",
    de: "brctl addbr br0. brctl addif br0 eth0. Older systems. ip link is modern."
  }),
  (_i: number) => ({
    q: "What does `ovs-vsctl add-br br0` do?",
    o: ["Adds Open vSwitch bridge", "OVS bridge", "Open vSwitch", "Add OVS bridge"],
    c: 0,
    e: "ovs-vsctl add-br br0. Open vSwitch. For SDN, OpenStack, Kubernetes.",
    de: "ovs-vsctl add-br br0. ovs-vsctl add-port br0 eth0. More features than Linux bridge."
  }),
  (_i: number) => ({
    q: "What does `ip link add name tap0 type tap` do?",
    o: ["Creates TAP interface (L2)", "TAP interface", "Add tap", "Virtual tap"],
    c: 0,
    e: "TAP is L2. For VMs, VPN. User-space reads/writes. Requires driver.",
    de: "ip tuntap add tap0 mode tap. TAP vs TUN: L2 vs L3. QEMU, OpenVPN use."
  }),
  (_i: number) => ({
    q: "What does `ip tuntap add tun0 mode tun` do?",
    o: ["Creates TUN interface (L3)", "TUN interface", "Add tun", "Virtual tun"],
    c: 0,
    e: "TUN is L3. IP packets. VPN typically. ip link set tun0 up.",
    de: "ip tuntap add tun0 mode tun. TUN for IP. OpenVPN, WireGuard create these."
  }),
  (_i: number) => ({
    q: "What does `nft -f file` do?",
    o: ["Loads nftables rules from file", "Nft file", "Load rules", "Nft load"],
    c: 0,
    e: "nft -f rules.nft loads rules. Flush and load. Or nft include.",
    de: "nft -f /etc/nftables.conf. nft list ruleset > backup.nft. Declarative config."
  }),
  (_i: number) => ({
    q: "What does `iptables-restore` do?",
    o: ["Restores rules from iptables-save output", "Restore iptables", "Load rules", "Iptables load"],
    c: 0,
    e: "iptables-restore < file. Applies saved rules. iptables-restore -n no flush (merge).",
    de: "iptables-save > backup. iptables-restore < backup. Migration, recovery."
  }),
  (_i: number) => ({
    q: "What does `conntrack -F` do?",
    o: ["Flushes connection tracking table", "Flush conntrack", "Clear connections", "Reset conntrack"],
    c: 0,
    e: "conntrack -F clears table. All connections forgotten. NAT may break. Use carefully.",
    de: "conntrack -F. After firewall change. Active connections may need to reconnect."
  }),
  (_i: number) => ({
    q: "What does `ip link set eth0 promisc on` do?",
    o: ["Puts interface in promiscuous mode", "Promisc mode", "Promiscuous", "Capture all"],
    c: 0,
    e: "Promiscuous receives all frames, not just for our MAC. For sniffing. ip link set eth0 promisc off.",
    de: "tcpdump often sets promisc. Security: sees all traffic. Monitor mode for wireless."
  }),
  (_i: number) => ({
    q: "What does `iw dev wlan0 set monitor otherbss` do?",
    o: ["Puts wireless in monitor mode", "Monitor mode", "Wireless monitor", "WiFi monitor"],
    c: 0,
    e: "Monitor mode receives all frames. For packet capture, analysis. otherbss = other BSS.",
    de: "iw dev wlan0 set monitor otherbss. Required for aircrack, etc. May disconnect."
  }),
  (_i: number) => ({
    q: "What does `hostapd` do?",
    o: ["WiFi AP (access point) daemon", "Host AP", "WiFi AP", "Access point"],
    c: 0,
    e: "hostapd turns interface into AP. WPA, etc. Config in hostapd.conf.",
    de: "hostapd -B config.conf. Creates WiFi network. With dnsmasq for DHCP/DNS."
  }),
  (_i: number) => ({
    q: "What does `wpa_supplicant` do?",
    o: ["WPA client (connects to WiFi)", "WPA client", "WiFi client", "Supplicant"],
    c: 0,
    e: "wpa_supplicant connects to WPA network. wpa_supplicant -i wlan0 -c wpa.conf.",
    de: "wpa_supplicant -B -i wlan0 -c wpa_supplicant.conf. Then dhclient for IP."
  }),
  (_i: number) => ({
    q: "What does `batctl o` show?",
    o: ["B.A.T.M.A.N. mesh originators", "Batman origins", "Mesh table", "BATMAN nodes"],
    c: 0,
    e: "batctl is B.A.T.M.A.N. mesh. batctl o shows nodes. Mesh networking.",
    de: "batctl o. batctl n for neighbors. batctl td for throughput. Wireless mesh."
  }),
  (_i: number) => ({
    q: "What does `ip link add type ipip local 1.2.3.4 remote 5.6.7.8` do?",
    o: ["Creates IP-in-IP tunnel", "IPIP tunnel", "IP tunnel", "Tunnel interface"],
    c: 0,
    e: "IPIP encapsulates IP in IP. Simple tunnel. ip link set tunl0 up. Add address, route.",
    de: "ip link add tunl0 type ipip local 1.2.3.4 remote 5.6.7.8. L3 tunnel. No crypto."
  }),
  (_i: number) => ({
    q: "What does `ip link add type sit remote 1.2.3.4` do?",
    o: ["Creates IPv6-in-IPv4 tunnel (SIT)", "SIT tunnel", "IPv6 tunnel", "6in4 tunnel"],
    c: 0,
    e: "SIT = Simple Internet Transition. IPv6 over IPv4. For tunnel brokers.",
    de: "ip link add sit0 type sit remote 1.2.3.4. IPv6 over IPv4. Hurricane Electric, etc."
  }),
  (_i: number) => ({
    q: "What does `curl --resolve host:443:ip URL` do?",
    o: ["Overrides DNS for host", "Curl resolve", "DNS override", "Force IP for host"],
    c: 0,
    e: "curl --resolve host:port:IP uses that IP. For testing without DNS. SNI still uses hostname.",
    de: "curl --resolve api.test:443:127.0.0.1 https://api.test. Bypass DNS. Test local."
  }),
  (_i: number) => ({
    q: "What does `ss -i` show?",
    o: ["Socket internal info (congestion, etc.)", "SS info", "Socket info", "Internal stats"],
    c: 0,
    e: "ss -i shows TCP info: rtt, cwnd, retrans. Debugging slow connections.",
    de: "ss -ti. Congestion window, RTT. ss -t state established -i. Performance tuning."
  }),
  (_i: number) => ({
    q: "What does `ethtool -S eth0` show?",
    o: ["NIC driver statistics", "Ethtool stats", "Interface stats", "Driver stats"],
    c: 0,
    e: "ethtool -S shows driver-specific counters. Drops, errors, etc. Per-interface.",
    de: "ethtool -S eth0. rx_packets, tx_errors. Vendor-specific. Debugging link issues."
  }),
  (_i: number) => ({
    q: "What does `sar -n DEV 1` show?",
    o: ["Network interface stats every 1 second", "SAR network", "Interface stats", "Network stats"],
    c: 0,
    e: "sar -n DEV 1 shows rx/s per interface. sysstat package. Historical with -f.",
    de: "sar -n DEV 1 10. 10 samples. rxkB/s, txkB/s. sar -f /var/log/sa/sa01 for history."
  }),
  (_i: number) => ({
    q: "What does `iftop` do?",
    o: ["Real-time bandwidth per connection", "Interface top", "Bandwidth monitor", "Connection bandwidth"],
    c: 0,
    e: "iftop shows live bandwidth per connection. Like top for network. Requires root.",
    de: "iftop -i eth0. Sorts by bandwidth. -n no DNS. -P port. -t text mode."
  }),
  (_i: number) => ({
    q: "What does `nload` do?",
    o: ["Real-time bandwidth per interface", "Network load", "Bandwidth graph", "Interface bandwidth"],
    c: 0,
    e: "nload shows rx/tx graphs per interface. Visual. nload eth0. Quit with q.",
    de: "nload. nload eth0 eth1. In/out graphs. Simple bandwidth monitor."
  }),
  (_i: number) => ({
    q: "What does `vnstat` do?",
    o: ["Network traffic statistics (historical)", "VN stat", "Traffic stats", "Bandwidth history"],
    c: 0,
    e: "vnstat tracks traffic over time. vnstat -d daily. vnstat -m monthly. Lightweight.",
    de: "vnstat. vnstat -i eth0. vnstat -tr for live. Logs to /var/lib/vnstat."
  }),
  (_i: number) => ({
    q: "What does `netcat -l -p 1234 -e /bin/bash` do?",
    o: ["Listens and executes shell on connect (dangerous)", "NC bind shell", "Netcat shell", "Reverse shell"],
    c: 0,
    e: "-e executes on connect. Creates bind shell. Security risk. Often disabled in modern nc.",
    de: "nc -l -p 1234 -e /bin/bash. Attacker connects, gets shell. -e removed in many distros."
  }),
  (_i: number) => ({
    q: "What does `socat TCP-LISTEN:80,fork,reuseaddr TCP:backend:8080` do?",
    o: ["Port forward / reverse proxy", "Socat forward", "TCP proxy", "Port redirect"],
    c: 0,
    e: "Listens on 80, forwards to backend:8080. fork = multiple connections. reuseaddr = quick restart.",
    de: "socat TCP-LISTEN:80,fork,reuseaddr TCP:192.168.1.10:8080. Simple TCP proxy."
  }),
  (_i: number) => ({
    q: "What does `haproxy` do?",
    o: ["Load balancer and proxy", "HA proxy", "Load balancer", "TCP/HTTP proxy"],
    c: 0,
    e: "HAProxy balances TCP/HTTP. frontend, backend. Health checks. High performance.",
    de: "haproxy -f haproxy.cfg. frontend binds :80. backend has servers. Health check."
  }),
  (_i: number) => ({
    q: "What does `nginx` (as reverse proxy) do?",
    o: ["HTTP reverse proxy and load balancer", "Nginx proxy", "Reverse proxy", "HTTP proxy"],
    c: 0,
    e: "nginx proxy_pass. Upstream for load balancing. SSL termination. Caching.",
    de: "proxy_pass http://backend; upstream backend { server 1.2.3.4; server 5.6.7.8; }"
  }),
  (_i: number) => ({
    q: "What does `stunnel` do?",
    o: ["SSL/TLS tunnel (adds TLS to plain TCP)", "Stunnel", "TLS tunnel", "SSL wrapper"],
    c: 0,
    e: "stunnel adds TLS to non-TLS service. Client -- stunnel -- backend. Wraps connection.",
    de: "stunnel. Config: connect = backend:80, client = yes. TLS without app support."
  }),
  (_i: number) => ({
    q: "What does `ssh -R 8080:localhost:80 user@host` do?",
    o: ["Reverse tunnel: remote 8080 -> local 80", "SSH reverse", "Remote forward", "Reverse forward"],
    c: 0,
    e: "ssh -R binds on remote. Remote:8080 forwards to your localhost:80. For exposing local to remote.",
    de: "ssh -R 8080:localhost:80 user@host. On host, localhost:8080 hits your machine's :80."
  }),
  (_i: number) => ({
    q: "What does `ip link set eth0 type bridge_slave` do?",
    o: ["Makes eth0 a bridge port (alternative syntax)", "Bridge slave", "Bridge port", "Set bridge"],
    c: 0,
    e: "Alternative to master. Some docs use this. ip link set eth0 master br0 more common.",
    de: "Bridge port configuration. Same effect as master. Depends on kernel/driver."
  }),
  (_i: number) => ({
    q: "What does `ebtables -t broute -A BROUTING -p IPv4 -j DROP` do?",
    o: ["Bridges but routes IP (broute)", "Ebtables broute", "Bridge route", "L2 route"],
    c: 0,
    e: "broute: bridge or route. DROP in BROUTING = don't bridge, pass to L3. For transparent proxy.",
    de: "ebtables broute. Selective bridging. Complex setups. Less common."
  }),
  (_i: number) => ({
    q: "What does `ip route add blackhole 192.168.1.0/24` do?",
    o: ["Drops traffic to that prefix", "Blackhole route", "Drop route", "Null route"],
    c: 0,
    e: "blackhole drops packets. No ICMP unreachable. For sinkholing, DDoS mitigation.",
    de: "ip route add blackhole 192.168.1.0/24. Traffic to that net is dropped. BGP blackhole."
  }),
  (_i: number) => ({
    q: "What does `ip route add unreachable 10.0.0.0/8` do?",
    o: ["Route that returns ICMP unreachable", "Unreachable route", "ICMP route", "Reject route"],
    c: 0,
    e: "unreachable sends ICMP net unreachable. Fail fast. vs blackhole (silent drop).",
    de: "ip route add unreachable 10.0.0.0/8. Client gets error. blackhole = silent."
  }),
  (_i: number) => ({
    q: "What does `quagga`/`frr` do?",
    o: ["Routing daemon (BGP, OSPF, etc.)", "Routing daemon", "BGP daemon", "Dynamic routing"],
    c: 0,
    e: "FRR (FRRouting) runs BGP, OSPF, RIP. vtysh for CLI. For routers, SDN.",
    de: "frr. vtysh. configure terminal. router bgp 65000. Dynamic routing protocols."
  }),
  (_i: number) => ({
    q: "What does `bird` do?",
    o: ["BIRD Internet Routing Daemon", "BIRD routing", "Routing daemon", "BGP OSPF"],
    c: 0,
    e: "BIRD runs BGP, OSPF, etc. birdc for control. Alternative to FRR.",
    de: "bird. birdc configure. BGP, OSPF, static. Used in IXP, datacenters."
  }),
];

import { level7Intermediate } from './level7_intermediate_cli';
import { level7Expert } from './level7_expert_cli';

export const level7Patterns = beginner.slice(0, 100);
export const level7IntermediateA = level7Intermediate.slice(0, 50);
export const level7IntermediateB = level7Intermediate.slice(50, 100);
export const level7ExpertA = level7Expert.slice(0, 50);
export const level7ExpertB = level7Expert.slice(50, 100);
