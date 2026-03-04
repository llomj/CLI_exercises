// LEVEL 4 EXPERT — Process Management (121 unique questions)
// Topics: ps, top, kill, nice, cron, daemons, systemd, load, memory, swap

export const level4Expert = [
  (_i: number) => ({
    q: "What does `ps -eL -o pid,lwp,psr,comm` show for psr?",
    o: ["CPU that thread is running on", "Processor ID", "CPU affinity", "Scheduling CPU"],
    c: 0,
    e: "psr = processor. Which CPU core the thread last ran on. For affinity debugging.",
    de: "ps -eL -o pid,lwp,psr,comm. LWP = thread. PSR = processor. taskset to set affinity."
  }),
  (_i: number) => ({
    q: "What does `top -H -p PID` show?",
    o: ["Threads of that process (not just main)", "Process threads", "Thread view", "All threads"],
    c: 0,
    e: "top -H shows threads. -p limits to one process. See per-thread CPU.",
    de: "top -H -p 1234. Each LWP as separate line. For multi-threaded debugging."
  }),
  (_i: number) => ({
    q: "What does `kill -USR1 PID` typically do for nginx?",
    o: ["Reopens log files", "User signal 1", "Nginx reload logs", "Log rotate"],
    c: 0,
    e: "USR1/USR2 are user-defined. Nginx: USR1 reopens logs. App-specific.",
    de: "kill -USR1 $(cat /run/nginx.pid). After logrotate. Check app docs for signal meaning."
  }),
  (_i: number) => ({
    q: "What does `chrt -f 99 cmd` set?",
    o: ["FIFO realtime scheduling, priority 99", "Realtime priority", "FIFO scheduling", "Realtime FIFO"],
    c: 0,
    e: "chrt sets scheduling policy. -f = FIFO, -r = RR. 1-99 realtime. Requires root.",
    de: "chrt -f 99 ./realtime. chrt -p PID to view. Realtime can starve other processes."
  }),
  (_i: number) => ({
    q: "What does crontab '5 4 * * 1-5' mean?",
    o: ["4:05 AM weekdays only", "Weekday 4:05", "Mon-Fri 4:05", "4:05 weekdays"],
    c: 0,
    e: "min=5, hour=4, day=*, month=*, weekday=1-5 (Mon-Fri). 04:05 weekdays.",
    de: "1-5 = Monday to Friday. 0 = Sunday. 5 4 * * 1-5 = 4:05 AM Mon-Fri."
  }),
  (_i: number) => ({
    q: "What does `systemctl add-wants target service` do?",
    o: ["Adds service as WantedBy for target", "Add wants", "Target wants service", "Dependency add"],
    c: 0,
    e: "Creates wants dependency. When target starts, service starts. Dynamic dependency.",
    de: "systemctl add-wants multi-user.target nginx. Alternative to [Install] in unit file."
  }),
  (_i: number) => ({
    q: "What does `memory pressure` mean in Linux?",
    o: ["Kernel reclaiming memory (OOM risk)", "Memory stress", "Reclaim pressure", "Low memory"],
    c: 0,
    e: "When free memory low, kernel reclaims (cache, swap). High pressure = OOM likely.",
    de: "vmstat, /proc/pressure/memory. PSI (Pressure Stall Information). Early OOM warning."
  }),
  (_i: number) => ({
    q: "What does `smem -s pss` show?",
    o: ["Proportional set size (shared memory split fairly)", "PSS memory", "Proportional memory", "Shared split"],
    c: 0,
    e: "PSS = proportional. Shared pages counted proportionally. Better than RSS for shared.",
    de: "smem -s pss. RSS overcounts shared (libc). PSS fairer. smem -p for per-process."
  }),
  (_i: number) => ({
    q: "What does `zram` provide?",
    o: ["Compressed RAM as swap (faster than disk)", "Compressed swap", "RAM swap", "Zram swap"],
    c: 0,
    e: "zram = compressed block device in RAM. Swap to RAM with compression. Faster than disk swap.",
    de: "modprobe zram. zramctl. Used on Android, some distros. Reduces swap thrashing."
  }),
  (_i: number) => ({
    q: "What does `pgrep -x name` require?",
    o: ["Exact match of process name (not substring)", "Exact name", "Full match", "Precise match"],
    c: 0,
    e: "pgrep -x matches full name only. pgrep nginx matches nginx, nginx-worker. -x = exact.",
    de: "pgrep -x init. Won't match init.d or systemd. Safer for scripts."
  }),
  (_i: number) => ({
    q: "What does `pkill -x name` do vs without -x?",
    o: ["Kills only processes with exact name match", "Exact match kill", "Precise kill", "Full name only"],
    c: 0,
    e: "pkill -x = exact name. pkill nginx might match nginx-cache. -x = init only.",
    de: "pkill -x myapp. Avoids killing myapp-helper. Safer pattern matching."
  }),
  (_i: number) => ({
    q: "What does `setsid cmd` create?",
    o: ["New session (no controlling terminal)", "New session", "Session leader", "Detached session"],
    c: 0,
    e: "setsid creates new session. Process becomes session leader. No controlling tty.",
    de: "setsid cmd. Immune to SIGHUP from terminal. Daemon pattern. nohup alternative."
  }),
  (_i: number) => ({
    q: "What does `reptyr PID` do?",
    o: ["Moves existing process to current terminal", "Reparent to tty", "Steal process", "Move to terminal"],
    c: 0,
    e: "reptyr reparents process to your terminal. For screen/tmux recovery.",
    de: "reptyr 1234. Process gets new controlling tty. Saves session without restart."
  }),
  (_i: number) => ({
    q: "What does `ps -o pid,vsz,rss,comm --sort=-rss` sort by?",
    o: ["Resident set size (physical memory) descending", "RSS high to low", "Memory usage", "Physical memory"],
    c: 0,
    e: "RSS = resident. Physical RAM used. --sort=-rss = highest first.",
    de: "VSZ = virtual. RSS = physical. Sort by RSS for real memory hogs."
  }),
  (_i: number) => ({
    q: "What does `ps -o pid,pri,ni,comm` show for pri and ni?",
    o: ["Priority and nice value", "Scheduling priority", "Priority nice", "Pri and nice"],
    c: 0,
    e: "pri = kernel priority (lower=higher). ni = nice (-20 to 19). Both affect scheduling.",
    de: "ps -o pid,pri,ni. RT priority for realtime. Normal: 100+ni. Lower = higher priority."
  }),
  (_i: number) => ({
    q: "What does `top -d 0.5` set?",
    o: ["Update interval to 0.5 seconds", "Half-second delay", "Update rate", "Refresh interval"],
    c: 0,
    e: "top -d seconds. -d 0.5 = update every 0.5s. -d 1 default. For faster refresh.",
    de: "top -d 0.1 for 10 updates/sec. Heavy. -d 2 for slower, less CPU."
  }),
  (_i: number) => ({
    q: "What does `systemctl link /path/to/unit.service` do?",
    o: ["Enables unit from arbitrary path (symlink)", "Link unit", "Enable from path", "Symlink unit"],
    c: 0,
    e: "systemctl link creates symlink in .../system/. Unit from any path.",
    de: "systemctl link /opt/myapp/myapp.service. For non-standard locations."
  }),
  (_i: number) => ({
    q: "What does `systemctl revert service` do?",
    o: ["Removes overrides, restores original unit", "Revert overrides", "Remove overrides", "Restore original"],
    c: 0,
    e: "Reverts to vendor unit. Removes edit overrides. Restores default.",
    de: "systemctl revert nginx. After bad edit. Removes .../service.d/override.conf."
  }),
  (_i: number) => ({
    q: "What does `journalctl -o json` output?",
    o: ["Log entries as JSON", "JSON format", "Structured logs", "JSON output"],
    c: 0,
    e: "journalctl -o json. Machine-parseable. -o json-pretty for readable.",
    de: "journalctl -o json | jq. For scripting. -o short, -o cat, -o export."
  }),
  (_i: number) => ({
    q: "What does `journalctl --vacuum-time=7d` do?",
    o: ["Deletes logs older than 7 days", "Vacuum old logs", "Prune logs", "Clean journal"],
    c: 0,
    e: "journalctl --vacuum-time limits disk usage. --vacuum-size=500M alternative.",
    de: "journalctl --vacuum-time=7d. Requires root. Frees space. /var/log/journal."
  }),
  (_i: number) => ({
    q: "What does crontab '0 12 * * * [ $(date +\\%u) -eq 1 ] && cmd' achieve?",
    o: ["Runs cmd at noon only on Mondays", "Monday noon", "Weekly Monday", "Conditional Monday"],
    c: 0,
    e: "date +%u = weekday 1-7 (1=Mon). Condition runs cmd only when Monday.",
    de: "Cron can't do 'weekday only' in field. Use shell condition. % escaped in crontab."
  }),
  (_i: number) => ({
    q: "What does `systemctl isolate graphical.target` do?",
    o: ["Switches to GUI (stops multi-user, starts graphical)", "Start GUI", "Graphical mode", "Switch to X"],
    c: 0,
    e: "isolate stops other targets, starts this one. graphical = desktop. multi-user = console.",
    de: "systemctl isolate graphical.target. Like init 5. Stops non-graphical services."
  }),
  (_i: number) => ({
    q: "What does `trap 'handler' DEBUG` do (bash)?",
    o: ["Runs handler before each command", "Debug trap", "Pre-command trap", "Before each command"],
    c: 0,
    e: "DEBUG trap runs before each command. For tracing, profiling. Very verbose.",
    de: "trap 'echo $BASH_COMMAND' DEBUG. Extrace-like. set -x simpler for debugging."
  }),
  (_i: number) => ({
    q: "What does `trap - EXIT` do?",
    o: ["Removes EXIT trap", "Clear EXIT trap", "Disable exit handler", "Reset trap"],
    c: 0,
    e: "trap - EXIT removes the EXIT trap. - with no handler = reset.",
    de: "trap - EXIT. trap - INT. Restores default behavior. For temporary traps."
  }),
  (_i: number) => ({
    q: "What does `sleep 0.5` do?",
    o: ["Sleeps 0.5 seconds", "Half second", "500ms", "Fractional sleep"],
    c: 0,
    e: "sleep accepts decimals. sleep 0.5 = 500ms. sleep 1m 30s also valid (GNU).",
    de: "sleep 0.1. Fractional seconds. For polling loops. usleep in C."
  }),
  (_i: number) => ({
    q: "What does `wait -n` do (bash 4.3+)?",
    o: ["Waits for any one job to complete", "Wait any", "First to finish", "Any job"],
    c: 0,
    e: "wait -n returns when any background job completes. -n = any one.",
    de: "cmd1 & cmd2 & wait -n. Returns when first finishes. For race/parallel."
  }),
  (_i: number) => ({
    q: "What does `exec 2>/dev/null` do?",
    o: ["Redirects stderr to null for rest of script", "Discard stderr", "Hide errors", "Stderr to null"],
    c: 0,
    e: "exec 2>/dev/null. All subsequent stderr goes to /dev/null. Permanent for shell.",
    de: "exec 2>/dev/null. Careful: hides all errors. Use 2>&1 for logging."
  }),
  (_i: number) => ({
    q: "What does `$BASH_SUBSHELL` indicate?",
    o: ["Nesting level of subshell", "Subshell depth", "Subshell level", "Bash subshell"],
    c: 0,
    e: "$BASH_SUBSHELL = 0 in main shell. 1 in ( ), 2 in (( )). Subshell depth.",
    de: "echo $BASH_SUBSHELL. (cmd) increments. For debugging subshell usage."
  }),
  (_i: number) => ({
    q: "What does `systemctl show --property=MainPID service` output?",
    o: ["Main process PID of service", "Main PID", "Service main PID", "Leader PID"],
    c: 0,
    e: "MainPID = main/leader process. For sending signals. Type=simple has one.",
    de: "systemctl show nginx -p MainPID. MainPID=1234. kill -HUP $MainPID."
  }),
  (_i: number) => ({
    q: "What does `systemd-run --scope -p CPUQuota=50% cmd` do?",
    o: ["Runs cmd with 50% CPU limit (transient scope)", "CPU limit", "Quota scope", "Limit CPU"],
    c: 0,
    e: "systemd-run creates transient unit. -p sets properties. CPUQuota limits CPU.",
    de: "systemd-run --scope -p CPUQuota=50% ./heavy. Cgroup limit. No unit file needed."
  }),
  (_i: number) => ({
    q: "What does `journalctl --cursor=...` do?",
    o: ["Starts output from that cursor position", "Resume from cursor", "Cursor position", "Continue from cursor"],
    c: 0,
    e: "journalctl --cursor=ID continues from that log entry. For incremental reading.",
    de: "journalctl --cursor=$(journalctl -n1 -o cursor). Resume scripts. --after-cursor."
  }),
  (_i: number) => ({
    q: "What does `anacron` provide vs cron?",
    o: ["Runs jobs even if system was off at scheduled time", "Missed job runner", "Catch-up cron", "Anacron jobs"],
    c: 0,
    e: "anacron runs jobs that were missed (e.g. laptop was off). Daily/weekly catch-up.",
    de: "anacron /etc/anacrontab. For desktops. cron assumes always-on. anacron runs on boot."
  }),
  (_i: number) => ({
    q: "What does `systemctl list-units --state=failed` show?",
    o: ["Only failed units", "Failed services", "Failed units", "Failure list"],
    c: 0,
    e: "Filters to failed state. systemctl --failed is shorthand.",
    de: "systemctl list-units -s failed. Quick failure check. systemctl status for details."
  }),
  (_i: number) => ({
    q: "What does `oom_score_adj` control?",
    o: ["OOM killer preference (-1000 to 1000)", "OOM preference", "Kill priority", "OOM score"],
    c: 0,
    e: "oom_score_adj: -1000 = never kill, 1000 = prefer kill. /proc/PID/oom_score_adj.",
    de: "echo -500 > /proc/PID/oom_score_adj. Protect critical process. systemd uses for services."
  }),
  (_i: number) => ({
    q: "What does `numactl --cpunodebind=0 --membind=0 cmd` do?",
    o: ["Pins process to NUMA node 0 (CPU and memory)", "NUMA bind", "Node affinity", "NUMA node 0"],
    c: 0,
    e: "numactl binds to NUMA node. --cpunodebind CPU, --membind memory. For NUMA optimization.",
    de: "numactl --cpunodebind=0 --membind=0 ./app. Avoid cross-node. numactl -H for topology."
  }),
  (_i: number) => ({
    q: "What does `perf stat cmd` show?",
    o: ["Hardware performance counters (cycles, cache misses)", "Performance stats", "CPU counters", "Perf stats"],
    c: 0,
    e: "perf stat runs cmd, reports CPU events. Cycles, instructions, cache, branches.",
    de: "perf stat ./program. IPC, cache misses. perf record/report for profiling."
  }),
  (_i: number) => ({
    q: "What does `systemctl show service -p RequiredBy` show?",
    o: ["Units that require this service", "Dependents", "Required by", "Who needs this"],
    c: 0,
    e: "RequiredBy = reverse dependency. What has WantedBy/RequiredBy this.",
    de: "systemctl show nginx -p RequiredBy. WantedBy, RequiredBy. Dependency graph."
  }),
  (_i: number) => ({
    q: "What does `systemd-analyze blame` show?",
    o: ["Boot time per unit (slowest first)", "Boot blame", "Startup time", "Slow units"],
    c: 0,
    e: "systemd-analyze blame. Which services slowed boot. Optimize boot order.",
    de: "systemd-analyze blame. systemd-analyze critical-chain for chain. Boot optimization."
  }),
  (_i: number) => ({
    q: "What does `systemd-analyze plot` output?",
    o: ["SVG boot timeline", "Boot plot", "Startup graph", "Timeline SVG"],
    c: 0,
    e: "systemd-analyze plot > boot.svg. Visual timeline of boot. SVG format.",
    de: "systemd-analyze plot. Shows parallel startup. systemd-analyze dot for graph."
  }),
  (_i: number) => ({
    q: "What does `cgroups` freezer subsystem do?",
    o: ["Freezes process group (pause all)", "Freeze cgroup", "Pause processes", "Suspend cgroup"],
    c: 0,
    e: "freezer freezes all processes in cgroup. They don't run. For checkpoint/restore.",
    de: "echo FROZEN > /sys/fs/cgroup/freezer/group/freezer.state. Docker uses for pause."
  }),
  (_i: number) => ({
    q: "What does `systemctl set-environment VAR=value` do?",
    o: ["Sets env var for all future service starts", "System env", "Global env", "Service env"],
    c: 0,
    e: "Sets variable in systemd manager. All new services inherit. Not existing ones.",
    de: "systemctl set-environment FOO=bar. systemctl show-environment. Per-service: Environment= in unit."
  }),
  (_i: number) => ({
    q: "What does `systemctl unset-environment VAR` do?",
    o: ["Removes var from systemd manager env", "Unset env", "Remove env", "Clear var"],
    c: 0,
    e: "Removes variable. Opposite of set-environment. Affects future services.",
    de: "systemctl unset-environment FOO. systemctl show-environment to verify."
  }),
  (_i: number) => ({
    q: "What does `LimitNOFILE` in systemd unit set?",
    o: ["Max open files for service", "File limit", "Nofile limit", "FD limit"],
    c: 0,
    e: "LimitNOFILE=65535. ulimit -n for service. For high-connection services.",
    de: "[Service] LimitNOFILE=65535. Replaces ulimit. LimitNPROC, LimitCORE, etc."
  }),
  (_i: number) => ({
    q: "What does `PrivateTmp=yes` in systemd do?",
    o: ["Service gets private /tmp (isolated)", "Private tmp", "Isolated tmp", "Separate tmp"],
    c: 0,
    e: "Private /tmp for service. Not shared with others. Security isolation.",
    de: "[Service] PrivateTmp=yes. /tmp is bind mount. tmpfiles cleans on stop."
  }),
  (_i: number) => ({
    q: "What does `ProtectSystem=strict` in systemd do?",
    o: ["Makes /usr /boot read-only for service", "Read-only system", "Protect system", "Strict protection"],
    c: 0,
    e: "ProtectSystem=strict: /usr, /boot read-only. Service can't modify. Security.",
    de: "[Service] ProtectSystem=strict. full = +/. ProtectHome, ReadOnlyPaths too."
  }),
  (_i: number) => ({
    q: "What does `NoNewPrivileges=yes` in systemd do?",
    o: ["Process cannot gain new privileges (setuid, etc)", "No privilege escalation", "Lock privileges", "No setuid"],
    c: 0,
    e: "NoNewPrivileges=yes. Process can't gain privileges. setuid, exec of setuid blocked.",
    de: "[Service] NoNewPrivileges=yes. Security. Prevents privilege escalation from service."
  }),
  (_i: number) => ({
    q: "What does `Restart=on-failure` in systemd mean?",
    o: ["Restart only when process exits with error", "Restart on fail", "Failure restart", "Error restart"],
    c: 0,
    e: "Restart=on-failure: restart on non-zero exit, signal, timeout. Not on clean exit.",
    de: "Restart=always = always. on-failure = only when failed. on-abnormal for signals."
  }),
  (_i: number) => ({
    q: "What does `RestartSec=5` in systemd set?",
    o: ["Wait 5 seconds before restart", "Restart delay", "Delay before restart", "5s before restart"],
    c: 0,
    e: "RestartSec=5. Pause before restart. Prevents tight restart loop.",
    de: "[Service] RestartSec=5. With Restart=on-failure. Gives time for cleanup."
  }),
  (_i: number) => ({
    q: "What does `TimeoutStartSec=90` in systemd do?",
    o: ["Fails service if not started in 90 seconds", "Start timeout", "90s start limit", "Start deadline"],
    c: 0,
    e: "TimeoutStartSec=90. systemd kills if service doesn't signal ready in 90s.",
    de: "[Service] TimeoutStartSec=90. Type=simple waits for fork. Type=notify for ready signal."
  }),
  (_i: number) => ({
    q: "What does `Type=notify` in systemd require?",
    o: ["Service must call sd_notify when ready", "Notify when ready", "Ready signal", "sd_notify"],
    c: 0,
    e: "Type=notify: service sends sd_notify(READY=1). systemd knows when started.",
    de: "Service calls sd_notify(0, \"READY=1\"). systemd then considers it started. For async startup."
  }),
  (_i: number) => ({
    q: "What does `WantedBy=multi-user.target` mean?",
    o: ["Enable creates symlink so service starts with multi-user", "Wanted by target", "Boot dependency", "Target wants"],
    c: 0,
    e: "WantedBy= creates [Install] dependency. systemctl enable links to target.",
    de: "WantedBy=multi-user.target. When multi-user starts, this starts. RequiredBy = stronger."
  }),
  (_i: number) => ({
    q: "What does `After=network.target` mean?",
    o: ["Start after network.target (ordering only)", "After network", "Start order", "Ordering dependency"],
    c: 0,
    e: "After= ordering. This starts after network. Doesn't require it. Before= opposite.",
    de: "After=network-online.target. Ordering. Wants=/Requires= for dependency."
  }),
  (_i: number) => ({
    q: "What does `Requires=db.service` mean?",
    o: ["If db fails, this unit is stopped too", "Strong dependency", "Requires db", "Co-stop"],
    c: 0,
    e: "Requires=: db stopped => this stopped. Bidirectional. Wants= is one-way.",
    de: "Requires=mysql. If mysql fails, this fails. Wants= only starts together."
  }),
  (_i: number) => ({
    q: "What does `BindsTo=db.service` mean?",
    o: ["This stops when db stops (stronger than Requires)", "Binds to", "Co-lifecycle", "Stop with db"],
    c: 0,
    e: "BindsTo: when db stops, this stops. Tied lifecycle. Requires + stop propagation.",
    de: "BindsTo=container. For sidecar. Stops when main stops."
  }),
  (_i: number) => ({
    q: "What does `systemctl list-unit-files` show?",
    o: ["All unit files and enable state", "Unit files", "Installed units", "Enable status"],
    c: 0,
    e: "Lists all units from disk. enabled/disabled/static/masked. Not runtime state.",
    de: "systemctl list-unit-files. Static = no [Install]. list-units for runtime."
  }),
  (_i: number) => ({
    q: "What does `systemctl list-sockets` show?",
    o: ["Socket units and what activates them", "Socket units", "Activation sockets", "Socket list"],
    c: 0,
    e: "Socket units. When connection arrives, service starts. Socket activation.",
    de: "systemctl list-sockets. systemd listens. Incoming connection starts service. On-demand."
  }),
  (_i: number) => ({
    q: "What does `sd_notify` do?",
    o: ["Notifies systemd of service state (ready, status)", "Service notify", "systemd notify", "State notify"],
    c: 0,
    e: "sd_notify sends status to systemd. READY=1, WATCHDOG=1. For Type=notify.",
    de: "sd_notify(0, \"READY=1\"). C: sd_notify. Python: systemd.daemon.notify. Watchdog too."
  }),
  (_i: number) => ({
    q: "What does `WatchdogSec=30` in systemd do?",
    o: ["Service must sd_notify every 30s or gets killed", "Watchdog timer", "Health check", "30s watchdog"],
    c: 0,
    e: "WatchdogSec: service must send WATCHDOG=1 periodically. Else killed.",
    de: "WatchdogSec=30. sd_notify(0, \"WATCHDOG=1\") every <30s. Detects hangs."
  }),
  (_i: number) => ({
    q: "What does `systemctl reload-or-restart service` do?",
    o: ["Reloads if supported, else restarts", "Reload or restart", "Smart reload", "Try reload first"],
    c: 0,
    e: "Tries reload first. If no reload, does restart. Best of both.",
    de: "systemctl reload-or-restart nginx. Safer than restart. Uses reload if available."
  }),
  (_i: number) => ({
    q: "What does `systemctl try-restart service` do?",
    o: ["Restarts only if currently running", "Restart if running", "Conditional restart", "Try restart"],
    c: 0,
    e: "Restarts only if running. If stopped, does nothing. Safe for optional services.",
    de: "systemctl try-restart nginx. Won't start stopped service. restart always does both."
  }),
  (_i: number) => ({
    q: "What does `journalctl --sync` do?",
    o: ["Flushes journal to disk", "Sync journal", "Flush logs", "Persist journal"],
    c: 0,
    e: "journalctl --sync. Forces write to disk. Before shutdown, power loss.",
    de: "journalctl --sync. Ensures logs persisted. systemd-journald does async writes."
  }),
  (_i: number) => ({
    q: "What does `journalctl --disk-usage` show?",
    o: ["Disk space used by journal", "Journal size", "Log disk usage", "Journal disk"],
    c: 0,
    e: "journalctl --disk-usage. How much /var/log/journal uses.",
    de: "journalctl --disk-usage. Then vacuum if needed. SystemMaxUse, SystemMaxFileSize."
  }),
  (_i: number) => ({
    q: "What does `cron` allow for user in /etc/cron.deny?",
    o: ["User in deny cannot use crontab", "Deny crontab", "Block user", "No crontab"],
    c: 0,
    e: "cron.deny: listed users cannot crontab. cron.allow: only listed can (if exists).",
    de: "/etc/cron.deny. If cron.allow exists, only those. Else deny blocks. Varies by distro."
  }),
  (_i: number) => ({
    q: "What does `MAILTO=` in crontab do?",
    o: ["Suppresses cron mail (no output mailed)", "No mail", "Disable mail", "Suppress output mail"],
    c: 0,
    e: "MAILTO= empty suppresses mail. Default MAILTO=user. MAILTO= for quiet.",
    de: "MAILTO= at top of crontab. No job output mailed. MAILTO=admin@host for redirect."
  }),
  (_i: number) => ({
    q: "What does `SIGCHLD` mean when process exits?",
    o: ["Sent to parent when child terminates", "Child exit signal", "Child died", "Parent notification"],
    c: 0,
    e: "SIGCHLD to parent when child exits. Parent can wait() to reap. Zombies if not.",
    de: "SIGCHLD. Default ignore. Parent wait()s. init reaps orphans. Zombie = not reaped."
  }),
  (_i: number) => ({
    q: "What does `prlimit` show without args?",
    o: ["Resource limits of current process", "Current limits", "Process limits", "Limit display"],
    c: 0,
    e: "prlimit shows limits of current process. prlimit -p PID for another.",
    de: "prlimit. Like ulimit -a but for any process. prlimit -p 1234 --nofile=65535 to set."
  }),
  (_i: number) => ({
    q: "What does `/proc/PID/fd/` contain?",
    o: ["Symlinks to open files (file descriptors)", "Open files", "FD directory", "File descriptors"],
    c: 0,
    e: "/proc/PID/fd/ has 0, 1, 2, 3... symlinks to open files. ls -l shows targets.",
    de: "ls -l /proc/1234/fd/. 0 -> /dev/pts/0. For debugging. lsof uses this."
  }),
  (_i: number) => ({
    q: "What does `/proc/PID/cmdline` contain?",
    o: ["Command line with null separators", "Process command", "Cmdline", "Args"],
    c: 0,
    e: "/proc/PID/cmdline has argv with \\0 between. cat shows as one line.",
    de: "cat /proc/1234/cmdline | tr '\\0' ' '. Full command. /proc/PID/environ for env."
  }),
  (_i: number) => ({
    q: "What does `strace -c cmd` produce?",
    o: ["Summary of syscall counts and time", "Syscall summary", "Count summary", "Statistics"],
    c: 0,
    e: "strace -c runs cmd, prints syscall summary. % time, calls, errors.",
    de: "strace -c ./program. Which syscalls dominate. -c = summary, no -c = trace."
  }),
  (_i: number) => ({
    q: "What does `strace -f cmd` do?",
    o: ["Traces child processes (fork/vfork/clone)", "Follow children", "Fork trace", "Child trace"],
    c: 0,
    e: "strace -f follows forks. See syscalls from children. -ff for separate files.",
    de: "strace -f ./script. Script may fork. -ff strace.pid for per-process."
  }),
  (_i: number) => ({
    q: "What does `ltrace -p PID` do?",
    o: ["Attaches to process and traces library calls", "Attach ltrace", "Trace running", "Library trace attach"],
    c: 0,
    e: "ltrace -p attaches to running process. Traces library calls. Like strace -p.",
    de: "ltrace -p 1234. See malloc, printf, etc. Requires same user or root."
  }),
  (_i: number) => ({
    q: "What does `systemd-cgls` show?",
    o: ["Cgroup tree (hierarchy)", "Cgroup tree", "Control group tree", "Cgroup hierarchy"],
    c: 0,
    e: "systemd-cgls shows cgroup tree. systemd slices, scopes, services.",
    de: "systemd-cgls. /user.slice, /system.slice. systemd-cgtop for usage."
  }),
  (_i: number) => ({
    q: "What does `CPUQuota=100%` mean per core?",
    o: ["100% of one CPU core", "One core", "100% one core", "Single core quota"],
    c: 0,
    e: "CPUQuota=100% = one core. 200% = two cores. Per-core basis.",
    de: "CPUQuota=200% for 2 cores. CFS quota. CPUWeight for relative share."
  }),
  (_i: number) => ({
    q: "What does `MemoryMax=512M` in systemd do?",
    o: ["Hard limit: service killed if exceeds 512M", "Memory limit", "512M limit", "OOM at 512M"],
    c: 0,
    e: "MemoryMax= hard limit. OOM if exceeded. MemoryHigh= soft limit, throttle.",
    de: "[Service] MemoryMax=512M. cgroup memory.max. Protects system from runaway."
  }),
  (_i: number) => ({
    q: "What does `TasksMax=100` in systemd limit?",
    o: ["Max processes/threads service can create", "Process limit", "Task limit", "Max tasks"],
    c: 0,
    e: "TasksMax= max PIDs in cgroup. Fork bomb protection. Default 512 or 15%.",
    de: "[Service] TasksMax=100. pids.max cgroup. Prevents fork bombs."
  }),
  (_i: number) => ({
    q: "What does `IPAddressDeny=` in systemd do?",
    o: ["Blocks service from those IPs", "Deny IP", "Block IP", "IP blocklist"],
    c: 0,
    e: "IPAddressDeny= blocks access to listed IPs. Restrictive networking.",
    de: "[Service] IPAddressDeny=any. Or specific. RestrictNetworkInterfaces= for interfaces."
  }),
  (_i: number) => ({
    q: "What does `ReadWritePaths=/var/lib/app` in systemd allow?",
    o: ["Only those paths writable (rest read-only)", "Allow write paths", "Writable paths", "Write allowlist"],
    c: 0,
    e: "ReadWritePaths= allowlist. With ProtectSystem, only these writable. Rest read-only.",
    de: "[Service] ReadWritePaths=/var/lib/foo. ProtectSystem=strict + this. Least privilege."
  }),
  (_i: number) => ({
    q: "What does `InaccessiblePaths=/secret` do?",
    o: ["Hides path from service (cannot access)", "Hide path", "Inaccessible", "Path hidden"],
    c: 0,
    e: "InaccessiblePaths= bind-mounts path to empty. Service can't see it.",
    de: "[Service] InaccessiblePaths=/etc/secret. Security. Path doesn't exist for service."
  }),
  (_i: number) => ({
    q: "What does `RuntimeDirectory=app` create?",
    o: ["/run/app for service (cleaned on stop)", "Runtime dir", "/run/app", "Temp runtime"],
    c: 0,
    e: "RuntimeDirectory=app creates /run/app. Mode 0755. Removed on stop.",
    de: "[Service] RuntimeDirectory=myapp. /run/myapp. RuntimeDirectoryMode= for permissions."
  }),
  (_i: number) => ({
    q: "What does `StateDirectory=app` create?",
    o: ["/var/lib/app for persistent data", "State dir", "Var lib", "Persistent dir"],
    c: 0,
    e: "StateDirectory=app creates /var/lib/app. Persists across restarts.",
    de: "[Service] StateDirectory=myapp. /var/lib/myapp. For databases, caches."
  }),
  (_i: number) => ({
    q: "What does `CacheDirectory=app` create?",
    o: ["/var/cache/app for cache data", "Cache dir", "Var cache", "Cache path"],
    c: 0,
    e: "CacheDirectory=app creates /var/cache/app. For regenerable data.",
    de: "[Service] CacheDirectory=myapp. /var/cache/myapp. Cleared on package remove sometimes."
  }),
  (_i: number) => ({
    q: "What does `LogsDirectory=app` create?",
    o: ["/var/log/app for logs", "Log dir", "Var log", "Log path"],
    c: 0,
    e: "LogsDirectory=app creates /var/log/app. For application logs.",
    de: "[Service] LogsDirectory=myapp. /var/log/myapp. LogDirectoryMode= for perms."
  }),
  (_i: number) => ({
    q: "What does `ConfigurationDirectory=app` create?",
    o: ["/etc/app for config", "Config dir", "Etc app", "Config path"],
    c: 0,
    e: "ConfigurationDirectory=app creates /etc/app. For config files.",
    de: "[Service] ConfigurationDirectory=myapp. /etc/myapp. Config files."
  }),
  (_i: number) => ({
    q: "What does `StandardOutput=journal` in systemd do?",
    o: ["Sends stdout to journal", "Journal stdout", "Log to journal", "stdout to journal"],
    c: 0,
    e: "StandardOutput=journal. stdout goes to journald. journalctl -u service sees it.",
    de: "[Service] StandardOutput=journal. StandardError=journal. Inherit, null, socket."
  }),
  (_i: number) => ({
    q: "What does `StandardError=inherit` mean?",
    o: ["stderr goes to same place as stdout", "Inherit stderr", "Same as stdout", "Stderr inherit"],
    c: 0,
    e: "StandardError=inherit: stderr follows stdout. Both to journal, or both to null.",
    de: "[Service] StandardError=inherit. With StandardOutput=journal, both to journal."
  }),
  (_i: number) => ({
    q: "What does `SyslogIdentifier=myapp` set?",
    o: ["Identifier in journal/syslog for this service", "Syslog ID", "Log identifier", "App name in logs"],
    c: 0,
    e: "SyslogIdentifier= sets SYSLOG_IDENTIFIER. journalctl SYSLOG_IDENTIFIER=myapp.",
    de: "[Service] SyslogIdentifier=myapp. journalctl -t myapp. For filtering."
  }),
  (_i: number) => ({
    q: "What does `systemctl clean` do?",
    o: ["Removes state/cache/runtime (unit-specific)", "Clean state", "Remove state", "Reset state"],
    c: 0,
    e: "systemctl clean removes *Directory state. Cleans RuntimeDirectory, etc.",
    de: "systemctl clean nginx. Removes /run/nginx etc. For fresh start."
  }),
  (_i: number) => ({
    q: "What does `systemd-run --user -u mytimer.timer` do?",
    o: ["Runs user-level timer (user service)", "User timer", "User service", "Per-user timer"],
    c: 0,
    e: "systemctl --user for user services. Timers in user context. No root.",
    de: "systemctl --user start mytimer.timer. ~/.config/systemd/user/. Per-user cron."
  }),
  (_i: number) => ({
    q: "What does `loginctl enable-linger user` do?",
    o: ["User services persist after logout", "Linger user", "Persist user services", "User linger"],
    c: 0,
    e: "enable-linger: user's systemd --user keeps running after logout. For background.",
    de: "loginctl enable-linger jane. User services survive logout. For cron-like user jobs."
  }),
  (_i: number) => ({
    q: "What does `systemd-inhibit` do?",
    o: ["Blocks sleep/shutdown/idle while command runs", "Inhibit sleep", "Block suspend", "Prevent sleep"],
    c: 0,
    e: "systemd-inhibit cmd. Holds inhibitor lock. System won't sleep until cmd exits.",
    de: "systemd-inhibit --what=sleep ./backup. Prevents suspend during backup."
  }),
  (_i: number) => ({
    q: "What does `systemctl halt` do vs poweroff?",
    o: ["Stops CPU, leaves power on (halt)", "Halt system", "Stop CPU", "Halt vs poweroff"],
    c: 0,
    e: "halt stops OS, may not cut power. poweroff tries to power off. reboot restarts.",
    de: "systemctl halt. systemctl poweroff. Depends on hardware. halt = runlevel 0."
  }),
  (_i: number) => ({
    q: "What does `systemd-firstboot` do?",
    o: ["Sets initial system config (hostname, etc) on first boot", "First boot config", "Initial setup", "First boot"],
    c: 0,
    e: "systemd-firstboot configures unconfigured system. Hostname, timezone, etc.",
    de: "systemd-firstboot. For images. --root= for chroot. One-time setup."
  }),
  (_i: number) => ({
    q: "What does `kernel.pid_max` control?",
    o: ["Maximum PID value (process ID limit)", "PID limit", "Max PIDs", "Process ID max"],
    c: 0,
    e: "kernel.pid_max = max PID. Default 32768. More for high-fork systems.",
    de: "sysctl kernel.pid_max. /proc/sys/kernel/pid_max. 4194304 common for large."
  }),
  (_i: number) => ({
    q: "What does `vm.dirty_ratio` control?",
    o: ["% of memory when pdflush writes dirty pages", "Dirty page threshold", "Write threshold", "Dirty ratio"],
    c: 0,
    e: "vm.dirty_ratio: when dirty pages hit this % of memory, processes block to write.",
    de: "sysctl vm.dirty_ratio. 20 default. vm.dirty_background_ratio for async write."
  }),
  (_i: number) => ({
    q: "What does `proc` hidepid mount option do?",
    o: ["Hides other users' /proc/PID", "Hide PIDs", "Proc hidepid", "Hide processes"],
    c: 0,
    e: "mount -o hidepid=2 /proc. Users can't see other users' processes. Security.",
    de: "hidepid=1 hide other, =2 also hide /proc/PID/cmdline. Privacy, security."
  }),
  (_i: number) => ({
    q: "What does `subreaper` (PR_SET_CHILD_SUBREAPER) do?",
    o: ["Process reaps grandchildren when child exits", "Subreaper", "Reap grandchildren", "Child reaper"],
    c: 0,
    e: "Subreaper: when direct child exits without reaping, this process reaps grandchildren.",
    de: "prctl(PR_SET_CHILD_SUBREAPER, 1). systemd uses. Prevents orphan chains to init."
  }),
  (_i: number) => ({
    q: "What does `CLONE_NEWPID` in clone() create?",
    o: ["New PID namespace (PIDs start from 1)", "PID namespace", "New PID ns", "Isolated PIDs"],
    c: 0,
    e: "CLONE_NEWPID: new PID namespace. Process sees itself as 1. Containers use this.",
    de: "unshare --pid. New namespace. PID 1 in ns. unshare --fork --pid for shell."
  }),
  (_i: number) => ({
    q: "What does `pkill -signal name` require for signal?",
    o: ["Signal name or number (e.g. -TERM or -15)", "Signal spec", "Signal format", "Kill signal"],
    c: 0,
    e: "pkill -TERM or pkill -15. Same as kill. pkill -9 = SIGKILL.",
    de: "pkill -HUP nginx. pkill -signal=HUP. Default is SIGTERM."
  }),
  (_i: number) => ({
    q: "What does `timeout 10 cmd` do?",
    o: ["Kills cmd after 10 seconds if still running", "Run with timeout", "10s limit", "Kill after 10s"],
    c: 0,
    e: "timeout 10 cmd. Sends SIGTERM after 10s. SIGKILL after kill delay. Coreutils.",
    de: "timeout 10 ./script. timeout -k 5 10 for 5s between TERM and KILL. Prevents hung processes."
  }),
  (_i: number) => ({
    q: "What does `runcon` do?",
    o: ["Runs command with specified SELinux context", "Run with context", "SELinux run", "Context run"],
    c: 0,
    e: "runcon context cmd. Runs cmd with that SELinux context. For testing.",
    de: "runcon u:r:unconfined_t:s0 ls. runcon -t type cmd. SELinux only."
  }),
  (_i: number) => ({
    q: "What does `sched_setaffinity` do?",
    o: ["Sets CPU affinity (which CPUs process can use)", "CPU affinity", "Set affinity", "Affinity syscall"],
    c: 0,
    e: "sched_setaffinity syscall. taskset uses it. Restrict process to specific CPUs.",
    de: "taskset -cp 0,1 1234. CPU affinity. For NUMA, isolation, performance."
  }),
  (_i: number) => ({
    q: "What does `iostat -x 1` show?",
    o: ["Extended disk I/O stats every second", "Disk I/O", "I/O stats", "Extended iostat"],
    c: 0,
    e: "iostat -x extended. r/s w/s, await, util. 1 = 1 second interval. sysstat package.",
    de: "iostat -x 1. Device utilization. %util = busy. For disk bottleneck."
  }),
  (_i: number) => ({
    q: "What does `pidfd` (Linux 5.1+) provide?",
    o: ["File descriptor for PID (avoids race)", "PID fd", "Race-free PID", "PID file descriptor"],
    c: 0,
    e: "pidfd_open(PID) returns fd. Use fd instead of PID. No race if PID reused.",
    de: "pidfd: PID can be reused. Fd stays valid. waitid(P_PIDFD). Modern process handling."
  }),
  (_i: number) => ({
    q: "What does `BPF` allow in Linux?",
    o: ["In-kernel programmable filtering and tracing", "Kernel programs", "BPF programs", "In-kernel filtering"],
    c: 0,
    e: "eBPF: safe programs in kernel. Tracing, networking, security. No kernel module.",
    de: "bpftrace, bcc. Attach to kprobes, tracepoints. Modern observability."
  }),
  (_i: number) => ({
    q: "What does `perf record -g cmd` add?",
    o: ["Call graph (stack traces) to profile", "Call graph", "Stack traces", "Graph profile"],
    c: 0,
    e: "perf record -g records call stacks. perf report shows hierarchy.",
    de: "perf record -g ./app. -F 99 for 99 Hz. Flame graphs from this."
  }),
  (_i: number) => ({
    q: "What does `perf stat cmd` show?",
    o: ["Hardware counters (cycles, cache misses) for cmd", "HW counters", "Performance counters", "CPU events"],
    c: 0,
    e: "perf stat runs cmd, shows cycles, instructions, cache misses, etc.",
    de: "perf stat ./program. IPC = instructions/cycle. Bottleneck hints."
  }),
  (_i: number) => ({
    q: "What does `numactl --localalloc cmd` do?",
    o: ["Allocates memory from local NUMA node only", "Local NUMA", "Local alloc", "NUMA local"],
    c: 0,
    e: "numactl --localalloc keeps memory on same node as CPU. Reduces latency.",
    de: "numactl -m 0 -N 0 for node 0. numactl --hardware shows topology."
  }),
  (_i: number) => ({
    q: "What does `oom_score_adj` control?",
    o: ["OOM killer preference (-1000 to 1000)", "OOM preference", "Kill preference", "OOM score"],
    c: 0,
    e: "oom_score_adj: -1000 = never kill, 1000 = prefer kill. /proc/PID/oom_score_adj.",
    de: "systemd sets -1000 for critical. Protect important processes."
  }),
  (_i: number) => ({
    q: "What does `cgroup` v2 `memory.current` show?",
    o: ["Current memory usage of cgroup", "Current memory", "Memory usage", "RSS of cgroup"],
    c: 0,
    e: "memory.current = current bytes used. Read from /sys/fs/cgroup/.../memory.current.",
    de: "memory.max for limit. memory.stat for breakdown. memory.events for OOM."
  }),
  (_i: number) => ({
    q: "What does `systemd-analyze blame` show?",
    o: ["Boot time per unit (slowest first)", "Boot blame", "Slow units", "Boot time per service"],
    c: 0,
    e: "systemd-analyze blame. Which units slowed boot. Optimize startup.",
    de: "systemd-analyze critical-chain for critical path. blame for all."
  }),
  (_i: number) => ({
    q: "What does `systemd-analyze critical-chain` show?",
    o: ["Critical path of serialized units in boot", "Critical path", "Boot chain", "Serial chain"],
    c: 0,
    e: "Shows chain of units that block boot. Longest serial dependency.",
    de: "systemd-analyze critical-chain. What to optimize. Parallel vs serial."
  }),
  (_i: number) => ({
    q: "What does `kill -0 PID` do?",
    o: ["Checks if process exists (no signal sent)", "Check exists", "Test PID", "Process check"],
    c: 0,
    e: "kill -0 checks existence. Exit 0 if exists, 1 if not. No signal.",
    de: "if kill -0 $pid 2>/dev/null; then echo running; fi. Portable."
  }),
  (_i: number) => ({
    q: "What does `setsid cmd` do?",
    o: ["Creates new session (detaches from terminal)", "New session", "Detach session", "Session leader"],
    c: 0,
    e: "setsid runs in new session. No controlling terminal. For daemons.",
    de: "setsid ./daemon. Or nohup. Double-fork pattern. Session = process group."
  }),
  (_i: number) => ({
    q: "What does `getpriority` return for nice value?",
    o: ["Nice value (higher = lower priority)", "Nice value", "Priority", "Scheduling priority"],
    c: 0,
    e: "getpriority(PRIO_PROCESS) returns nice. -20 to 19. 0 = default.",
    de: "nice system call. getpriority. setpriority to change. C API."
  }),
  (_i: number) => ({
    q: "What does `RLIMIT_NOFILE` limit?",
    o: ["Max open file descriptors per process", "Open files", "FD limit", "File descriptor limit"],
    c: 0,
    e: "RLIMIT_NOFILE = max open files. ulimit -n. getrlimit/setrlimit.",
    de: "Default often 1024. Servers need 65535+. /proc/sys/fs/nr_open."
  }),
  (_i: number) => ({
    q: "What does `CLONE_NEWNET` create?",
    o: ["New network namespace (isolated network stack)", "Network namespace", "Net ns", "Isolated network"],
    c: 0,
    e: "CLONE_NEWNET = new netns. Own interfaces, routing. Containers, veth.",
    de: "unshare --net. ip netns. Isolated network. Docker uses this."
  }),
  (_i: number) => ({
    q: "What does `cgroup` freezer do?",
    o: ["Pauses all processes in cgroup (freeze)", "Freeze cgroup", "Pause cgroup", "Suspend processes"],
    c: 0,
    e: "Freezer cgroup: freeze = stop all. For checkpoint/restore, container pause.",
    de: "echo FROZEN > freezer.state. Docker pause. All tasks stopped."
  }),
  (_i: number) => ({
    q: "What does `systemctl reload-or-restart service` do?",
    o: ["Reloads if supported, else restarts", "Reload or restart", "Smart reload", "Reload fallback"],
    c: 0,
    e: "Tries reload first. If no reload, does full restart. Safer than restart.",
    de: "systemctl reload-or-restart nginx. For config changes. Less downtime."
  }),
  (_i: number) => ({
    q: "What does `journalctl -b` show?",
    o: ["Logs from current boot only", "Current boot", "This boot", "Boot logs"],
    c: 0,
    e: "journalctl -b = current boot. -b -1 = previous boot. -b -2 = two ago.",
    de: "journalctl -b -1 for last boot crash. -b for boot filter."
  }),
  (_i: number) => ({
    q: "What does `auditd` log?",
    o: ["Security-relevant events (syscalls, file access)", "Security audit", "Audit events", "Security log"],
    c: 0,
    e: "auditd records security events. File access, logins, syscalls. ausearch, aureport.",
    de: "auditd. /var/log/audit/. Compliance. Who did what when."
  }),
  (_i: number) => ({
    q: "What does `cgroups` v1 `cpuacct` provide?",
    o: ["CPU accounting (usage stats per cgroup)", "CPU accounting", "CPU usage", "Cgroup CPU stats"],
    c: 0,
    e: "cpuacct: cpuacct.usage, cpuacct.stat. Total CPU time. v2 has cpu.stat.",
    de: "cpuacct.usage_percpu. Per-cgroup CPU. systemd-cgtop uses this."
  }),
  (_i: number) => ({
    q: "What does `systemd-run --scope -p CPUQuota=50% cmd` do?",
    o: ["Runs cmd in transient scope with 50% CPU limit", "Transient scope", "Scope with limit", "50% CPU scope"],
    c: 0,
    e: "systemd-run creates transient unit. -p sets properties. Scope = no main PID.",
    de: "systemd-run --scope -p CPUQuota=50% ./heavy. Limit without service file."
  }),
  (_i: number) => ({
    q: "What does `SIGTTIN` cause when background job reads?",
    o: ["Stops process (needs terminal input)", "Stop on read", "Background read", "Terminal read stop"],
    c: 0,
    e: "SIGTTIN to bg process reading from terminal. Stops it. fg to resume.",
    de: "SIGTTOU for write. Job control. Stdin from terminal = SIGTTIN."
  }),
  (_i: number) => ({
    q: "What does `clone()` with CLONE_VFORK do?",
    o: ["Blocks parent until child exec/exit (like vfork)", "VFORK semantics", "Block parent", "Wait for child"],
    c: 0,
    e: "CLONE_VFORK: parent blocked until child exec or exit. Shared address space until then.",
    de: "vfork. Rare. fork+exec usually. Shared memory until exec."
  }),
];
