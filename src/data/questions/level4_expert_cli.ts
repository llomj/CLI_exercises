// LEVEL 4 EXPERT — Process Management (121 unique questions)
// Topics: ps, top, kill, nice, cron, daemons, systemd, load, memory, swap

export const level4Expert = [
  (_i: number) => ({
    q: "What does `ps -eL -o pid,lwp,psr,comm` show for psr?",
    o: ["CPU that thread is running on", "Processor ID", "CPU affinity", "Scheduling CPU"],
    c: 0,
    e: "psr = processor. Which CPU core the thread last ran on. For affinity debugging.",
    de: "ps -eL -o pid,lwp,psr,comm. LWP = thread. PSR = processor. taskset to set affinity.",
    deBeginner: "psr is the processor: which CPU core that thread last ran on. ps -eL shows threads (LWP = lightweight process). Useful for debugging CPU affinity. Use taskset to set which CPUs a process can use.",
    deExpert: "psr: CPU core. -eL threads. taskset affinity."
  }),
  (_i: number) => ({
    q: "What does `top -H -p PID` show?",
    o: ["Threads of that process (not just main)", "Process threads", "Thread view", "All threads"],
    c: 0,
    e: "top -H shows threads. -p limits to one process. See per-thread CPU.",
    de: "top -H -p 1234. Each LWP as separate line. For multi-threaded debugging.",
    deBeginner: "top -H shows each thread (LWP) as its own line. -p PID limits to one process. So you see per-thread CPU usage for that process. Handy when debugging multi-threaded apps.",
    deExpert: "top -H: threads. -p PID. Per-thread CPU."
  }),
  (_i: number) => ({
    q: "What does `kill -USR1 PID` typically do for nginx?",
    o: ["Reopens log files", "User signal 1", "Nginx reload logs", "Log rotate"],
    c: 0,
    e: "USR1/USR2 are user-defined. Nginx: USR1 reopens logs. App-specific.",
    de: "kill -USR1 $(cat /run/nginx.pid). After logrotate. Check app docs for signal meaning.",
    deBeginner: "USR1 and USR2 are user-defined signals. For nginx, USR1 means reopen log files (used after logrotate). Other apps use them differently. Check the app's docs. Example: kill -USR1 $(cat /run/nginx.pid).",
    deExpert: "USR1 nginx: reopen logs. App-specific. logrotate."
  }),
  (_i: number) => ({
    q: "What does `chrt -f 99 cmd` set?",
    o: ["FIFO realtime scheduling, priority 99", "Realtime priority", "FIFO scheduling", "Realtime FIFO"],
    c: 0,
    e: "chrt sets scheduling policy. -f = FIFO, -r = RR. 1-99 realtime. Requires root.",
    de: "chrt -f 99 ./realtime. chrt -p PID to view. Realtime can starve other processes.",
    deBeginner: "chrt -f 99 sets FIFO real-time scheduling at priority 99 (highest). -f is FIFO, -r is round-robin. Realtime priorities are 1-99. Root only. Realtime can starve normal processes. chrt -p PID shows current policy.",
    deExpert: "chrt -f 99: SCHED_FIFO 99. Root. chrt -p view. Starves others."
  }),
  (_i: number) => ({
    q: "What does crontab '5 4 * * 1-5' mean?",
    o: ["4:05 AM weekdays only", "Weekday 4:05", "Mon-Fri 4:05", "4:05 weekdays"],
    c: 0,
    e: "min=5, hour=4, day=*, month=*, weekday=1-5 (Mon-Fri). 04:05 weekdays.",
    de: "1-5 = Monday to Friday. 0 = Sunday. 5 4 * * 1-5 = 4:05 AM Mon-Fri.",
    deBeginner: "Cron: minute=5, hour=4, day=*, month=*, weekday=1-5. 1-5 is Monday through Friday (0=Sunday). So 5 4 * * 1-5 runs at 4:05 AM on weekdays only.",
    deExpert: "5 4 * * 1-5: 04:05 Mon-Fri. dow 0=Sun 1-5=Mon-Fri."
  }),
  (_i: number) => ({
    q: "What does `systemctl add-wants target service` do?",
    o: ["Adds service as WantedBy for target", "Add wants", "Target wants service", "Dependency add"],
    c: 0,
    e: "Creates wants dependency. When target starts, service starts. Dynamic dependency.",
    de: "systemctl add-wants multi-user.target nginx. Alternative to [Install] in unit file.",
    deBeginner: "add-wants adds a wants dependency: when the target starts, the service will start too. Example: systemctl add-wants multi-user.target nginx. It's like adding the service to the target without editing a unit file.",
    deExpert: "add-wants target service: target wants service. Dynamic [Install]."
  }),
  (_i: number) => ({
    q: "What does `memory pressure` mean in Linux?",
    o: ["Kernel reclaiming memory (OOM risk)", "Memory stress", "Reclaim pressure", "Low memory"],
    c: 0,
    e: "When free memory low, kernel reclaims (cache, swap). High pressure = OOM likely.",
    de: "vmstat, /proc/pressure/memory. PSI (Pressure Stall Information). Early OOM warning.",
    deBeginner: "Memory pressure is when the kernel is reclaiming memory (dropping caches, swapping). High pressure means free memory is low and OOM killer may run soon. Check vmstat or /proc/pressure/memory (PSI) for early warning.",
    deExpert: "Memory pressure: reclaim, OOM risk. PSI. vmstat, /proc/pressure/memory."
  }),
  (_i: number) => ({
    q: "What does `smem -s pss` show?",
    o: ["Proportional set size (shared memory split fairly)", "PSS memory", "Proportional memory", "Shared split"],
    c: 0,
    e: "PSS = proportional. Shared pages counted proportionally. Better than RSS for shared.",
    de: "smem -s pss. RSS overcounts shared (libc). PSS fairer. smem -p for per-process.",
    deBeginner: "PSS (Proportional Set Size) splits shared memory fairly. RSS counts full pages so shared libs are overcounted. smem -s pss sorts by PSS. smem -p for per-process. Better than RSS for shared memory.",
    deExpert: "PSS: proportional shared. smem -s pss. RSS overcounts. -p per-process."
  }),
  (_i: number) => ({
    q: "What does `zram` provide?",
    o: ["Compressed RAM as swap (faster than disk)", "Compressed swap", "RAM swap", "Zram swap"],
    c: 0,
    e: "zram = compressed block device in RAM. Swap to RAM with compression. Faster than disk swap.",
    de: "modprobe zram. zramctl. Used on Android, some distros. Reduces swap thrashing.",
    deBeginner: "zram is a compressed block device in RAM used as swap. Swap goes to RAM with compression instead of disk, so it's faster and reduces thrashing. modprobe zram; zramctl to manage. Common on Android and some distros.",
    deExpert: "zram: compressed RAM swap. Faster than disk. zramctl. Less thrashing."
  }),
  (_i: number) => ({
    q: "What does `pgrep -x name` require?",
    o: ["Exact match of process name (not substring)", "Exact name", "Full match", "Precise match"],
    c: 0,
    e: "pgrep -x matches full name only. pgrep nginx matches nginx, nginx-worker. -x = exact.",
    de: "pgrep -x init. Won't match init.d or systemd. Safer for scripts.",
    deBeginner: "pgrep -x matches the full process name only. pgrep nginx could match nginx-worker; pgrep -x nginx matches only nginx. pgrep -x init won't match init.d or systemd. Safer in scripts.",
    deExpert: "pgrep -x: exact name. No substring. Safer scripts."
  }),
  (_i: number) => ({
    q: "What does `pkill -x name` do vs without -x?",
    o: ["Kills only processes with exact name match", "Exact match kill", "Precise kill", "Full name only"],
    c: 0,
    e: "pkill -x = exact name. pkill nginx might match nginx-cache. -x = init only.",
    de: "pkill -x myapp. Avoids killing myapp-helper. Safer pattern matching.",
    deBeginner: "Without -x, pkill matches substrings (pkill nginx might hit nginx-cache). With -x, only the exact name is matched. pkill -x myapp won't kill myapp-helper. Safer when several similar processes exist.",
    deExpert: "pkill -x: exact only. Avoid myapp-helper. Safer."
  }),
  (_i: number) => ({
    q: "What does `setsid cmd` create?",
    o: ["New session (no controlling terminal)", "New session", "Session leader", "Detached session"],
    c: 0,
    e: "setsid creates new session. Process becomes session leader. No controlling tty.",
    de: "setsid cmd. Immune to SIGHUP from terminal. Daemon pattern. nohup alternative.",
    deBeginner: "setsid starts the command in a new session. The process is the session leader and has no controlling terminal, so it won't get SIGHUP when the terminal closes. Common daemon pattern. Alternative to nohup.",
    deExpert: "setsid: new session, no tty. SIGHUP immune. Daemon. nohup alt."
  }),
  (_i: number) => ({
    q: "What does `reptyr PID` do?",
    o: ["Moves existing process to current terminal", "Reparent to tty", "Steal process", "Move to terminal"],
    c: 0,
    e: "reptyr reparents process to your terminal. For screen/tmux recovery.",
    de: "reptyr 1234. Process gets new controlling tty. Saves session without restart.",
    deBeginner: "reptyr reparents an existing process to your current terminal. So a process that was in a dead screen/tmux can be moved to your current session. reptyr 1234. Saves the session without restarting the process.",
    deExpert: "reptyr PID: reparent to current tty. screen/tmux recovery."
  }),
  (_i: number) => ({
    q: "What does `ps -o pid,vsz,rss,comm --sort=-rss` sort by?",
    o: ["Resident set size (physical memory) descending", "RSS high to low", "Memory usage", "Physical memory"],
    c: 0,
    e: "RSS = resident. Physical RAM used. --sort=-rss = highest first.",
    de: "VSZ = virtual. RSS = physical. Sort by RSS for real memory hogs.",
    deBeginner: "RSS is resident set size (physical RAM used). --sort=-rss sorts by RSS descending, so the biggest memory users are first. VSZ is virtual size. For finding real memory hogs, sort by RSS.",
    deExpert: "RSS: resident, physical. --sort=-rss. VSZ virtual. Memory hogs."
  }),
  (_i: number) => ({
    q: "What does `ps -o pid,pri,ni,comm` show for pri and ni?",
    o: ["Priority and nice value", "Scheduling priority", "Priority nice", "Pri and nice"],
    c: 0,
    e: "pri = kernel priority (lower=higher). ni = nice (-20 to 19). Both affect scheduling.",
    de: "ps -o pid,pri,ni. RT priority for realtime. Normal: 100+ni. Lower = higher priority.",
    deBeginner: "pri is kernel priority (lower number = higher priority). ni is nice (-20 to 19). Both affect when the process runs. Realtime processes have special pri. For normal processes, priority is about 100+ni.",
    deExpert: "pri: kernel priority. ni: nice. RT vs normal. Lower = higher pri."
  }),
  (_i: number) => ({
    q: "What does `top -d 0.5` set?",
    o: ["Update interval to 0.5 seconds", "Half-second delay", "Update rate", "Refresh interval"],
    c: 0,
    e: "top -d seconds. -d 0.5 = update every 0.5s. -d 1 default. For faster refresh.",
    de: "top -d 0.1 for 10 updates/sec. Heavy. -d 2 for slower, less CPU.",
    deBeginner: "top -d sets the delay between updates in seconds. -d 0.5 means refresh every half second. Default is often 1. -d 0.1 gives 10 updates per second (heavy). -d 2 is slower and uses less CPU.",
    deExpert: "top -d sec: refresh interval. -d 0.5 = 0.5s. -d 0.1 heavy."
  }),
  (_i: number) => ({
    q: "What does `systemctl link /path/to/unit.service` do?",
    o: ["Enables unit from arbitrary path (symlink)", "Link unit", "Enable from path", "Symlink unit"],
    c: 0,
    e: "systemctl link creates symlink in .../system/. Unit from any path.",
    de: "systemctl link /opt/myapp/myapp.service. For non-standard locations.",
    deBeginner: "systemctl link creates a symlink to the unit file in the systemd search path so the unit can be enabled/started even if it's not in /etc or /lib. Use when the unit lives elsewhere, e.g. /opt/myapp/myapp.service.",
    deExpert: "systemctl link /path: symlink unit. Non-standard path. Enable/start."
  }),
  (_i: number) => ({
    q: "What does `systemctl revert service` do?",
    o: ["Removes overrides, restores original unit", "Revert overrides", "Remove overrides", "Restore original"],
    c: 0,
    e: "Reverts to vendor unit. Removes edit overrides. Restores default.",
    de: "systemctl revert nginx. After bad edit. Removes .../service.d/override.conf.",
    deBeginner: "systemctl revert restores the unit to the vendor version and removes override files (e.g. from systemctl edit). So you undo edits and get back the original unit. Use after a bad edit.",
    deExpert: "revert: restore vendor unit. Remove override. After bad edit."
  }),
  (_i: number) => ({
    q: "What does `journalctl -o json` output?",
    o: ["Log entries as JSON", "JSON format", "Structured logs", "JSON output"],
    c: 0,
    e: "journalctl -o json. Machine-parseable. -o json-pretty for readable.",
    de: "journalctl -o json | jq. For scripting. -o short, -o cat, -o export.",
    deBeginner: "journalctl -o json prints log entries as JSON, one per line. Good for scripts. Pipe to jq to parse. Other formats: -o short, -o cat, -o export. -o json-pretty for readable JSON.",
    deExpert: "journalctl -o json. jq. -o short/cat/export. Scripting."
  }),
  (_i: number) => ({
    q: "What does `journalctl --vacuum-time=7d` do?",
    o: ["Deletes logs older than 7 days", "Vacuum old logs", "Prune logs", "Clean journal"],
    c: 0,
    e: "journalctl --vacuum-time limits disk usage. --vacuum-size=500M alternative.",
    de: "journalctl --vacuum-time=7d. Requires root. Frees space. /var/log/journal.",
    deBeginner: "journalctl --vacuum-time=7d deletes log entries older than 7 days to limit disk use. Needs root. --vacuum-size=500M is an alternative. Frees space in /var/log/journal.",
    deExpert: "vacuum-time=7d: delete older. vacuum-size=500M. Root. Frees space."
  }),
  (_i: number) => ({
    q: "What does crontab '0 12 * * * [ $(date +\\%u) -eq 1 ] && cmd' achieve?",
    o: ["Runs cmd at noon only on Mondays", "Monday noon", "Weekly Monday", "Conditional Monday"],
    c: 0,
    e: "date +%u = weekday 1-7 (1=Mon). Condition runs cmd only when Monday.",
    de: "Cron can't do 'weekday only' in field. Use shell condition. % escaped in crontab.",
    deBeginner: "This runs at noon every day, but the shell test [ $(date +%u) -eq 1 ] is true only on Monday (1=Mon, 7=Sun). So cmd runs only at noon on Mondays. In crontab, % must be escaped as \\%.",
    deExpert: "date +%u 1=Mon. Shell condition. % escape in crontab. Monday noon."
  }),
  (_i: number) => ({
    q: "What does `systemctl isolate graphical.target` do?",
    o: ["Switches to GUI (stops multi-user, starts graphical)", "Start GUI", "Graphical mode", "Switch to X"],
    c: 0,
    e: "isolate stops other targets, starts this one. graphical = desktop. multi-user = console.",
    de: "systemctl isolate graphical.target. Like init 5. Stops non-graphical services.",
    deBeginner: "isolate switches to that target and stops others. graphical.target starts the desktop (X/Wayland). So you go from console (multi-user) to GUI. Like the old init 5. Stops services that aren't part of graphical.",
    deExpert: "isolate graphical.target: start GUI. Like init 5. Stops others."
  }),
  (_i: number) => ({
    q: "What does `trap 'handler' DEBUG` do (bash)?",
    o: ["Runs handler before each command", "Debug trap", "Pre-command trap", "Before each command"],
    c: 0,
    e: "DEBUG trap runs before each command. For tracing, profiling. Very verbose.",
    de: "trap 'echo $BASH_COMMAND' DEBUG. Extrace-like. set -x simpler for debugging.",
    deBeginner: "The DEBUG trap runs before each simple command. So trap 'echo $BASH_COMMAND' DEBUG prints the next command before it runs. Very verbose. Good for tracing. set -x is usually simpler for debugging.",
    deExpert: "trap DEBUG: before each command. $BASH_COMMAND. set -x simpler."
  }),
  (_i: number) => ({
    q: "What does `trap - EXIT` do?",
    o: ["Removes EXIT trap", "Clear EXIT trap", "Disable exit handler", "Reset trap"],
    c: 0,
    e: "trap - EXIT removes the EXIT trap. - with no handler = reset.",
    de: "trap - EXIT. trap - INT. Restores default behavior. For temporary traps.",
    deBeginner: "trap - EXIT removes the EXIT trap. The minus with no handler means reset to default. So you can clear a trap you set earlier. Same for trap - INT. Use when you only want a trap for part of the script.",
    deExpert: "trap - SIGNAL: remove trap. Restore default. Temporary traps."
  }),
  (_i: number) => ({
    q: "What does `sleep 0.5` do?",
    o: ["Sleeps 0.5 seconds", "Half second", "500ms", "Fractional sleep"],
    c: 0,
    e: "sleep accepts decimals. sleep 0.5 = 500ms. sleep 1m 30s also valid (GNU).",
    de: "sleep 0.1. Fractional seconds. For polling loops. usleep in C.",
    deBeginner: "sleep 0.5 sleeps for half a second (500ms). sleep accepts decimals. Useful in polling loops. GNU sleep also accepts sleep 1m 30s. In C you'd use usleep for subsecond.",
    deExpert: "sleep 0.5: 500ms. Fractional. Polling. usleep C."
  }),
  (_i: number) => ({
    q: "What does `wait -n` do (bash 4.3+)?",
    o: ["Waits for any one job to complete", "Wait any", "First to finish", "Any job"],
    c: 0,
    e: "wait -n returns when any background job completes. -n = any one.",
    de: "cmd1 & cmd2 & wait -n. Returns when first finishes. For race/parallel.",
    deBeginner: "wait -n (bash 4.3+) waits for any one background job to finish (not all). So cmd1 & cmd2 & wait -n returns when the first of them completes. Useful for parallel work or races.",
    deExpert: "wait -n: any one job. First to finish. bash 4.3+. Parallel."
  }),
  (_i: number) => ({
    q: "What does `exec 2>/dev/null` do?",
    o: ["Redirects stderr to null for rest of script", "Discard stderr", "Hide errors", "Stderr to null"],
    c: 0,
    e: "exec 2>/dev/null. All subsequent stderr goes to /dev/null. Permanent for shell.",
    de: "exec 2>/dev/null. Careful: hides all errors. Use 2>&1 for logging.",
    deBeginner: "exec 2>/dev/null redirects stderr to /dev/null for the rest of the script. All error output is discarded. Be careful: you won't see errors. For logging, redirect to a file with 2>&1.",
    deExpert: "exec 2>/dev/null: discard stderr. Permanent. 2>&1 for log."
  }),
  (_i: number) => ({
    q: "What does `$BASH_SUBSHELL` indicate?",
    o: ["Nesting level of subshell", "Subshell depth", "Subshell level", "Bash subshell"],
    c: 0,
    e: "$BASH_SUBSHELL = 0 in main shell. 1 in ( ), 2 in (( )). Subshell depth.",
    de: "echo $BASH_SUBSHELL. (cmd) increments. For debugging subshell usage.",
    deBeginner: "$BASH_SUBSHELL is 0 in the main shell and increases in subshells. ( cmd ) runs in a subshell so it becomes 1. Nested subshells give 2, etc. echo $BASH_SUBSHELL to see. Useful for debugging.",
    deExpert: "BASH_SUBSHELL: subshell depth. ( ) increments. Debug."
  }),
  (_i: number) => ({
    q: "What does `systemctl show --property=MainPID service` output?",
    o: ["Main process PID of service", "Main PID", "Service main PID", "Leader PID"],
    c: 0,
    e: "MainPID = main/leader process. For sending signals. Type=simple has one.",
    de: "systemctl show nginx -p MainPID. MainPID=1234. kill -HUP $MainPID.",
    deBeginner: "systemctl show -p MainPID (or --property=MainPID) outputs the main process PID of the service, e.g. MainPID=1234. Type=simple has one main process. Use it to send signals: kill -HUP $MainPID.",
    deExpert: "show -p MainPID. MainPID=1234. kill -HUP. Type=simple."
  }),
  (_i: number) => ({
    q: "What does `systemd-run --scope -p CPUQuota=50% cmd` do?",
    o: ["Runs cmd with 50% CPU limit (transient scope)", "CPU limit", "Quota scope", "Limit CPU"],
    c: 0,
    e: "systemd-run creates transient unit. -p sets properties. CPUQuota limits CPU.",
    de: "systemd-run --scope -p CPUQuota=50% ./heavy. Cgroup limit. No unit file needed.",
    deBeginner: "systemd-run --scope runs the command in a transient scope (no unit file). -p CPUQuota=50% limits it to half a CPU. So you get a cgroup CPU limit without creating a service file.",
    deExpert: "systemd-run --scope -p CPUQuota=50%. Transient. Cgroup. No unit."
  }),
  (_i: number) => ({
    q: "What does `journalctl --cursor=...` do?",
    o: ["Starts output from that cursor position", "Resume from cursor", "Cursor position", "Continue from cursor"],
    c: 0,
    e: "journalctl --cursor=ID continues from that log entry. For incremental reading.",
    de: "journalctl --cursor=$(journalctl -n1 -o cursor). Resume scripts. --after-cursor.",
    deBeginner: "journalctl --cursor=ID starts output from that log position. You can save the cursor (e.g. journalctl -n1 -o cursor) and later use --cursor= to resume. Good for scripts that read logs incrementally. --after-cursor starts after that entry.",
    deExpert: "journalctl --cursor=ID. Resume. -o cursor. --after-cursor."
  }),
  (_i: number) => ({
    q: "What does `anacron` provide vs cron?",
    o: ["Runs jobs even if system was off at scheduled time", "Missed job runner", "Catch-up cron", "Anacron jobs"],
    c: 0,
    e: "anacron runs jobs that were missed (e.g. laptop was off). Daily/weekly catch-up.",
    de: "anacron /etc/anacrontab. For desktops. cron assumes always-on. anacron runs on boot.",
    deBeginner: "anacron runs jobs that were missed because the system was off at the scheduled time (e.g. laptop). So daily/weekly jobs catch up after boot. cron assumes the machine is always on. anacron uses /etc/anacrontab.",
    deExpert: "anacron: missed jobs on boot. Desktops. /etc/anacrontab. vs cron."
  }),
  (_i: number) => ({
    q: "What does `systemctl list-units --state=failed` show?",
    o: ["Only failed units", "Failed services", "Failed units", "Failure list"],
    c: 0,
    e: "Filters to failed state. systemctl --failed is shorthand.",
    de: "systemctl list-units -s failed. Quick failure check. systemctl status for details.",
    deBeginner: "Filters the unit list to only failed units. systemctl list-units -s failed or systemctl --failed. Quick way to see what broke. Use systemctl status for details on each.",
    deExpert: "list-units -s failed. --failed. status for details."
  }),
  (_i: number) => ({
    q: "What does `oom_score_adj` control?",
    o: ["OOM killer preference (-1000 to 1000)", "OOM preference", "Kill priority", "OOM score"],
    c: 0,
    e: "oom_score_adj: -1000 = never kill, 1000 = prefer kill. /proc/PID/oom_score_adj.",
    de: "echo -500 > /proc/PID/oom_score_adj. Protect critical process. systemd uses for services.",
    deBeginner: "oom_score_adj (-1000 to 1000) tunes how likely the OOM killer is to pick this process. -1000 = never kill, 1000 = prefer kill. echo -500 > /proc/PID/oom_score_adj to protect. systemd sets it for services.",
    deExpert: "oom_score_adj -1000..1000. /proc/PID/. Protect. systemd."
  }),
  (_i: number) => ({
    q: "What does `numactl --cpunodebind=0 --membind=0 cmd` do?",
    o: ["Pins process to NUMA node 0 (CPU and memory)", "NUMA bind", "Node affinity", "NUMA node 0"],
    c: 0,
    e: "numactl binds to NUMA node. --cpunodebind CPU, --membind memory. For NUMA optimization.",
    de: "numactl --cpunodebind=0 --membind=0 ./app. Avoid cross-node. numactl -H for topology.",
    deBeginner: "numactl binds the process to NUMA node 0: --cpunodebind=0 for CPUs, --membind=0 for memory. So the process runs and allocates only on node 0, avoiding cross-node cost. numactl -H shows topology.",
    deExpert: "numactl --cpunodebind --membind. Node 0. -H topology. NUMA."
  }),
  (_i: number) => ({
    q: "What does `perf stat cmd` show?",
    o: ["Hardware performance counters (cycles, cache misses)", "Performance stats", "CPU counters", "Perf stats"],
    c: 0,
    e: "perf stat runs cmd, reports CPU events. Cycles, instructions, cache, branches.",
    de: "perf stat ./program. IPC, cache misses. perf record/report for profiling.",
    deBeginner: "perf stat runs the command and reports hardware performance counters: cycles, instructions, cache misses, branches. Gives IPC (instructions per cycle) and bottleneck hints. perf record/report for full profiling.",
    deExpert: "perf stat: HW counters. IPC, cache. record/report profile."
  }),
  (_i: number) => ({
    q: "What does `systemctl show service -p RequiredBy` show?",
    o: ["Units that require this service", "Dependents", "Required by", "Who needs this"],
    c: 0,
    e: "RequiredBy = reverse dependency. What has WantedBy/RequiredBy this.",
    de: "systemctl show nginx -p RequiredBy. WantedBy, RequiredBy. Dependency graph.",
    deBeginner: "RequiredBy lists units that have a RequiredBy or WantedBy dependency on this one (reverse deps). So you see what requires this service. Part of the dependency graph. -p WantedBy too.",
    deExpert: "show -p RequiredBy: reverse deps. WantedBy. Dep graph."
  }),
  (_i: number) => ({
    q: "What does `systemd-analyze blame` show?",
    o: ["Boot time per unit (slowest first)", "Boot blame", "Startup time", "Slow units"],
    c: 0,
    e: "systemd-analyze blame. Which services slowed boot. Optimize boot order.",
    de: "systemd-analyze blame. systemd-analyze critical-chain for chain. Boot optimization.",
    deBeginner: "systemd-analyze blame shows how long each unit took to start, slowest first. So you see what slowed boot. Use systemd-analyze critical-chain for the critical path. Helps optimize boot time.",
    deExpert: "blame: time per unit, slowest first. critical-chain path. Boot opt."
  }),
  (_i: number) => ({
    q: "What does `systemd-analyze plot` output?",
    o: ["SVG boot timeline", "Boot plot", "Startup graph", "Timeline SVG"],
    c: 0,
    e: "systemd-analyze plot > boot.svg. Visual timeline of boot. SVG format.",
    de: "systemd-analyze plot. Shows parallel startup. systemd-analyze dot for graph.",
    deBeginner: "systemd-analyze plot writes an SVG timeline of boot: when each unit started. Redirect to a file (e.g. > boot.svg) and open in a browser. Shows parallel startup. systemd-analyze dot for dependency graph.",
    deExpert: "plot: SVG boot timeline. dot: dep graph. Parallel startup."
  }),
  (_i: number) => ({
    q: "What does `cgroups` freezer subsystem do?",
    o: ["Freezes process group (pause all)", "Freeze cgroup", "Pause processes", "Suspend cgroup"],
    c: 0,
    e: "freezer freezes all processes in cgroup. They don't run. For checkpoint/restore.",
    de: "echo FROZEN > /sys/fs/cgroup/freezer/group/freezer.state. Docker uses for pause.",
    deBeginner: "The freezer cgroup freezes all processes in the group: they stop running. Write FROZEN to the group's freezer.state. Used for checkpoint/restore and container pause. Docker uses it for docker pause.",
    deExpert: "freezer: freeze cgroup. FROZEN state. Docker pause. Checkpoint."
  }),
  (_i: number) => ({
    q: "What does `systemctl set-environment VAR=value` do?",
    o: ["Sets env var for all future service starts", "System env", "Global env", "Service env"],
    c: 0,
    e: "Sets variable in systemd manager. All new services inherit. Not existing ones.",
    de: "systemctl set-environment FOO=bar. systemctl show-environment. Per-service: Environment= in unit.",
    deBeginner: "systemctl set-environment sets a variable in the systemd manager. All services started after that inherit it. Existing services don't. systemctl show-environment to see. For one service use Environment= in the unit.",
    deExpert: "set-environment: manager env. New services inherit. show-environment."
  }),
  (_i: number) => ({
    q: "What does `systemctl unset-environment VAR` do?",
    o: ["Removes var from systemd manager env", "Unset env", "Remove env", "Clear var"],
    c: 0,
    e: "Removes variable. Opposite of set-environment. Affects future services.",
    de: "systemctl unset-environment FOO. systemctl show-environment to verify.",
    deBeginner: "systemctl unset-environment removes the variable from the manager. Opposite of set-environment. Only affects services started after the change. systemctl show-environment to confirm.",
    deExpert: "unset-environment: remove. Affects future starts. verify."
  }),
  (_i: number) => ({
    q: "What does `LimitNOFILE` in systemd unit set?",
    o: ["Max open files for service", "File limit", "Nofile limit", "FD limit"],
    c: 0,
    e: "LimitNOFILE=65535. ulimit -n for service. For high-connection services.",
    de: "[Service] LimitNOFILE=65535. Replaces ulimit. LimitNPROC, LimitCORE, etc.",
    deBeginner: "LimitNOFILE=65535 in [Service] sets the max open files (file descriptors) for the service, like ulimit -n. Use for services with many connections. Other limits: LimitNPROC, LimitCORE, etc.",
    deExpert: "LimitNOFILE=65535. ulimit -n. LimitNPROC, LimitCORE."
  }),
  (_i: number) => ({
    q: "What does `PrivateTmp=yes` in systemd do?",
    o: ["Service gets private /tmp (isolated)", "Private tmp", "Isolated tmp", "Separate tmp"],
    c: 0,
    e: "Private /tmp for service. Not shared with others. Security isolation.",
    de: "[Service] PrivateTmp=yes. /tmp is bind mount. tmpfiles cleans on stop.",
    deBeginner: "PrivateTmp=yes gives the service its own /tmp (a private bind mount). Other processes can't see it. tmpfiles cleans it when the service stops. Good for isolation and security.",
    deExpert: "PrivateTmp=yes: private /tmp. Bind mount. tmpfiles clean."
  }),
  (_i: number) => ({
    q: "What does `ProtectSystem=strict` in systemd do?",
    o: ["Makes /usr /boot read-only for service", "Read-only system", "Protect system", "Strict protection"],
    c: 0,
    e: "ProtectSystem=strict: /usr, /boot read-only. Service can't modify. Security.",
    de: "[Service] ProtectSystem=strict. full = +/. ProtectHome, ReadOnlyPaths too.",
    deBeginner: "ProtectSystem=strict makes /usr and /boot read-only for the service. It can't modify system files. full adds /. Other options: ProtectHome, ReadOnlyPaths. Security hardening.",
    deExpert: "ProtectSystem=strict: /usr /boot ro. full=+/. ProtectHome."
  }),
  (_i: number) => ({
    q: "What does `NoNewPrivileges=yes` in systemd do?",
    o: ["Process cannot gain new privileges (setuid, etc)", "No privilege escalation", "Lock privileges", "No setuid"],
    c: 0,
    e: "NoNewPrivileges=yes. Process can't gain privileges. setuid, exec of setuid blocked.",
    de: "[Service] NoNewPrivileges=yes. Security. Prevents privilege escalation from service.",
    deBeginner: "NoNewPrivileges=yes means the process cannot gain new privileges (e.g. setuid, exec of setuid). So even if the service is compromised, it can't escalate. Security option.",
    deExpert: "NoNewPrivileges=yes: no setuid, no priv esc. Security."
  }),
  (_i: number) => ({
    q: "What does `Restart=on-failure` in systemd mean?",
    o: ["Restart only when process exits with error", "Restart on fail", "Failure restart", "Error restart"],
    c: 0,
    e: "Restart=on-failure: restart on non-zero exit, signal, timeout. Not on clean exit.",
    de: "Restart=always = always. on-failure = only when failed. on-abnormal for signals.",
    deBeginner: "Restart=on-failure means systemd restarts the service only when it fails: non-zero exit, signal, or timeout. It does not restart on clean exit. Restart=always restarts always. on-abnormal for signals.",
    deExpert: "Restart=on-failure: only on fail. always, on-abnormal."
  }),
  (_i: number) => ({
    q: "What does `RestartSec=5` in systemd set?",
    o: ["Wait 5 seconds before restart", "Restart delay", "Delay before restart", "5s before restart"],
    c: 0,
    e: "RestartSec=5. Pause before restart. Prevents tight restart loop.",
    de: "[Service] RestartSec=5. With Restart=on-failure. Gives time for cleanup.",
    deBeginner: "RestartSec=5 is the delay in seconds before systemd restarts the service after it exits. Used with Restart=on-failure. Avoids tight restart loops and gives time for cleanup.",
    deExpert: "RestartSec=5: delay before restart. With Restart=on-failure."
  }),
  (_i: number) => ({
    q: "What does `TimeoutStartSec=90` in systemd do?",
    o: ["Fails service if not started in 90 seconds", "Start timeout", "90s start limit", "Start deadline"],
    c: 0,
    e: "TimeoutStartSec=90. systemd kills if service doesn't signal ready in 90s.",
    de: "[Service] TimeoutStartSec=90. Type=simple waits for fork. Type=notify for ready signal.",
    deBeginner: "TimeoutStartSec=90 means systemd will fail the service if it doesn't report ready within 90 seconds. Type=simple waits for the main process to fork. Type=notify waits for sd_notify(READY=1).",
    deExpert: "TimeoutStartSec=90: fail if not ready. simple/notify. sd_notify."
  }),
  (_i: number) => ({
    q: "What does `Type=notify` in systemd require?",
    o: ["Service must call sd_notify when ready", "Notify when ready", "Ready signal", "sd_notify"],
    c: 0,
    e: "Type=notify: service sends sd_notify(READY=1). systemd knows when started.",
    de: "Service calls sd_notify(0, \"READY=1\"). systemd then considers it started. For async startup.",
    deBeginner: "Type=notify means the service must call sd_notify(READY=1) when it is ready. Until then systemd waits. So systemd knows when async startup is done. Used for services that take a while to be ready.",
    deExpert: "Type=notify: sd_notify READY=1. Async startup. systemd waits."
  }),
  (_i: number) => ({
    q: "What does `WantedBy=multi-user.target` mean?",
    o: ["Enable creates symlink so service starts with multi-user", "Wanted by target", "Boot dependency", "Target wants"],
    c: 0,
    e: "WantedBy= creates [Install] dependency. systemctl enable links to target.",
    de: "WantedBy=multi-user.target. When multi-user starts, this starts. RequiredBy = stronger.",
    deBeginner: "WantedBy=multi-user.target is an [Install] directive. When you systemctl enable, it creates a symlink so this unit is wanted by multi-user.target. So when the system boots to multi-user, this service starts. RequiredBy is a stronger dependency.",
    deExpert: "WantedBy=: enable symlink. Target wants this. RequiredBy stronger."
  }),
  (_i: number) => ({
    q: "What does `After=network.target` mean?",
    o: ["Start after network.target (ordering only)", "After network", "Start order", "Ordering dependency"],
    c: 0,
    e: "After= ordering. This starts after network. Doesn't require it. Before= opposite.",
    de: "After=network-online.target. Ordering. Wants=/Requires= for dependency.",
    deBeginner: "After=network.target is ordering only: this unit starts after network.target. It does not require network.target to be active. Before= is the opposite. For actual dependency use Wants= or Requires=.",
    deExpert: "After=: ordering only. Before= opposite. Wants/Requires dependency."
  }),
  (_i: number) => ({
    q: "What does `Requires=db.service` mean?",
    o: ["If db fails, this unit is stopped too", "Strong dependency", "Requires db", "Co-stop"],
    c: 0,
    e: "Requires=: db stopped => this stopped. Bidirectional. Wants= is one-way.",
    de: "Requires=mysql. If mysql fails, this fails. Wants= only starts together.",
    deBeginner: "Requires=db.service means if db stops or fails, this unit is stopped too. Strong dependency both ways. Wants= only makes them start together; if db fails, this unit is not stopped.",
    deExpert: "Requires=: co-stop. db stop => this stop. Wants= one-way."
  }),
  (_i: number) => ({
    q: "What does `BindsTo=db.service` mean?",
    o: ["This stops when db stops (stronger than Requires)", "Binds to", "Co-lifecycle", "Stop with db"],
    c: 0,
    e: "BindsTo: when db stops, this stops. Tied lifecycle. Requires + stop propagation.",
    de: "BindsTo=container. For sidecar. Stops when main stops.",
    deBeginner: "BindsTo= means when db stops, this unit stops too (tied lifecycle). Stronger than Requires: stop is propagated. Used for sidecars: when the main container stops, the sidecar stops.",
    deExpert: "BindsTo=: stop with dependency. Sidecar. Co-lifecycle."
  }),
  (_i: number) => ({
    q: "What does `systemctl list-unit-files` show?",
    o: ["All unit files and enable state", "Unit files", "Installed units", "Enable status"],
    c: 0,
    e: "Lists all units from disk. enabled/disabled/static/masked. Not runtime state.",
    de: "systemctl list-unit-files. Static = no [Install]. list-units for runtime.",
    deBeginner: "systemctl list-unit-files lists all unit files on disk and whether they're enabled, disabled, static, or masked. Static means no [Install] section. For what's actually running use list-units.",
    deExpert: "list-unit-files: disk, enable state. Static no [Install]. list-units runtime."
  }),
  (_i: number) => ({
    q: "What does `systemctl list-sockets` show?",
    o: ["Socket units and what activates them", "Socket units", "Activation sockets", "Socket list"],
    c: 0,
    e: "Socket units. When connection arrives, service starts. Socket activation.",
    de: "systemctl list-sockets. systemd listens. Incoming connection starts service. On-demand.",
    deBeginner: "systemctl list-sockets lists socket units. With socket activation, systemd listens on the socket and starts the service when a connection comes in. So the service runs on-demand.",
    deExpert: "list-sockets: socket units. Socket activation. On-demand start."
  }),
  (_i: number) => ({
    q: "What does `sd_notify` do?",
    o: ["Notifies systemd of service state (ready, status)", "Service notify", "systemd notify", "State notify"],
    c: 0,
    e: "sd_notify sends status to systemd. READY=1, WATCHDOG=1. For Type=notify.",
    de: "sd_notify(0, \"READY=1\"). C: sd_notify. Python: systemd.daemon.notify. Watchdog too.",
    deBeginner: "sd_notify sends status to systemd. READY=1 means the service is up. Used with Type=notify. WATCHDOG=1 for watchdog. In C call sd_notify(); in Python systemd.daemon.notify.",
    deExpert: "sd_notify: READY=1, WATCHDOG=1. Type=notify. C/Python API."
  }),
  (_i: number) => ({
    q: "What does `WatchdogSec=30` in systemd do?",
    o: ["Service must sd_notify every 30s or gets killed", "Watchdog timer", "Health check", "30s watchdog"],
    c: 0,
    e: "WatchdogSec: service must send WATCHDOG=1 periodically. Else killed.",
    de: "WatchdogSec=30. sd_notify(0, \"WATCHDOG=1\") every <30s. Detects hangs.",
    deBeginner: "WatchdogSec=30 means the service must call sd_notify(WATCHDOG=1) at least every 30 seconds. If it doesn't, systemd assumes it's hung and kills it. Good for detecting stuck services.",
    deExpert: "WatchdogSec=30: sd_notify WATCHDOG=1 every <30s. Kill if hang."
  }),
  (_i: number) => ({
    q: "What does `systemctl reload-or-restart service` do?",
    o: ["Reloads if supported, else restarts", "Reload or restart", "Smart reload", "Try reload first"],
    c: 0,
    e: "Tries reload first. If no reload, does restart. Best of both.",
    de: "systemctl reload-or-restart nginx. Safer than restart. Uses reload if available.",
    deBeginner: "reload-or-restart tries reload first (config only). If the service doesn't support reload, it does a full restart. So you get the best of both: less downtime when reload works.",
    deExpert: "reload-or-restart: try reload, else restart. Safer."
  }),
  (_i: number) => ({
    q: "What does `systemctl try-restart service` do?",
    o: ["Restarts only if currently running", "Restart if running", "Conditional restart", "Try restart"],
    c: 0,
    e: "Restarts only if running. If stopped, does nothing. Safe for optional services.",
    de: "systemctl try-restart nginx. Won't start stopped service. restart always does both.",
    deBeginner: "try-restart restarts the service only if it's currently running. If it's stopped, nothing happens. So it won't start a stopped service. restart always stops and starts.",
    deExpert: "try-restart: only if running. Won't start stopped. restart both."
  }),
  (_i: number) => ({
    q: "What does `journalctl --sync` do?",
    o: ["Flushes journal to disk", "Sync journal", "Flush logs", "Persist journal"],
    c: 0,
    e: "journalctl --sync. Forces write to disk. Before shutdown, power loss.",
    de: "journalctl --sync. Ensures logs persisted. systemd-journald does async writes.",
    deBeginner: "journalctl --sync flushes the journal to disk. Journald normally writes asynchronously. Use before shutdown or when you need to be sure logs are saved.",
    deExpert: "journalctl --sync: flush to disk. Async writes. Before shutdown."
  }),
  (_i: number) => ({
    q: "What does `journalctl --disk-usage` show?",
    o: ["Disk space used by journal", "Journal size", "Log disk usage", "Journal disk"],
    c: 0,
    e: "journalctl --disk-usage. How much /var/log/journal uses.",
    de: "journalctl --disk-usage. Then vacuum if needed. SystemMaxUse, SystemMaxFileSize.",
    deBeginner: "journalctl --disk-usage shows how much disk space the journal uses (e.g. in /var/log/journal). If it's too big, use vacuum-time or vacuum-size. SystemMaxUse and SystemMaxFileSize configure limits.",
    deExpert: "journalctl --disk-usage. vacuum. SystemMaxUse, SystemMaxFileSize."
  }),
  (_i: number) => ({
    q: "What does `cron` allow for user in /etc/cron.deny?",
    o: ["User in deny cannot use crontab", "Deny crontab", "Block user", "No crontab"],
    c: 0,
    e: "cron.deny: listed users cannot crontab. cron.allow: only listed can (if exists).",
    de: "/etc/cron.deny. If cron.allow exists, only those. Else deny blocks. Varies by distro.",
    deBeginner: "If a user is listed in /etc/cron.deny, they cannot use crontab. If /etc/cron.allow exists, only users in it can use crontab. Behavior varies by distro.",
    deExpert: "cron.deny: block. cron.allow: allowlist if exists. Distro varies."
  }),
  (_i: number) => ({
    q: "What does `MAILTO=` in crontab do?",
    o: ["Suppresses cron mail (no output mailed)", "No mail", "Disable mail", "Suppress output mail"],
    c: 0,
    e: "MAILTO= empty suppresses mail. Default MAILTO=user. MAILTO= for quiet.",
    de: "MAILTO= at top of crontab. No job output mailed. MAILTO=admin@host for redirect.",
    deBeginner: "MAILTO= with nothing after it means cron won't mail job output to anyone (suppresses mail). Default is to mail the user. MAILTO=admin@host sends to that address instead.",
    deExpert: "MAILTO=: no mail. MAILTO=addr redirect. Top of crontab."
  }),
  (_i: number) => ({
    q: "What does `SIGCHLD` mean when process exits?",
    o: ["Sent to parent when child terminates", "Child exit signal", "Child died", "Parent notification"],
    c: 0,
    e: "SIGCHLD to parent when child exits. Parent can wait() to reap. Zombies if not.",
    de: "SIGCHLD. Default ignore. Parent wait()s. init reaps orphans. Zombie = not reaped.",
    deBeginner: "When a child process exits, the kernel sends SIGCHLD to the parent. The parent should wait() to reap it. If the parent doesn't, the child stays a zombie. init reaps orphans.",
    deExpert: "SIGCHLD: child exited. Parent wait(). Zombie if not reaped. init orphans."
  }),
  (_i: number) => ({
    q: "What does `prlimit` show without args?",
    o: ["Resource limits of current process", "Current limits", "Process limits", "Limit display"],
    c: 0,
    e: "prlimit shows limits of current process. prlimit -p PID for another.",
    de: "prlimit. Like ulimit -a but for any process. prlimit -p 1234 --nofile=65535 to set.",
    deBeginner: "prlimit with no args shows resource limits of the current process (like ulimit -a). prlimit -p PID for another process. prlimit -p 1234 --nofile=65535 to set a limit on a running process.",
    deExpert: "prlimit: limits. -p PID. --nofile= set. Like ulimit -a."
  }),
  (_i: number) => ({
    q: "What does `/proc/PID/fd/` contain?",
    o: ["Symlinks to open files (file descriptors)", "Open files", "FD directory", "File descriptors"],
    c: 0,
    e: "/proc/PID/fd/ has 0, 1, 2, 3... symlinks to open files. ls -l shows targets.",
    de: "ls -l /proc/1234/fd/. 0 -> /dev/pts/0. For debugging. lsof uses this.",
    deBeginner: "/proc/PID/fd/ has one entry per open file descriptor: 0, 1, 2, 3... Each is a symlink to the open file or device. ls -l shows targets. lsof uses this. Good for debugging.",
    deExpert: "/proc/PID/fd/: symlinks to open files. 0 1 2... lsof."
  }),
  (_i: number) => ({
    q: "What does `/proc/PID/cmdline` contain?",
    o: ["Command line with null separators", "Process command", "Cmdline", "Args"],
    c: 0,
    e: "/proc/PID/cmdline has argv with \\0 between. cat shows as one line.",
    de: "cat /proc/1234/cmdline | tr '\\0' ' '. Full command. /proc/PID/environ for env.",
    deBeginner: "/proc/PID/cmdline has the command line with null bytes between arguments. cat shows it as one line; tr '\\0' ' ' to see spaces. /proc/PID/environ has the environment.",
    deExpert: "/proc/PID/cmdline: argv, \\0 sep. tr '\\0' ' '. environ env."
  }),
  (_i: number) => ({
    q: "What does `strace -c cmd` produce?",
    o: ["Summary of syscall counts and time", "Syscall summary", "Count summary", "Statistics"],
    c: 0,
    e: "strace -c runs cmd, prints syscall summary. % time, calls, errors.",
    de: "strace -c ./program. Which syscalls dominate. -c = summary, no -c = trace.",
    deBeginner: "strace -c runs the command and prints a summary: how many times each syscall was used and percent of time. So you see which syscalls dominate. Without -c you get a full trace.",
    deExpert: "strace -c: summary. % time, calls. Which syscalls dominate."
  }),
  (_i: number) => ({
    q: "What does `strace -f cmd` do?",
    o: ["Traces child processes (fork/vfork/clone)", "Follow children", "Fork trace", "Child trace"],
    c: 0,
    e: "strace -f follows forks. See syscalls from children. -ff for separate files.",
    de: "strace -f ./script. Script may fork. -ff strace.pid for per-process.",
    deBeginner: "strace -f follows child processes (fork/vfork/clone). So you see syscalls from the main process and its children. -ff writes separate trace files per process (strace.PID).",
    deExpert: "strace -f: follow children. -ff per-process files."
  }),
  (_i: number) => ({
    q: "What does `ltrace -p PID` do?",
    o: ["Attaches to process and traces library calls", "Attach ltrace", "Trace running", "Library trace attach"],
    c: 0,
    e: "ltrace -p attaches to running process. Traces library calls. Like strace -p.",
    de: "ltrace -p 1234. See malloc, printf, etc. Requires same user or root.",
    deBeginner: "ltrace -p PID attaches to a running process and traces its library calls (e.g. malloc, printf). Like strace -p but for library functions. Same user or root required.",
    deExpert: "ltrace -p PID: attach, library calls. malloc, printf. Like strace -p."
  }),
  (_i: number) => ({
    q: "What does `systemd-cgls` show?",
    o: ["Cgroup tree (hierarchy)", "Cgroup tree", "Control group tree", "Cgroup hierarchy"],
    c: 0,
    e: "systemd-cgls shows cgroup tree. systemd slices, scopes, services.",
  de: "systemd-cgls. /user.slice, /system.slice. systemd-cgtop for usage.",
  deBeginner: "systemd-cgls prints the full control-group (cgroup) tree so you can see how processes are grouped under slices, scopes, and services like /user.slice and /system.slice.",
  deExpert: "systemd-cgls: pretty cgroup tree view. Pairs with systemd-cgtop for live usage."
  }),
  (_i: number) => ({
    q: "What does `CPUQuota=100%` mean per core?",
    o: ["100% of one CPU core", "One core", "100% one core", "Single core quota"],
    c: 0,
    e: "CPUQuota=100% = one core. 200% = two cores. Per-core basis.",
  de: "CPUQuota=200% for 2 cores. CFS quota. CPUWeight for relative share.",
  deBeginner: "CPUQuota=100% means the service can use up to the full capacity of a single CPU core; 200% would allow up to two cores’ worth of CPU time, enforced via the CFS quota.",
  deExpert: "CPUQuota=100% ≈ 1 core budget; 200% ≈ 2 cores. Hard cgroup CFS cap; CPUWeight is relative share."
  }),
  (_i: number) => ({
    q: "What does `MemoryMax=512M` in systemd do?",
    o: ["Hard limit: service killed if exceeds 512M", "Memory limit", "512M limit", "OOM at 512M"],
    c: 0,
    e: "MemoryMax= hard limit. OOM if exceeded. MemoryHigh= soft limit, throttle.",
  de: "[Service] MemoryMax=512M. cgroup memory.max. Protects system from runaway.",
  deBeginner: "MemoryMax=512M sets a hard upper bound on how much memory the service’s cgroup may use; if it goes past that, the kernel will OOM-kill it instead of letting it take the whole machine down.",
  deExpert: "MemoryMax=512M → cgroup memory.max hard cap; exceed ⇒ OOM kill in that slice."
  }),
  (_i: number) => ({
    q: "What does `TasksMax=100` in systemd limit?",
    o: ["Max processes/threads service can create", "Process limit", "Task limit", "Max tasks"],
    c: 0,
    e: "TasksMax= max PIDs in cgroup. Fork bomb protection. Default 512 or 15%.",
  de: "[Service] TasksMax=100. pids.max cgroup. Prevents fork bombs.",
  deBeginner: "TasksMax=100 caps the number of processes and threads that service can create, so it can’t fork-bomb the system or exhaust the global PID space.",
  deExpert: "TasksMax=100 → pids.max guardrail; bounds forks/threads for that unit."
  }),
  (_i: number) => ({
    q: "What does `IPAddressDeny=` in systemd do?",
    o: ["Blocks service from those IPs", "Deny IP", "Block IP", "IP blocklist"],
    c: 0,
    e: "IPAddressDeny= blocks access to listed IPs. Restrictive networking.",
  de: "[Service] IPAddressDeny=any. Or specific. RestrictNetworkInterfaces= for interfaces.",
  deBeginner: "IPAddressDeny= lets you block network access to certain IPs or even all IPs (any) for that service, so its sockets simply can’t reach those destinations.",
  deExpert: "IPAddressDeny=… → per-unit IP blocklist; IPAddressDeny=any for full egress block."
  }),
  (_i: number) => ({
    q: "What does `ReadWritePaths=/var/lib/app` in systemd allow?",
    o: ["Only those paths writable (rest read-only)", "Allow write paths", "Writable paths", "Write allowlist"],
    c: 0,
    e: "ReadWritePaths= allowlist. With ProtectSystem, only these writable. Rest read-only.",
  de: "[Service] ReadWritePaths=/var/lib/foo. ProtectSystem=strict + this. Least privilege.",
  deBeginner: "With ProtectSystem making most of the filesystem read-only, ReadWritePaths=/var/lib/app pokes exceptions: those paths stay writable while the rest remains protected.",
  deExpert: "ReadWritePaths=…: write allowlist on top of ProtectSystem=strict; everything else RO."
  }),
  (_i: number) => ({
    q: "What does `InaccessiblePaths=/secret` do?",
    o: ["Hides path from service (cannot access)", "Hide path", "Inaccessible", "Path hidden"],
    c: 0,
    e: "InaccessiblePaths= bind-mounts path to empty. Service can't see it.",
  de: "[Service] InaccessiblePaths=/etc/secret. Security. Path doesn't exist for service.",
  deBeginner: "InaccessiblePaths=/secret makes that directory effectively disappear from the service’s view by bind‑mounting an empty node, so it can’t open or stat those files at all.",
  deExpert: "InaccessiblePaths=… → hide path via bind to empty; service sees it as non‑existent."
  }),
  (_i: number) => ({
    q: "What does `RuntimeDirectory=app` create?",
    o: ["/run/app for service (cleaned on stop)", "Runtime dir", "/run/app", "Temp runtime"],
    c: 0,
    e: "RuntimeDirectory=app creates /run/app. Mode 0755. Removed on stop.",
  de: "[Service] RuntimeDirectory=myapp. /run/myapp. RuntimeDirectoryMode= for permissions.",
  deBeginner: "RuntimeDirectory=app tells systemd to create /run/app (or /run/myapp) when the service starts and clean it up automatically when the service stops.",
  deExpert: "RuntimeDirectory=… → auto /run/<name> lifecycle; tmp runtime state with managed perms."
  }),
  (_i: number) => ({
    q: "What does `StateDirectory=app` create?",
    o: ["/var/lib/app for persistent data", "State dir", "Var lib", "Persistent dir"],
    c: 0,
    e: "StateDirectory=app creates /var/lib/app. Persists across restarts.",
  de: "[Service] StateDirectory=myapp. /var/lib/myapp. For databases, caches.",
  deBeginner: "StateDirectory=app creates and maintains /var/lib/app for long‑lived state like databases or caches, surviving service restarts and reboots.",
  deExpert: "StateDirectory=… → managed /var/lib/<name> for durable state; complements RuntimeDirectory."
  }),
  (_i: number) => ({
    q: "What does `CacheDirectory=app` create?",
    o: ["/var/cache/app for cache data", "Cache dir", "Var cache", "Cache path"],
    c: 0,
    e: "CacheDirectory=app creates /var/cache/app. For regenerable data.",
  de: "[Service] CacheDirectory=myapp. /var/cache/myapp. Cleared on package remove sometimes.",
  deBeginner: "CacheDirectory=app gives the service a standard /var/cache/app directory for temporary or regenerable data that can be safely wiped during maintenance.",
  deExpert: "CacheDirectory=… → managed /var/cache/<name> for throwaway caches; may be pruned."
  }),
  (_i: number) => ({
    q: "What does `LogsDirectory=app` create?",
    o: ["/var/log/app for logs", "Log dir", "Var log", "Log path"],
    c: 0,
    e: "LogsDirectory=app creates /var/log/app. For application logs.",
  de: "[Service] LogsDirectory=myapp. /var/log/myapp. LogDirectoryMode= for perms.",
  deBeginner: "LogsDirectory=app ensures /var/log/app exists with the right owner and permissions so the service has a safe place to write its own log files.",
  deExpert: "LogsDirectory=… → managed /var/log/<name>; pair with LogDirectoryMode for perms."
  }),
  (_i: number) => ({
    q: "What does `ConfigurationDirectory=app` create?",
    o: ["/etc/app for config", "Config dir", "Etc app", "Config path"],
    c: 0,
    e: "ConfigurationDirectory=app creates /etc/app. For config files.",
  de: "[Service] ConfigurationDirectory=myapp. /etc/myapp. Config files.",
  deBeginner: "ConfigurationDirectory=app gives the service a dedicated /etc/app directory where its configuration files live, managed by systemd at install time.",
  deExpert: "ConfigurationDirectory=… → structured /etc/<name> tree for unit config payload."
  }),
  (_i: number) => ({
    q: "What does `StandardOutput=journal` in systemd do?",
    o: ["Sends stdout to journal", "Journal stdout", "Log to journal", "stdout to journal"],
    c: 0,
    e: "StandardOutput=journal. stdout goes to journald. journalctl -u service sees it.",
  de: "[Service] StandardOutput=journal. StandardError=journal. Inherit, null, socket.",
  deBeginner: "StandardOutput=journal routes everything the service prints to stdout into the systemd journal so you can see it later with journalctl -u service.",
  deExpert: "StandardOutput=journal → stdout to journald; combine with StandardError=journal/inherit."
  }),
  (_i: number) => ({
    q: "What does `StandardError=inherit` mean?",
    o: ["stderr goes to same place as stdout", "Inherit stderr", "Same as stdout", "Stderr inherit"],
    c: 0,
    e: "StandardError=inherit: stderr follows stdout. Both to journal, or both to null.",
  de: "[Service] StandardError=inherit. With StandardOutput=journal, both to journal.",
  deBeginner: "StandardError=inherit makes stderr follow wherever stdout goes for that unit, so with StandardOutput=journal both streams end up in the journal together.",
  deExpert: "StandardError=inherit → mirror stdout target; avoids split logs between stderr/stdout."
  }),
  (_i: number) => ({
    q: "What does `SyslogIdentifier=myapp` set?",
    o: ["Identifier in journal/syslog for this service", "Syslog ID", "Log identifier", "App name in logs"],
    c: 0,
    e: "SyslogIdentifier= sets SYSLOG_IDENTIFIER. journalctl SYSLOG_IDENTIFIER=myapp.",
  de: "[Service] SyslogIdentifier=myapp. journalctl -t myapp. For filtering.",
  deBeginner: "SyslogIdentifier=myapp forces log records from this service to appear with that identifier, so you can filter them easily with journalctl -t myapp or SYSLOG_IDENTIFIER=myapp.",
  deExpert: "SyslogIdentifier=… → stable tag for journal/syslog filters (journalctl -t / -g)."
  }),
  (_i: number) => ({
    q: "What does `systemctl clean` do?",
    o: ["Removes state/cache/runtime (unit-specific)", "Clean state", "Remove state", "Reset state"],
    c: 0,
    e: "systemctl clean removes *Directory state. Cleans RuntimeDirectory, etc.",
  de: "systemctl clean nginx. Removes /run/nginx etc. For fresh start.",
  deBeginner: "systemctl clean service wipes the runtime/cache/state directories that systemd created for that unit (like /run/nginx or its cache dirs), giving you a clean slate without removing the unit itself.",
  deExpert: "systemctl clean <unit> → purge State/Cache/Runtime dirs for a fresh sandbox."
  }),
  (_i: number) => ({
    q: "What does `systemd-run --user -u mytimer.timer` do?",
    o: ["Runs user-level timer (user service)", "User timer", "User service", "Per-user timer"],
    c: 0,
    e: "systemctl --user for user services. Timers in user context. No root.",
  de: "systemctl --user start mytimer.timer. ~/.config/systemd/user/. Per-user cron.",
  deBeginner: "systemd-run --user -u mytimer.timer starts or runs a timer unit in your per‑user systemd instance, so scheduled jobs can run for your account without needing root.",
  deExpert: "systemd-run / systemctl --user + timers → per‑user cron‑like scheduling in ~/.config/systemd/user/."
  }),
  (_i: number) => ({
    q: "What does `loginctl enable-linger user` do?",
    o: ["User services persist after logout", "Linger user", "Persist user services", "User linger"],
    c: 0,
    e: "enable-linger: user's systemd --user keeps running after logout. For background.",
  de: "loginctl enable-linger jane. User services survive logout. For cron-like user jobs.",
  deBeginner: "loginctl enable-linger user keeps that user’s systemd --user instance running even after they log out, so their user services and timers continue in the background.",
  deExpert: "enable-linger → keep user manager alive post‑logout; user units/timers survive logouts."
  }),
  (_i: number) => ({
    q: "What does `systemd-inhibit` do?",
    o: ["Blocks sleep/shutdown/idle while command runs", "Inhibit sleep", "Block suspend", "Prevent sleep"],
    c: 0,
    e: "systemd-inhibit cmd. Holds inhibitor lock. System won't sleep until cmd exits.",
  de: "systemd-inhibit --what=sleep ./backup. Prevents suspend during backup.",
  deBeginner: "systemd-inhibit wraps a command so that while it runs, systemd holds an inhibitor lock and won’t let the machine sleep or power off (depending on --what=).",
  deExpert: "systemd-inhibit --what=sleep|shutdown ./job → temporary inhibitor lock while job runs."
  }),
  (_i: number) => ({
    q: "What does `systemctl halt` do vs poweroff?",
    o: ["Stops CPU, leaves power on (halt)", "Halt system", "Stop CPU", "Halt vs poweroff"],
    c: 0,
    e: "halt stops OS, may not cut power. poweroff tries to power off. reboot restarts.",
  de: "systemctl halt. systemctl poweroff. Depends on hardware. halt = runlevel 0.",
  deBeginner: "systemctl halt brings the OS down to a halted state (CPU stopped) but may leave power on, while systemctl poweroff asks the firmware to actually cut power if supported.",
  deExpert: "halt = stop OS/CPU, power may stay; poweroff = request full power‑down; reboot = restart."
  }),
  (_i: number) => ({
    q: "What does `systemd-firstboot` do?",
    o: ["Sets initial system config (hostname, etc) on first boot", "First boot config", "Initial setup", "First boot"],
    c: 0,
    e: "systemd-firstboot configures unconfigured system. Hostname, timezone, etc.",
  de: "systemd-firstboot. For images. --root= for chroot. One-time setup.",
  deBeginner: "systemd-firstboot is a helper you run on a fresh image or chroot to set things like hostname, locale, and timezone before the very first boot.",
  deExpert: "systemd-firstboot: one‑shot initial config tool (hostname/locale/tz), often run on images with --root=."
  }),
  (_i: number) => ({
    q: "What does `kernel.pid_max` control?",
    o: ["Maximum PID value (process ID limit)", "PID limit", "Max PIDs", "Process ID max"],
    c: 0,
    e: "kernel.pid_max = max PID. Default 32768. More for high-fork systems.",
  de: "sysctl kernel.pid_max. /proc/sys/kernel/pid_max. 4194304 common for large.",
  deBeginner: "kernel.pid_max sets the highest process ID the kernel will hand out; raising it lets systems with lots of short‑lived processes avoid PID wrap too quickly.",
  deExpert: "kernel.pid_max (/proc/sys/kernel/pid_max) → PID space ceiling; high‑fork boxes use ~4M."
  }),
  (_i: number) => ({
    q: "What does `vm.dirty_ratio` control?",
    o: ["% of memory when pdflush writes dirty pages", "Dirty page threshold", "Write threshold", "Dirty ratio"],
    c: 0,
    e: "vm.dirty_ratio: when dirty pages hit this % of memory, processes block to write.",
  de: "sysctl vm.dirty_ratio. 20 default. vm.dirty_background_ratio for async write.",
  deBeginner: "vm.dirty_ratio is the percentage of RAM that can be filled with dirty pages before writers themselves start blocking so the kernel can flush data to disk.",
  deExpert: "vm.dirty_ratio → sync‑backpressure threshold; background_ratio handles async flusher start."
  }),
  (_i: number) => ({
    q: "What does `proc` hidepid mount option do?",
    o: ["Hides other users' /proc/PID", "Hide PIDs", "Proc hidepid", "Hide processes"],
    c: 0,
    e: "mount -o hidepid=2 /proc. Users can't see other users' processes. Security.",
  de: "hidepid=1 hide other, =2 also hide /proc/PID/cmdline. Privacy, security.",
  deBeginner: "Mounting /proc with hidepid=1 or 2 stops normal users from seeing processes they don’t own (and with =2 also hides details like cmdline), which improves privacy on multi‑user systems.",
  deExpert: "/proc hidepid=1/2 → restrict per‑UID visibility; level 2 also hides cmdline, etc."
  }),
  (_i: number) => ({
    q: "What does `subreaper` (PR_SET_CHILD_SUBREAPER) do?",
    o: ["Process reaps grandchildren when child exits", "Subreaper", "Reap grandchildren", "Child reaper"],
    c: 0,
    e: "Subreaper: when direct child exits without reaping, this process reaps grandchildren.",
  de: "prctl(PR_SET_CHILD_SUBREAPER, 1). systemd uses. Prevents orphan chains to init.",
  deBeginner: "Marking a process as a subreaper means that when its children exit and leave behind grandchildren, those grandchildren get adopted and reaped by the subreaper instead of by PID 1.",
  deExpert: "PR_SET_CHILD_SUBREAPER → intermediate reparent/adopt point; systemd user/containers use it."
  }),
  (_i: number) => ({
    q: "What does `CLONE_NEWPID` in clone() create?",
    o: ["New PID namespace (PIDs start from 1)", "PID namespace", "New PID ns", "Isolated PIDs"],
    c: 0,
    e: "CLONE_NEWPID: new PID namespace. Process sees itself as 1. Containers use this.",
  de: "unshare --pid. New namespace. PID 1 in ns. unshare --fork --pid for shell.",
  deBeginner: "CLONE_NEWPID (or unshare --pid) starts the process in a new PID namespace where it appears as PID 1 and sees only processes inside that namespace, which is how containers isolate process trees.",
  deExpert: "CLONE_NEWPID / unshare --pid → nested PID ns; caller becomes PID 1 in that ns."
  }),
  (_i: number) => ({
    q: "What does `pkill -signal name` require for signal?",
    o: ["Signal name or number (e.g. -TERM or -15)", "Signal spec", "Signal format", "Kill signal"],
    c: 0,
    e: "pkill -TERM or pkill -15. Same as kill. pkill -9 = SIGKILL.",
  de: "pkill -HUP nginx. pkill -signal=HUP. Default is SIGTERM.",
  deBeginner: "pkill lets you specify the signal either by name (like -HUP, -TERM) or by number (like -15); if you omit it, pkill uses SIGTERM by default.",
  deExpert: "pkill -HUP / -TERM / -9 or -signal=HUP/15/9; default is SIGTERM when no signal given."
  }),
  (_i: number) => ({
    q: "What does `timeout 10 cmd` do?",
    o: ["Kills cmd after 10 seconds if still running", "Run with timeout", "10s limit", "Kill after 10s"],
    c: 0,
    e: "timeout 10 cmd. Sends SIGTERM after 10s. SIGKILL after kill delay. Coreutils.",
  de: "timeout 10 ./script. timeout -k 5 10 for 5s between TERM and KILL. Prevents hung processes.",
  deBeginner: "timeout 10 cmd runs cmd but if it’s still running after 10 seconds, timeout sends SIGTERM (and later SIGKILL if you also use -k) so long‑running or hung jobs don’t run forever.",
  deExpert: "timeout 10 … ⇒ TERM at 10s, optional -k window before forced KILL; coreutils guardrail for hangs."
  }),
  (_i: number) => ({
    q: "What does `runcon` do?",
    o: ["Runs command with specified SELinux context", "Run with context", "SELinux run", "Context run"],
    c: 0,
    e: "runcon context cmd. Runs cmd with that SELinux context. For testing.",
  de: "runcon u:r:unconfined_t:s0 ls. runcon -t type cmd. SELinux only.",
  deBeginner: "runcon runs a command under an explicit SELinux security context (like a particular role and type), which is handy for testing or debugging SELinux policy.",
  deExpert: "runcon <ctx> cmd / runcon -t type cmd → ad‑hoc SELinux domain switch for a process."
  }),
  (_i: number) => ({
    q: "What does `sched_setaffinity` do?",
    o: ["Sets CPU affinity (which CPUs process can use)", "CPU affinity", "Set affinity", "Affinity syscall"],
    c: 0,
    e: "sched_setaffinity syscall. taskset uses it. Restrict process to specific CPUs.",
  de: "taskset -cp 0,1 1234. CPU affinity. For NUMA, isolation, performance.",
  deBeginner: "sched_setaffinity (and the taskset CLI) pins a process to specific CPUs so it will only run on those cores, which can help with NUMA locality or noisy‑neighbor isolation.",
  deExpert: "sched_setaffinity / taskset -cp 0,1 PID → hard CPU mask; use for pinning/NUMA tuning."
  }),
  (_i: number) => ({
    q: "What does `iostat -x 1` show?",
    o: ["Extended disk I/O stats every second", "Disk I/O", "I/O stats", "Extended iostat"],
    c: 0,
    e: "iostat -x extended. r/s w/s, await, util. 1 = 1 second interval. sysstat package.",
  de: "iostat -x 1. Device utilization. %util = busy. For disk bottleneck.",
  deBeginner: "iostat -x 1 prints detailed per‑device disk stats (like IOPS, average wait time, and %util) every second so you can see whether storage is the bottleneck.",
  deExpert: "iostat -x 1 → per‑device r/s, w/s, await, svctm, %util; watch %util/await for hot disks."
  }),
  (_i: number) => ({
    q: "What does `pidfd` (Linux 5.1+) provide?",
    o: ["File descriptor for PID (avoids race)", "PID fd", "Race-free PID", "PID file descriptor"],
    c: 0,
    e: "pidfd_open(PID) returns fd. Use fd instead of PID. No race if PID reused.",
  de: "pidfd: PID can be reused. Fd stays valid. waitid(P_PIDFD). Modern process handling.",
  deBeginner: "pidfd gives you a file descriptor that refers to a specific process, so even if that PID exits and gets reused you don’t accidentally signal or wait on the wrong process.",
  deExpert: "pidfd_open() → stable handle for a specific task; use waitid(P_PIDFD,…) & send via pidfd_send_signal."
  }),
  (_i: number) => ({
    q: "What does `BPF` allow in Linux?",
    o: ["In-kernel programmable filtering and tracing", "Kernel programs", "BPF programs", "In-kernel filtering"],
    c: 0,
    e: "eBPF: safe programs in kernel. Tracing, networking, security. No kernel module.",
  de: "bpftrace, bcc. Attach to kprobes, tracepoints. Modern observability.",
  deBeginner: "eBPF lets you load small, verified programs into the kernel to filter packets, trace syscalls, or enforce policies without writing full kernel modules.",
  deExpert: "eBPF: JIT‑ed, verified in‑kernel programs attached to kprobes/tracepoints/hooks; toolchains: bpftrace, bcc, libbpf."
  }),
  (_i: number) => ({
    q: "What does `perf record -g cmd` add?",
    o: ["Call graph (stack traces) to profile", "Call graph", "Stack traces", "Graph profile"],
    c: 0,
    e: "perf record -g records call stacks. perf report shows hierarchy.",
  de: "perf record -g ./app. -F 99 for 99 Hz. Flame graphs from this.",
  deBeginner: "perf record -g cmd profiles cmd and also records stack traces so perf report (or a flame‑graph tool) can show you which call stacks are consuming CPU.",
  deExpert: "perf record -g -F 99 ./app → sample with call stacks; feed to perf report or flamegraph.pl."
  }),
  (_i: number) => ({
    q: "What does `perf stat cmd` show?",
    o: ["Hardware counters (cycles, cache misses) for cmd", "HW counters", "Performance counters", "CPU events"],
    c: 0,
    e: "perf stat runs cmd, shows cycles, instructions, cache misses, etc.",
  de: "perf stat ./program. IPC = instructions/cycle. Bottleneck hints.",
  deBeginner: "perf stat cmd runs the command and then prints a summary of hardware counters like cycles, instructions, and cache misses so you can estimate IPC and see if you’re CPU‑, cache‑, or branch‑bound.",
  deExpert: "perf stat ./prog → cycles, instructions, cache‑miss, branch stats; look at IPC and misses for first‑pass perf triage."
  }),
  (_i: number) => ({
    q: "What does `numactl --localalloc cmd` do?",
    o: ["Allocates memory from local NUMA node only", "Local NUMA", "Local alloc", "NUMA local"],
    c: 0,
    e: "numactl --localalloc keeps memory on same node as CPU. Reduces latency.",
  de: "numactl -m 0 -N 0 for node 0. numactl --hardware shows topology.",
  deBeginner: "numactl --localalloc cmd asks the kernel to allocate memory from the NUMA node local to the CPU running the process, which reduces cross‑node latency for memory‑intensive workloads.",
  deExpert: "numactl --localalloc / -m local: favor local node pages; inspect layout with numactl --hardware."
  }),
  (_i: number) => ({
    q: "What does `oom_score_adj` control?",
    o: ["OOM killer preference (-1000 to 1000)", "OOM preference", "Kill preference", "OOM score"],
    c: 0,
    e: "oom_score_adj: -1000 = never kill, 1000 = prefer kill. /proc/PID/oom_score_adj.",
  de: "systemd sets -1000 for critical. Protect important processes.",
  deBeginner: "oom_score_adj is a per‑process tuning knob telling the OOM killer how much to prefer or avoid that process when killing; negative values protect it, positive values make it a more likely victim.",
  deExpert: "oom_score_adj ∈ [-1000,1000] biases OOM selection; systemd often sets -1000 on critical units."
  }),
  (_i: number) => ({
    q: "What does `cgroup` v2 `memory.current` show?",
    o: ["Current memory usage of cgroup", "Current memory", "Memory usage", "RSS of cgroup"],
    c: 0,
    e: "memory.current = current bytes used. Read from /sys/fs/cgroup/.../memory.current.",
  de: "memory.max for limit. memory.stat for breakdown. memory.events for OOM.",
  deBeginner: "In cgroup v2, memory.current tells you how many bytes of memory that cgroup is currently using so you can compare it with memory.max and see how close you are to the limit.",
  deExpert: "memory.current: live usage; memory.max: cap; memory.stat/events: breakdown + OOM/pressure hooks."
  }),
  (_i: number) => ({
    q: "What does `systemd-analyze blame` show?",
    o: ["Boot time per unit (slowest first)", "Boot blame", "Slow units", "Boot time per service"],
    c: 0,
    e: "systemd-analyze blame. Which units slowed boot. Optimize startup.",
  de: "systemd-analyze critical-chain for critical path. blame for all.",
  deBeginner: "systemd-analyze blame lists all units with how long each took to start, sorted by time, so you can immediately see which services are slowing boot.",
  deExpert: "systemd-analyze blame → per‑unit startup durations; pair with critical-chain for serialized path."
  }),
  (_i: number) => ({
    q: "What does `systemd-analyze critical-chain` show?",
    o: ["Critical path of serialized units in boot", "Critical path", "Boot chain", "Serial chain"],
    c: 0,
    e: "Shows chain of units that block boot. Longest serial dependency.",
  de: "systemd-analyze critical-chain. What to optimize. Parallel vs serial.",
  deBeginner: "systemd-analyze critical-chain prints the longest chain of units that had to run one after another to reach the default target, revealing the true critical path of the boot.",
  deExpert: "critical-chain → serialized boot path and timings; tells you what to parallelize or speed up."
  }),
  (_i: number) => ({
    q: "What does `kill -0 PID` do?",
    o: ["Checks if process exists (no signal sent)", "Check exists", "Test PID", "Process check"],
    c: 0,
    e: "kill -0 checks existence. Exit 0 if exists, 1 if not. No signal.",
  de: "if kill -0 $pid 2>/dev/null; then echo running; fi. Portable.",
  deBeginner: "kill -0 PID doesn’t actually send a terminating signal; it just asks the kernel “can I signal this PID?” so you can test whether a process still exists and is accessible.",
  deExpert: "kill -0 $PID → existence/permission probe only; script pattern: if kill -0 …; then running."
  }),
  (_i: number) => ({
    q: "What does `setsid cmd` do?",
    o: ["Creates new session (detaches from terminal)", "New session", "Detach session", "Session leader"],
    c: 0,
    e: "setsid runs in new session. No controlling terminal. For daemons.",
  de: "setsid ./daemon. Or nohup. Double-fork pattern. Session = process group.",
  deBeginner: "setsid cmd starts cmd in a brand‑new session with no controlling terminal, which is one of the classic steps in fully detaching a daemon from the shell.",
  deExpert: "setsid: new session + no ctty; used in daemonization along with double‑fork/nohup."
  }),
  (_i: number) => ({
    q: "What does `getpriority` return for nice value?",
    o: ["Nice value (higher = lower priority)", "Nice value", "Priority", "Scheduling priority"],
    c: 0,
    e: "getpriority(PRIO_PROCESS) returns nice. -20 to 19. 0 = default.",
  de: "nice system call. getpriority. setpriority to change. C API.",
  deBeginner: "getpriority(PRIO_PROCESS, pid) fetches the current nice value of a process (the same value you’d adjust with nice or renice), where higher numbers mean lower scheduler priority.",
  deExpert: "getpriority/ setpriority wrap the nice level (‑20..19); 0 is default, higher = “nicer”."
  }),
  (_i: number) => ({
    q: "What does `RLIMIT_NOFILE` limit?",
    o: ["Max open file descriptors per process", "Open files", "FD limit", "File descriptor limit"],
    c: 0,
    e: "RLIMIT_NOFILE = max open files. ulimit -n. getrlimit/setrlimit.",
  de: "Default often 1024. Servers need 65535+. /proc/sys/fs/nr_open.",
  deBeginner: "RLIMIT_NOFILE is the per‑process cap on how many file descriptors it can have open at once; raising it is essential for high‑connection servers that would otherwise hit “too many open files”.",
  deExpert: "RLIMIT_NOFILE ⇔ ulimit -n; default ~1024, tuned servers go 65k+ within /proc/sys/fs/nr_open."
  }),
  (_i: number) => ({
    q: "What does `CLONE_NEWNET` create?",
    o: ["New network namespace (isolated network stack)", "Network namespace", "Net ns", "Isolated network"],
    c: 0,
    e: "CLONE_NEWNET = new netns. Own interfaces, routing. Containers, veth.",
  de: "unshare --net. ip netns. Isolated network. Docker uses this.",
  deBeginner: "CLONE_NEWNET (or unshare --net) gives the process its own isolated networking stack with separate interfaces and routing tables, which is how containers get their own virtual network view.",
  deExpert: "CLONE_NEWNET / ip netns → separate netns; veth pairs + bridges wire it into host/overlay."
  }),
  (_i: number) => ({
    q: "What does `cgroup` freezer do?",
    o: ["Pauses all processes in cgroup (freeze)", "Freeze cgroup", "Pause cgroup", "Suspend processes"],
    c: 0,
    e: "Freezer cgroup: freeze = stop all. For checkpoint/restore, container pause.",
  de: "echo FROZEN > freezer.state. Docker pause. All tasks stopped.",
  deBeginner: "The cgroup freezer controller lets you freeze all tasks in a cgroup at once so they stop running without exiting, which is useful for pausing containers or taking checkpoints.",
  deExpert: "freezer: echo FROZEN/THAWED > freezer.state; used under docker pause / CRIU flows."
  }),
  (_i: number) => ({
    q: "What does `systemctl reload-or-restart service` do?",
    o: ["Reloads if supported, else restarts", "Reload or restart", "Smart reload", "Reload fallback"],
    c: 0,
    e: "Tries reload first. If no reload, does full restart. Safer than restart.",
  de: "systemctl reload-or-restart nginx. For config changes. Less downtime.",
  deBeginner: "systemctl reload-or-restart service first tries a cheap config reload, and only falls back to a full restart if the unit doesn’t support reloading, which reduces downtime when possible.",
  deExpert: "reload-or-restart: best‑effort SIGHUP/reload, else restart; ideal for config pushes."
  }),
  (_i: number) => ({
    q: "What does `journalctl -b` show?",
    o: ["Logs from current boot only", "Current boot", "This boot", "Boot logs"],
    c: 0,
    e: "journalctl -b = current boot. -b -1 = previous boot. -b -2 = two ago.",
  de: "journalctl -b -1 for last boot crash. -b for boot filter.",
  deBeginner: "journalctl -b filters the journal down to messages from just the current boot, and -b -1 or -b -2 let you inspect previous boots, which is perfect for debugging crashes.",
  deExpert: "journalctl -b[ N ]: per‑boot filter (0=current, -1=prev,…); quick crash/boot‑cycle triage."
  }),
  (_i: number) => ({
    q: "What does `auditd` log?",
    o: ["Security-relevant events (syscalls, file access)", "Security audit", "Audit events", "Security log"],
    c: 0,
    e: "auditd records security events. File access, logins, syscalls. ausearch, aureport.",
  de: "auditd. /var/log/audit/. Compliance. Who did what when.",
  deBeginner: "auditd is the Linux audit daemon that logs security‑sensitive events like system calls matching audit rules, file accesses, and auth events into /var/log/audit for compliance and forensics.",
  deExpert: "auditd + rules → syscall/file/auth trail in /var/log/audit; query with ausearch/aureport for “who did what when”."
  }),
  (_i: number) => ({
    q: "What does `cgroups` v1 `cpuacct` provide?",
    o: ["CPU accounting (usage stats per cgroup)", "CPU accounting", "CPU usage", "Cgroup CPU stats"],
    c: 0,
    e: "cpuacct: cpuacct.usage, cpuacct.stat. Total CPU time. v2 has cpu.stat.",
  de: "cpuacct.usage_percpu. Per-cgroup CPU. systemd-cgtop uses this.",
  deBeginner: "The cpuacct controller in cgroups v1 tracks how much CPU time each cgroup has consumed (including per‑CPU breakdowns), which tools like systemd-cgtop use to show you per‑service CPU usage.",
  deExpert: "cpuacct.* (v1) / cpu.stat (v2) → per‑cgroup CPU accounting; basis for systemd‑cgtop and similar tools."
  }),
  (_i: number) => ({
    q: "What does `systemd-run --scope -p CPUQuota=50% cmd` do?",
    o: ["Runs cmd in transient scope with 50% CPU limit", "Transient scope", "Scope with limit", "50% CPU scope"],
    c: 0,
    e: "systemd-run creates transient unit. -p sets properties. Scope = no main PID.",
  de: "systemd-run --scope -p CPUQuota=50% ./heavy. Limit without service file.",
  deBeginner: "systemd-run --scope -p CPUQuota=50% cmd launches cmd in a temporary cgroup with its CPU usage capped at half a core, all without you having to write a permanent service file.",
  deExpert: "systemd-run --scope -p CPUQuota=50% ./heavy → ad‑hoc scoped unit with CPU cgroup cap only."
  }),
  (_i: number) => ({
    q: "What does `SIGTTIN` cause when background job reads?",
    o: ["Stops process (needs terminal input)", "Stop on read", "Background read", "Terminal read stop"],
    c: 0,
    e: "SIGTTIN to bg process reading from terminal. Stops it. fg to resume.",
  de: "SIGTTOU for write. Job control. Stdin from terminal = SIGTTIN.",
  deBeginner: "If a background job tries to read from the controlling terminal, the kernel sends it SIGTTIN and stops it so that it doesn’t steal interactive input; you have to bring it to the foreground to continue.",
  deExpert: "Job‑control: bg read ⇒ SIGTTIN, bg write ⇒ SIGTTOU; shell fg/bg manage these stops."
  }),
  (_i: number) => ({
    q: "What does `clone()` with CLONE_VFORK do?",
    o: ["Blocks parent until child exec/exit (like vfork)", "VFORK semantics", "Block parent", "Wait for child"],
    c: 0,
    e: "CLONE_VFORK: parent blocked until child exec or exit. Shared address space until then.",
  de: "vfork. Rare. fork+exec usually. Shared memory until exec.",
  deBeginner: "CLONE_VFORK (like the legacy vfork call) makes the parent block until the child either execs a new program or exits, while they briefly share the same address space, which is tricky and used rarely now.",
  deExpert: "CLONE_VFORK/vfork: parent blocked, child shares addr space until exec/exit; today prefer plain fork+exec."
  }),
];
