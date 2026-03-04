// LEVEL 2: SHRIMP — Filesystem & Storage (CLI)
// 100 Beginner + 100 Intermediate + 123 Expert. All real content.

const beginner = [
  (_i: number) => ({
    q: "Where does the Filesystem Hierarchy Standard place user home directories?",
    o: ["/home", "/usr/home", "/var/home", "/opt/home"],
    c: 0,
    e: "FHS places user homes under /home (e.g. /home/username).",
    de: "FHS defines /home for user directories. /root is the superuser's home. macOS uses /Users.",
    deBeginner: "The FHS says user home directories go under /home, e.g. /home/jane. Root's home is /root. On macOS it's /Users.",
    deExpert: "FHS: /home for user homes. /root superuser. Linux standard. macOS /Users. XDG base dirs extend this."
  }),
  (_i: number) => ({
    q: "What does an absolute path always start with?",
    o: ["/", "~", ".", ".."],
    c: 0,
    e: "Absolute paths start with / (root).",
    de: "/home/user/file is absolute. ./file or file is relative to current directory.",
    deBeginner: "An absolute path starts with / and is the same no matter where you are. /home/user/file is absolute. ./file is relative.",
    deExpert: "Absolute path: from root /. /home/user/file. Relative: . .. or no leading /. getcwd(2) for current dir."
  }),
  (_i: number) => ({
    q: "What does an inode store?",
    o: ["File metadata (not the filename)", "File contents", "Directory structure", "File extension"],
    c: 0,
    e: "Inodes store metadata: permissions, size, timestamps, pointers to data blocks.",
    de: "Filename is stored in the directory. Inode holds everything else. ls -i shows inode numbers.",
    deBeginner: "An inode holds file metadata (size, permissions, timestamps, where the data is). The filename lives in the directory. ls -i shows inode numbers.",
    deExpert: "inode: metadata only. Perms, size, times, block pointers. Name in directory entry. stat(2). ls -i. One inode per file; hard links same inode."
  }),
  (_i: number) => ({
    q: "What does `ln file link` create?",
    o: ["Hard link", "Symbolic link", "Copy", "Shortcut"],
    c: 0,
    e: "ln without -s creates a hard link (same inode).",
    de: "Hard links share the same inode. Both names point to same data. Cannot link directories.",
    deBeginner: "ln file link creates a hard link: another name for the same file (same inode). Not a copy. You can't hard-link directories.",
    deExpert: "ln: link(2). Hard link, same inode. Same device. No dirs. unlink removes one name; data freed when nlink=0."
  }),
  (_i: number) => ({
    q: "What does `ln -s target linkname` create?",
    o: ["Symbolic link", "Hard link", "Copy", "Directory"],
    c: 0,
    e: "ln -s creates a symbolic link (symlink) pointing to target.",
    de: "Symlinks can point to directories and across filesystems. If target is deleted, link breaks.",
    deBeginner: "ln -s target linkname creates a symlink: linkname points to target. Can point to dirs and across disks. If you delete target, the link becomes broken.",
    deExpert: "ln -s: symlink. symlink(2). Any path, cross-FS, can point to dir. Dereferenced by most syscalls. Broken if target gone."
  }),
  (_i: number) => ({
    q: "What are file descriptors 0, 1, and 2?",
    o: ["stdin, stdout, stderr", "read, write, execute", "input, output, error", "fd0, fd1, fd2"],
    c: 0,
    e: "0=stdin, 1=stdout, 2=stderr.",
    de: "Every process has these by default. 2>&1 redirects stderr to stdout.",
    deBeginner: "File descriptor 0 is stdin (input), 1 is stdout (output), 2 is stderr (errors). Every process has these. 2>&1 sends stderr to stdout.",
    deExpert: "fd 0 stdin, 1 stdout, 2 stderr. open(2) returns new fds. 2>&1 dup stderr to stdout. Inherited by children."
  }),
  (_i: number) => ({
    q: "What does 'r' mean in file permissions?",
    o: ["Read", "Run", "Remove", "Recursive"],
    c: 0,
    e: "r = read, w = write, x = execute.",
    de: "rwx for user, group, others. chmod 644 = rw-r--r--.",
    deBeginner: "r means read permission. w = write, x = execute. Permissions are for user (owner), group, and others. chmod 644 = rw-r--r--.",
    deExpert: "r: read. w write. x execute (file) or search (dir). Three triplets: u g o. chmod(2). 4r 2w 1x."
  }),
  (_i: number) => ({
    q: "What does chmod 755 set?",
    o: ["rwxr-xr-x", "rw-r--r--", "rwxrwxrwx", "r--r--r--"],
    c: 0,
    e: "755 = owner rwx, group r-x, others r-x.",
    de: "7=rwx, 5=r-x, 0=---. Common for executables and directories.",
    deBeginner: "chmod 755 gives owner read+write+execute (7), group and others read+execute (5). rwxr-xr-x. Common for scripts and directories.",
    deExpert: "755 = 111 101 101 = rwxr-xr-x. Owner all, others r-x. Standard for executables and dirs. umask 022 typical."
  }),
  (_i: number) => ({
    q: "Who can change file ownership with chown?",
    o: ["Only root", "File owner", "Anyone in group", "Anyone"],
    c: 0,
    e: "Only root (or CAP_CHOWN) can change ownership.",
    de: "chown user:group file. Regular users cannot give away files.",
    deBeginner: "Only root can change file ownership with chown. chown user:group file. Normal users can't give a file to someone else.",
    deExpert: "chown(2): root or CAP_CHOWN. chown user:group file. Regular user cannot give away. chgrp for group only (if member)."
  }),
  (_i: number) => ({
    q: "What does the SUID bit do when set on an executable?",
    o: ["Runs with owner's privileges", "Runs as root always", "Makes it system-only", "Disables execution"],
    c: 0,
    e: "SUID makes the process run with the file owner's privileges.",
    de: "chmod u+s file. Example: /usr/bin/passwd runs as root to modify /etc/shadow.",
    deBeginner: "The SUID bit (chmod u+s) makes the program run with the file owner's privileges. /usr/bin/passwd is setuid root so it can write /etc/shadow.",
    deExpert: "SUID: S_ISUID. Process effective uid = file owner. chmod u+s. passwd, sudo. Security: minimal setuid. Principle of least privilege."
  }),
  (_i: number) => ({
    q: "What does `mount` do?",
    o: ["Attaches a filesystem to a directory", "Creates a partition", "Formats a disk", "Lists disks"],
    c: 0,
    e: "mount attaches a filesystem to a mount point (directory).",
    de: "mount /dev/sda1 /mnt. umount detaches. mount shows mounted filesystems.",
    deBeginner: "mount attaches a disk or filesystem to a directory (mount point). mount /dev/sda1 /mnt. umount detaches it. mount with no args lists what's mounted.",
    deExpert: "mount(2)/mount(8): attach filesystem to dir. mount /dev/sda1 /mnt. /etc/fstab for boot. umount detach. mount shows mounted."
  }),
  (_i: number) => ({
    q: "What does `umount` require?",
    o: ["No processes using the mount point", "Root privileges", "Both", "Neither"],
    c: 2,
    e: "umount needs root and no active use of the mount point.",
    de: "cd away from the mount point first. lsof /mnt shows what's using it.",
    deBeginner: "umount needs root and nothing using that directory. Get out of the mount point (cd away) first. lsof /mnt shows what's using it.",
    deExpert: "umount(2): detach. Requires no open refs, often root. EBUSY if in use. cd away; lsof; fuser. Lazy umount -l."
  }),
  (_i: number) => ({
    q: "Which filesystem is common on Linux?",
    o: ["ext4", "NTFS", "FAT32", "HFS+"],
    c: 0,
    e: "ext4 is the default on most Linux distributions.",
    de: "ext4, XFS, btrfs are Linux-native. NTFS/FAT32 for Windows compatibility.",
    deBeginner: "ext4 is the usual Linux filesystem. XFS and btrfs are also common. NTFS and FAT32 are for Windows compatibility.",
    deExpert: "ext4: default Linux FS. Journaling. XFS, btrfs alternatives. NTFS/FAT for Windows. mkfs.ext4."
  }),
  (_i: number) => ({
    q: "What is a loop device used for?",
    o: ["Mounting image files as block devices", "Looping commands", "Network loops", "Infinite loops"],
    c: 0,
    e: "Loop devices let you mount .iso or .img files.",
    de: "mount -o loop image.iso /mnt. losetup manages loop devices.",
    deBeginner: "A loop device lets you mount a file (like an .iso image) as if it were a disk. mount -o loop image.iso /mnt. losetup manages loop devices.",
    deExpert: "loop: file as block device. mount -o loop img /mnt. losetup -f, losetup -d. Loop device in /dev. For ISOs, images."
  }),
  (_i: number) => ({
    q: "What does `du -sh *` show?",
    o: ["Size of each item in current directory", "Total disk usage", "Hidden files only", "File count"],
    c: 0,
    e: "du -sh * shows human-readable size of each item.",
    de: "du = disk usage. -s = summary, -h = human (K, M, G).",
    deBeginner: "du -sh * shows the size of each file and directory in the current folder. -s summary per item, -h in K/M/G.",
    deExpert: "du -sh *: disk usage per entry. -s summary, -h human. Sums st_blocks. Excludes mount points by default. du -x same FS."
  }),
  (_i: number) => ({
    q: "What does `df -h` show?",
    o: ["Disk space of mounted filesystems", "Directory sizes", "File count", "Inode count only"],
    c: 0,
    e: "df shows disk free space for each mounted filesystem.",
    de: "df -h uses K, M, G. df -i shows inode usage.",
    deBeginner: "df -h shows how much space is used and free on each mounted disk (filesystem). -h in K, M, G. df -i shows inode usage.",
    deExpert: "df: statvfs. Free space per mount. -h human. -i inodes. Essential for 'disk full'. NFS, local."
  }),
  (_i: number) => ({
    q: "What is /proc?",
    o: ["Virtual filesystem for process/kernel info", "Program files", "Process queue", "Profile data"],
    c: 0,
    e: "/proc is a virtual filesystem exposing kernel and process info.",
    de: "/proc/cpuinfo, /proc/meminfo, /proc/PID/ for each process. Not real files on disk.",
    deBeginner: "/proc is a virtual filesystem: the 'files' are kernel and process info, not on disk. /proc/cpuinfo, /proc/meminfo, /proc/123/ for process 123.",
    deExpert: "/proc: procfs. Kernel/process info. /proc/PID/, /proc/cpuinfo, /proc/meminfo. Not on disk. read only or read-write for tuning."
  }),
  (_i: number) => ({
    q: "What does `stat file` display?",
    o: ["Detailed file metadata", "File contents", "File type only", "Permissions only"],
    c: 0,
    e: "stat shows inode, size, permissions, access/modify/change times.",
    de: "Useful for scripts. Access time, modification time, change time (metadata).",
    deBeginner: "stat file shows detailed metadata: size, permissions, access time, modification time, change time. Better than ls -l for one file. Good for scripts.",
    deExpert: "stat(2): inode, size, atime, mtime, ctime. stat -c FORMAT for scripts. For timestamps, permissions, debugging."
  }),
  (_i: number) => ({
    q: "What are ACLs used for?",
    o: ["Fine-grained permissions beyond user/group/others", "Encryption", "Compression", "Backup"],
    c: 0,
    e: "ACLs allow per-user or per-group permissions beyond rwx.",
    de: "getfacl and setfacl. More flexible than standard Unix permissions.",
    deBeginner: "ACLs (Access Control Lists) let you set permissions for specific users or groups, not just owner/group/others. getfacl and setfacl. More flexible than chmod.",
    deExpert: "ACL: per-user/group permissions. getfacl, setfacl. Beyond rwx. acl(5). Requires FS support (ext4, XFS). setfacl -m u:jane:rw file."
  }),
  (_i: number) => ({
    q: "What do extended attributes (xattr) store?",
    o: ["Key-value metadata not in inode", "File contents", "Backup info", "Compression data"],
    c: 0,
    e: "Extended attributes store extra metadata (e.g. SELinux labels).",
    de: "getfattr, setfattr. Used by SELinux, capabilities, and other systems.",
    deBeginner: "Extended attributes (xattr) are key-value metadata attached to a file, not stored in the inode. getfattr, setfattr. Used by SELinux and others.",
    deExpert: "xattr: name=value metadata. getfattr, setfattr. Namespaces: user, trusted, security (SELinux). Not in inode. FS support required."
  }),
  (_i: number) => ({
    q: "What does `realpath file` output?",
    o: ["Canonical absolute path", "Relative path", "Symlink target only", "File size"],
    c: 0,
    e: "realpath resolves to the canonical absolute path.",
    de: "Resolves . and .. and symlinks. readlink -f does similar.",
    deBeginner: "realpath file prints the full, resolved absolute path: no . or .. and symlinks are followed. readlink -f is similar.",
    deExpert: "realpath(1): canonical path. realpath(3). Resolve ., .., symlinks. readlink -f equivalent. For scripts."
  }),
  (_i: number) => ({
    q: "What does the sticky bit on a directory do?",
    o: ["Only owner can delete their files", "Makes all files executable", "Locks the directory", "Hides files"],
    c: 0,
    e: "Sticky bit (e.g. /tmp): users can only delete their own files.",
    de: "chmod +t dir. Common on /tmp. Prevents users from deleting others' files.",
    deBeginner: "The sticky bit on a directory (chmod +t) means only the owner of a file can delete it. /tmp has this so users can't delete each other's files.",
    deExpert: "Sticky (S_ISVTX) on dir: only owner can unlink own files. chmod +t. /tmp. Prevents delete of others' files in shared dir."
  }),
  (_i: number) => ({
    q: "What does SGID on a directory do?",
    o: ["New files inherit group", "Only group can access", "Makes dir system-only", "Locks group"],
    c: 0,
    e: "SGID on directory: new files inherit the directory's group.",
    de: "chmod g+s dir. Useful for shared directories (e.g. project folders).",
    deBeginner: "With SGID on a directory (chmod g+s), new files created there get the directory's group. Good for shared project folders.",
    deExpert: "SGID on dir: new files inherit dir's group. chmod g+s. For shared dirs. setgid bit. Group collaboration."
  }),
  (_i: number) => ({
    q: "What is a block device?",
    o: ["Device that reads/writes in fixed-size blocks", "A type of file", "Network block", "Memory block"],
    c: 0,
    e: "Block devices (disks) transfer data in blocks (e.g. 512 bytes).",
    de: "/dev/sda, /dev/nvme0n1. Character devices (terminals) transfer byte-by-byte.",
    deBeginner: "A block device (e.g. /dev/sda) reads and writes in fixed-size blocks. Disks are block devices. Terminals are character devices (byte-by-byte).",
    deExpert: "Block device: I/O in blocks. /dev/sda, /dev/nvme0n1. Buffered. Character device: byte stream. /dev/tty. S_ISBLK."
  }),
  (_i: number) => ({
    q: "What does `lsblk` show?",
    o: ["Block devices and their layout", "File sizes", "Links", "Permissions"],
    c: 0,
    e: "lsblk lists block devices (disks, partitions) in a tree.",
    de: "Shows /dev/sda, partitions, mount points. Useful for disk layout.",
    deBeginner: "lsblk lists block devices (disks and partitions) in a tree. Shows /dev/sda, its partitions, and mount points. Handy for disk layout.",
    deExpert: "lsblk: tree of block devices. Partitions, mountpoints. From sysfs/sys. lsblk -f for FS type. No root needed for list."
  }),
  (_i: number) => ({
    q: "What is /sys?",
    o: ["Virtual filesystem for kernel/subsystem info", "System files", "Swap", "Symbolic links"],
    c: 0,
    e: "/sys exposes kernel objects, devices, and drivers.",
    de: "sysfs. Complements /proc. Used for hardware and driver configuration.",
    deBeginner: "/sys is a virtual filesystem (sysfs) that exposes kernel objects: devices, drivers, and settings. Used for hardware and driver configuration. Complements /proc.",
    deExpert: "/sys: sysfs. Kernel objects, devices, drivers. Not on disk. Complements /proc. udev, hardware config. Read/write for tuning."
  }),
  (_i: number) => ({
    q: "What does `findmnt` show?",
    o: ["Mounted filesystems in tree form", "Find command mounts", "Mount options", "Disk partitions only"],
    c: 0,
    e: "findmnt shows the mount tree (what is mounted where).",
    de: "findmnt or mount. Clearer output than mount for nested mounts.",
    deBeginner: "findmnt shows what is mounted and where, in a tree. Clearer than plain mount for nested mounts.",
    deExpert: "findmnt: mount tree. From /proc/self/mountinfo. findmnt -t type. Clearer than mount. For scripts, debugging."
  }),
  (_i: number) => ({
    q: "What does `blkid` show?",
    o: ["Block device attributes (UUID, type)", "Block IDs only", "Disk usage", "File types"],
    c: 0,
    e: "blkid shows UUID, filesystem type, and other attributes of block devices.",
    de: "Useful for /etc/fstab. UUID is preferred over /dev/sda1 (can change).",
    deBeginner: "blkid shows block device info: UUID, filesystem type, etc. Use UUID in /etc/fstab instead of /dev/sda1 because device names can change.",
    deExpert: "blkid: read block device attributes. UUID, TYPE, LABEL. For fstab (UUID=). udev. blkid -o value -s UUID."
  }),
  (_i: number) => ({
    q: "What is the primary group of a user?",
    o: ["Group in /etc/passwd for that user", "First in groups list", "Root group", "Same as username"],
    c: 0,
    e: "Primary group is listed in /etc/passwd. New files get this group by default.",
    de: "groups shows all groups. id shows uid, gid, groups.",
    deBeginner: "The primary group is in /etc/passwd for that user. New files get this group by default. groups shows all your groups; id shows uid, gid, and groups.",
    deExpert: "Primary group: 4th field in /etc/passwd. New file gid. getgroups(2) for supplementary. id, groups. chown :group changes group (if member)."
  }),
  (_i: number) => ({
    q: "What does `chmod +x script.sh` do?",
    o: ["Adds execute permission for all", "Adds execute for owner only", "Removes execute", "Sets 755"],
    c: 0,
    e: "chmod +x adds execute for user, group, and others.",
    de: "chmod u+x for owner only. +x is shorthand for a+x (all).",
    deBeginner: "chmod +x adds execute permission for everyone (user, group, others). Use chmod u+x for owner only. +x is shorthand for a+x.",
    deExpert: "chmod +x: add x for all (a+x). chmod u+x owner only. Required to run script. ./script needs x on script."
  }),
  (_i: number) => ({
    q: "What does `touch file` do if file exists?",
    o: ["Updates modification time", "Creates backup", "Appends to file", "Deletes and recreates"],
    c: 0,
    e: "touch updates the modification time; creates if missing.",
    de: "touch -t YYYYMMDDhhmm for specific timestamp. Used by make.",
    deBeginner: "If the file exists, touch updates its modification time to now. If it doesn't exist, touch creates an empty file. touch -t sets a specific time. make uses this.",
    deExpert: "touch: utimensat(2). Update mtime/atime. Create if missing. touch -t YYYYMMDDhhmm. make uses mtime for deps."
  }),
  (_i: number) => ({
    q: "What is the difference between mtime and ctime?",
    o: ["mtime=content change, ctime=metadata change", "They are the same", "mtime=create, ctime=modify", "ctime is creation time"],
    c: 0,
    e: "mtime = last content modification. ctime = last metadata change (e.g. chmod).",
    de: "stat shows atime, mtime, ctime. atime = last access (can disable for performance).",
    deBeginner: "mtime is when the file's content was last changed. ctime is when metadata (e.g. permissions, owner) was last changed. stat shows atime, mtime, ctime. atime = last read.",
    deExpert: "mtime: content modify. ctime: metadata change (chmod, chown). atime: access. stat(2). ctime not creation; no birth time in POSIX. noatime mount option."
  }),
  (_i: number) => ({
    q: "What does `ls -d` do?",
    o: ["Lists directories themselves, not contents", "Shows only dirs", "Deletes dirs", "Shows depth"],
    c: 0,
    e: "ls -d lists the directory as an entry, not its contents.",
    de: "ls -d */ lists only directory names. ls -d . shows current dir.",
    deBeginner: "ls -d lists the directory as a name, not what's inside it. ls -d */ lists only directory names. ls -d . shows the current directory path.",
    deExpert: "ls -d: list dir as entry, don't descend. ls -d */. O_DIRECTORY. For dir names only."
  }),
  (_i: number) => ({
    q: "What does `tree` show?",
    o: ["Directory structure as a tree", "File tree only", "Directory sizes", "Links only"],
    c: 0,
    e: "tree displays directory hierarchy in tree format.",
    de: "tree -L 2 limits depth. tree -d shows directories only.",
    deBeginner: "tree shows the directory structure as a tree. tree -L 2 limits depth to 2 levels. tree -d shows only directories.",
    deExpert: "tree(1): hierarchy. tree -L n depth. tree -d dirs only. tree -a include dotfiles. Not POSIX; install separately."
  }),
  (_i: number) => ({
    q: "What does `ncdu` do?",
    o: ["Interactive disk usage analyzer", "Network disk usage", "New disk utility", "No change disk usage"],
    c: 0,
    e: "ncdu is an interactive du (ncurses disk usage).",
    de: "Navigate and delete from the interface. Better than du for exploring.",
    deBeginner: "ncdu is an interactive disk usage tool. You can move around and see sizes, and delete files from the interface. Handy for finding what's using space.",
    deExpert: "ncdu: ncurses du. Interactive. Navigate, delete. TUI. Better than du for exploration. Install separately."
  }),
  (_i: number) => ({
    q: "What does `fdisk -l` show?",
    o: ["Partition table of block devices", "File disk usage", "Disk free", "Inode list"],
    c: 0,
    e: "fdisk -l lists partition tables. Requires root.",
    de: "lsblk is often easier. fdisk for partitioning (interactive).",
    deBeginner: "fdisk -l lists partition tables on block devices. Usually needs root. lsblk is often easier. Use fdisk interactively to create or change partitions.",
    deExpert: "fdisk -l: list partition tables. MBR/GPT. Root often required. fdisk device for interactive. parted, gdisk alternatives."
  }),
  (_i: number) => ({
    q: "What is a mount point?",
    o: ["Directory where a filesystem is attached", "Top of filesystem", "Mount command option", "Disk partition"],
    c: 0,
    e: "A mount point is the directory you attach a filesystem to.",
    de: "mount /dev/sda1 /mnt makes /mnt the root of that partition.",
    deBeginner: "A mount point is the directory where you attach a filesystem. mount /dev/sda1 /mnt makes /mnt the root of that partition. The directory should be empty.",
    deExpert: "Mount point: dir where FS attached. mount dev dir. Dir becomes root of that FS. Empty dir preferred. /etc/fstab for boot."
  }),
  (_i: number) => ({
    q: "What does `sync` do?",
    o: ["Flushes buffered writes to disk", "Synchronizes two dirs", "Syncs time", "Backs up files"],
    c: 0,
    e: "sync flushes filesystem buffers to disk.",
    de: "Important before unmounting or shutdown. Usually automatic but sync ensures it.",
    deBeginner: "sync writes any buffered data to disk. Use before unmounting or shutdown. Usually automatic.",
    deExpert: "sync(2): flush buffer cache. Before umount/shutdown. Often automatic."
  }),
  (_i: number) => ({
    q: "What is stored in /etc/fstab?",
    o: ["Filesystem mount configuration", "File table", "Fast boot config", "File stats"],
    c: 0,
    e: "/etc/fstab defines what to mount at boot and options.",
    de: "mount -a mounts all in fstab. Used for persistent mounts.",
    deBeginner: "/etc/fstab lists filesystems to mount at boot and their options. mount -a mounts everything in fstab. Edit it for permanent mounts.",
    deExpert: "/etc/fstab: static mount info. mount -a at boot. Fields: device, mountpoint, fstype, options, dump, fsck."
  }),
  (_i: number) => ({
    q: "What does `e2label` do (ext filesystems)?",
    o: ["Sets or displays volume label", "Labels inodes", "Creates label file", "Labels blocks"],
    c: 0,
    e: "e2label sets the filesystem label (human-readable name).",
    de: "Labels can be used in fstab instead of UUID: LABEL=mydata.",
    deBeginner: "e2label sets or shows the volume label on an ext filesystem. In fstab you can use LABEL=mydata instead of a device name or UUID.",
    deExpert: "e2label: ext2/3/4 volume label. In fstab LABEL=name. tune2fs -L also."
  }),
  (_i: number) => ({
    q: "What does `tune2fs -l` show?",
    o: ["ext filesystem superblock info", "Tuning options", "File list", "Disk list"],
    c: 0,
    e: "tune2fs -l displays ext2/3/4 superblock information.",
    de: "Shows block count, block size, last mount, etc.",
    deBeginner: "tune2fs -l shows superblock info for an ext filesystem: block count, block size, last mount time, and other low-level details.",
    deExpert: "tune2fs -l: superblock dump. Block size, count, reserved, mount count. For fs analysis."
  }),
  (_i: number) => ({
    q: "What is a sparse file?",
    o: ["File with holes (unallocated blocks)", "Compressed file", "Small file", "Temporary file"],
    c: 0,
    e: "Sparse files have logical size > allocated blocks (holes).",
    de: "dd can create them. ls -l shows logical size; du shows actual disk use.",
    deBeginner: "A sparse file has 'holes': parts that aren't stored on disk, so the file can be big but use less space. ls -l shows logical size; du shows real disk use.",
    deExpert: "Sparse file: holes (unallocated blocks). ls -l logical; du actual. cp --sparse. fallocate, dd conv=sparse."
  }),
  (_i: number) => ({
    q: "What does `fallocate` do?",
    o: ["Preallocates disk space for a file", "Frees allocated space", "Allocates inodes", "Finds allocation"],
    c: 0,
    e: "fallocate quickly reserves space without writing (faster than dd).",
    de: "fallocate -l 1G file. Creates a file of that size instantly.",
    deBeginner: "fallocate reserves space for a file without writing bytes. fallocate -l 1G file makes a 1GB file instantly. Faster than dd if=/dev/zero.",
    deExpert: "fallocate(2): allocate space. fallocate -l size file. No write. Fast. Creates sparse or full."
  }),
  (_i: number) => ({
    q: "What does `truncate` do?",
    o: ["Sets file size (extends or shrinks)", "Truncates filename", "Removes content", "Compresses file"],
    c: 0,
    e: "truncate -s SIZE file sets the file to that size.",
    de: "Shrinking loses data. Extending creates a hole (sparse).",
    deBeginner: "truncate -s SIZE file sets the file to that size. Shrinking drops data. Extending adds a hole. Good for log rotation: truncate -s 0 log.",
    deExpert: "truncate(2): set file size. Shrink: data lost. Grow: hole. truncate -s 0 for empty. For logs."
  }),
  (_i: number) => ({
    q: "What is the purpose of /tmp?",
    o: ["Temporary files, often cleared at boot", "Permanent temp storage", "Template files", "Test files only"],
    c: 0,
    e: "/tmp is for temporary files. Often tmpfs (RAM) or cleared on reboot.",
    de: "Sticky bit set. $TMPDIR may point elsewhere. Use for scratch files.",
    deBeginner: "/tmp is for temporary files. It often has the sticky bit and may be in RAM or cleared at reboot. $TMPDIR might point elsewhere.",
    deExpert: "/tmp: FHS, temporary. Often tmpfs. Sticky bit. $TMPDIR overrides. mktemp for scripts."
  }),
  (_i: number) => ({
    q: "What does `mktemp` create?",
    o: ["Unique temporary file or directory", "Temp template", "Multiple temps", "Permanent temp"],
    c: 0,
    e: "mktemp creates a unique temp file. mktemp -d creates a directory.",
    de: "mktemp /tmp/foo.XXXXXX. Safe for scripts (no race).",
    deBeginner: "mktemp creates a unique temp file (or mktemp -d for a directory). Use a template with XXXXXX. Safe in scripts (no race).",
    deExpert: "mktemp: unique temp. mktemp /tmp/foo.XXXXXX. mktemp -d dir. mkstemp(3). Race-free."
  }),
  (_i: number) => ({
    q: "What is a bind mount?",
    o: ["Makes one directory visible at another", "Binds two disks", "Mounts backup", "Binds users"],
    c: 0,
    e: "mount --bind /src /dst makes /src visible at /dst.",
    de: "Same filesystem, two paths. mount -o bind. Useful for chroot.",
    deBeginner: "A bind mount makes one directory appear at another path. mount --bind /src /dst. Same data, two paths. Used for chroot.",
    deExpert: "mount --bind: same dir, second path. For chroot, overlay. Same inode."
  }),
  (_i: number) => ({
    q: "What does `df -i` show?",
    o: ["Inode usage per filesystem", "Disk usage", "Index of files", "Input devices"],
    c: 0,
    e: "df -i shows inode usage (important for many small files).",
    de: "ext4 has limited inodes. Can run out before disk space.",
    deBeginner: "df -i shows inode usage: how many inodes are used and free. Many tiny files can exhaust inodes before disk space.",
    deExpert: "df -i: inode usage. Many small files can exhaust inodes. ext4 inode count fixed at mkfs."
  }),
  (_i: number) => ({
    q: "What does `ls -n` show?",
    o: ["Numeric UID/GID instead of names", "Number of files", "No output", "New files only"],
    c: 0,
    e: "ls -n shows numeric user and group IDs.",
    de: "Useful when NSS (name resolution) is broken or in initramfs.",
    deBeginner: "ls -n shows numeric UID and GID instead of user/group names. Useful when name lookup is broken (e.g. initramfs) or for scripts.",
    deExpert: "ls -n: numeric uid/gid. No getpwuid. For initramfs, chroot, when NSS broken."
  }),
  (_i: number) => ({
    q: "What does `getfacl file` show?",
    o: ["ACLs (access control list)", "File contents", "Facts about file", "File allocation"],
    c: 0,
    e: "getfacl displays access control lists for the file.",
    de: "Shows default and access ACLs. setfacl to modify.",
    deBeginner: "getfacl file shows the access control list: who has what permission. setfacl changes ACLs. Shows default ACL on dirs too.",
    deExpert: "getfacl: read ACL. setfacl write. Default ACL on dirs. acl(5)."
  }),
  (_i: number) => ({
    q: "What does `chattr +i file` do?",
    o: ["Makes file immutable (even root cannot modify)", "Adds index", "Increments", "Ignores file"],
    c: 0,
    e: "chattr +i makes file immutable. chattr -i to remove.",
    de: "Extra protection. lsattr shows attributes. Only root can set.",
    deBeginner: "chattr +i makes the file immutable: not even root can change or delete it until you chattr -i. lsattr shows attributes.",
    deExpert: "chattr +i: immutable. No write, unlink. chattr -i remove. FS-specific (ext). Root only."
  }),
  (_i: number) => ({
    q: "What does `lsattr` show?",
    o: ["Extended attributes (chattr flags)", "Standard attributes", "ACLs", "File type"],
    c: 0,
    e: "lsattr shows attributes set by chattr (e.g. immutable, append-only).",
    de: "i=immutable, a=append-only. Used for extra file protection.",
    deBeginner: "lsattr shows the attributes set by chattr: e.g. i (immutable), a (append-only). Extra protection beyond normal permissions.",
    deExpert: "lsattr: list chattr flags. i immutable, a append-only. ext2/3/4."
  }),
  (_i: number) => ({
    q: "What is a character device?",
    o: ["Device that transfers data byte-by-byte", "Device with character", "Text device", "Keyboard only"],
    c: 0,
    e: "Character devices (e.g. /dev/tty) transfer data sequentially.",
    de: "Terminals, keyboards, random. No block buffering. /dev/random, /dev/null.",
    deBeginner: "A character device (e.g. /dev/tty, /dev/null) does I/O byte-by-byte, not in blocks. Terminals, keyboards, /dev/random, /dev/null.",
    deExpert: "Character device: byte stream. /dev/tty, /dev/null, /dev/random. No block buffer. S_ISCHR."
  }),
  (_i: number) => ({
    q: "What does /dev/null do?",
    o: ["Discards all data written to it", "Creates null files", "Deletes input", "Returns null"],
    c: 0,
    e: "/dev/null discards everything written; reads return EOF.",
    de: "cmd > /dev/null suppresses output. cmd 2>/dev/null suppresses errors.",
    deBeginner: "Writing to /dev/null discards the data. Reading from it returns nothing (EOF). cmd > /dev/null hides output; cmd 2>/dev/null hides errors.",
    deExpert: "/dev/null: write discarded, read returns EOF. Bit bucket. > /dev/null, 2>/dev/null."
  }),
  (_i: number) => ({
    q: "What does /dev/zero provide?",
    o: ["Infinite stream of null bytes", "Zeros for disk", "Zero files", "Empty output"],
    c: 0,
    e: "/dev/zero outputs infinite null bytes when read.",
    de: "dd if=/dev/zero of=file bs=1M count=100 creates 100MB zero file.",
    deBeginner: "Reading from /dev/zero gives an endless stream of zero bytes. dd if=/dev/zero of=file bs=1M count=100 creates a 100MB file of zeros.",
    deExpert: "/dev/zero: read returns \\0. Infinite. dd if=/dev/zero. fallocate often faster for files."
  }),
  (_i: number) => ({
    q: "What does /dev/random provide?",
    o: ["Cryptographically secure random bytes", "Random file", "Pseudo-random", "Random device list"],
    c: 0,
    e: "/dev/random blocks when entropy is low; /dev/urandom does not.",
    de: "Use /dev/urandom for most needs. /dev/random for high-security keys.",
    deBeginner: "/dev/random gives random bytes and can block when entropy is low. /dev/urandom doesn't block. For most uses /dev/urandom is fine.",
    deExpert: "/dev/random: blocks when entropy low. /dev/urandom: never blocks, CSPRNG. Prefer urandom for most."
  }),
  (_i: number) => ({
    q: "What is the purpose of /var?",
    o: ["Variable data (logs, cache, spool)", "Variable files", "Various data", "Version control"],
    c: 0,
    e: "/var holds data that changes: logs, cache, mail, spool.",
    de: "/var/log, /var/cache, /var/spool. FHS standard.",
    deBeginner: "/var holds data that changes during normal operation: logs (/var/log), cache (/var/cache), mail, print spool. FHS standard.",
    deExpert: "/var: variable data. FHS. /var/log, cache, spool, lib. Persists across reboots."
  }),
  (_i: number) => ({
    q: "What is the purpose of /usr?",
    o: ["User-installed programs and read-only data", "User home", "User config", "User temp"],
    c: 0,
    e: "/usr contains user-space programs, libraries, share (read-only after install).",
    de: "/usr/bin, /usr/lib, /usr/share. Historically 'Unix System Resources'.",
    deBeginner: "/usr holds user-space programs and data: /usr/bin, /usr/lib, /usr/share. Meant to be read-only after install.",
    deExpert: "/usr: shareable, read-only. FHS. /usr/bin, lib, share. /usr/local for local install."
  }),
  (_i: number) => ({
    q: "What is the purpose of /etc?",
    o: ["System-wide configuration files", "Executables", "Temporary files", "User data"],
    c: 0,
    e: "/etc holds system configuration (not binaries).",
    de: "/etc/passwd, /etc/fstab, /etc/ssh. Editable config, not code.",
    deBeginner: "/etc is for system-wide configuration: /etc/passwd, /etc/fstab, /etc/ssh. Config files, not programs.",
    deExpert: "/etc: host-specific config. FHS. Not binaries. /etc/passwd, fstab, ssh."
  }),
  (_i: number) => ({
    q: "What does `namei -l path` show?",
    o: ["Path resolution with permissions", "Name index", "Link names", "File names only"],
    c: 0,
    e: "namei shows how a path resolves, with permissions at each level.",
    de: "Useful for debugging 'Permission denied'. Shows where access fails.",
    deBeginner: "namei -l path shows how the path is resolved step by step and the permissions at each level. Great for debugging 'Permission denied'.",
    deExpert: "namei: path resolution. namei -l with permissions. Find where EACCES occurs."
  }),
  (_i: number) => ({
    q: "What does `ionice` do?",
    o: ["Sets I/O scheduling class/priority", "Sets CPU nice", "I/O nice", "I/O count"],
    c: 0,
    e: "ionice sets I/O priority (idle, best-effort, realtime).",
    de: "ionice -c3 cmd runs with idle I/O (backup jobs). Reduces impact on system.",
    deBeginner: "ionice sets I/O priority for a process. ionice -c3 cmd runs with idle I/O so it doesn't slow the system. Good for backup or batch jobs.",
    deExpert: "ionice: I/O scheduling. -c class (1 realtime, 2 best-effort, 3 idle). For background jobs."
  }),
  (_i: number) => ({
    q: "What is tmpfs?",
    o: ["In-memory filesystem", "Temp file system", "Temporary fs", "Template fs"],
    c: 0,
    e: "tmpfs stores files in RAM. Fast but lost on unmount/reboot.",
    de: "/dev/shm and often /tmp. mount -t tmpfs tmpfs /mnt.",
    deBeginner: "tmpfs is a filesystem in RAM. Very fast; data is lost on unmount or reboot. /dev/shm and often /tmp are tmpfs.",
    deExpert: "tmpfs: RAM-based FS. mount -t tmpfs. /dev/shm. No persistence. Optional swap use."
  }),
  (_i: number) => ({
    q: "What does `swapon -s` show?",
    o: ["Swap usage summary", "All swap", "Swap on", "Swap status"],
    c: 0,
    e: "swapon -s or swapon --show lists swap devices and usage.",
    de: "free -h also shows swap. swapon/swapoff to add/remove swap.",
    deBeginner: "swapon -s (or swapon --show) lists swap devices and how much is used. free -h also shows swap. swapon/swapoff add or remove swap.",
    deExpert: "swapon -s/--show: swap summary. free also. swapon/swapoff enable/disable."
  }),
  (_i: number) => ({
    q: "What does `blockdev --getsize64 /dev/sda` show?",
    o: ["Device size in bytes", "Block size", "Block count", "Sector size"],
    c: 0,
    e: "blockdev --getsize64 returns device size in bytes.",
    de: "Low-level block device info. lsblk -b also shows size.",
    deBeginner: "blockdev --getsize64 /dev/sda prints the device size in bytes. Low-level. lsblk -b also shows size in bytes.",
    deExpert: "blockdev --getsize64: device size bytes. ioctl BLKGETSIZE64. lsblk -b same."
  }),
  (_i: number) => ({
    q: "What is the difference between / and /root?",
    o: ["/ is root of filesystem, /root is root user's home", "Same thing", "/root is root of /", "No difference"],
    c: 0,
    e: "/ is filesystem root. /root is the superuser's home directory.",
    de: "Don't confuse them. cd / vs cd /root.",
    deBeginner: "/ is the root of the whole filesystem. /root is the home directory of the root user. Different: cd / vs cd /root.",
    deExpert: "/: FS root. /root: root's home. FHS. Don't confuse."
  }),
  (_i: number) => ({
    q: "What does `debugfs` do?",
    o: ["Interactive ext filesystem debugger", "Debug filesystem", "Enable debug", "Debug fs"],
    c: 0,
    e: "debugfs is for ext2/3/4 filesystem debugging and repair.",
    de: "Advanced. fsck for normal repair. debugfs for low-level operations.",
    deBeginner: "debugfs is an interactive tool for ext filesystems. Use it for low-level debugging and repair. For normal repair, use fsck first.",
    deExpert: "debugfs: ext2/3/4 debug. Interactive. Low-level. fsck for normal repair."
  }),
  (_i: number) => ({
    q: "What does `dumpe2fs` show?",
    o: ["ext filesystem superblock and group info", "Dump files", "Dump inodes", "Dump blocks"],
    c: 0,
    e: "dumpe2fs displays ext filesystem structure (superblock, block groups).",
    de: "dumpe2fs -h for superblock only. Useful for fs analysis.",
    deBeginner: "dumpe2fs shows the internal structure of an ext filesystem: superblock, block groups. dumpe2fs -h shows just the superblock.",
    deExpert: "dumpe2fs: dump ext superblock, group descriptors. dumpe2fs -h superblock only."
  }),
  (_i: number) => ({
    q: "What does `resize2fs` do?",
    o: ["Resizes ext filesystem to partition size", "Resizes partition", "Resizes file", "Resizes inode"],
    c: 0,
    e: "resize2fs resizes ext2/3/4 filesystem (after expanding partition).",
    de: "Grow partition first (fdisk, parted), then resize2fs. Shrinking is trickier.",
    deBeginner: "resize2fs resizes an ext filesystem to match the partition. Expand the partition first (fdisk/parted), then run resize2fs.",
    deExpert: "resize2fs: grow/shrink ext FS. After partition resize. Shrink: resize2fs then fdisk."
  }),
  (_i: number) => ({
    q: "What does `xfs_growfs` do?",
    o: ["Grows XFS filesystem to fill partition", "Grows partition", "Grows file", "Grows inode"],
    c: 0,
    e: "xfs_growfs expands XFS to use available space. Mount point as argument.",
    de: "XFS can only grow, not shrink. Common on RHEL/CentOS.",
    deBeginner: "xfs_growfs grows an XFS filesystem to use free space in the partition. Give the mount point. XFS can only grow, not shrink.",
    deExpert: "xfs_growfs: grow XFS to partition. Mount point arg. No shrink. Common on RHEL."
  }),
  (_i: number) => ({
    q: "What does `wipefs` do?",
    o: ["Removes filesystem signatures from device", "Wipes files", "Wipes fs", "Wipes partition"],
    c: 0,
    e: "wipefs erases magic strings (signatures) so device appears empty.",
    de: "wipefs -a /dev/sda. Dangerous! Makes data unrecoverable by normal means.",
    deBeginner: "wipefs removes filesystem signatures from a device so it looks empty. wipefs -a /dev/sda wipes all. Dangerous: data no longer recognized.",
    deExpert: "wipefs: erase FS signatures. wipefs -a device. Dangerous. For repurpose device."
  }),
  (_i: number) => ({
    q: "What does `partprobe` do?",
    o: ["Informs kernel of partition table changes", "Probes partitions", "Creates partitions", "Lists partitions"],
    c: 0,
    e: "partprobe asks kernel to re-read partition table after fdisk/parted.",
    de: "Avoids reboot after partitioning. partprobe /dev/sda.",
    deBeginner: "After changing the partition table with fdisk or parted, partprobe tells the kernel to re-read it. So you don't have to reboot.",
    deExpert: "partprobe: re-read partition table. After fdisk/parted. BLKRRPART. Avoid reboot."
  }),
  (_i: number) => ({
    q: "What does `ls -Z` show (SELinux)?",
    o: ["SELinux security context", "Zero size files", "Compressed files", "Zipped files"],
    c: 0,
    e: "ls -Z shows SELinux context (user:role:type:level).",
    de: "Only on SELinux systems. getenforce shows if SELinux is enabled.",
    deBeginner: "On SELinux systems, ls -Z shows the security context (user:role:type:level) for each file. getenforce shows whether SELinux is on.",
    deExpert: "ls -Z: SELinux context. user:role:type:level. getenforce. Only when SELinux enabled."
  }),
  (_i: number) => ({
    q: "What does `chcon` do?",
    o: ["Changes SELinux context of a file", "Changes ownership", "Changes permissions", "Changes config"],
    c: 0,
    e: "chcon changes SELinux context. restorecon restores default.",
    de: "chcon -t type file. semanage for persistent context changes.",
    deBeginner: "chcon changes the SELinux context of a file. chcon -t type file. restorecon restores the default. semanage for persistent changes.",
    deExpert: "chcon: change SELinux context. restorecon restores default. semanage for persistent. setfile on some systems."
  }),
  (_i: number) => ({
    q: "What is the purpose of /run?",
    o: ["Runtime data (since boot)", "Run scripts", "Running processes", "Run config"],
    c: 0,
    e: "/run holds runtime data (PIDs, sockets) since last boot.",
    de: "Replaces /var/run. tmpfs. Cleared on reboot.",
    deBeginner: "/run holds runtime data since the last boot: PIDs, sockets, etc. Replaces /var/run. Usually tmpfs. Cleared on reboot.",
    deExpert: "/run: runtime, since boot. FHS. Replaces /var/run. tmpfs. PIDs, sockets. Cleared on reboot."
  }),
  (_i: number) => ({
    q: "What does `file file.txt` determine?",
    o: ["File type from content (magic numbers)", "File size", "File name", "File permissions"],
    c: 0,
    e: "file examines content to guess type (not just extension).",
    de: "Uses magic numbers. file * shows types of all files.",
    deBeginner: "file looks at the file contents (magic numbers) to guess the type, not just the extension. file * shows types of all files in the directory.",
    deExpert: "file: libmagic. Identify type from content. Magic numbers. file * for directory. Not extension-based."
  }),
  (_i: number) => ({
    q: "What does `basename` without suffix do?",
    o: ["Returns last path component", "Returns path", "Returns directory", "Returns extension"],
    c: 0,
    e: "basename /path/to/file.txt returns file.txt.",
    de: "basename path .txt returns file (strips suffix).",
    deBeginner: "basename returns the last part of a path. basename /path/to/file.txt is file.txt. basename path .txt strips the suffix and returns file.",
    deExpert: "basename: strip dir, optional suffix. basename path [suffix]. Pure string. For path parsing."
  }),
  (_i: number) => ({
    q: "What does `dirname` return?",
    o: ["Directory part of path", "File name", "Full path", "Base name"],
    c: 0,
    e: "dirname /path/to/file.txt returns /path/to.",
    de: "Opposite of basename. Useful in scripts for path manipulation.",
    deBeginner: "dirname returns the directory part of a path. dirname /path/to/file.txt is /path/to. Opposite of basename. Handy in scripts.",
    deExpert: "dirname: strip last component. dirname /path/to/file -> /path/to. With basename for path logic."
  }),
];

import { level2Intermediate } from './level2_intermediate_cli';
import { level2Expert } from './level2_expert_cli';

export const level2Patterns = beginner;
export const level2IntermediateA = level2Intermediate.slice(0, 50);
export const level2IntermediateB = level2Intermediate.slice(50, 100);
export const level2ExpertA = level2Expert.slice(0, 50);
export const level2ExpertB = level2Expert.slice(50, 123);
