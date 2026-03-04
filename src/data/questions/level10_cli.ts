// LEVEL 10: GOD WHALE — Containers, Git, Boot, Kernel, Philosophy (CLI)
// 100 Beginner questions. Intermediate/Expert use placeholders.

const beginner = [
  (_i: number) => ({
    q: "What does `docker run nginx` do?",
    o: ["Runs nginx container", "Docker run", "Start container", "Run nginx"],
    c: 0,
    e: "docker run nginx pulls (if needed) and runs container. -d for detached.",
    de: "docker run nginx. docker run -d nginx for background. docker run -p 8080:80 for port map."
  }),
  (_i: number) => ({
    q: "What does `docker ps` show?",
    o: ["Running containers", "Docker list", "Containers", "Running containers"],
    c: 0,
    e: "docker ps shows running. docker ps -a for all. CONTAINER ID, IMAGE, STATUS.",
    de: "docker ps. docker ps -a includes stopped. docker ps -q for IDs only."
  }),
  (_i: number) => ({
    q: "What does `docker build -t myimg .` do?",
    o: ["Builds image from Dockerfile in current dir", "Docker build", "Build image", "Create image"],
    c: 0,
    e: "docker build -t tags image. . = context (Dockerfile dir). Creates image myimg.",
    de: "docker build -t myapp:1.0 . -f Dockerfile. Layers cached. docker build --no-cache for fresh."
  }),
  (_i: number) => ({
    q: "What does `docker exec -it container bash` do?",
    o: ["Runs bash in running container", "Docker exec", "Exec in container", "Container shell"],
    c: 0,
    e: "docker exec runs command in container. -it for interactive TTY. docker exec container cmd.",
    de: "docker exec -it nginx bash. -u root for user. Like ssh into container."
  }),
  (_i: number) => ({
    q: "What does `docker stop container` do?",
    o: ["Stops container (SIGTERM then SIGKILL)", "Docker stop", "Stop container", "Halt container"],
    c: 0,
    e: "docker stop sends SIGTERM, waits, then SIGKILL. docker kill for immediate.",
    de: "docker stop nginx. -t 10 for timeout. docker start to resume."
  }),
  (_i: number) => ({
    q: "What does `docker rm container` do?",
    o: ["Removes stopped container", "Docker rm", "Remove container", "Delete container"],
    c: 0,
    e: "docker rm removes container. Must be stopped. docker rm -f for force (stops first).",
    de: "docker rm nginx. docker container prune for all stopped. -v for volumes."
  }),
  (_i: number) => ({
    q: "What does `docker images` show?",
    o: ["List of images", "Docker images", "Image list", "Built images"],
    c: 0,
    e: "docker images lists images. REPOSITORY, TAG, IMAGE ID, SIZE. docker rmi to remove.",
    de: "docker images. docker images -a for intermediate. docker image prune for dangling."
  }),
  (_i: number) => ({
    q: "What does `docker pull nginx` do?",
    o: ["Downloads image from registry", "Docker pull", "Pull image", "Download image"],
    c: 0,
    e: "docker pull fetches image. Default Docker Hub. docker pull nginx:alpine for tag.",
    de: "docker pull nginx. docker pull myreg.io/image:tag. Layers downloaded. Cached."
  }),
  (_i: number) => ({
    q: "What does `docker run -p 8080:80 nginx` do?",
    o: ["Maps host 8080 to container 80", "Port map", "Publish port", "Port forward"],
    c: 0,
    e: "docker run -p host:container. -p 8080:80. Access container :80 via host :8080.",
    de: "docker run -p 8080:80 nginx. -p 80:80. -P publishes all EXPOSE. Port mapping."
  }),
  (_i: number) => ({
    q: "What does `docker run -v /host/path:/container/path` do?",
    o: ["Mounts host directory into container", "Volume mount", "Bind mount", "Mount volume"],
    c: 0,
    e: "docker run -v binds host path. -v /data:/app/data. Persistent data. Two-way sync.",
    de: "docker run -v $(pwd):/app nginx. -v name:/path for named volume. Data persistence."
  }),
  (_i: number) => ({
    q: "What does `git init` do?",
    o: ["Creates new Git repository", "Git init", "Init repo", "New repository"],
    c: 0,
    e: "git init creates .git. Initializes repo in current dir. First step for new project.",
    de: "git init. git init repo_name for new dir. .git holds objects, refs, config."
  }),
  (_i: number) => ({
    q: "What does `git clone URL` do?",
    o: ["Clones remote repository", "Git clone", "Clone repo", "Copy repository"],
    c: 0,
    e: "git clone copies remote repo. git clone https://... Creates dir, fetches all.",
    de: "git clone https://github.com/user/repo.git. git clone url dir for custom dir name."
  }),
  (_i: number) => ({
    q: "What does `git add file` do?",
    o: ["Stages file for commit", "Git add", "Stage file", "Add to index"],
    c: 0,
    e: "git add stages changes. git add . for all. Prepares for commit.",
    de: "git add file.txt. git add -A for all. git add -p for patch. Index = staging."
  }),
  (_i: number) => ({
    q: "What does `git commit -m 'message'` do?",
    o: ["Creates commit with message", "Git commit", "Commit changes", "Save snapshot"],
    c: 0,
    e: "git commit records staged changes. -m for message. Creates snapshot.",
    de: "git commit -m 'Add feature'. git commit -a -m for add+commit. SHA created."
  }),
  (_i: number) => ({
    q: "What does `git status` show?",
    o: ["Working tree status (staged, modified)", "Git status", "Status", "Changes"],
    c: 0,
    e: "git status shows modified, staged, untracked. Branch, ahead/behind. Current state.",
    de: "git status. Red = unstaged. Green = staged. git status -s for short."
  }),
  (_i: number) => ({
    q: "What does `git push` do?",
    o: ["Pushes commits to remote", "Git push", "Push commits", "Upload to remote"],
    c: 0,
    e: "git push sends commits to remote. git push origin main. Updates remote branch.",
    de: "git push. git push -u origin main for first time (set upstream). git push --force dangerous."
  }),
  (_i: number) => ({
    q: "What does `git pull` do?",
    o: ["Fetches and merges from remote", "Git pull", "Pull changes", "Update from remote"],
    c: 0,
    e: "git pull = fetch + merge. Gets remote changes. git pull origin main.",
    de: "git pull. git pull --rebase for linear history. Resolve conflicts if any."
  }),
  (_i: number) => ({
    q: "What does `git branch` show?",
    o: ["List of branches", "Git branch", "Branches", "Branch list"],
    c: 0,
    e: "git branch lists branches. * = current. git branch newbranch to create.",
    de: "git branch. git branch -a for remote. git branch -d to delete. git checkout -b for create+switch."
  }),
  (_i: number) => ({
    q: "What does `git checkout branch` do?",
    o: ["Switches to branch", "Checkout", "Switch branch", "Change branch"],
    c: 0,
    e: "git checkout branch switches. git checkout -b new creates and switches. git switch in newer Git.",
    de: "git checkout main. git checkout -b feature. git switch main (newer). Detached HEAD with commit."
  }),
  (_i: number) => ({
    q: "What does `git merge branch` do?",
    o: ["Merges branch into current", "Git merge", "Merge branch", "Combine branches"],
    c: 0,
    e: "git merge branch merges into current. Fast-forward or merge commit. Resolve conflicts.",
    de: "git checkout main; git merge feature. Creates merge commit or fast-forward. git merge --abort."
  }),
  (_i: number) => ({
    q: "What does `git log` show?",
    o: ["Commit history", "Git log", "History", "Commits"],
    c: 0,
    e: "git log shows commits. Author, date, message. git log --oneline for short. q to quit.",
    de: "git log. git log -5 for last 5. git log --graph --oneline. git log -p for patch."
  }),
  (_i: number) => ({
    q: "What does `git diff` show?",
    o: ["Unstaged changes", "Git diff", "Differences", "Changes"],
    c: 0,
    e: "git diff shows unstaged. git diff --staged for staged. git diff branch for branch compare.",
    de: "git diff. git diff HEAD for all. git diff file for one file. + add, - remove."
  }),
  (_i: number) => ({
    q: "What does `kubectl get pods` show?",
    o: ["List of pods", "Kubectl pods", "Pods", "Pod list"],
    c: 0,
    e: "kubectl get pods lists pods. -n namespace. -A all namespaces. -o wide for more.",
    de: "kubectl get pods. kubectl get pods -n kube-system. kubectl get po shorthand."
  }),
  (_i: number) => ({
    q: "What does `kubectl apply -f file.yaml` do?",
    o: ["Applies manifest to cluster", "Kubectl apply", "Apply manifest", "Create/update resources"],
    c: 0,
    e: "kubectl apply -f creates/updates. Declarative. kubectl apply -f deployment.yaml.",
    de: "kubectl apply -f dir/. Recursive. kubectl apply -f - for stdin. Idempotent."
  }),
  (_i: number) => ({
    q: "What does `kubectl describe pod name` show?",
    o: ["Detailed pod info and events", "Describe pod", "Pod details", "Pod info"],
    c: 0,
    e: "kubectl describe shows details. Events, status, containers. Debugging.",
    de: "kubectl describe pod nginx. kubectl describe pod -n ns. Events at bottom."
  }),
  (_i: number) => ({
    q: "What does `kubectl logs pod` show?",
    o: ["Container logs", "Pod logs", "Logs", "Container output"],
    c: 0,
    e: "kubectl logs fetches logs. kubectl logs -f for follow. kubectl logs pod -c container.",
    de: "kubectl logs nginx-pod. kubectl logs -f -p for previous. --tail=100."
  }),
  (_i: number) => ({
    q: "What does `kubectl exec -it pod -- bash` do?",
    o: ["Runs bash in pod", "Exec in pod", "Pod shell", "Container exec"],
    c: 0,
    e: "kubectl exec runs command in pod. -it for interactive. kubectl exec pod -- cmd.",
    de: "kubectl exec -it nginx-pod -- bash. -c container for multi-container. Like docker exec."
  }),
  (_i: number) => ({
    q: "What does `kubectl delete pod name` do?",
    o: ["Deletes pod (may be recreated by controller)", "Delete pod", "Remove pod", "Kill pod"],
    c: 0,
    e: "kubectl delete pod removes. If from Deployment, new one created. Force restart.",
    de: "kubectl delete pod nginx-xxx. kubectl delete -f file.yaml. --grace-period=0 for force."
  }),
  (_i: number) => ({
    q: "What does `uname -r` show?",
    o: ["Kernel release version", "Kernel version", "Uname release", "Kernel release"],
    c: 0,
    e: "uname -r shows kernel. 5.15.0-xxx. For module compatibility, exploits.",
    de: "uname -r. uname -a for all. uname -m for arch. Kernel version string."
  }),
  (_i: number) => ({
    q: "What does `lsmod` show?",
    o: ["Loaded kernel modules", "LS mod", "Modules", "Kernel modules"],
    c: 0,
    e: "lsmod lists loaded modules. modinfo module for details. insmod, rmmod to load/unload.",
    de: "lsmod. Module, Size, Used by. /proc/modules. modprobe to load with deps."
  }),
  (_i: number) => ({
    q: "What does `modprobe module` do?",
    o: ["Loads module and dependencies", "Modprobe", "Load module", "Insert module"],
    c: 0,
    e: "modprobe loads module. Resolves deps. modprobe -r to remove. From /lib/modules.",
    de: "modprobe nvidia. modprobe -r nvidia to unload. modprobe blacklist in config."
  }),
  (_i: number) => ({
    q: "What does `dmesg` show?",
    o: ["Kernel ring buffer messages", "Dmesg", "Kernel log", "Boot messages"],
    c: 0,
    e: "dmesg shows kernel messages. Boot, drivers, errors. dmesg | tail for recent.",
    de: "dmesg. dmesg -w for follow. dmesg -T for timestamps. /var/log/dmesg sometimes."
  }),
  (_i: number) => ({
    q: "What does `journalctl -b` show?",
    o: ["Logs from current boot", "Journal boot", "Boot log", "Current boot"],
    c: 0,
    e: "journalctl -b shows current boot. journalctl -b -1 for previous. systemd journal.",
    de: "journalctl -b. journalctl -b -p err for errors. journalctl -xe for recent with context."
  }),
  (_i: number) => ({
    q: "What does `systemd-analyze` show?",
    o: ["Boot time breakdown", "Boot analyze", "Startup time", "Boot duration"],
    c: 0,
    e: "systemd-analyze shows boot time. systemd-analyze blame for per-unit. Optimize boot.",
    de: "systemd-analyze. systemd-analyze blame. systemd-analyze critical-chain. Boot optimization."
  }),
  (_i: number) => ({
    q: "What does `grub` do?",
    o: ["Bootloader (GRUB)", "GRUB", "Boot loader", "Boot menu"],
    c: 0,
    e: "GRUB loads kernel. /boot/grub. grub-install, update-grub. Boot menu, kernel selection.",
    de: "GRUB = Grand Unified Bootloader. /boot/grub/grub.cfg. grub2 on RHEL. systemd-boot alternative."
  }),
  (_i: number) => ({
    q: "What does `initramfs` contain?",
    o: ["Early userspace (drivers, scripts before root)", "Initramfs", "Init RAM fs", "Early boot"],
    c: 0,
    e: "initramfs has modules, scripts to mount root. Unpacked to RAM. /boot/initrd.",
    de: "initramfs. Loads drivers. Runs /init. Mounts root. Then pivot_root to real /."
  }),
  (_i: number) => ({
    q: "What does `strace` trace?",
    o: ["System calls made by process", "Strace", "Syscall trace", "System calls"],
    c: 0,
    e: "strace traces syscalls. strace ls. strace -p PID to attach. Debug, reverse.",
    de: "strace -f cmd for children. strace -e open,read. -o file. See what program does."
  }),
  (_i: number) => ({
    q: "What is a syscall?",
    o: ["Kernel interface for user programs", "Syscall", "System call", "Kernel call"],
    c: 0,
    e: "Syscall = request to kernel. read, write, open, etc. User->kernel boundary.",
    de: "Syscalls: read, write, open, fork, execve. /usr/include/asm/unistd.h. strace shows them."
  }),
  (_i: number) => ({
    q: "What does `man 2 read` show?",
    o: ["Syscall read manual", "Man section 2", "Read syscall", "Syscall manual"],
    c: 0,
    e: "man 2 = syscalls. man 2 read. man 3 for libc. man 1 for commands.",
    de: "man 2 read. Section 2 = system calls. man 3 printf for library. man man for sections."
  }),
  (_i: number) => ({
    q: "What is the Unix philosophy?",
    o: ["Do one thing well, compose with pipes", "Unix philosophy", "One thing well", "Compose programs"],
    c: 0,
    e: "Small programs, one job. Text streams. Compose with |. ls | grep | wc.",
    de: "Do one thing well. Expect text input/output. Prefer composition. cat, grep, sort, uniq."
  }),
  (_i: number) => ({
    q: "What does `podman` offer vs Docker?",
    o: ["Daemonless, rootless containers", "Podman", "Rootless Docker", "Container engine"],
    c: 0,
    e: "podman is Docker-compatible, daemonless. Rootless by default. Drop-in replacement.",
    de: "podman run = docker run. No daemon. Rootless. Kubernetes with podman kube play."
  }),
  (_i: number) => ({
    q: "What does `docker compose up` do?",
    o: ["Starts multi-container app from compose file", "Compose up", "Start stack", "Multi-container"],
    c: 0,
    e: "docker compose up starts services. -d detached. Reads docker-compose.yaml.",
    de: "docker compose up -d. Builds, creates network, starts. docker compose down to stop."
  }),
  (_i: number) => ({
    q: "What does `docker network create` do?",
    o: ["Creates Docker network", "Docker network", "Create network", "Network create"],
    c: 0,
    e: "docker network create mynet. Containers on same network can resolve by name.",
    de: "docker network create backend. docker run --network backend. DNS: container_name."
  }),
  (_i: number) => ({
    q: "What does `docker run --rm` do?",
    o: ["Removes container when it exits", "Docker rm", "Auto remove", "Cleanup"],
    c: 0,
    e: "docker run --rm removes container on exit. No leftover containers. One-shot tasks.",
    de: "docker run --rm alpine echo hi. Container gone after. Good for scripts."
  }),
  (_i: number) => ({
    q: "What does `docker run -e VAR=value` do?",
    o: ["Sets environment variable in container", "Docker env", "Environment", "Set env"],
    c: 0,
    e: "docker run -e sets env. -e VAR=value. -e FILE for file. Config, secrets.",
    de: "docker run -e DEBUG=1 app. docker run --env-file .env. Environment in container."
  }),
  (_i: number) => ({
    q: "What does `git remote -v` show?",
    o: ["Remote URLs", "Git remote", "Remotes", "Remote URLs"],
    c: 0,
    e: "git remote -v lists remotes. origin fetch/push. git remote add for new.",
    de: "git remote -v. git remote add origin url. git remote remove origin."
  }),
  (_i: number) => ({
    q: "What does `git stash` do?",
    o: ["Saves uncommitted changes temporarily", "Git stash", "Stash changes", "Save work"],
    c: 0,
    e: "git stash saves changes. git stash pop to restore. Switch branch without commit.",
    de: "git stash. git stash list. git stash pop. git stash apply. Work in progress."
  }),
  (_i: number) => ({
    q: "What does `git rebase branch` do?",
    o: ["Replays commits onto branch", "Git rebase", "Rebase", "Replay commits"],
    c: 0,
    e: "git rebase replays your commits on top of branch. Linear history. git rebase -i for interactive.",
    de: "git rebase main. Your commits replayed. Resolve conflicts. git rebase --abort."
  }),
  (_i: number) => ({
    q: "What does `git reset --hard HEAD` do?",
    o: ["Discards all uncommitted changes", "Git reset", "Discard changes", "Hard reset"],
    c: 0,
    e: "git reset --hard discards changes. --soft keeps staged. --mixed (default) unstages.",
    de: "git reset --hard HEAD. Dangerous. Lost work. git reset HEAD~1 to undo last commit."
  }),
  (_i: number) => ({
    q: "What does `git revert commit` do?",
    o: ["Creates new commit that undoes commit", "Git revert", "Revert commit", "Undo commit"],
    c: 0,
    e: "git revert creates inverse commit. Safe for shared history. Doesn't rewrite.",
    de: "git revert abc123. New commit. History preserved. For pushed commits."
  }),
  (_i: number) => ({
    q: "What does `git fetch` do?",
    o: ["Downloads remote refs, no merge", "Git fetch", "Fetch remote", "Update refs"],
    c: 0,
    e: "git fetch gets remote changes. Doesn't merge. git fetch origin. Then merge/rebase.",
    de: "git fetch. git fetch -p to prune. Updates origin/main. Safer than pull for review."
  }),
  (_i: number) => ({
    q: "What does `git tag v1.0` do?",
    o: ["Creates tag at current commit", "Git tag", "Create tag", "Version tag"],
    c: 0,
    e: "git tag v1.0 marks commit. git tag -a v1.0 -m 'msg' for annotated. git push --tags.",
    de: "git tag v1.0. git tag -l. git push origin v1.0. Releases, versions."
  }),
  (_i: number) => ({
    q: "What does `kubectl get nodes` show?",
    o: ["Cluster nodes", "Kubectl nodes", "Nodes", "Worker nodes"],
    c: 0,
    e: "kubectl get nodes lists cluster nodes. Status, version. Master + workers.",
    de: "kubectl get nodes. kubectl describe node name. Ready, capacity. Cluster overview."
  }),
  (_i: number) => ({
    q: "What does `kubectl get services` show?",
    o: ["Services (cluster IPs)", "Kubectl services", "Services", "ClusterIP list"],
    c: 0,
    e: "kubectl get svc. Services expose pods. ClusterIP, NodePort, LoadBalancer.",
    de: "kubectl get svc. kubectl get svc -A. Type, cluster-ip, port. Ingress for HTTP."
  }),
  (_i: number) => ({
    q: "What does `kubectl config use-context ctx` do?",
    o: ["Switches kubectl to context", "Use context", "Switch cluster", "Kubectl context"],
    c: 0,
    e: "kubectl config use-context switches cluster/namespace. kubectl config get-contexts.",
    de: "kubectl config use-context prod. Multiple clusters. ~/.kube/config."
  }),
  (_i: number) => ({
    q: "What does `kubectl port-forward pod 8080:80` do?",
    o: ["Forwards local 8080 to pod 80", "Port forward", "Kubectl forward", "Local to pod"],
    c: 0,
    e: "kubectl port-forward exposes pod port locally. Access cluster service from host.",
    de: "kubectl port-forward pod/nginx 8080:80. localhost:8080 -> pod:80. Debug, local dev."
  }),
  (_i: number) => ({
    q: "What does `kubectl scale deployment --replicas=3` do?",
    o: ["Sets replica count", "Scale deployment", "Replicas", "Scale pods"],
    c: 0,
    e: "kubectl scale sets replicas. kubectl scale deploy nginx --replicas=3. HPA for auto.",
    de: "kubectl scale deployment nginx --replicas=5. More pods. Load distribution."
  }),
  (_i: number) => ({
    q: "What does `proc` filesystem contain?",
    o: ["Process and kernel info (virtual)", "Proc", "Process info", "Kernel proc"],
    c: 0,
    e: "/proc is virtual. /proc/PID, /proc/cpuinfo, /proc/meminfo. Kernel, process data.",
    de: "/proc/self for current. /proc/PID/fd for file descriptors. Not on disk."
  }),
  (_i: number) => ({
    q: "What does `sys` filesystem contain?",
    o: ["Kernel objects, devices (sysfs)", "Sys", "Sysfs", "Kernel sys"],
    c: 0,
    e: "/sys is sysfs. Devices, drivers, kernel objects. /sys/class, /sys/devices.",
    de: "/sys/block, /sys/class/net. Hardware info. Echo to some for config. Complements /proc."
  }),
  (_i: number) => ({
    q: "What does `ldd binary` show?",
    o: ["Shared library dependencies", "LDD", "Library deps", "Dynamic libs"],
    c: 0,
    e: "ldd shows which libs binary needs. Paths. For debugging missing libs.",
    de: "ldd /bin/ls. libc.so.6, etc. Not found = problem. objdump -p for similar."
  }),
  (_i: number) => ({
    q: "What does `nm binary` show?",
    o: ["Symbol table (functions, variables)", "NM", "Symbols", "Binary symbols"],
    c: 0,
    e: "nm lists symbols. T = text (code), D = data. nm -D for dynamic. Reverse engineering.",
    de: "nm binary. nm -C for demangle. Exported, imported. Debug, reverse."
  }),
  (_i: number) => ({
    q: "What does `objdump -d binary` show?",
    o: ["Disassembly of binary", "Objdump", "Disassembly", "Assembly code"],
    c: 0,
    e: "objdump -d disassembles. Machine code -> assembly. objdump -x for headers.",
    de: "objdump -d /bin/ls. Intel/AT&T syntax. -M intel. Reverse engineering, debugging."
  }),
  (_i: number) => ({
    q: "What does `readelf -a binary` show?",
    o: ["ELF file headers and sections", "Readelf", "ELF info", "Binary structure"],
    c: 0,
    e: "readelf parses ELF. Headers, sections, segments. readelf -d for dynamic. Linux binaries.",
    de: "readelf -a binary. readelf -h for header. ELF = Executable and Linkable Format."
  }),
  (_i: number) => ({
    q: "What does `ldconfig -p` show?",
    o: ["Cached library list", "Ldconfig", "Library cache", "Shared lib cache"],
    c: 0,
    e: "ldconfig -p prints cache. Which libs resolve. ldconfig updates cache.",
    de: "ldconfig -p | grep libc. Library path resolution. /etc/ld.so.conf."
  }),
  (_i: number) => ({
    q: "What does `runlevel` or `who -r` show?",
    o: ["Current runlevel (SysV)", "Runlevel", "Init level", "System state"],
    c: 0,
    e: "runlevel: N 5. N=previous, 5=current. 5=graphical. systemd: systemctl get-default.",
    de: "0=halt, 1=single, 3=multi-user, 5=graphical. systemd targets replace. get-default."
  }),
  (_i: number) => ({
    q: "What does `bootlogd` or `journalctl -b` capture?",
    o: ["Boot messages", "Boot log", "Startup log", "Boot messages"],
    c: 0,
    e: "journalctl -b = boot. dmesg for kernel. /var/log/boot.log on some. Boot debugging.",
    de: "journalctl -b -p err. Boot failures. systemd-analyze blame. Startup order."
  }),
  (_i: number) => ({
    q: "What does `mkinitcpio` or `dracut` do?",
    o: ["Generates initramfs", "Initramfs gen", "Initrd", "Initramfs"],
    c: 0,
    e: "mkinitcpio (Arch), dracut (RHEL) build initramfs. After kernel install. update-initramfs on Debian.",
    de: "mkinitcpio -g /boot/initramfs.img. dracut -f. Regenerate after driver change."
  }),
  (_i: number) => ({
    q: "What does `pipe` (|) embody in Unix?",
    o: ["Composition: output of one to input of next", "Pipe", "Composition", "Stream connect"],
    c: 0,
    e: "| connects programs. ls | grep. Each does one thing. Unix philosophy.",
    de: "cmd1 | cmd2. stdout -> stdin. No temp files. cat file | grep | sort. Composition."
  }),
  (_i: number) => ({
    q: "What does `everything is a file` mean in Unix?",
    o: ["Devices, sockets, etc. accessed via file interface", "Everything file", "File interface", "Unified interface"],
    c: 0,
    e: "Devices, sockets = file. open, read, write. /dev/sda, /dev/null. Unified API.",
    de: "/dev/tty, /proc/self/fd. Same syscalls. Simplifies. Except processes, etc."
  }),
  (_i: number) => ({
    q: "What does `docker image prune` do?",
    o: ["Removes unused images", "Image prune", "Clean images", "Remove dangling"],
    c: 0,
    e: "docker image prune removes dangling. -a for all unused. Free space.",
    de: "docker image prune. docker system prune -a. Reclaim disk. Careful with -a."
  }),
  (_i: number) => ({
    q: "What does `docker run --restart unless-stopped` do?",
    o: ["Restarts container on failure/reboot", "Restart policy", "Auto restart", "Restart unless stopped"],
    c: 0,
    e: "--restart unless-stopped: restart always except manual stop. Survives reboot.",
    de: "docker run --restart unless-stopped nginx. always, on-failure, no. Production."
  }),
  (_i: number) => ({
    q: "What does `git rebase -i HEAD~3` do?",
    o: ["Interactive rebase of last 3 commits", "Interactive rebase", "Rebase -i", "Edit commits"],
    c: 0,
    e: "git rebase -i lets you edit, squash, reorder. pick, squash, reword. Rewrites history.",
    de: "git rebase -i HEAD~3. Editor: pick, squash, fixup. Clean history. Force push after."
  }),
  (_i: number) => ({
    q: "What does `git cherry-pick commit` do?",
    o: ["Applies specific commit to current branch", "Cherry-pick", "Apply commit", "Copy commit"],
    c: 0,
    e: "git cherry-pick applies one commit. From other branch. Selective merge.",
    de: "git cherry-pick abc123. Apply that commit here. Resolve conflicts. Hotfix."
  }),
  (_i: number) => ({
    q: "What does `git bisect` do?",
    o: ["Binary search for bad commit", "Git bisect", "Bisect", "Find bad commit"],
    c: 0,
    e: "git bisect find introducing commit. git bisect start, bad, good. Binary search.",
    de: "git bisect start. git bisect bad. git bisect good abc. Tests each. Finds regression."
  }),
  (_i: number) => ({
    q: "What does `git submodule add url path` do?",
    o: ["Adds repo as submodule", "Git submodule", "Submodule add", "Nested repo"],
    c: 0,
    e: "git submodule add adds nested repo. .gitmodules. git submodule update --init.",
    de: "git submodule add https://... lib. Separate clone. Pinned version. git submodule update."
  }),
  (_i: number) => ({
    q: "What does `kubectl rollout status deployment/name` do?",
    o: ["Waits for rollout to complete", "Rollout status", "Deploy status", "Wait rollout"],
    c: 0,
    e: "kubectl rollout status waits. deployment/nginx. Blocks until done. Scripts.",
    de: "kubectl rollout status deployment/nginx. Rolling update progress. kubectl rollout undo."
  }),
  (_i: number) => ({
    q: "What does `kubectl get all` show?",
    o: ["Pods, services, deployments, etc.", "Kubectl all", "All resources", "Get all"],
    c: 0,
    e: "kubectl get all in namespace. Pods, svc, deploy, rs. Quick overview. -A for all ns.",
    de: "kubectl get all. kubectl get all -n kube-system. Common resources. Not literally all."
  }),
  (_i: number) => ({
    q: "What does `containerd` do?",
    o: ["Container runtime (used by Docker, K8s)", "Containerd", "Container runtime", "CRI runtime"],
    c: 0,
    e: "containerd is runtime. Docker, Kubernetes use it. CRI. Runs containers. Low-level.",
    de: "containerd. ctr, crictl for CLI. OCI compatible. Docker uses containerd. K8s CRI."
  }),
  (_i: number) => ({
    q: "What does `runc` do?",
    o: ["OCI container runtime (low-level)", "Runc", "OCI runtime", "Container run"],
    c: 0,
    e: "runc runs container from bundle. OCI spec. containerd uses runc. Low-level.",
    de: "runc run container. OCI runtime. rootfs + config.json. Used by Docker, Podman."
  }),
  (_i: number) => ({
    q: "What does `buildah` do?",
    o: ["Builds container images (Daemonless)", "Buildah", "Build images", "Image build"],
    c: 0,
    e: "buildah build builds images. No daemon. buildah bud = docker build. Podman uses it.",
    de: "buildah bud -t image . buildah from scratch. buildah run. OCI images."
  }),
  (_i: number) => ({
    q: "What does `skopeo` do?",
    o: ["Inspects/copies container images", "Skopeo", "Image inspect", "Registry ops"],
    c: 0,
    e: "skopeo inspect, copy. No daemon. skopeo copy docker://src dir://dest. Registry ops.",
    de: "skopeo inspect docker://nginx. skopeo copy. Between registries. No pull/run."
  }),
  (_i: number) => ({
    q: "What does `crictl` do?",
    o: ["CRI CLI (Kubernetes containers)", "Crictl", "CRI CLI", "K8s containers"],
    c: 0,
    e: "crictl manages CRI containers. Like docker for K8s. crictl ps, crictl logs.",
    de: "crictl ps. crictl logs. crictl exec. For containerd/CRI-O. Debug K8s nodes."
  }),
  (_i: number) => ({
    q: "What does `helm` do?",
    o: ["Kubernetes package manager", "Helm", "K8s packages", "Charts"],
    c: 0,
    e: "helm install, upgrade. Charts = K8s packages. helm install nginx bitnami/nginx.",
    de: "helm install myapp ./chart. helm list. helm upgrade. Templating. Repos."
  }),
  (_i: number) => ({
    q: "What does `kustomize` do?",
    o: ["Customizes K8s manifests (no templating)", "Kustomize", "Manifest customize", "K8s overlay"],
    c: 0,
    e: "kustomize builds manifests. Base + overlay. kubectl apply -k. No templating.",
    de: "kustomize build . kubectl apply -k overlays/prod. Patches, common labels. Declarative."
  }),
  (_i: number) => ({
    q: "What does `minikube` do?",
    o: ["Local Kubernetes cluster", "Minikube", "Local K8s", "Dev cluster"],
    c: 0,
    e: "minikube start. Local K8s. minikube dashboard. For dev, testing. Lightweight.",
    de: "minikube start. minikube kubectl. minikube tunnel for LoadBalancer. kind alternative."
  }),
  (_i: number) => ({
    q: "What does `kind` (Kubernetes in Docker) do?",
    o: ["K8s cluster in Docker containers", "Kind", "K8s in Docker", "Cluster in Docker"],
    c: 0,
    e: "kind creates cluster in Docker. kind create cluster. Fast. CI, local dev.",
    de: "kind create cluster. Nodes = containers. kind load image. Quick K8s."
  }),
  (_i: number) => ({
    q: "What does `k9s` do?",
    o: ["Terminal UI for Kubernetes", "K9s", "K8s TUI", "Kubernetes UI"],
    c: 0,
    e: "k9s is TUI for kubectl. Navigate, view, exec. :pod, /filter. Interactive.",
    de: "k9s. Vim-like. : to command. / to filter. Logs, exec. Better than kubectl for exploration."
  }),
  (_i: number) => ({
    q: "What does `lsof` show for syscalls?",
    o: ["Open files (uses syscalls internally)", "Lsof", "Open files", "File descriptors"],
    c: 0,
    e: "lsof shows open files. Reads /proc. Each fd = open() syscall. Debugging.",
    de: "lsof -p PID. Files, sockets, pipes. What process has open. lsof -i for network."
  }),
  (_i: number) => ({
    q: "What does `perf` do?",
    o: ["Linux profiling (CPU, cache, etc.)", "Perf", "Profiler", "Performance"],
    c: 0,
    e: "perf record, perf report. CPU profiling. perf stat for counters. Kernel support.",
    de: "perf record -g ./app. perf report. Flame graphs. perf top. Low overhead."
  }),
  (_i: number) => ({
    q: "What does `bpftrace` do?",
    o: ["eBPF tracing (kernel/userspace)", "Bpftrace", "eBPF trace", "Dynamic tracing"],
    c: 0,
    e: "bpftrace scripts. Trace syscalls, functions. bpftrace -e 'tracepoint:syscalls:sys_enter_open'.",
    de: "bpftrace. eBPF. Low overhead. Trace anything. bpftrace one-liners. Modern strace/dtrace."
  }),
  (_i: number) => ({
    q: "What does `file` show for binaries?",
    o: ["File type, architecture, interpreter", "File type", "Binary info", "ELF info"],
    c: 0,
    e: "file binary. ELF 64-bit LSB executable, x86-64. Interpreter /lib64/ld-linux. Quick check.",
    de: "file /bin/ls. Architecture, type. file script shows shebang. Not just extension."
  }),
  (_i: number) => ({
    q: "What does `hexdump -C file` show?",
    o: ["Hex and ASCII dump", "Hexdump", "Hex dump", "Binary view"],
    c: 0,
    e: "hexdump -C shows bytes. Offset, hex, ASCII. For binary inspection. xxd similar.",
    de: "hexdump -C binary. 00000000 7f 45 4c 46... ELF magic. Binary forensics."
  }),
];

import { level10Intermediate } from './level10_intermediate_cli';
import { level10Expert } from './level10_expert_cli';

export const level10Patterns = beginner;
export const level10IntermediateA = level10Intermediate.slice(0, 50);
export const level10IntermediateB = level10Intermediate.slice(50, 100);
export const level10ExpertA = level10Expert.slice(0, 50);
export const level10ExpertB = level10Expert.slice(50, 108);
