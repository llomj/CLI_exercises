// LEVEL 2: SHRIMP — Filesystem & Storage (CLI)
// 100 Beginner + 100 Intermediate + 123 Expert. All real content.

const beginner = [
  (_i: number) => ({
    q: "Where does the Filesystem Hierarchy Standard place user home directories?",
    o: ["/home", "/usr/home", "/var/home", "/opt/home"],
    c: 0,
    e: "FHS places user homes under /home (e.g. /home/username).",
    de: "FHS defines /home for user directories. /root is the superuser's home. macOS uses /Users."
  }),
  (_i: number) => ({
    q: "What does an absolute path always start with?",
    o: ["/", "~", ".", ".."],
    c: 0,
    e: "Absolute paths start with / (root).",
    de: "/home/user/file is absolute. ./file or file is relative to current directory."
  }),
  (_i: number) => ({
    q: "What does an inode store?",
    o: ["File metadata (not the filename)", "File contents", "Directory structure", "File extension"],
    c: 0,
    e: "Inodes store metadata: permissions, size, timestamps, pointers to data blocks.",
    de: "Filename is stored in the directory. Inode holds everything else. ls -i shows inode numbers."
  }),
  (_i: number) => ({
    q: "What does `ln file link` create?",
    o: ["Hard link", "Symbolic link", "Copy", "Shortcut"],
    c: 0,
    e: "ln without -s creates a hard link (same inode).",
    de: "Hard links share the same inode. Both names point to same data. Cannot link directories."
  }),
  (_i: number) => ({
    q: "What does `ln -s target linkname` create?",
    o: ["Symbolic link", "Hard link", "Copy", "Directory"],
    c: 0,
    e: "ln -s creates a symbolic link (symlink) pointing to target.",
    de: "Symlinks can point to directories and across filesystems. If target is deleted, link breaks."
  }),
  (_i: number) => ({
    q: "What are file descriptors 0, 1, and 2?",
    o: ["stdin, stdout, stderr", "read, write, execute", "input, output, error", "fd0, fd1, fd2"],
    c: 0,
    e: "0=stdin, 1=stdout, 2=stderr.",
    de: "Every process has these by default. 2>&1 redirects stderr to stdout."
  }),
  (_i: number) => ({
    q: "What does 'r' mean in file permissions?",
    o: ["Read", "Run", "Remove", "Recursive"],
    c: 0,
    e: "r = read, w = write, x = execute.",
    de: "rwx for user, group, others. chmod 644 = rw-r--r--."
  }),
  (_i: number) => ({
    q: "What does chmod 755 set?",
    o: ["rwxr-xr-x", "rw-r--r--", "rwxrwxrwx", "r--r--r--"],
    c: 0,
    e: "755 = owner rwx, group r-x, others r-x.",
    de: "7=rwx, 5=r-x, 0=---. Common for executables and directories."
  }),
  (_i: number) => ({
    q: "Who can change file ownership with chown?",
    o: ["Only root", "File owner", "Anyone in group", "Anyone"],
    c: 0,
    e: "Only root (or CAP_CHOWN) can change ownership.",
    de: "chown user:group file. Regular users cannot give away files."
  }),
  (_i: number) => ({
    q: "What does the SUID bit do when set on an executable?",
    o: ["Runs with owner's privileges", "Runs as root always", "Makes it system-only", "Disables execution"],
    c: 0,
    e: "SUID makes the process run with the file owner's privileges.",
    de: "chmod u+s file. Example: /usr/bin/passwd runs as root to modify /etc/shadow."
  }),
  (_i: number) => ({
    q: "What does `mount` do?",
    o: ["Attaches a filesystem to a directory", "Creates a partition", "Formats a disk", "Lists disks"],
    c: 0,
    e: "mount attaches a filesystem to a mount point (directory).",
    de: "mount /dev/sda1 /mnt. umount detaches. mount shows mounted filesystems."
  }),
  (_i: number) => ({
    q: "What does `umount` require?",
    o: ["No processes using the mount point", "Root privileges", "Both", "Neither"],
    c: 2,
    e: "umount needs root and no active use of the mount point.",
    de: "cd away from the mount point first. lsof /mnt shows what's using it."
  }),
  (_i: number) => ({
    q: "Which filesystem is common on Linux?",
    o: ["ext4", "NTFS", "FAT32", "HFS+"],
    c: 0,
    e: "ext4 is the default on most Linux distributions.",
    de: "ext4, XFS, btrfs are Linux-native. NTFS/FAT32 for Windows compatibility."
  }),
  (_i: number) => ({
    q: "What is a loop device used for?",
    o: ["Mounting image files as block devices", "Looping commands", "Network loops", "Infinite loops"],
    c: 0,
    e: "Loop devices let you mount .iso or .img files.",
    de: "mount -o loop image.iso /mnt. losetup manages loop devices."
  }),
  (_i: number) => ({
    q: "What does `du -sh *` show?",
    o: ["Size of each item in current directory", "Total disk usage", "Hidden files only", "File count"],
    c: 0,
    e: "du -sh * shows human-readable size of each item.",
    de: "du = disk usage. -s = summary, -h = human (K, M, G)."
  }),
  (_i: number) => ({
    q: "What does `df -h` show?",
    o: ["Disk space of mounted filesystems", "Directory sizes", "File count", "Inode count only"],
    c: 0,
    e: "df shows disk free space for each mounted filesystem.",
    de: "df -h uses K, M, G. df -i shows inode usage."
  }),
  (_i: number) => ({
    q: "What is /proc?",
    o: ["Virtual filesystem for process/kernel info", "Program files", "Process queue", "Profile data"],
    c: 0,
    e: "/proc is a virtual filesystem exposing kernel and process info.",
    de: "/proc/cpuinfo, /proc/meminfo, /proc/PID/ for each process. Not real files on disk."
  }),
  (_i: number) => ({
    q: "What does `stat file` display?",
    o: ["Detailed file metadata", "File contents", "File type only", "Permissions only"],
    c: 0,
    e: "stat shows inode, size, permissions, access/modify/change times.",
    de: "Useful for scripts. Access time, modification time, change time (metadata)."
  }),
  (_i: number) => ({
    q: "What are ACLs used for?",
    o: ["Fine-grained permissions beyond user/group/others", "Encryption", "Compression", "Backup"],
    c: 0,
    e: "ACLs allow per-user or per-group permissions beyond rwx.",
    de: "getfacl and setfacl. More flexible than standard Unix permissions."
  }),
  (_i: number) => ({
    q: "What do extended attributes (xattr) store?",
    o: ["Key-value metadata not in inode", "File contents", "Backup info", "Compression data"],
    c: 0,
    e: "Extended attributes store extra metadata (e.g. SELinux labels).",
    de: "getfattr, setfattr. Used by SELinux, capabilities, and other systems."
  }),
  (_i: number) => ({
    q: "What does `realpath file` output?",
    o: ["Canonical absolute path", "Relative path", "Symlink target only", "File size"],
    c: 0,
    e: "realpath resolves to the canonical absolute path.",
    de: "Resolves . and .. and symlinks. readlink -f does similar."
  }),
  (_i: number) => ({
    q: "What does the sticky bit on a directory do?",
    o: ["Only owner can delete their files", "Makes all files executable", "Locks the directory", "Hides files"],
    c: 0,
    e: "Sticky bit (e.g. /tmp): users can only delete their own files.",
    de: "chmod +t dir. Common on /tmp. Prevents users from deleting others' files."
  }),
  (_i: number) => ({
    q: "What does SGID on a directory do?",
    o: ["New files inherit group", "Only group can access", "Makes dir system-only", "Locks group"],
    c: 0,
    e: "SGID on directory: new files inherit the directory's group.",
    de: "chmod g+s dir. Useful for shared directories (e.g. project folders)."
  }),
  (_i: number) => ({
    q: "What is a block device?",
    o: ["Device that reads/writes in fixed-size blocks", "A type of file", "Network block", "Memory block"],
    c: 0,
    e: "Block devices (disks) transfer data in blocks (e.g. 512 bytes).",
    de: "/dev/sda, /dev/nvme0n1. Character devices (terminals) transfer byte-by-byte."
  }),
  (_i: number) => ({
    q: "What does `lsblk` show?",
    o: ["Block devices and their layout", "File sizes", "Links", "Permissions"],
    c: 0,
    e: "lsblk lists block devices (disks, partitions) in a tree.",
    de: "Shows /dev/sda, partitions, mount points. Useful for disk layout."
  }),
  (_i: number) => ({
    q: "What is /sys?",
    o: ["Virtual filesystem for kernel/subsystem info", "System files", "Swap", "Symbolic links"],
    c: 0,
    e: "/sys exposes kernel objects, devices, and drivers.",
    de: "sysfs. Complements /proc. Used for hardware and driver configuration."
  }),
  (_i: number) => ({
    q: "What does `findmnt` show?",
    o: ["Mounted filesystems in tree form", "Find command mounts", "Mount options", "Disk partitions only"],
    c: 0,
    e: "findmnt shows the mount tree (what is mounted where).",
    de: "findmnt or mount. Clearer output than mount for nested mounts."
  }),
  (_i: number) => ({
    q: "What does `blkid` show?",
    o: ["Block device attributes (UUID, type)", "Block IDs only", "Disk usage", "File types"],
    c: 0,
    e: "blkid shows UUID, filesystem type, and other attributes of block devices.",
    de: "Useful for /etc/fstab. UUID is preferred over /dev/sda1 (can change)."
  }),
  (_i: number) => ({
    q: "What is the primary group of a user?",
    o: ["Group in /etc/passwd for that user", "First in groups list", "Root group", "Same as username"],
    c: 0,
    e: "Primary group is listed in /etc/passwd. New files get this group by default.",
    de: "groups shows all groups. id shows uid, gid, groups."
  }),
  (_i: number) => ({
    q: "What does `chmod +x script.sh` do?",
    o: ["Adds execute permission for all", "Adds execute for owner only", "Removes execute", "Sets 755"],
    c: 0,
    e: "chmod +x adds execute for user, group, and others.",
    de: "chmod u+x for owner only. +x is shorthand for a+x (all)."
  }),
  (_i: number) => ({
    q: "What does `touch file` do if file exists?",
    o: ["Updates modification time", "Creates backup", "Appends to file", "Deletes and recreates"],
    c: 0,
    e: "touch updates the modification time; creates if missing.",
    de: "touch -t YYYYMMDDhhmm for specific timestamp. Used by make."
  }),
  (_i: number) => ({
    q: "What is the difference between mtime and ctime?",
    o: ["mtime=content change, ctime=metadata change", "They are the same", "mtime=create, ctime=modify", "ctime is creation time"],
    c: 0,
    e: "mtime = last content modification. ctime = last metadata change (e.g. chmod).",
    de: "stat shows atime, mtime, ctime. atime = last access (can disable for performance)."
  }),
  (_i: number) => ({
    q: "What does `ls -d` do?",
    o: ["Lists directories themselves, not contents", "Shows only dirs", "Deletes dirs", "Shows depth"],
    c: 0,
    e: "ls -d lists the directory as an entry, not its contents.",
    de: "ls -d */ lists only directory names. ls -d . shows current dir."
  }),
  (_i: number) => ({
    q: "What does `tree` show?",
    o: ["Directory structure as a tree", "File tree only", "Directory sizes", "Links only"],
    c: 0,
    e: "tree displays directory hierarchy in tree format.",
    de: "tree -L 2 limits depth. tree -d shows directories only."
  }),
  (_i: number) => ({
    q: "What does `ncdu` do?",
    o: ["Interactive disk usage analyzer", "Network disk usage", "New disk utility", "No change disk usage"],
    c: 0,
    e: "ncdu is an interactive du (ncurses disk usage).",
    de: "Navigate and delete from the interface. Better than du for exploring."
  }),
  (_i: number) => ({
    q: "What does `fdisk -l` show?",
    o: ["Partition table of block devices", "File disk usage", "Disk free", "Inode list"],
    c: 0,
    e: "fdisk -l lists partition tables. Requires root.",
    de: "lsblk is often easier. fdisk for partitioning (interactive)."
  }),
  (_i: number) => ({
    q: "What is a mount point?",
    o: ["Directory where a filesystem is attached", "Top of filesystem", "Mount command option", "Disk partition"],
    c: 0,
    e: "A mount point is the directory you attach a filesystem to.",
    de: "mount /dev/sda1 /mnt makes /mnt the root of that partition."
  }),
  (_i: number) => ({
    q: "What does `sync` do?",
    o: ["Flushes buffered writes to disk", "Synchronizes two dirs", "Syncs time", "Backs up files"],
    c: 0,
    e: "sync flushes filesystem buffers to disk.",
    de: "Important before unmounting or shutdown. Usually automatic but sync ensures it."
  }),
  (_i: number) => ({
    q: "What is stored in /etc/fstab?",
    o: ["Filesystem mount configuration", "File table", "Fast boot config", "File stats"],
    c: 0,
    e: "/etc/fstab defines what to mount at boot and options.",
    de: "mount -a mounts all in fstab. Used for persistent mounts."
  }),
  (_i: number) => ({
    q: "What does `e2label` do (ext filesystems)?",
    o: ["Sets or displays volume label", "Labels inodes", "Creates label file", "Labels blocks"],
    c: 0,
    e: "e2label sets the filesystem label (human-readable name).",
    de: "Labels can be used in fstab instead of UUID: LABEL=mydata."
  }),
  (_i: number) => ({
    q: "What does `tune2fs -l` show?",
    o: ["ext filesystem superblock info", "Tuning options", "File list", "Disk list"],
    c: 0,
    e: "tune2fs -l displays ext2/3/4 superblock information.",
    de: "Shows block count, block size, last mount, etc."
  }),
  (_i: number) => ({
    q: "What is a sparse file?",
    o: ["File with holes (unallocated blocks)", "Compressed file", "Small file", "Temporary file"],
    c: 0,
    e: "Sparse files have logical size > allocated blocks (holes).",
    de: "dd can create them. ls -l shows logical size; du shows actual disk use."
  }),
  (_i: number) => ({
    q: "What does `fallocate` do?",
    o: ["Preallocates disk space for a file", "Frees allocated space", "Allocates inodes", "Finds allocation"],
    c: 0,
    e: "fallocate quickly reserves space without writing (faster than dd).",
    de: "fallocate -l 1G file. Creates a file of that size instantly."
  }),
  (_i: number) => ({
    q: "What does `truncate` do?",
    o: ["Sets file size (extends or shrinks)", "Truncates filename", "Removes content", "Compresses file"],
    c: 0,
    e: "truncate -s SIZE file sets the file to that size.",
    de: "Shrinking loses data. Extending creates a hole (sparse)."
  }),
  (_i: number) => ({
    q: "What is the purpose of /tmp?",
    o: ["Temporary files, often cleared at boot", "Permanent temp storage", "Template files", "Test files only"],
    c: 0,
    e: "/tmp is for temporary files. Often tmpfs (RAM) or cleared on reboot.",
    de: "Sticky bit set. $TMPDIR may point elsewhere. Use for scratch files."
  }),
  (_i: number) => ({
    q: "What does `mktemp` create?",
    o: ["Unique temporary file or directory", "Temp template", "Multiple temps", "Permanent temp"],
    c: 0,
    e: "mktemp creates a unique temp file. mktemp -d creates a directory.",
    de: "mktemp /tmp/foo.XXXXXX. Safe for scripts (no race)."
  }),
  (_i: number) => ({
    q: "What is a bind mount?",
    o: ["Makes one directory visible at another", "Binds two disks", "Mounts backup", "Binds users"],
    c: 0,
    e: "mount --bind /src /dst makes /src visible at /dst.",
    de: "Same filesystem, two paths. mount -o bind. Useful for chroot."
  }),
  (_i: number) => ({
    q: "What does `df -i` show?",
    o: ["Inode usage per filesystem", "Disk usage", "Index of files", "Input devices"],
    c: 0,
    e: "df -i shows inode usage (important for many small files).",
    de: "ext4 has limited inodes. Can run out before disk space."
  }),
  (_i: number) => ({
    q: "What does `ls -n` show?",
    o: ["Numeric UID/GID instead of names", "Number of files", "No output", "New files only"],
    c: 0,
    e: "ls -n shows numeric user and group IDs.",
    de: "Useful when NSS (name resolution) is broken or in initramfs."
  }),
  (_i: number) => ({
    q: "What does `getfacl file` show?",
    o: ["ACLs (access control list)", "File contents", "Facts about file", "File allocation"],
    c: 0,
    e: "getfacl displays access control lists for the file.",
    de: "Shows default and access ACLs. setfacl to modify."
  }),
  (_i: number) => ({
    q: "What does `chattr +i file` do?",
    o: ["Makes file immutable (even root cannot modify)", "Adds index", "Increments", "Ignores file"],
    c: 0,
    e: "chattr +i makes file immutable. chattr -i to remove.",
    de: "Extra protection. lsattr shows attributes. Only root can set."
  }),
  (_i: number) => ({
    q: "What does `lsattr` show?",
    o: ["Extended attributes (chattr flags)", "Standard attributes", "ACLs", "File type"],
    c: 0,
    e: "lsattr shows attributes set by chattr (e.g. immutable, append-only).",
    de: "i=immutable, a=append-only. Used for extra file protection."
  }),
  (_i: number) => ({
    q: "What is a character device?",
    o: ["Device that transfers data byte-by-byte", "Device with character", "Text device", "Keyboard only"],
    c: 0,
    e: "Character devices (e.g. /dev/tty) transfer data sequentially.",
    de: "Terminals, keyboards, random. No block buffering. /dev/random, /dev/null."
  }),
  (_i: number) => ({
    q: "What does /dev/null do?",
    o: ["Discards all data written to it", "Creates null files", "Deletes input", "Returns null"],
    c: 0,
    e: "/dev/null discards everything written; reads return EOF.",
    de: "cmd > /dev/null suppresses output. cmd 2>/dev/null suppresses errors."
  }),
  (_i: number) => ({
    q: "What does /dev/zero provide?",
    o: ["Infinite stream of null bytes", "Zeros for disk", "Zero files", "Empty output"],
    c: 0,
    e: "/dev/zero outputs infinite null bytes when read.",
    de: "dd if=/dev/zero of=file bs=1M count=100 creates 100MB zero file."
  }),
  (_i: number) => ({
    q: "What does /dev/random provide?",
    o: ["Cryptographically secure random bytes", "Random file", "Pseudo-random", "Random device list"],
    c: 0,
    e: "/dev/random blocks when entropy is low; /dev/urandom does not.",
    de: "Use /dev/urandom for most needs. /dev/random for high-security keys."
  }),
  (_i: number) => ({
    q: "What is the purpose of /var?",
    o: ["Variable data (logs, cache, spool)", "Variable files", "Various data", "Version control"],
    c: 0,
    e: "/var holds data that changes: logs, cache, mail, spool.",
    de: "/var/log, /var/cache, /var/spool. FHS standard."
  }),
  (_i: number) => ({
    q: "What is the purpose of /usr?",
    o: ["User-installed programs and read-only data", "User home", "User config", "User temp"],
    c: 0,
    e: "/usr contains user-space programs, libraries, share (read-only after install).",
    de: "/usr/bin, /usr/lib, /usr/share. Historically 'Unix System Resources'."
  }),
  (_i: number) => ({
    q: "What is the purpose of /etc?",
    o: ["System-wide configuration files", "Executables", "Temporary files", "User data"],
    c: 0,
    e: "/etc holds system configuration (not binaries).",
    de: "/etc/passwd, /etc/fstab, /etc/ssh. Editable config, not code."
  }),
  (_i: number) => ({
    q: "What does `namei -l path` show?",
    o: ["Path resolution with permissions", "Name index", "Link names", "File names only"],
    c: 0,
    e: "namei shows how a path resolves, with permissions at each level.",
    de: "Useful for debugging 'Permission denied'. Shows where access fails."
  }),
  (_i: number) => ({
    q: "What does `ionice` do?",
    o: ["Sets I/O scheduling class/priority", "Sets CPU nice", "I/O nice", "I/O count"],
    c: 0,
    e: "ionice sets I/O priority (idle, best-effort, realtime).",
    de: "ionice -c3 cmd runs with idle I/O (backup jobs). Reduces impact on system."
  }),
  (_i: number) => ({
    q: "What is tmpfs?",
    o: ["In-memory filesystem", "Temp file system", "Temporary fs", "Template fs"],
    c: 0,
    e: "tmpfs stores files in RAM. Fast but lost on unmount/reboot.",
    de: "/dev/shm and often /tmp. mount -t tmpfs tmpfs /mnt."
  }),
  (_i: number) => ({
    q: "What does `swapon -s` show?",
    o: ["Swap usage summary", "All swap", "Swap on", "Swap status"],
    c: 0,
    e: "swapon -s or swapon --show lists swap devices and usage.",
    de: "free -h also shows swap. swapon/swapoff to add/remove swap."
  }),
  (_i: number) => ({
    q: "What does `blockdev --getsize64 /dev/sda` show?",
    o: ["Device size in bytes", "Block size", "Block count", "Sector size"],
    c: 0,
    e: "blockdev --getsize64 returns device size in bytes.",
    de: "Low-level block device info. lsblk -b also shows size."
  }),
  (_i: number) => ({
    q: "What is the difference between / and /root?",
    o: ["/ is root of filesystem, /root is root user's home", "Same thing", "/root is root of /", "No difference"],
    c: 0,
    e: "/ is filesystem root. /root is the superuser's home directory.",
    de: "Don't confuse them. cd / vs cd /root."
  }),
  (_i: number) => ({
    q: "What does `debugfs` do?",
    o: ["Interactive ext filesystem debugger", "Debug filesystem", "Enable debug", "Debug fs"],
    c: 0,
    e: "debugfs is for ext2/3/4 filesystem debugging and repair.",
    de: "Advanced. fsck for normal repair. debugfs for low-level operations."
  }),
  (_i: number) => ({
    q: "What does `dumpe2fs` show?",
    o: ["ext filesystem superblock and group info", "Dump files", "Dump inodes", "Dump blocks"],
    c: 0,
    e: "dumpe2fs displays ext filesystem structure (superblock, block groups).",
    de: "dumpe2fs -h for superblock only. Useful for fs analysis."
  }),
  (_i: number) => ({
    q: "What does `resize2fs` do?",
    o: ["Resizes ext filesystem to partition size", "Resizes partition", "Resizes file", "Resizes inode"],
    c: 0,
    e: "resize2fs resizes ext2/3/4 filesystem (after expanding partition).",
    de: "Grow partition first (fdisk, parted), then resize2fs. Shrinking is trickier."
  }),
  (_i: number) => ({
    q: "What does `xfs_growfs` do?",
    o: ["Grows XFS filesystem to fill partition", "Grows partition", "Grows file", "Grows inode"],
    c: 0,
    e: "xfs_growfs expands XFS to use available space. Mount point as argument.",
    de: "XFS can only grow, not shrink. Common on RHEL/CentOS."
  }),
  (_i: number) => ({
    q: "What does `wipefs` do?",
    o: ["Removes filesystem signatures from device", "Wipes files", "Wipes fs", "Wipes partition"],
    c: 0,
    e: "wipefs erases magic strings (signatures) so device appears empty.",
    de: "wipefs -a /dev/sda. Dangerous! Makes data unrecoverable by normal means."
  }),
  (_i: number) => ({
    q: "What does `partprobe` do?",
    o: ["Informs kernel of partition table changes", "Probes partitions", "Creates partitions", "Lists partitions"],
    c: 0,
    e: "partprobe asks kernel to re-read partition table after fdisk/parted.",
    de: "Avoids reboot after partitioning. partprobe /dev/sda."
  }),
  (_i: number) => ({
    q: "What does `ls -Z` show (SELinux)?",
    o: ["SELinux security context", "Zero size files", "Compressed files", "Zipped files"],
    c: 0,
    e: "ls -Z shows SELinux context (user:role:type:level).",
    de: "Only on SELinux systems. getenforce shows if SELinux is enabled."
  }),
  (_i: number) => ({
    q: "What does `chcon` do?",
    o: ["Changes SELinux context of a file", "Changes ownership", "Changes permissions", "Changes config"],
    c: 0,
    e: "chcon changes SELinux context. restorecon restores default.",
    de: "chcon -t type file. semanage for persistent context changes."
  }),
  (_i: number) => ({
    q: "What is the purpose of /run?",
    o: ["Runtime data (since boot)", "Run scripts", "Running processes", "Run config"],
    c: 0,
    e: "/run holds runtime data (PIDs, sockets) since last boot.",
    de: "Replaces /var/run. tmpfs. Cleared on reboot."
  }),
  (_i: number) => ({
    q: "What does `file file.txt` determine?",
    o: ["File type from content (magic numbers)", "File size", "File name", "File permissions"],
    c: 0,
    e: "file examines content to guess type (not just extension).",
    de: "Uses magic numbers. file * shows types of all files."
  }),
  (_i: number) => ({
    q: "What does `basename` without suffix do?",
    o: ["Returns last path component", "Returns path", "Returns directory", "Returns extension"],
    c: 0,
    e: "basename /path/to/file.txt returns file.txt.",
    de: "basename path .txt returns file (strips suffix)."
  }),
  (_i: number) => ({
    q: "What does `dirname` return?",
    o: ["Directory part of path", "File name", "Full path", "Base name"],
    c: 0,
    e: "dirname /path/to/file.txt returns /path/to.",
    de: "Opposite of basename. Useful in scripts for path manipulation."
  }),
];

import { level2Intermediate } from './level2_intermediate_cli';
import { level2Expert } from './level2_expert_cli';

export const level2Patterns = beginner;
export const level2IntermediateA = level2Intermediate.slice(0, 50);
export const level2IntermediateB = level2Intermediate.slice(50, 100);
export const level2ExpertA = level2Expert.slice(0, 50);
export const level2ExpertB = level2Expert.slice(50, 123);
