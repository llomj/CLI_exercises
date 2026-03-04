// LEVEL 10 INTERMEDIATE — Containers, Git, Boot, Syscalls, Philosophy (100 unique questions)
// Topics: Docker, Kubernetes, Git, boot process, syscalls, Unix philosophy

export const level10Intermediate = [
  (_i: number) => ({
    q: "What does `docker run --rm` do?",
    o: ["Removes container when it exits", "Auto remove", "Rm on exit", "Cleanup"],
    c: 0,
    e: "docker run --rm. Remove. Exit. No leftover. One-shot. Clean.",
    de: "docker run --rm alpine echo hi. Runs, exits, removed. No docker rm."
  }),
  (_i: number) => ({
    q: "What does `docker run -e VAR=value` set?",
    o: ["Environment variable in container", "Env var", "Environment", "Set env"],
    c: 0,
    e: "docker run -e. Environment. Variable. Container. VAR=value.",
    de: "docker run -e DB_HOST=db -e NODE_ENV=prod app. Config. Env."
  }),
  (_i: number) => ({
    q: "What does `kubectl get pods` show?",
    o: ["Pods in default namespace", "Pods", "Pod list", "K8s pods"],
    c: 0,
    e: "kubectl get pods. Pods. Default. Namespace. Status. List.",
    de: "kubectl get pods. -A for all namespaces. -o wide for more."
  }),
  (_i: number) => ({
    q: "What does `kubectl apply -f file.yaml` do?",
    o: ["Creates/updates resources from manifest", "Apply manifest", "Apply file", "Deploy"],
    c: 0,
    e: "kubectl apply -f. Manifest. Create. Update. Declarative. Resources.",
    de: "kubectl apply -f deployment.yaml. Idempotent. Create or update."
  }),
  (_i: number) => ({
    q: "What does `git rebase branch` do?",
    o: ["Replays current commits on top of branch", "Rebase", "Replay commits", "Linear history"],
    c: 0,
    e: "git rebase. Replay. Commits. Top. Branch. Linear. History.",
    de: "git rebase main. Replays your commits on main. git rebase -i for interactive."
  }),
  (_i: number) => ({
    q: "What does `git stash` do?",
    o: ["Saves uncommitted changes temporarily", "Stash", "Save changes", "Temporary store"],
    c: 0,
    e: "git stash. Save. Uncommitted. Temporary. git stash pop. Restore.",
    de: "git stash. git stash list. git stash pop. git stash apply. Switch context."
  }),
  (_i: number) => ({
    q: "What does `init` (PID 1) do in boot?",
    o: ["First process; starts all others", "Init", "PID 1", "First process"],
    c: 0,
    e: "init. PID 1. First. Starts. All. Processes. systemd. SysV.",
    de: "init. PID 1. Adopts orphans. Reaps zombies. systemd or SysV init."
  }),
  (_i: number) => ({
    q: "What does `open()` syscall return?",
    o: ["File descriptor (integer)", "FD", "File descriptor", "Handle"],
    c: 0,
    e: "open(). Syscall. Returns. FD. Integer. Read. Write. Use.",
    de: "open(path, flags). Returns fd. read(fd). write(fd). close(fd)."
  }),
  (_i: number) => ({
    q: "What does 'do one thing well' mean (Unix)?",
    o: ["Programs should have single purpose", "Single purpose", "One thing", "Unix philosophy"],
    c: 0,
    e: "Unix. One. Thing. Well. grep. cat. wc. Compose. Pipe.",
    de: "grep filters. cat concatenates. wc counts. Compose with pipes."
  }),
  (_i: number) => ({
    q: "What does `docker compose up -d` do?",
    o: ["Starts services in background", "Compose up", "Background", "Detached"],
    c: 0,
    e: "docker compose up -d. Detached. Background. Services. Run.",
    de: "docker compose up -d. -d = detached. No logs. Background."
  }),
  (_i: number) => ({
    q: "What does `docker network create mynet` do?",
    o: ["Creates custom bridge network", "Create network", "Docker network", "Bridge"],
    c: 0,
    e: "docker network create. Custom. Bridge. DNS. Containers. Communicate.",
    de: "docker network create mynet. docker run --network mynet. DNS by name."
  }),
  (_i: number) => ({
    q: "What does `kubectl logs pod` show?",
    o: ["Container logs from pod", "Pod logs", "Logs", "Container output"],
    c: 0,
    e: "kubectl logs. Pod. Container. Stdout. Stderr. Logs.",
    de: "kubectl logs mypod. -f for follow. -c for container. --tail=100."
  }),
  (_i: number) => ({
    q: "What does `kubectl describe pod name` show?",
    o: ["Detailed pod info (events, status)", "Describe", "Pod details", "Events"],
    c: 0,
    e: "kubectl describe. Details. Events. Status. Config. Debug.",
    de: "kubectl describe pod mypod. Events. Status. Restarts. Debug."
  }),
  (_i: number) => ({
    q: "What does `git remote add origin URL` do?",
    o: ["Adds remote named origin", "Add remote", "Origin", "Remote URL"],
    c: 0,
    e: "git remote add. Origin. URL. Remote. Push. Pull.",
    de: "git remote add origin https://github.com/user/repo.git. git push -u origin main."
  }),
  (_i: number) => ({
    q: "What does `git diff` show?",
    o: ["Unstaged changes (working vs index)", "Diff", "Changes", "Unstaged"],
    c: 0,
    e: "git diff. Unstaged. Working. Index. Changes. Patch.",
    de: "git diff. Unstaged. git diff --staged for staged. git diff branch for branch."
  }),
  (_i: number) => ({
    q: "What does `grub` do in boot?",
    o: ["Bootloader (loads kernel)", "Bootloader", "GRUB", "Kernel load"],
    c: 0,
    e: "GRUB. Bootloader. Loads. Kernel. Menu. Select. Boot.",
    de: "GRUB. /boot/grub. Menu. Kernel. initrd. Boot. Chain."
  }),
  (_i: number) => ({
    q: "What does `read()` syscall do?",
    o: ["Reads bytes from fd into buffer", "Read", "Syscall read", "Read bytes"],
    c: 0,
    e: "read(fd, buf, count). Syscall. Bytes. Fd. Buffer. Returns count.",
    de: "read(fd, buf, 1024). Returns bytes read. 0 = EOF. -1 = error."
  }),
  (_i: number) => ({
    q: "What does 'text streams' mean (Unix)?",
    o: ["Programs use stdin/stdout (text)", "Text streams", "stdin stdout", "Streams"],
    c: 0,
    e: "Unix. Text. Streams. stdin. stdout. Universal. Interface.",
    de: "Programs read stdin, write stdout. Pipe. Universal. Text."
  }),
  (_i: number) => ({
    q: "What does `docker build --no-cache` do?",
    o: ["Builds without cache (fresh layers)", "No cache", "Fresh build", "Rebuild"],
    c: 0,
    e: "docker build --no-cache. No. Cache. Fresh. All. Layers. Rebuild.",
    de: "docker build --no-cache . Ignores cache. Full rebuild. Debug."
  }),
  (_i: number) => ({
    q: "What does `docker run --name myapp` set?",
    o: ["Container name (for reference)", "Container name", "Name", "Reference"],
    c: 0,
    e: "docker run --name. Name. Reference. docker start myapp. No ID.",
    de: "docker run --name myapp nginx. docker start myapp. Easier."
  }),
  (_i: number) => ({
    q: "What does `kubectl exec -it pod -- bash` do?",
    o: ["Runs bash in pod (interactive)", "Exec in pod", "Pod shell", "K8s exec"],
    c: 0,
    e: "kubectl exec. Pod. Command. -it. Interactive. Bash. Shell.",
    de: "kubectl exec -it mypod -- bash. -c for command. -c container."
  }),
  (_i: number) => ({
    q: "What does `kubectl delete pod name` do?",
    o: ["Deletes pod (ReplicaSet may recreate)", "Delete pod", "Remove pod", "Kill pod"],
    c: 0,
    e: "kubectl delete pod. Delete. ReplicaSet. Recreate. Unless. Delete deployment.",
    de: "kubectl delete pod mypod. ReplicaSet recreates. kubectl delete deployment."
  }),
  (_i: number) => ({
    q: "What does `git reset --soft HEAD~1` do?",
    o: ["Undoes last commit, keeps changes staged", "Soft reset", "Undo commit", "Keep staged"],
    c: 0,
    e: "git reset --soft. Undo. Commit. Keep. Staged. Changes.",
    de: "git reset --soft HEAD~1. Commit gone. Changes staged. Re-commit."
  }),
  (_i: number) => ({
    q: "What does `git cherry-pick commit` do?",
    o: ["Applies single commit to current branch", "Cherry-pick", "Apply commit", "Single commit"],
    c: 0,
    e: "git cherry-pick. Apply. Single. Commit. Current. Branch. Copy.",
    de: "git cherry-pick abc123. Applies that commit. Selective merge."
  }),
  (_i: number) => ({
    q: "What does `initrd` / `initramfs` contain?",
    o: ["Initial root (drivers, scripts before real root)", "Init ramdisk", "Early boot", "Drivers"],
    c: 0,
    e: "initrd. Initramfs. Early. Boot. Drivers. Modules. Mount. Root.",
    de: "initramfs. Load drivers. Mount /./ Switch root. Real boot."
  }),
  (_i: number) => ({
    q: "What does `write()` syscall do?",
    o: ["Writes bytes from buffer to fd", "Write", "Syscall write", "Write bytes"],
    c: 0,
    e: "write(fd, buf, count). Syscall. Bytes. Fd. Buffer. Returns written.",
    de: "write(1, buf, len). stdout. Returns bytes. -1 = error."
  }),
  (_i: number) => ({
    q: "What does 'prefer composition' mean (Unix)?",
    o: ["Combine small programs over monoliths", "Composition", "Small programs", "Combine"],
    c: 0,
    e: "Unix. Compose. Small. Programs. Pipe. Over. Monolith.",
    de: "cat file | grep x | wc -l. Compose. Not one big program."
  }),
  (_i: number) => ({
    q: "What does `docker run --restart unless-stopped` do?",
    o: ["Restarts container unless manually stopped", "Restart policy", "Auto restart", "Unless stopped"],
    c: 0,
    e: "docker run --restart. Policy. unless-stopped. Always. On-failure.",
    de: "docker run --restart unless-stopped app. Survives reboot. Manual stop = no restart."
  }),
  (_i: number) => ({
    q: "What does `docker volume create myvol` do?",
    o: ["Creates named volume", "Create volume", "Named volume", "Volume"],
    c: 0,
    e: "docker volume create. Named. Volume. Persistent. Data. Mount.",
    de: "docker volume create myvol. docker run -v myvol:/data. Persistent."
  }),
  (_i: number) => ({
    q: "What does `kubectl get deployments` show?",
    o: ["Deployments (replica count, status)", "Deployments", "Deploy list", "Replicas"],
    c: 0,
    e: "kubectl get deployments. Deployments. Replicas. Ready. Status.",
    de: "kubectl get deploy. DESIRED, CURRENT, UP-TO-DATE, AVAILABLE."
  }),
  (_i: number) => ({
    q: "What does `kubectl scale deployment name --replicas=5` do?",
    o: ["Sets replica count to 5", "Scale", "Replicas", "Pod count"],
    c: 0,
    e: "kubectl scale. Replicas. 5. Deployment. Pods. Count.",
    de: "kubectl scale deployment myapp --replicas=5. 5 pods. HPA for auto."
  }),
  (_i: number) => ({
    q: "What does `git fetch` do?",
    o: ["Downloads remote refs (no merge)", "Fetch", "Download", "No merge"],
    c: 0,
    e: "git fetch. Download. Remote. No merge. Safe. git merge after.",
    de: "git fetch origin. Updates origin/main. git merge origin/main. Or pull."
  }),
  (_i: number) => ({
    q: "What does `git revert commit` do?",
    o: ["Creates new commit that undoes commit", "Revert", "Undo commit", "New commit"],
    c: 0,
    e: "git revert. New. Commit. Undo. Safe. History. Preserved.",
    de: "git revert abc123. New commit. Inverse. Safe. Push. History."
  }),
  (_i: number) => ({
    q: "What does `dmesg` show from boot?",
    o: ["Kernel ring buffer (boot messages)", "Kernel log", "Dmesg", "Boot messages"],
    c: 0,
    e: "dmesg. Kernel. Ring. Buffer. Boot. Messages. Hardware.",
    de: "dmesg. dmesg | tail. Boot. Drivers. Hardware. Errors."
  }),
  (_i: number) => ({
    q: "What does `fork()` syscall do?",
    o: ["Creates child process (copy of parent)", "Fork", "Child process", "Copy process"],
    c: 0,
    e: "fork(). Child. Copy. Parent. Returns. PID. 0 in child.",
    de: "fork(). Returns 0 in child, PID in parent. exec() after. Process creation."
  }),
  (_i: number) => ({
    q: "What does 'everything is a file' mean (Unix)?",
    o: ["Devices, sockets use file interface", "Everything file", "File interface", "Unified"],
    c: 0,
    e: "Unix. Everything. File. /dev. /proc. Socket. read. write.",
    de: "/dev/sda, /proc/1, socket. open, read, write. Unified interface."
  }),
  (_i: number) => ({
    q: "What does `docker run --memory=512m` limit?",
    o: ["Container RAM to 512MB", "Memory limit", "RAM limit", "512MB"],
    c: 0,
    e: "docker run --memory. Limit. RAM. 512m. Container. OOM.",
    de: "docker run --memory=512m app. Hard limit. OOM kill. --memory-swap too."
  }),
  (_i: number) => ({
    q: "What does `docker run --cpus=0.5` limit?",
    o: ["CPU to half a core", "CPU limit", "0.5 CPU", "CPU quota"],
    c: 0,
    e: "docker run --cpus. Limit. CPU. 0.5. Half. Core.",
    de: "docker run --cpus=0.5 app. 50% one core. Throttle. Limit."
  }),
  (_i: number) => ({
    q: "What does `kubectl get services` show?",
    o: ["Services (cluster IPs, ports)", "Services", "SVC list", "Cluster IP"],
    c: 0,
    e: "kubectl get svc. Services. ClusterIP. Port. Selector. Endpoints.",
    de: "kubectl get svc. CLUSTER-IP, PORT(S). LoadBalancer. NodePort."
  }),
  (_i: number) => ({
    q: "What does `kubectl port-forward pod 8080:80` do?",
    o: ["Forwards local 8080 to pod 80", "Port forward", "Forward", "Local access"],
    c: 0,
    e: "kubectl port-forward. Local. 8080. Pod. 80. Access. localhost.",
    de: "kubectl port-forward mypod 8080:80. localhost:8080 -> pod:80."
  }),
  (_i: number) => ({
    q: "What does `git tag v1.0` create?",
    o: ["Tag at current commit", "Tag", "Version tag", "Release tag"],
    c: 0,
    e: "git tag. Tag. Commit. Version. Release. v1.0.",
    de: "git tag v1.0. git tag -a v1.0 -m 'Release'. git push origin v1.0."
  }),
  (_i: number) => ({
    q: "What does `git blame file` show?",
    o: ["Author per line", "Blame", "Line author", "Who changed"],
    c: 0,
    e: "git blame. Line. Author. Commit. When. Changed.",
    de: "git blame file.txt. Per line. Author. Commit. History."
  }),
  (_i: number) => ({
    q: "What does `systemd` replace in boot?",
    o: ["SysV init (parallel, dependency)", "Replaces init", "Systemd", "Modern init"],
    c: 0,
    e: "systemd. Replaces. SysV. init. Parallel. Dependencies. Units.",
    de: "systemd. PID 1. Units. Parallel. Dependencies. Socket activation."
  }),
  (_i: number) => ({
    q: "What does `execve()` syscall do?",
    o: ["Replaces process with new program", "Exec", "Replace process", "Load program"],
    c: 0,
    e: "execve(path, argv, env). Replaces. Current. Process. New. Program.",
    de: "execve(). No return. Process replaced. fork + execve = new process."
  }),
  (_i: number) => ({
    q: "What does 'avoid captive user interfaces' mean (Unix)?",
    o: ["Prefer CLI over interactive prompts", "No captive UI", "CLI prefer", "Scriptable"],
    c: 0,
    e: "Unix. Avoid. Captive. Interactive. Prefer. CLI. Scriptable.",
    de: "grep, not interactive. Pipe. Script. Automate. No prompts."
  }),
  (_i: number) => ({
    q: "What does `docker compose down` do?",
    o: ["Stops and removes compose project", "Compose down", "Stop project", "Remove"],
    c: 0,
    e: "docker compose down. Stop. Remove. Containers. Networks. Project.",
    de: "docker compose down. -v for volumes. Clean. Teardown."
  }),
  (_i: number) => ({
    q: "What does `docker image prune` remove?",
    o: ["Dangling images (no tag)", "Prune images", "Dangling", "Untagged"],
    c: 0,
    e: "docker image prune. Dangling. No tag. Unused. Layers. Clean.",
    de: "docker image prune. -a for all unused. Reclaim. Space."
  }),
  (_i: number) => ({
    q: "What does `kubectl get namespaces` show?",
    o: ["Namespaces (logical isolation)", "Namespaces", "NS list", "Isolation"],
    c: 0,
    e: "kubectl get ns. Namespaces. Isolation. default, kube-system. Logical.",
    de: "kubectl get ns. kubectl create ns dev. Resource isolation."
  }),
  (_i: number) => ({
    q: "What does `kubectl config use-context name` do?",
    o: ["Switches active cluster/context", "Switch context", "Context", "Cluster"],
    c: 0,
    e: "kubectl config use-context. Switch. Cluster. Context. Active.",
    de: "kubectl config use-context prod. Switch. Cluster. Multi-cluster."
  }),
  (_i: number) => ({
    q: "What does `git submodule add URL path` do?",
    o: ["Adds repo as submodule", "Submodule", "Nested repo", "Add submodule"],
    c: 0,
    e: "git submodule add. Repo. Nested. Path. .gitmodules. Reference.",
    de: "git submodule add https://... lib. git submodule update --init."
  }),
  (_i: number) => ({
    q: "What does `git bisect` do?",
    o: ["Binary search for bad commit", "Bisect", "Find commit", "Binary search"],
    c: 0,
    e: "git bisect. Binary. Search. Bad. Commit. start, good, bad. Test.",
    de: "git bisect start. git bisect bad. git bisect good abc. Finds regression."
  }),
  (_i: number) => ({
    q: "What does `runlevel` or `systemctl get-default` show?",
    o: ["Current/default boot target", "Runlevel", "Boot target", "Default target"],
    c: 0,
    e: "runlevel. systemctl get-default. Target. graphical. multi-user. Boot.",
    de: "systemctl get-default. graphical.target. multi-user.target. Boot."
  }),
  (_i: number) => ({
    q: "What does `close()` syscall do?",
    o: ["Closes file descriptor", "Close", "Close fd", "Release fd"],
    c: 0,
    e: "close(fd). Release. Descriptor. Free. No. Leak.",
    de: "close(fd). Release. Kernel. Descriptor. Must close. Leak."
  }),
  (_i: number) => ({
    q: "What does 'silence is golden' mean (Unix)?",
    o: ["No output = success (exit 0)", "Silence", "No output", "Success"],
    c: 0,
    e: "Unix. Silence. Success. No. Output. Exit. 0.",
    de: "grep finds nothing = exit 1. No match = quiet. Success = no output."
  }),
  (_i: number) => ({
    q: "What does `docker run --read-only` do?",
    o: ["Makes root filesystem read-only", "Read-only", "Immutable", "No write"],
    c: 0,
    e: "docker run --read-only. Root. Read-only. Immutable. Security. tmpfs for /tmp.",
    de: "docker run --read-only app. No write. --tmpfs /tmp. Security."
  }),
  (_i: number) => ({
    q: "What does `docker run --user 1000` do?",
    o: ["Runs as UID 1000 (non-root)", "User", "Non-root", "UID"],
    c: 0,
    e: "docker run --user. UID. Non-root. Security. 1000. Run.",
    de: "docker run --user 1000:1000 app. Non-root. Security. Least privilege."
  }),
  (_i: number) => ({
    q: "What does `kubectl rollout status deployment/name` show?",
    o: ["Rollout progress (deployment)", "Rollout status", "Deploy progress", "Update"],
    c: 0,
    e: "kubectl rollout status. Deployment. Progress. Update. Rolling.",
    de: "kubectl rollout status deployment/myapp. Waiting. Complete."
  }),
  (_i: number) => ({
    q: "What does `kubectl rollout undo deployment/name` do?",
    o: ["Reverts to previous revision", "Rollback", "Undo", "Previous"],
    c: 0,
    e: "kubectl rollout undo. Revert. Previous. Revision. Rollback.",
    de: "kubectl rollout undo deployment/myapp. Previous. Revision."
  }),
  (_i: number) => ({
    q: "What does `git reflog` show?",
    o: ["Reference history (HEAD moves)", "Reflog", "HEAD history", "Recovery"],
    c: 0,
    e: "git reflog. HEAD. History. Moves. Recovery. Lost. Commit.",
    de: "git reflog. HEAD@{0}. Reset. Checkout. Recover. Lost commit."
  }),
  (_i: number) => ({
    q: "What does `git worktree add path branch` do?",
    o: ["Adds worktree (multiple checkouts)", "Worktree", "Multiple checkout", "Add worktree"],
    c: 0,
    e: "git worktree add. Multiple. Checkout. Same. Repo. Branch. Path.",
    de: "git worktree add ../hotfix hotfix. Second dir. Same repo. Branch."
  }),
  (_i: number) => ({
    q: "What does `mount` do in boot?",
    o: ["Mounts root filesystem", "Mount root", "Root mount", "Filesystem"],
    c: 0,
    e: "mount. Root. Filesystem. /. Init. Initramfs. Switch. Root.",
    de: "mount. / from initrd. switch_root. Real. Boot. Continue."
  }),
  (_i: number) => ({
    q: "What does `pipe()` syscall create?",
    o: ["Unidirectional byte stream (fd pair)", "Pipe", "Pipe fd", "Stream"],
    c: 0,
    e: "pipe(). Two. Fds. Read. Write. Unidirectional. IPC.",
    de: "pipe(fd[2]). fd[0] read, fd[1] write. cat file | grep. IPC."
  }),
  (_i: number) => ({
    q: "What does 'rule of silence' mean (Unix)?",
    o: ["Don't output unless necessary", "Rule of silence", "Minimal output", "Quiet"],
    c: 0,
    e: "Unix. Silence. Output. Unless. Necessary. Error. Only.",
    de: "Success = no output. Error = stderr. Don't spam. Quiet."
  }),
  (_i: number) => ({
    q: "What does `docker run -d` do?",
    o: ["Runs detached (background)", "Detached", "Background", "Daemon"],
    c: 0,
    e: "docker run -d. Detached. Background. No. Attach. Run.",
    de: "docker run -d nginx. Background. docker attach. docker logs."
  }),
  (_i: number) => ({
    q: "What does `docker run -it` need?",
    o: ["Allocate TTY and keep stdin open", "Interactive", "TTY", "Shell"],
    c: 0,
    e: "docker run -it. Interactive. TTY. Shell. bash. Attach.",
    de: "docker run -it alpine sh. -i stdin. -t TTY. Interactive."
  }),
  (_i: number) => ({
    q: "What does `kubectl get configmaps` show?",
    o: ["ConfigMaps (key-value config)", "ConfigMaps", "Config", "Key-value"],
    c: 0,
    e: "kubectl get cm. ConfigMaps. Config. Key-value. Non-secret.",
    de: "kubectl get configmaps. Mount. Env. Config. Application."
  }),
  (_i: number) => ({
    q: "What does `kubectl get secrets` show?",
    o: ["Secrets (base64 encoded)", "Secrets", "Credentials", "Base64"],
    c: 0,
    e: "kubectl get secrets. Secrets. Base64. Credentials. Encoded.",
    de: "kubectl get secrets. Opaque. Mount. Env. Passwords. Keys."
  }),
  (_i: number) => ({
    q: "What does `git reset --hard HEAD` do?",
    o: ["Discards all local changes", "Hard reset", "Discard", "Clean"],
    c: 0,
    e: "git reset --hard. Discard. All. Changes. Working. Staged. Clean.",
    de: "git reset --hard HEAD. All gone. Destructive. Careful."
  }),
  (_i: number) => ({
    q: "What does `git clean -fd` remove?",
    o: ["Untracked files and directories", "Clean", "Untracked", "Remove"],
    c: 0,
    e: "git clean -fd. Untracked. Files. Directories. Remove. -n dry run.",
    de: "git clean -fd. -n preview. -x includes ignored. Clean."
  }),
  (_i: number) => ({
    q: "What does `systemctl list-units` show?",
    o: ["Loaded units (services, etc)", "Units", "Services", "Loaded"],
    c: 0,
    e: "systemctl list-units. Units. Loaded. Active. Services. Targets.",
    de: "systemctl list-units. --type=service. --state=running. Boot."
  }),
  (_i: number) => ({
    q: "What does `dup2()` syscall do?",
    o: ["Duplicates fd to another fd", "Dup2", "Duplicate fd", "Redirect"],
    c: 0,
    e: "dup2(old, new). Duplicate. Fd. Redirect. Close. new. Copy.",
    de: "dup2(pipe_read, 0). stdin = pipe. Redirect. Shell. Pipeline."
  }),
  (_i: number) => ({
    q: "What does 'small is beautiful' mean (Unix)?",
    o: ["Small programs are maintainable", "Small", "Maintainable", "Modular"],
    c: 0,
    e: "Unix. Small. Beautiful. Maintainable. Understand. Modify.",
    de: "Small programs. Easy. Understand. Fix. Compose. Modular."
  }),
  (_i: number) => ({
    q: "What does `docker run --network host` do?",
    o: ["Uses host network (no isolation)", "Host network", "No isolation", "Shared network"],
    c: 0,
    e: "docker run --network host. Host. Network. No. Isolation. Shared.",
    de: "docker run --network host app. Same network. localhost. No NAT."
  }),
  (_i: number) => ({
    q: "What does `docker run --add-host name:ip` do?",
    o: ["Adds host entry to /etc/hosts", "Add host", "Hosts entry", "DNS override"],
    c: 0,
    e: "docker run --add-host. Hosts. Entry. /etc/hosts. DNS. Override.",
    de: "docker run --add-host db:192.168.1.10 app. db resolves."
  }),
  (_i: number) => ({
    q: "What does `kubectl run nginx --image=nginx` create?",
    o: ["Pod running nginx", "Run pod", "Create pod", "Imperative"],
    c: 0,
    e: "kubectl run. Pod. Image. Imperative. Quick. Test.",
    de: "kubectl run nginx --image=nginx. Pod. Quick. Test. Not production."
  }),
  (_i: number) => ({
    q: "What does `kubectl expose deployment name --port=80` do?",
    o: ["Creates Service for deployment", "Expose", "Create service", "Service"],
    c: 0,
    e: "kubectl expose. Service. Deployment. Port. ClusterIP. LoadBalancer.",
    de: "kubectl expose deployment myapp --port=80. Service. Access."
  }),
  (_i: number) => ({
    q: "What does `git show commit` show?",
    o: ["Commit diff and metadata", "Show commit", "Commit diff", "Commit info"],
    c: 0,
    e: "git show. Commit. Diff. Metadata. Author. Message. Patch.",
    de: "git show abc123. Commit. Diff. Full. Info."
  }),
  (_i: number) => ({
    q: "What does `git shortlog -sn` show?",
    o: ["Commit count per author", "Shortlog", "Author stats", "Contributors"],
    c: 0,
    e: "git shortlog -sn. Commits. Per. Author. Count. Sorted.",
    de: "git shortlog -sn. Contributors. Count. Stats."
  }),
  (_i: number) => ({
    q: "What does `initramfs` run before kernel?",
    o: ["No - runs after kernel loads", "After kernel", "Initramfs order", "Boot order"],
    c: 0,
    e: "initramfs. After. Kernel. Loads. Before. Root. Mount. Drivers.",
    de: "Kernel loads. initramfs. Drivers. Mount. Switch root. Init."
  }),
  (_i: number) => ({
    q: "What does `chdir()` syscall do?",
    o: ["Changes current directory", "Chdir", "Change dir", "CWD"],
    c: 0,
    e: "chdir(path). Change. Directory. Current. Working. CWD.",
    de: "chdir(/tmp). cd. Current. Directory. Process. Per-process."
  }),
  (_i: number) => ({
    q: "What does 'portability' mean (Unix)?",
    o: ["Code runs on different Unix systems", "Portability", "Cross-platform", "Portable"],
    c: 0,
    e: "Unix. Portable. Different. Systems. POSIX. Standard. Run.",
    de: "POSIX. Shell. C. Portable. Linux. BSD. macOS. Same."
  }),
  (_i: number) => ({
    q: "What does `docker run --privileged` grant?",
    o: ["All capabilities (dangerous)", "Privileged", "All caps", "Dangerous"],
    c: 0,
    e: "docker run --privileged. All. Capabilities. Device. Access. Dangerous.",
    de: "docker run --privileged. Almost root. Hardware. Avoid. Security."
  }),
  (_i: number) => ({
    q: "What does `docker run --pid=host` share?",
    o: ["Host PID namespace (see all processes)", "PID namespace", "Host PIDs", "Process view"],
    c: 0,
    e: "docker run --pid=host. Host. PID. Namespace. All. Processes. See.",
    de: "docker run --pid=host debug. See host processes. Debug. Monitoring."
  }),
  (_i: number) => ({
    q: "What does `kubectl get pods -l app=nginx` filter by?",
    o: ["Label selector", "Label", "Selector", "Filter"],
    c: 0,
    e: "kubectl get pods -l. Label. Selector. app=nginx. Filter.",
    de: "kubectl get pods -l app=nginx. -l env=prod. Selector."
  }),
  (_i: number) => ({
    q: "What does `kubectl edit deployment name` do?",
    o: ["Opens deployment in editor", "Edit", "Modify", "Editor"],
    c: 0,
    e: "kubectl edit. Opens. Editor. Modify. Live. Apply.",
    de: "kubectl edit deployment myapp. Editor. Change. Save. Apply."
  }),
  (_i: number) => ({
    q: "What does `git merge --squash branch` do?",
    o: ["Squashes branch into single commit", "Squash merge", "Single commit", "Combine"],
    c: 0,
    e: "git merge --squash. All. Commits. One. Single. Clean. History.",
    de: "git merge --squash feature. One commit. Clean. History."
  }),
  (_i: number) => ({
    q: "What does `git log -p` add?",
    o: ["Patch (diff) per commit", "Patch", "Diff", "Changes"],
    c: 0,
    e: "git log -p. Patch. Diff. Per. Commit. Full. Changes.",
    de: "git log -p. -1 for last. Patch. Diff. Each commit."
  }),
  (_i: number) => ({
    q: "What does `systemd-analyze` show?",
    o: ["Boot time breakdown", "Boot time", "Analyze", "Startup"],
    c: 0,
    e: "systemd-analyze. Boot. Time. Breakdown. Slow. Services.",
    de: "systemd-analyze. systemd-analyze blame. Boot. Time."
  }),
  (_i: number) => ({
    q: "What does `wait()` syscall do?",
    o: ["Waits for child process exit", "Wait", "Child exit", "Reap"],
    c: 0,
    e: "wait(). Child. Exit. Reap. Zombie. Status. Block.",
    de: "wait(&status). waitpid(). Reap. Zombie. Exit. Status."
  }),
  (_i: number) => ({
    q: "What does 'separate mechanism from policy' mean (Unix)?",
    o: ["Programs provide mechanism; user chooses policy", "Mechanism policy", "Separation", "Flexibility"],
    c: 0,
    e: "Unix. Mechanism. Policy. Separate. grep. Mechanism. User. Policy.",
    de: "grep = mechanism. User provides pattern = policy. Flexible."
  }),
  (_i: number) => ({
    q: "What does `docker run --ulimit nofile=65535` set?",
    o: ["File descriptor limit in container", "Ulimit", "FD limit", "Nofile"],
    c: 0,
    e: "docker run --ulimit. Limit. Container. nofile. 65535. FDs.",
    de: "docker run --ulimit nofile=65535:65535 app. Limit. Container."
  }),
  (_i: number) => ({
    q: "What does `docker run --security-opt no-new-privileges` do?",
    o: ["Prevents privilege escalation", "No new privs", "Security", "Priv esc block"],
    c: 0,
    e: "docker run --security-opt. no-new-privileges. Prevent. Escalation. setuid.",
    de: "docker run --security-opt no-new-privileges app. Security. Hardening."
  }),
  (_i: number) => ({
    q: "What does `kubectl get events` show?",
    o: ["Cluster events (scheduling, etc)", "Events", "Cluster events", "K8s events"],
    c: 0,
    e: "kubectl get events. Events. Scheduling. Pull. Start. Fail. Debug.",
    de: "kubectl get events. -A all. --sort-by. Debug. Cluster."
  }),
  (_i: number) => ({
    q: "What does `kubectl top pods` show?",
    o: ["CPU/memory usage of pods", "Resource usage", "Top pods", "Metrics"],
    c: 0,
    e: "kubectl top pods. CPU. Memory. Usage. Metrics. Server. Required.",
    de: "kubectl top pods. metrics-server. CPU. Memory. Usage."
  }),
  (_i: number) => ({
    q: "What does `git config --global user.email` set?",
    o: ["Global git config (all repos)", "Global config", "User email", "Config"],
    c: 0,
    e: "git config --global. Global. All. Repos. user.email. user.name.",
    de: "git config --global user.email a@b.com. ~/.gitconfig."
  }),
  (_i: number) => ({
    q: "What does `git stash list` show?",
    o: ["List of stashes", "Stash list", "Stashes", "Saved changes"],
    c: 0,
    e: "git stash list. Stashes. Saved. stash@{0}. stash@{1}.",
    de: "git stash list. stash@{0}: WIP on main. Apply. Pop."
  }),
  (_i: number) => ({
    q: "What does `journalctl -b` show?",
    o: ["Logs from current boot", "Current boot", "Boot logs", "Journal"],
    c: 0,
    e: "journalctl -b. Current. Boot. Logs. -b -1 previous.",
    de: "journalctl -b. -b -1 previous boot. -u nginx unit."
  }),
  (_i: number) => ({
    q: "What does `mmap()` syscall do?",
    o: ["Maps file into memory", "Mmap", "Memory map", "File map"],
    c: 0,
    e: "mmap(). Map. File. Memory. Read. Write. Efficient. Shared.",
    de: "mmap(addr, len, prot, flags, fd, off). Virtual. Memory. File."
  }),
  (_i: number) => ({
    q: "What does 'fail fast' mean (Unix)?",
    o: ["Report errors immediately", "Fail fast", "Immediate error", "No silent"],
    c: 0,
    e: "Unix. Fail. Fast. Error. Immediately. No. Silent. Report.",
    de: "Exit 1. stderr. Don't continue. Fail. Fast. Clear."
  }),
  (_i: number) => ({
    q: "What does `docker run --gpus all` enable?",
    o: ["GPU access in container", "GPU", "NVIDIA", "GPU access"],
    c: 0,
    e: "docker run --gpus. GPU. Access. NVIDIA. All. Container.",
    de: "docker run --gpus all nvidia/cuda. GPU. CUDA. ML."
  }),
  (_i: number) => ({
    q: "What does `docker run --ipc=host` share?",
    o: ["Host IPC namespace (shared memory)", "IPC namespace", "Shared memory", "Host IPC"],
    c: 0,
    e: "docker run --ipc=host. Host. IPC. Shared. Memory. Semaphores.",
    de: "docker run --ipc=host app. Shared memory. Semaphores. IPC."
  }),
  (_i: number) => ({
    q: "What does `kubectl create deployment name --image=img` do?",
    o: ["Creates Deployment imperatively", "Create deploy", "Imperative deploy", "Deployment"],
    c: 0,
    e: "kubectl create deployment. Imperative. Image. ReplicaSet. Pods.",
    de: "kubectl create deployment myapp --image=nginx. Quick. Deploy."
  }),
  (_i: number) => ({
    q: "What does `kubectl delete -f file.yaml` do?",
    o: ["Deletes resources in manifest", "Delete from file", "Remove resources", "Delete manifest"],
    c: 0,
    e: "kubectl delete -f. Manifest. Delete. Resources. Declarative.",
    de: "kubectl delete -f deployment.yaml. Remove. Resources."
  }),
  (_i: number) => ({
    q: "What does `git push --force` do?",
    o: ["Overwrites remote (destructive)", "Force push", "Overwrite", "Destructive"],
    c: 0,
    e: "git push --force. Overwrite. Remote. Destructive. Rebase. History.",
    de: "git push --force. Overwrites. Remote. Careful. Shared. Branch."
  }),
  (_i: number) => ({
    q: "What does `git log --oneline -10` show?",
    o: ["Last 10 commits (short format)", "Short log", "10 commits", "Oneline"],
    c: 0,
    e: "git log --oneline. Short. One. Line. -10. Last. Ten.",
    de: "git log --oneline -10. Short. Hash. Message. Last 10."
  }),
  (_i: number) => ({
    q: "What does `systemctl isolate rescue.target` do?",
    o: ["Switches to rescue mode (single user)", "Rescue mode", "Single user", "Isolate"],
    c: 0,
    e: "systemctl isolate. Rescue. Single. User. Minimal. Recovery.",
    de: "systemctl isolate rescue.target. Rescue. Single. Fix."
  }),
  (_i: number) => ({
    q: "What does `kill()` syscall do?",
    o: ["Sends signal to process", "Kill", "Signal", "Send signal"],
    c: 0,
    e: "kill(pid, sig). Signal. Process. SIGTERM. SIGKILL. Send.",
    de: "kill(pid, SIGTERM). Signal. Process. kill command uses this."
  }),
  (_i: number) => ({
    q: "What does 'write programs to work together' mean (Unix)?",
    o: ["Programs communicate via text streams", "Work together", "Streams", "Composition"],
    c: 0,
    e: "Unix. Programs. Together. Text. Streams. Pipe. Compose.",
    de: "Pipe. stdin. stdout. Universal. Interface. Compose. Together."
  }),
];
