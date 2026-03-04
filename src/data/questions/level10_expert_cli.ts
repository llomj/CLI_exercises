// LEVEL 10 EXPERT — Containers, Git, Boot, Syscalls, Philosophy (108 unique questions)
// Topics: Docker, Kubernetes, Git, boot process, syscalls, Unix philosophy (expert depth)

export const level10Expert = [
  (_i: number) => ({
    q: "What does `docker run --cgroup-parent=mycgroup` set?",
    o: ["Parent cgroup for container", "Cgroup parent", "Cgroup", "Resource hierarchy"],
    c: 0,
    e: "docker run --cgroup-parent. Parent. Cgroup. Hierarchy. Resource. Limit.",
    de: "docker run --cgroup-parent=mycgroup app. cgroups. Hierarchy. Resource."
  }),
  (_i: number) => ({
    q: "What does `kubectl auth can-i create pods --as=user` check?",
    o: ["RBAC permission check", "Auth can-i", "Permission", "RBAC"],
    c: 0,
    e: "kubectl auth can-i. Check. Permission. RBAC. User. Verb. Resource.",
    de: "kubectl auth can-i create pods --as=dev. RBAC. Check. Permission."
  }),
  (_i: number) => ({
    q: "What does `git filter-branch` or `git filter-repo` do?",
    o: ["Rewrites history (remove file, etc)", "History rewrite", "Filter", "Rewrite"],
    c: 0,
    e: "git filter-branch. Rewrite. History. Remove. File. Credentials. filter-repo better.",
    de: "git filter-repo --path secrets/ --invert-paths. Remove. History."
  }),
  (_i: number) => ({
    q: "What does `clone()` syscall do?",
    o: ["Creates child process (CLONE_* flags)", "Clone", "Process create", "Flags"],
    c: 0,
    e: "clone(). Child. Process. Flags. CLONE_NEWNS. Namespace. Thread.",
    de: "clone(CLONE_NEWPID|CLONE_NEWNS). Namespace. Container. Process."
  }),
  (_i: number) => ({
    q: "What does `docker run --userns=host` disable?",
    o: ["User namespace (run as host UIDs)", "User namespace", "Userns", "Host UID"],
    c: 0,
    e: "docker run --userns=host. User. Namespace. Disable. Host. UID. Root.",
    de: "docker run --userns=host. No user ns. Host UID. Security."
  }),
  (_i: number) => ({
    q: "What does `kubectl get pods -o jsonpath='{.items[*].metadata.name}'` extract?",
    o: ["Pod names via JSONPath", "JSONPath", "Extract", "Custom output"],
    c: 0,
    e: "kubectl -o jsonpath. Extract. Field. JSON. Custom. Output.",
    de: "kubectl get pods -o jsonpath='{.items[*].metadata.name}'. Names."
  }),
  (_i: number) => ({
    q: "What does `git update-ref` manipulate?",
    o: ["Refs directly (low-level)", "Update ref", "Ref", "Low-level"],
    c: 0,
    e: "git update-ref. Refs. Direct. Low-level. HEAD. Branch. Manipulate.",
    de: "git update-ref refs/heads/main abc123. Direct. Ref. Update."
  }),
  (_i: number) => ({
    q: "What does `unshare()` syscall do?",
    o: ["Unshares namespace from parent", "Unshare", "Namespace", "Isolate"],
    c: 0,
    e: "unshare(CLONE_NEWNS). Unshare. Namespace. New. Mount. Isolate.",
    de: "unshare(CLONE_NEWNS). New mount ns. unshare -m. Container."
  }),
  (_i: number) => ({
    q: "What does `docker run --blkio-weight=500` set?",
    o: ["Block I/O weight (relative)", "Blkio weight", "I/O weight", "Block I/O"],
    c: 0,
    e: "docker run --blkio-weight. Block. I/O. Weight. 10-1000. Relative.",
    de: "docker run --blkio-weight=500 app. I/O. Priority. cgroups."
  }),
  (_i: number) => ({
    q: "What does `kubectl patch deployment name -p '{\"spec\":{\"replicas\":3}}'` do?",
    o: ["Patches deployment (JSON patch)", "Patch", "JSON patch", "Update"],
    c: 0,
    e: "kubectl patch. JSON. Patch. Merge. Update. Field. Replicas.",
    de: "kubectl patch deploy myapp -p '{\"spec\":{\"replicas\":3}}'. Patch."
  }),
  (_i: number) => ({
    q: "What does `git pack-refs` do?",
    o: ["Packs refs into single file", "Pack refs", "Refs pack", "Optimize"],
    c: 0,
    e: "git pack-refs. Pack. Refs. Single. File. Optimize. Many. Refs.",
    de: "git pack-refs --all. packed-refs. Many refs. Single file."
  }),
  (_i: number) => ({
    q: "What does `setns()` syscall do?",
    o: ["Joins existing namespace", "Setns", "Join namespace", "Enter ns"],
    c: 0,
    e: "setns(fd, nstype). Join. Existing. Namespace. Enter. Container.",
    de: "setns(fd, CLONE_NEWNET). Join. Network. Namespace. nsenter."
  }),
  (_i: number) => ({
    q: "What does `docker run --oom-kill-disable` do?",
    o: ["Prevents OOM killer (risky)", "OOM disable", "No OOM kill", "Risky"],
    c: 0,
    e: "docker run --oom-kill-disable. OOM. Killer. Disable. Risky. Memory.",
    de: "docker run --oom-kill-disable app. No OOM. System. Risk."
  }),
  (_i: number) => ({
    q: "What does `kubectl rollout history deployment/name` show?",
    o: ["Rollout revisions", "Rollout history", "Revisions", "History"],
    c: 0,
    e: "kubectl rollout history. Revisions. Changes. Rollback. Target.",
    de: "kubectl rollout history deployment/myapp. Revisions. Rollback."
  }),
  (_i: number) => ({
    q: "What does `git rev-parse HEAD` output?",
    o: ["Full SHA of HEAD", "Rev parse", "SHA", "Commit hash"],
    c: 0,
    e: "git rev-parse. Resolve. Ref. SHA. Full. Hash. abc123.",
    de: "git rev-parse HEAD. abc123def. SHA. Full. Scripting."
  }),
  (_i: number) => ({
    q: "What does `seccomp` restrict?",
    o: ["Syscalls (whitelist/blacklist)", "Seccomp", "Syscall filter", "Sandbox"],
    c: 0,
    e: "seccomp. Syscall. Filter. Whitelist. Blacklist. Sandbox. Container.",
    de: "seccomp. Docker. Default. Profile. Restrict. Syscalls."
  }),
  (_i: number) => ({
    q: "What does `docker run --pids-limit=100` set?",
    o: ["Max processes in container", "PIDs limit", "Process limit", "Pid limit"],
    c: 0,
    e: "docker run --pids-limit. Max. Processes. Container. Fork. Bomb.",
    de: "docker run --pids-limit=100 app. Max. 100. Processes. Limit."
  }),
  (_i: number) => ({
    q: "What does `kubectl get pods --field-selector=status.phase=Running` filter?",
    o: ["Pods by field (Running)", "Field selector", "Filter", "Status"],
    c: 0,
    e: "kubectl --field-selector. Filter. Field. status.phase. Running.",
    de: "kubectl get pods --field-selector=status.phase=Running. Filter."
  }),
  (_i: number) => ({
    q: "What does `git cat-file -p hash` show?",
    o: ["Object content (pretty)", "Cat file", "Object", "Content"],
    c: 0,
    e: "git cat-file -p. Object. Content. Pretty. Blob. Tree. Commit.",
    de: "git cat-file -p abc123. Commit. Message. Tree. Parent."
  }),
  (_i: number) => ({
    q: "What does `capabilities` in Linux allow?",
    o: ["Granular privilege (not all-or-nothing root)", "Capabilities", "Granular", "Privilege"],
    c: 0,
    e: "Capabilities. Granular. CAP_NET_BIND_SERVICE. Not. Full. Root.",
    de: "setcap cap_net_bind_service=ep /usr/bin/app. Bind 80. Non-root."
  }),
  (_i: number) => ({
    q: "What does `docker run --device /dev/gpu0` add?",
    o: ["Device to container", "Device", "GPU device", "Hardware"],
    c: 0,
    e: "docker run --device. Device. Container. /dev. Hardware. Access.",
    de: "docker run --device /dev/gpu0 app. GPU. Device. Access."
  }),
  (_i: number) => ({
    q: "What does `kubectl taint nodes node1 key=value:NoSchedule` do?",
    o: ["Taints node (repel pods)", "Taint", "NoSchedule", "Repel"],
    c: 0,
    e: "kubectl taint. Node. Repel. Pods. NoSchedule. Unless. Toleration.",
    de: "kubectl taint nodes node1 dedicated=gpu:NoSchedule. GPU. Node."
  }),
  (_i: number) => ({
    q: "What does `git hash-object -w file` do?",
    o: ["Creates blob, stores in object db", "Hash object", "Blob", "Object db"],
    c: 0,
    e: "git hash-object -w. Create. Blob. Store. Object. Database. Low-level.",
    de: "git hash-object -w file.txt. Blob. .git/objects. SHA."
  }),
  (_i: number) => ({
    q: "What does `namespaces` isolate in containers?",
    o: ["PID, network, mount, etc (per-namespace view)", "Namespaces", "Isolation", "View"],
    c: 0,
    e: "Namespaces. PID. Network. Mount. UTS. IPC. User. Isolate. View.",
    de: "PID ns = own PIDs. Net ns = own interfaces. Mount = own /. Container."
  }),
  (_i: number) => ({
    q: "What does `docker run --shm-size=1g` set?",
    o: ["Shared memory size (/dev/shm)", "Shm size", "Shared memory", "tmpfs"],
    c: 0,
    e: "docker run --shm-size. Shared. Memory. /dev/shm. 64M default. Increase.",
    de: "docker run --shm-size=1g app. /dev/shm. PostgreSQL. Oracle."
  }),
  (_i: number) => ({
    q: "What does `kubectl get pods -o custom-columns=NAME:.metadata.name,NODE:.spec.nodeName` do?",
    o: ["Custom column output", "Custom columns", "Column", "Output"],
    c: 0,
    e: "kubectl -o custom-columns. Custom. Columns. JSONPath. Output. Format.",
    de: "kubectl get pods -o custom-columns=NAME:.metadata.name. Custom."
  }),
  (_i: number) => ({
    q: "What does `git write-tree` create?",
    o: ["Tree object from index", "Write tree", "Tree object", "Index"],
    c: 0,
    e: "git write-tree. Tree. Object. Index. Staged. Creates. SHA.",
    de: "git write-tree. Index. Tree. Object. Low-level. Commit."
  }),
  (_i: number) => ({
    q: "What does `cgroups` limit?",
    o: ["CPU, memory, I/O for process group", "Cgroups", "Resource limit", "Control"],
    c: 0,
    e: "cgroups. CPU. Memory. I/O. Limit. Process. Group. Container.",
    de: "cgroups v2. /sys/fs/cgroup. Limit. Throttle. OOM."
  }),
  (_i: number) => ({
    q: "What does `docker run --tmpfs /tmp:size=100m` create?",
    o: ["tmpfs mount (size limit)", "Tmpfs", "RAM disk", "Size limit"],
    c: 0,
    e: "docker run --tmpfs. tmpfs. RAM. Size. 100m. /tmp. Ephemeral.",
    de: "docker run --tmpfs /tmp:size=100m,mode=1777 app. tmpfs."
  }),
  (_i: number) => ({
    q: "What does `kubectl drain node` do?",
    o: ["Cordons and evicts pods from node", "Drain", "Evict", "Maintenance"],
    c: 0,
    e: "kubectl drain. Cordon. Evict. Pods. Node. Maintenance. Empty.",
    de: "kubectl drain node1. Evict. Pods. Maintenance. --ignore-daemonsets."
  }),
  (_i: number) => ({
    q: "What does `git commit-tree` create?",
    o: ["Commit object (low-level)", "Commit tree", "Commit object", "Low-level"],
    c: 0,
    e: "git commit-tree. Commit. Object. Tree. Parent. Message. Low-level.",
    de: "git commit-tree tree_sha -p parent_sha -m msg. Commit. Object."
  }),
  (_i: number) => ({
    q: "What does `overlayfs` provide for containers?",
    o: ["Layered filesystem (copy-on-write)", "Overlay", "Layers", "CoW"],
    c: 0,
    e: "overlayfs. Lower. Upper. Merge. Copy-on-write. Layers. Container.",
    de: "overlay2. Image. Layers. Container. Writable. CoW. Storage."
  }),
  (_i: number) => ({
    q: "What does `docker run --log-driver=json-file --log-opt max-size=10m` set?",
    o: ["Log driver and rotation", "Log options", "Log rotate", "Log driver"],
    c: 0,
    e: "docker run --log-driver. --log-opt. max-size. Rotation. json-file.",
    de: "docker run --log-opt max-size=10m --log-opt max-file=3 app. Rotate."
  }),
  (_i: number) => ({
    q: "What does `kubectl uncordon node` do?",
    o: ["Allows scheduling on node again", "Uncordon", "Allow schedule", "Re-enable"],
    c: 0,
    e: "kubectl uncordon. Allow. Scheduling. Again. After. Drain.",
    de: "kubectl uncordon node1. Scheduling. Enabled. After. Maintenance."
  }),
  (_i: number) => ({
    q: "What does `git ls-files -s` show?",
    o: ["Index entries (staged)", "Ls files", "Index", "Staged"],
    c: 0,
    e: "git ls-files -s. Index. Staged. Mode. SHA. Stage. Path.",
    de: "git ls-files -s. Index. Staging. Low-level. Debug."
  }),
  (_i: number) => ({
    q: "What does `runc` do?",
    o: ["OCI runtime (runs container from bundle)", "Runc", "OCI runtime", "Container run"],
    c: 0,
    e: "runc. OCI. Runtime. Bundle. config.json. rootfs. Run. Container.",
    de: "runc run. OCI. Docker. containerd. Low-level. Runtime."
  }),
  (_i: number) => ({
    q: "What does `docker run --init` add?",
    o: ["tini as PID 1 (proper signal handling)", "Init", "tini", "PID 1"],
    c: 0,
    e: "docker run --init. tini. PID 1. Signal. Reap. Zombie. Proper.",
    de: "docker run --init app. tini. PID 1. Signals. Zombies."
  }),
  (_i: number) => ({
    q: "What does `kubectl cordon node` do?",
    o: ["Marks node unschedulable", "Cordon", "No schedule", "Drain prep"],
    c: 0,
    e: "kubectl cordon. Mark. Unschedulable. No. New. Pods.",
    de: "kubectl cordon node1. SchedulingDisabled. No new pods."
  }),
  (_i: number) => ({
    q: "What does `git merge-base a b` find?",
    o: ["Common ancestor of two commits", "Merge base", "Ancestor", "Common"],
    c: 0,
    e: "git merge-base. Common. Ancestor. Two. Commits. Branch. Point.",
    de: "git merge-base main feature. Common. Ancestor. Merge. Point."
  }),
  (_i: number) => ({
    q: "What does `containerd` provide?",
    o: ["Container runtime (below Docker)", "Containerd", "Runtime", "CRI"],
    c: 0,
    e: "containerd. Runtime. Below. Docker. CRI. Kubernetes. OCI.",
    de: "containerd. Docker. Uses. Kubernetes. CRI. Runtime. Layer."
  }),
  (_i: number) => ({
    q: "What does `docker run --health-cmd` set?",
    o: ["Health check command", "Health check", "Health", "Probe"],
    c: 0,
    e: "docker run --health-cmd. Health. Check. Command. Probe. Status.",
    de: "docker run --health-cmd='curl -f http://localhost' app. Health."
  }),
  (_i: number) => ({
    q: "What does `kubectl apply -k dir` do?",
    o: ["Applies Kustomize overlay", "Kustomize", "K apply", "Overlay"],
    c: 0,
    e: "kubectl apply -k. Kustomize. Overlay. Base. Patches. Apply.",
    de: "kubectl apply -k overlays/prod. Kustomize. Overlay. Apply."
  }),
  (_i: number) => ({
    q: "What does `git diff --no-index a b` compare?",
    o: ["Two files (not in repo)", "No index", "Two files", "Compare"],
    c: 0,
    e: "git diff --no-index. Two. Files. Not. Repo. Compare. Any.",
    de: "git diff --no-index file1 file2. Compare. Outside. Repo."
  }),
  (_i: number) => ({
    q: "What does `CRI` (Container Runtime Interface) define?",
    o: ["K8s API for container runtimes", "CRI", "K8s runtime", "Interface"],
    c: 0,
    e: "CRI. Kubernetes. API. Runtime. containerd. CRI-O. Interface.",
    de: "CRI. gRPC. containerd. CRI-O. Kubernetes. Runtime. Interface."
  }),
  (_i: number) => ({
    q: "What does `docker run --cap-add=NET_RAW` add?",
    o: ["Specific capability", "Cap add", "Capability", "NET_RAW"],
    c: 0,
    e: "docker run --cap-add. Add. Capability. NET_RAW. ping. Specific.",
    de: "docker run --cap-add=NET_RAW app. ping. Raw. Socket."
  }),
  (_i: number) => ({
    q: "What does `kubectl create job name --image=img -- cmd` do?",
    o: ["Creates Job (run to completion)", "Create job", "Job", "Run to completion"],
    c: 0,
    e: "kubectl create job. Job. Run. Completion. Restart. Backoff.",
    de: "kubectl create job myjob --image=busybox -- echo hi. Job."
  }),
  (_i: number) => ({
    q: "What does `git notes add -m 'msg' commit` do?",
    o: ["Adds note to commit", "Notes", "Commit note", "Annotation"],
    c: 0,
    e: "git notes. Add. Note. Commit. Annotation. Metadata. Don't. Change. History.",
    de: "git notes add -m 'Reviewed' abc123. Note. Commit. refs/notes."
  }),
  (_i: number) => ({
    q: "What does `pivot_root` do in container init?",
    o: ["Swaps root filesystem", "Pivot root", "Root swap", "Chroot+"],
    c: 0,
    e: "pivot_root. Swap. Root. New. Root. Old. Put. Elsewhere. Container.",
    de: "pivot_root(new_root, put_old). Chroot. Better. Container. Init."
  }),
  (_i: number) => ({
    q: "What does `docker run --sysctl net.ipv4.ip_forward=1` set?",
    o: ["Sysctl in container", "Sysctl", "Kernel param", "Network"],
    c: 0,
    e: "docker run --sysctl. Kernel. Parameter. Container. net.*. Allowed.",
    de: "docker run --sysctl net.ipv4.ip_forward=1 router. Forward. IP."
  }),
  (_i: number) => ({
    q: "What does `kubectl create configmap name --from-file=file` do?",
    o: ["Creates ConfigMap from file", "ConfigMap from file", "Create cm", "File"],
    c: 0,
    e: "kubectl create configmap. From. File. Key. Filename. Content.",
    de: "kubectl create configmap app-config --from-file=config.yaml."
  }),
  (_i: number) => ({
    q: "What does `git describe --tags` output?",
    o: ["Nearest tag + distance (v1.0-5-gabc123)", "Describe", "Tag distance", "Version"],
    c: 0,
    e: "git describe --tags. Nearest. Tag. Distance. Commit. Version. String.",
    de: "git describe --tags. v1.0-5-gabc123. 5 commits. Since. v1.0."
  }),
  (_i: number) => ({
    q: "What does `mount --bind` do?",
    o: ["Bind mount (same dir elsewhere)", "Bind mount", "Bind", "Same dir"],
    c: 0,
    e: "mount --bind. Same. Directory. Elsewhere. View. Path. Different.",
    de: "mount --bind /old /new. Same. Content. Two. Paths."
  }),
  (_i: number) => ({
    q: "What does `docker run --ip=172.17.0.10` set?",
    o: ["Static IP on bridge", "Static IP", "Container IP", "Bridge"],
    c: 0,
    e: "docker run --ip. Static. IP. Bridge. Network. Assign. Container.",
    de: "docker run --ip 172.17.0.10 --network bridge app. Static."
  }),
  (_i: number) => ({
    q: "What does `kubectl get pods -w` do?",
    o: ["Watch mode (stream updates)", "Watch", "Stream", "Live"],
    c: 0,
    e: "kubectl get pods -w. Watch. Stream. Updates. Live. Changes.",
    de: "kubectl get pods -w. Live. Updates. Ctrl+C. Stop."
  }),
  (_i: number) => ({
    q: "What does `git for-each-ref` list?",
    o: ["Refs with format", "For each ref", "Refs", "List refs"],
    c: 0,
    e: "git for-each-ref. Refs. Format. Template. List. Script. Custom.",
    de: "git for-each-ref --format='%(refname) %(objectname)'. Refs."
  }),
  (_i: number) => ({
    q: "What does `systemd-nspawn` provide?",
    o: ["Lightweight container (no Docker)", "Nspawn", "Container", "Systemd"],
    c: 0,
    e: "systemd-nspawn. Container. Lightweight. No. Docker. systemd. Boot.",
    de: "systemd-nspawn -D /path. Container. Chroot. Plus. Namespaces."
  }),
  (_i: number) => ({
    q: "What does `docker run --read-only --tmpfs /tmp` combine?",
    o: ["Read-only root + writable /tmp", "Read-only + tmpfs", "Immutable + tmp", "Security"],
    c: 0,
    e: "docker run --read-only. Root. Immutable. --tmpfs. /tmp. Writable. Temp.",
    de: "docker run --read-only --tmpfs /tmp app. Secure. Temp. Only."
  }),
  (_i: number) => ({
    q: "What does `kubectl get pods -o yaml` output?",
    o: ["Pod spec in YAML", "YAML output", "Full spec", "Manifest"],
    c: 0,
    e: "kubectl get -o yaml. Full. Spec. YAML. Manifest. Export.",
    de: "kubectl get pod mypod -o yaml. Full. YAML. Export."
  }),
  (_i: number) => ({
    q: "What does `git symbolic-ref HEAD refs/heads/main` do?",
    o: ["Sets HEAD to branch", "Symbolic ref", "HEAD", "Branch ref"],
    c: 0,
    e: "git symbolic-ref. HEAD. Branch. refs/heads/main. Point. Ref.",
    de: "git symbolic-ref HEAD refs/heads/main. HEAD. Points. main."
  }),
  (_i: number) => ({
    q: "What does `epoll` provide vs `select`?",
    o: ["Scalable I/O (O(1) vs O(n))", "Epoll", "Scalable", "I/O multiplex"],
    c: 0,
    e: "epoll. Scalable. O(1). select. O(n). Many. Fds. Linux.",
    de: "epoll_create. epoll_ctl. epoll_wait. Scalable. select. Poll. Replace."
  }),
  (_i: number) => ({
    q: "What does `docker run --group-add video` add?",
    o: ["Supplementary group to container", "Group add", "Supplementary", "Group"],
    c: 0,
    e: "docker run --group-add. Supplementary. Group. video. GPU. Access.",
    de: "docker run --group-add video app. GPU. /dev/dri. Access."
  }),
  (_i: number) => ({
    q: "What does `kubectl run --restart=Never` create?",
    o: ["Pod (not Deployment)", "Pod only", "Restart Never", "No controller"],
    c: 0,
    e: "kubectl run --restart=Never. Pod. No. Deployment. No. ReplicaSet.",
    de: "kubectl run test --image=busybox --restart=Never -- echo hi. Pod."
  }),
  (_i: number) => ({
    q: "What does `git stash show -p` show?",
    o: ["Stash diff (patch)", "Stash diff", "Patch", "Stash content"],
    c: 0,
    e: "git stash show -p. Stash. Diff. Patch. Content. Full.",
    de: "git stash show -p stash@{0}. Diff. Stash. Content."
  }),
  (_i: number) => ({
    q: "What does `vfs` storage driver use?",
    o: ["Copy-on-write (full copy)", "VFS", "Full copy", "No CoW"],
    c: 0,
    e: "vfs. Storage. Driver. No. CoW. Full. Copy. Slow. Compatible.",
    de: "vfs. overlay2. Better. vfs. No. CoW. Full. Copy. Legacy."
  }),
  (_i: number) => ({
    q: "What does `docker run --link legacy:alias` do?",
    o: ["Legacy link (deprecated, use network)", "Link", "Deprecated", "Service discovery"],
    c: 0,
    e: "docker run --link. Legacy. Deprecated. Service. Discovery. Network. Better.",
    de: "docker run --link db:mysql app. Deprecated. Use. Network."
  }),
  (_i: number) => ({
    q: "What does `kubectl annotate pod name key=value` add?",
    o: ["Annotation to resource", "Annotation", "Metadata", "Key-value"],
    c: 0,
    e: "kubectl annotate. Annotation. Metadata. Key. Value. Resource.",
    de: "kubectl annotate pod mypod description='prod'. Annotation."
  }),
  (_i: number) => ({
    q: "What does `git config core.autocrlf` control?",
    o: ["Line ending conversion (CRLF/LF)", "Autocrlf", "Line endings", "CRLF"],
    c: 0,
    e: "git config core.autocrlf. Line. Ending. Windows. CRLF. LF. Convert.",
    de: "core.autocrlf true. Checkout CRLF. Commit LF. Windows."
  }),
  (_i: number) => ({
    q: "What does `io_uring` improve over traditional async I/O?",
    o: ["Kernel-user ring buffer (less syscalls)", "io_uring", "Ring buffer", "Async I/O"],
    c: 0,
    e: "io_uring. Ring. Buffer. Kernel. User. Less. Syscalls. Fast.",
    de: "io_uring. Shared. Ring. Submit. Complete. Batch. Syscalls."
  }),
  (_i: number) => ({
    q: "What does `docker run --dns 8.8.8.8` set?",
    o: ["DNS server for container", "DNS", "Resolver", "Container DNS"],
    c: 0,
    e: "docker run --dns. DNS. Server. Container. Resolver. 8.8.8.8.",
    de: "docker run --dns 8.8.8.8 app. Resolver. Override."
  }),
  (_i: number) => ({
    q: "What does `kubectl label pod name env=prod` add?",
    o: ["Label to resource", "Label", "Selector", "Key-value"],
    c: 0,
    e: "kubectl label. Label. Resource. env=prod. Selector. Filter.",
    de: "kubectl label pod mypod env=prod. Label. Selector."
  }),
  (_i: number) => ({
    q: "What does `git gc --aggressive` do?",
    o: ["Aggressive garbage collection", "Aggressive gc", "Optimize", "Repack"],
    c: 0,
    e: "git gc --aggressive. Repack. Optimize. More. CPU. Smaller. Repo.",
    de: "git gc --aggressive. Repack. Delta. Optimize. Space."
  }),
  (_i: number) => ({
    q: "What does `signalfd` allow?",
    o: ["Signals as file descriptor (pollable)", "Signalfd", "Signal fd", "Pollable"],
    c: 0,
    e: "signalfd. Signal. File. Descriptor. Poll. select. epoll. Async.",
    de: "signalfd. Signal. Fd. read(). No. Handler. Async. Signal."
  }),
  (_i: number) => ({
    q: "What does `docker run --stop-signal=SIGQUIT` set?",
    o: ["Signal sent on stop", "Stop signal", "Stop", "Signal"],
    c: 0,
    e: "docker run --stop-signal. Signal. Stop. SIGTERM. Default. Custom.",
    de: "docker run --stop-signal=SIGQUIT app. Graceful. Quit."
  }),
  (_i: number) => ({
    q: "What does `kubectl get all` show?",
    o: ["Pods, services, deployments, etc", "All resources", "Get all", "Common"],
    c: 0,
    e: "kubectl get all. Pods. Services. Deployments. ReplicaSets. Common.",
    de: "kubectl get all. Most. Resources. Not. All. Namespace."
  }),
  (_i: number) => ({
    q: "What does `git update-index --assume-unchanged file` do?",
    o: ["Ignores local changes (assume unchanged)", "Assume unchanged", "Ignore changes", "Index"],
    c: 0,
    e: "git update-index --assume-unchanged. Ignore. Local. Changes. Config. Track.",
    de: "git update-index --assume-unchanged config.local. Local. Override."
  }),
  (_i: number) => ({
    q: "What does `userfaultfd` enable?",
    o: ["User-space page fault handling", "Userfaultfd", "Page fault", "User space"],
    c: 0,
    e: "userfaultfd. User. Space. Page. Fault. Handler. Migrate. Live.",
    de: "userfaultfd. Live. Migration. Checkpoint. User. Fault. Handler."
  }),
  (_i: number) => ({
    q: "What does `docker run --pull=always` do?",
    o: ["Always pull before run", "Pull always", "Fresh image", "No cache"],
    c: 0,
    e: "docker run --pull=always. Always. Pull. Fresh. Image. No. Local.",
    de: "docker run --pull=always nginx. Latest. Registry. Always."
  }),
  (_i: number) => ({
    q: "What does `kubectl replace -f file.yaml --force` do?",
    o: ["Recreates resource (delete+create)", "Replace force", "Recreate", "Force"],
    c: 0,
    e: "kubectl replace --force. Delete. Create. Recreate. Resource. Pod.",
    de: "kubectl replace -f pod.yaml --force. Recreate. Pod."
  }),
  (_i: number) => ({
    q: "What does `git sparse-checkout` enable?",
    o: ["Partial checkout (subset of repo)", "Sparse checkout", "Partial", "Subset"],
    c: 0,
    e: "git sparse-checkout. Partial. Checkout. Subset. Large. Repo. Monorepo.",
    de: "git sparse-checkout init. git sparse-checkout set dir1 dir2. Partial."
  }),
  (_i: number) => ({
    q: "What does `cgroups v2` unify?",
    o: ["Single hierarchy (vs v1 multiple)", "Cgroups v2", "Unified", "Single hierarchy"],
    c: 0,
    e: "cgroups v2. Single. Hierarchy. Unified. /sys/fs/cgroup. v1. Multiple.",
    de: "cgroups v2. Unified. systemd. Uses. Single. Tree."
  }),
  (_i: number) => ({
    q: "What does `docker run --platform linux/arm64` specify?",
    o: ["Target platform (emulation)", "Platform", "Arch", "ARM64"],
    c: 0,
    e: "docker run --platform. Target. linux/arm64. amd64. Emulation. QEMU.",
    de: "docker run --platform linux/arm64 app. ARM. Emulation. Cross."
  }),
  (_i: number) => ({
    q: "What does `kubectl wait --for=condition=ready pod/name` do?",
    o: ["Waits for pod ready", "Wait", "Condition", "Block"],
    c: 0,
    e: "kubectl wait. Condition. Ready. Block. Timeout. Deployment.",
    de: "kubectl wait --for=condition=ready pod/mypod --timeout=60s."
  }),
  (_i: number) => ({
    q: "What does `git archive` create?",
    o: ["Archive of tree (tar, zip)", "Archive", "Export", "Tar zip"],
    c: 0,
    e: "git archive. Tree. Tar. Zip. Export. No. .git. Snapshot.",
    de: "git archive -o repo.tar HEAD. Tar. Export. Release."
  }),
  (_i: number) => ({
    q: "What does `eBPF` allow in kernel?",
    o: ["Safe program injection (sandboxed)", "eBPF", "Kernel program", "Sandboxed"],
    c: 0,
    e: "eBPF. Kernel. Program. Sandboxed. Verifier. Trace. Network. Security.",
    de: "eBPF. BPF. Bytecode. Verifier. Safe. Tracing. XDP. Cilium."
  }),
  (_i: number) => ({
    q: "What does `docker run --detach-keys` change?",
    o: ["Key sequence to detach (Ctrl+P,Q)", "Detach keys", "Detach", "Keys"],
    c: 0,
    e: "docker run --detach-keys. Sequence. Detach. Ctrl+P,Q. Custom.",
    de: "docker run -it --detach-keys='ctrl-a,d' app. Custom. Detach."
  }),
  (_i: number) => ({
    q: "What does `kubectl explain pod.spec` show?",
    o: ["Schema documentation", "Explain", "Schema", "Documentation"],
    c: 0,
    e: "kubectl explain. Schema. Documentation. Field. Type. Nested.",
    de: "kubectl explain pod.spec. Schema. Docs. API. Reference."
  }),
  (_i: number) => ({
    q: "What does `git replace` create?",
    o: ["Virtual replacement (without rewrite)", "Replace", "Virtual", "No rewrite"],
    c: 0,
    e: "git replace. Virtual. Replacement. Commit. No. History. Rewrite.",
    de: "git replace old_commit new_commit. Virtual. Graft. No. Rewrite."
  }),
  (_i: number) => ({
    q: "What does `landlock` restrict?",
    o: ["File access (path-based sandbox)", "Landlock", "File sandbox", "Path"],
    c: 0,
    e: "landlock. File. Access. Path. Sandbox. Restrict. Kernel. 5.13.",
    de: "landlock. Path. Based. Restrict. read. write. Sandbox."
  }),
  (_i: number) => ({
    q: "What does `docker run --entrypoint cmd` override?",
    o: ["Container entrypoint", "Entrypoint", "Override", "Main process"],
    c: 0,
    e: "docker run --entrypoint. Override. ENTRYPOINT. Image. Main. Process.",
    de: "docker run --entrypoint /bin/bash nginx. Override. Shell."
  }),
  (_i: number) => ({
    q: "What does `kubectl get pods -o json | jq` enable?",
    o: ["JSON processing with jq", "JSON jq", "Process output", "Filter"],
    c: 0,
    e: "kubectl -o json. jq. Process. Filter. Extract. JSON.",
    de: "kubectl get pods -o json | jq '.items[].metadata.name'. Extract."
  }),
  (_i: number) => ({
    q: "What does `git range-diff a..b c..d` compare?",
    o: ["Two commit ranges", "Range diff", "Compare ranges", "Rebase diff"],
    c: 0,
    e: "git range-diff. Two. Ranges. Compare. Rebase. Before. After.",
    de: "git range-diff main..feature main..feature-rebased. Rebase. Compare."
  }),
  (_i: number) => ({
    q: "What does `rootless` Docker use?",
    o: ["User namespace (no root daemon)", "Rootless", "User ns", "No root"],
    c: 0,
    e: "rootless. Docker. User. Namespace. No. Root. Daemon. Security.",
    de: "rootless. dockerd. User. Unprivileged. User. Namespace."
  }),
  (_i: number) => ({
    q: "What does `docker run --uts=host` share?",
    o: ["Hostname (UTS namespace)", "UTS", "Hostname", "Namespace"],
    c: 0,
    e: "docker run --uts=host. Hostname. UTS. Namespace. Same. Host.",
    de: "docker run --uts=host app. hostname. Same. Host."
  }),
  (_i: number) => ({
    q: "What does `kubectl set image deployment/name container=img` do?",
    o: ["Updates container image", "Set image", "Update image", "Rolling"],
    c: 0,
    e: "kubectl set image. Update. Container. Image. Deployment. Rolling.",
    de: "kubectl set image deployment/myapp nginx=nginx:1.21. Update."
  }),
  (_i: number) => ({
    q: "What does `git rebase --exec 'make test'` do?",
    o: ["Runs command after each commit", "Rebase exec", "Test each", "Exec"],
    c: 0,
    e: "git rebase --exec. Command. Each. Commit. Test. Verify.",
    de: "git rebase --exec 'make test' main. Test. Each. Commit."
  }),
  (_i: number) => ({
    q: "What does `memfd_create` create?",
    o: ["Anonymous file (no disk)", "Memfd", "Anonymous", "RAM file"],
    c: 0,
    e: "memfd_create. Anonymous. File. RAM. No. Disk. Secret. Exec.",
    de: "memfd_create. Anonymous. fd. RAM. No. Path. Secure."
  }),
  (_i: number) => ({
    q: "What does `docker run --mount type=bind` specify?",
    o: ["Bind mount type", "Mount type", "Bind", "Explicit mount"],
    c: 0,
    e: "docker run --mount. Type. bind. volume. tmpfs. Explicit. Options.",
    de: "docker run --mount type=bind,source=/host,target=/app app."
  }),
  (_i: number) => ({
    q: "What does `kubectl rollout restart deployment/name` do?",
    o: ["Restarts deployment (rolling)", "Rollout restart", "Restart", "Rolling"],
    c: 0,
    e: "kubectl rollout restart. Restart. Pods. Rolling. New. Deployment.",
    de: "kubectl rollout restart deployment/myapp. Rolling. Restart."
  }),
  (_i: number) => ({
    q: "What does `git submodule update --init --recursive` do?",
    o: ["Inits and updates all submodules", "Submodule init", "Recursive", "All submodules"],
    c: 0,
    e: "git submodule update --init --recursive. Init. Update. All. Nested. Submodules.",
    de: "git submodule update --init --recursive. Clone. All. Nested."
  }),
  (_i: number) => ({
    q: "What does `BPF_MAP_TYPE` store?",
    o: ["Key-value data (eBPF)", "BPF map", "Key-value", "eBPF data"],
    c: 0,
    e: "BPF_MAP_TYPE. Map. Key. Value. eBPF. Persist. Share. Data.",
    de: "BPF map. Hash. Array. Per-CPU. eBPF. Kernel. User. Share."
  }),
  (_i: number) => ({
    q: "What does `docker run --device-cgroup-rule` add?",
    o: ["Device access rule (cgroup)", "Device rule", "Cgroup rule", "Device access"],
    c: 0,
    e: "docker run --device-cgroup-rule. Device. Access. cgroup. Rule. Allow.",
    de: "docker run --device-cgroup-rule 'c 1:3 rwm' app. Device. Rule."
  }),
  (_i: number) => ({
    q: "What does `kubectl create secret generic name --from-literal=key=value` do?",
    o: ["Creates Secret from literal", "Secret from literal", "Create secret", "Literal"],
    c: 0,
    e: "kubectl create secret. From-literal. Key. Value. Generic. Opaque.",
    de: "kubectl create secret generic mysecret --from-literal=pass=secret."
  }),
  (_i: number) => ({
    q: "What does `git worktree prune` do?",
    o: ["Removes stale worktree refs", "Worktree prune", "Prune", "Clean"],
    c: 0,
    e: "git worktree prune. Remove. Stale. Worktree. Refs. Clean. Deleted.",
    de: "git worktree prune. Remove. Orphaned. Worktree. Refs."
  }),
  (_i: number) => ({
    q: "What does `fanotify` monitor?",
    o: ["File access (inotify for access)", "Fanotify", "File access", "Monitor"],
    c: 0,
    e: "fanotify. File. Access. Monitor. inotify. Modify. fanotify. Access.",
    de: "fanotify. FAN_ACCESS. FAN_MODIFY. Antivirus. Audit."
  }),
  (_i: number) => ({
    q: "What does `docker run --oom-score-adj=-500` set?",
    o: ["OOM killer preference (less likely)", "OOM score", "OOM adj", "Protect"],
    c: 0,
    e: "docker run --oom-score-adj. OOM. Killer. Preference. -500. Protect.",
    de: "docker run --oom-score-adj=-500 app. Less. Likely. OOM. Kill."
  }),
  (_i: number) => ({
    q: "What does `kubectl get pods --sort-by=.metadata.creationTimestamp` do?",
    o: ["Sorts by creation time", "Sort by", "Sort", "Creation time"],
    c: 0,
    e: "kubectl get --sort-by. Sort. Field. creationTimestamp. Custom. Order.",
    de: "kubectl get pods --sort-by=.metadata.creationTimestamp. Sort."
  }),
  (_i: number) => ({
    q: "What does `git merge --no-ff` force?",
    o: ["Merge commit (no fast-forward)", "No ff", "Merge commit", "Always merge"],
    c: 0,
    e: "git merge --no-ff. No. Fast-forward. Merge. Commit. Always. Branch.",
    de: "git merge --no-ff feature. Merge. Commit. Preserve. Branch."
  }),
  (_i: number) => ({
    q: "What does `cgroup` `memory.max` set?",
    o: ["Hard memory limit", "Memory max", "Hard limit", "OOM"],
    c: 0,
    e: "memory.max. Hard. Limit. cgroup. v2. Exceed. OOM. Kill.",
    de: "echo 512M > memory.max. Hard. Limit. cgroups v2."
  }),
  (_i: number) => ({
    q: "What does `docker run --publish-all` do?",
    o: ["Publishes all EXPOSE ports", "Publish all", "All ports", "Expose"],
    c: 0,
    e: "docker run -P. Publish. All. EXPOSE. Ports. Random. Host.",
    de: "docker run -P nginx. All. EXPOSE. Random. Host. Ports."
  }),
  (_i: number) => ({
    q: "What does `kubectl get pods --show-labels` add?",
    o: ["Labels column", "Show labels", "Labels", "Display"],
    c: 0,
    e: "kubectl get pods --show-labels. Labels. Column. Display. All.",
    de: "kubectl get pods --show-labels. LABELS. Column."
  }),
  (_i: number) => ({
    q: "What does `git diff --cached` show?",
    o: ["Staged changes (index vs HEAD)", "Cached", "Staged", "Index"],
    c: 0,
    e: "git diff --cached. Staged. Index. HEAD. Commit. Preview.",
    de: "git diff --cached. Staged. Changes. Before. Commit."
  }),
  (_i: number) => ({
    q: "What does `perf` trace?",
    o: ["CPU, syscalls, hardware events", "Perf", "Trace", "Profiling"],
    c: 0,
    e: "perf. Trace. CPU. Syscalls. Hardware. Events. Profiling. Linux.",
    de: "perf record. perf report. perf stat. CPU. Flame. Graph."
  }),
  (_i: number) => ({
    q: "What does `docker run --hostname=myhost` set?",
    o: ["Container hostname", "Hostname", "Container hostname", "UTS"],
    c: 0,
    e: "docker run --hostname. Container. Hostname. UTS. Namespace. Set.",
    de: "docker run --hostname=myapp app. hostname. myapp."
  }),
  (_i: number) => ({
    q: "What does `kubectl cp pod:path local` do?",
    o: ["Copies file from pod", "Cp", "Copy", "Pod file"],
    c: 0,
    e: "kubectl cp. Copy. Pod. File. Local. Or. Reverse.",
    de: "kubectl cp mypod:/app/log.txt ./log.txt. Copy. From. Pod."
  }),
  (_i: number) => ({
    q: "What does `git config --local` set?",
    o: ["Repo-only config (.git/config)", "Local config", "Repo config", "Scope"],
    c: 0,
    e: "git config --local. Repo. Only. .git/config. Override. Global.",
    de: "git config --local user.email local@repo. Repo. Specific."
  }),
  (_i: number) => ({
    q: "What does `prlimit` set?",
    o: ["Process resource limits", "Prlimit", "Limits", "Per-process"],
    c: 0,
    e: "prlimit. Process. Limits. nofile. nproc. Running. Process. Change.",
    de: "prlimit --pid=1234 --nofile=65535. Limit. Running. Process."
  }),
];
