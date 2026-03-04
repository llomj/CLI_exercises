// LEVEL 2 INTERMEDIATE — Filesystem & Storage (100 unique questions)
// Replaces placeholders. All options are meaningful, no "Option A/B/C/D".

export const level2Intermediate = [
  (_i: number) => ({
    q: "What does `chmod u=rwx,g=rx,o= file` set?",
    o: ["Owner rwx, group rx, others none", "All rwx", "User only rwx", "Group and others none"],
    c: 0,
    e: "Symbolic chmod: u/g/o with = sets exact permissions.",
    de: "chmod u+x adds execute for user. chmod o-w removes write for others."
  }),
  (_i: number) => ({
    q: "What does `umask 022` mean for new files?",
    o: ["Others get no write (default 644 for files)", "Mode 022", "Umask 022", "Group write off"],
    c: 0,
    e: "umask masks out bits. 022 means others and group don't get write.",
    de: "New file: 666 & ~022 = 644. New dir: 777 & ~022 = 755."
  }),
  (_i: number) => ({
    q: "What does `readlink -f /path/to/link` return?",
    o: ["Canonical absolute path of target", "Link target as-is", "Link path", "Error"],
    c: 0,
    e: "readlink -f resolves symlinks and . and .. to canonical path.",
    de: "readlink without -f shows raw target. realpath is similar."
  }),
  (_i: number) => ({
    q: "What happens if you delete the target of a symlink?",
    o: ["Symlink becomes dangling (broken)", "Symlink is deleted too", "Target is restored", "Error on access"],
    c: 0,
    e: "Symlink stores path; if target is gone, link points to nothing.",
    de: "ls shows red/broken. file link shows 'broken symbolic link'."
  }),
  (_i: number) => ({
    q: "What does `find . -type f -perm -4000` find?",
    o: ["Files with SUID bit set", "Files with 4000 permissions", "Executable files", "Read-only files"],
    c: 0,
    e: "-perm -4000 matches files that have at least SUID (4 in first octal).",
    de: "find . -perm -4000 finds SUID binaries. Security audit."
  }),
  (_i: number) => ({
    q: "What does `ls -l` show for a hard link?",
    o: ["Link count > 1, same inode as original", "Points to link", "Symlink indicator", "Different inode"],
    c: 0,
    e: "Hard links share inode. Link count shows how many names point to it.",
    de: "ls -li shows inode. Same inode = same file, different names."
  }),
  (_i: number) => ({
    q: "What does `df -T` add to df output?",
    o: ["Filesystem type column", "Total size", "Type of mount", "Timestamp"],
    c: 0,
    e: "df -T shows filesystem type (ext4, xfs, tmpfs, etc.).",
    de: "Useful to see what's mounted. df -hT for human + type."
  }),
  (_i: number) => ({
    q: "What does `du -x` do?",
    o: ["Excludes other filesystems (stay on one mount)", "Exclude files", "Extra mode", "Exact size"],
    c: 0,
    e: "du -x excludes directories on different mount points.",
    de: "du -shx / excludes /home if it's a separate mount. Avoids double-count."
  }),
  (_i: number) => ({
    q: "What does `ls -l` show for a directory's 'x' permission?",
    o: ["Execute = search/enter the directory", "Execute files inside", "Extra permission", "Exclude"],
    c: 0,
    e: "On directories, x means you can cd into it (search permission).",
    de: "Without x, you can't ls contents or cd. r alone lists names but not details."
  }),
  (_i: number) => ({
    q: "What does `chmod g+s directory` do?",
    o: ["Sets SGID so new files inherit directory's group", "Sets group sticky", "Group set", "SGID bit"],
    c: 0,
    e: "SGID on directory: new files get the directory's group.",
    de: "Useful for shared project dirs. ls -l shows 's' in group position."
  }),
  (_i: number) => ({
    q: "What does `ls -l` show for a symbolic link?",
    o: ["l in first char, -> target, size is target path length", "l and link count", "Points to file", "Symlink flag"],
    c: 0,
    e: "lrwxrwxrwx ... -> target. Size is length of target path string.",
    de: "readlink shows target. file shows 'symbolic link to ...'"
  }),
  (_i: number) => ({
    q: "What does `mount -o remount,ro /` do?",
    o: ["Remounts root as read-only", "Remounts with options", "Read-only remount", "Remount root"],
    c: 0,
    e: "remount changes options without unmounting. ro = read-only.",
    de: "Useful for maintenance. mount -o remount,rw / to make writable again."
  }),
  (_i: number) => ({
    q: "What is the purpose of /opt in FHS?",
    o: ["Optional/add-on software packages", "Operating system", "Optimization", "Output"],
    c: 0,
    e: "/opt holds optional software (third-party, add-ons).",
    de: "FHS: /opt for add-on packages. /usr/local for locally compiled."
  }),
  (_i: number) => ({
    q: "What does `ls -i` show?",
    o: ["Inode number of each file", "Index", "Info", "Identifier"],
    c: 0,
    e: "ls -i prints inode number before each filename.",
    de: "Hard links show same inode. Useful for debugging."
  }),
  (_i: number) => ({
    q: "What does `chown :group file` do?",
    o: ["Changes only the group (keeps owner)", "Changes to group", "Sets group", "Group change"],
    c: 0,
    e: "chown :group or chgrp changes group. Owner unchanged.",
    de: "chown user:group changes both. chown user: changes group to user's primary."
  }),
  (_i: number) => ({
    q: "What does `find . -maxdepth 2` do?",
    o: ["Limits search to 2 directory levels deep", "Finds max depth", "Depth 2 only", "Two levels"],
    c: 0,
    e: "maxdepth 2: current dir and one level below.",
    de: "find . -maxdepth 1 -type f. -mindepth for minimum depth."
  }),
  (_i: number) => ({
    q: "What does `stat -c '%A' file` show?",
    o: ["Permissions in symbolic form (e.g. -rwxr-xr-x)", "Access time", "All stats", "Attributes"],
    c: 0,
    e: "stat -c format string. %A = access rights in symbolic form.",
    de: "stat -c '%a' for octal. %U=%u owner, %G=%g group."
  }),
  (_i: number) => ({
    q: "What does `ls -L` do with symlinks?",
    o: ["Follows symlinks, shows target info", "Lists links", "Long format links", "Link info"],
    c: 0,
    e: "ls -L dereferences symlinks, shows info of target.",
    de: "Default ls shows link itself. -L shows what it points to."
  }),
  (_i: number) => ({
    q: "What does `chattr +a file` do?",
    o: ["Append-only: can only append, not overwrite", "Add attribute", "Archive", "Append mode"],
    c: 0,
    e: "chattr +a: file can only be appended to. Protects logs.",
    de: "Even root can't truncate. chattr -a to remove. lsattr shows."
  }),
  (_i: number) => ({
    q: "What does `getfacl -d file` show?",
    o: ["Default ACLs (for directories)", "Detailed ACLs", "Directory ACLs", "Default access"],
    c: 0,
    e: "getfacl -d shows default ACLs (inherited by new files in dir).",
    de: "setfacl -d to set default. New files in dir inherit default ACLs."
  }),
  (_i: number) => ({
    q: "What does `fuser -v /mnt` show?",
    o: ["Processes using that mount point", "File users", "Users of file", "Process list"],
    c: 0,
    e: "fuser shows PIDs of processes using the file/directory.",
    de: "fuser -km /mnt kills them. Useful before umount."
  }),
  (_i: number) => ({
    q: "What does `lsof +D /var/log` list?",
    o: ["Files opened under that directory", "Log files open", "Directory usage", "Open files in dir"],
    c: 0,
    e: "lsof +D dir lists all files open under that directory.",
    de: "lsof /path for specific file. +D is recursive."
  }),
  (_i: number) => ({
    q: "What does `mount --bind /src /dst` achieve?",
    o: ["Makes /src visible at /dst (same content)", "Binds two dirs", "Bind mount", "Mirror mount"],
    c: 0,
    e: "Bind mount: same filesystem visible at two paths.",
    de: "mount -o bind. Useful for chroot, overlays, or exposing subdirs."
  }),
  (_i: number) => ({
    q: "What does `find . -empty` find?",
    o: ["Empty files and directories", "Empty only", "Zero size", "Empty content"],
    c: 0,
    e: "find -empty matches empty files (0 bytes) and empty directories.",
    de: "find . -type f -empty for files only. Useful for cleanup."
  }),
  (_i: number) => ({
    q: "What does `rsync -a` preserve?",
    o: ["Permissions, timestamps, ownership, symlinks (archive mode)", "All files", "Archive", "Attributes"],
    c: 0,
    e: "rsync -a = archive: preserves permissions, times, owner, group, symlinks.",
    de: "Equivalent to -rlptgoD. Standard for backups."
  }),
  (_i: number) => ({
    q: "What does `cp -a source dest` do?",
    o: ["Archive copy: preserves all attributes", "All files", "Archive mode", "Attributes copy"],
    c: 0,
    e: "cp -a preserves permissions, timestamps, links. Like cp -dpR.",
    de: "Use for backups. -d = no dereference, -p = preserve, -R = recursive."
  }),
  (_i: number) => ({
    q: "What does `mv` do across filesystems?",
    o: ["Copy + delete (not atomic rename)", "Move fails", "Same as same-fs", "Copies only"],
    c: 0,
    e: "Across filesystems, mv copies then removes (can't rename across mounts).",
    de: "Same filesystem: mv is rename (atomic). Different: copy + unlink."
  }),
  (_i: number) => ({
    q: "What does `ln -n` do (GNU ln)?",
    o: ["Don't dereference existing symlink dir", "No overwrite", "New link", "No follow"],
    c: 0,
    e: "ln -n: if target is symlink to dir, don't follow it.",
    de: "Prevents replacing symlink with directory. -n = --no-dereference."
  }),
  (_i: number) => ({
    q: "What does `find . -mtime -1` find?",
    o: ["Files modified in last 24 hours", "Modified today", "Last day", "Recent mods"],
    c: 0,
    e: "-mtime -1: modified less than 1 day ago. -mtime +7: over 7 days.",
    de: "Times in 24-hour units. -mmin for minutes. -atime for access."
  }),
  (_i: number) => ({
    q: "What does `setfacl -m u:jane:rw file` do?",
    o: ["Adds ACL: user jane gets rw", "Modifies ACL", "Sets user ACL", "Jane read-write"],
    c: 0,
    e: "setfacl -m adds/modifies ACL. u:jane:rw gives jane read and write.",
    de: "getfacl to view. setfacl -x u:jane to remove. -b to remove all ACLs."
  }),
  (_i: number) => ({
    q: "What does `pathchk -p` check?",
    o: ["Portable filename (POSIX safe chars)", "Path check", "Portable path", "Path validity"],
    c: 0,
    e: "pathchk -p checks if path is portable (POSIX portable filename).",
    de: "Rejects spaces, special chars. Useful before creating cross-platform paths."
  }),
  (_i: number) => ({
    q: "What does `install -m 755 -d /path/to/dir` do?",
    o: ["Creates directory with 755 permissions", "Installs dir", "Makes directory", "Dir with mode"],
    c: 0,
    e: "install -d creates directory. -m sets mode. Like mkdir -p with chmod.",
    de: "install copies files with specific mode/owner. -d for directories."
  }),
  (_i: number) => ({
    q: "What does `split -b 1M file` produce?",
    o: ["Files of 1MB each (xaa, xab, ...)", "Split by 1M", "1M chunks", "Split file"],
    c: 0,
    e: "split -b 1M splits file into 1MB chunks. Default prefix x.",
    de: "cat x* to rejoin. -l 1000 for lines. -n for number of chunks."
  }),
  (_i: number) => ({
    q: "What does `shred -v file` do?",
    o: ["Overwrites file with random data (verbose)", "Shreds file", "Secure delete", "Overwrite"],
    c: 0,
    e: "shred overwrites before unlink. -v = verbose. -n 3 for 3 passes.",
    de: "Not guaranteed on journaling FS. Consider full-disk encryption."
  }),
  (_i: number) => ({
    q: "What does `flock file cmd` do?",
    o: ["Runs cmd with exclusive lock on file", "File lock", "Locks file", "Exclusive lock"],
    c: 0,
    e: "flock acquires advisory lock on file, runs command, releases.",
    de: "flock /tmp/lock.lock ./script.sh. Prevents concurrent runs."
  }),
  (_i: number) => ({
    q: "What does `ls -U` do?",
    o: ["Unsorted (directory order)", "Unicode", "Universal", "Unchanged"],
    c: 0,
    e: "ls -U disables sorting. Shows order as stored in directory.",
    de: "Faster on huge dirs. Order is filesystem-dependent."
  }),
  (_i: number) => ({
    q: "What does `find . -name '*.txt' -exec rm {} \\;` do?",
    o: ["Deletes each matching file (one rm per file)", "Removes matches", "Exec rm", "Delete matches"],
    c: 0,
    e: "-exec runs command for each match. {} is replaced. \\; ends -exec.",
    de: "find ... -exec rm {} + is faster (batches). -delete is simpler for rm."
  }),
  (_i: number) => ({
    q: "What does `find . -printf '%p %s\\n'` do?",
    o: ["Prints path and size for each file", "Print format", "Path and size", "Custom output"],
    c: 0,
    e: "find -printf uses format specifiers. %p=path, %s=size.",
    de: "%m=mode, %u=user, %T=modtime. More efficient than -exec stat."
  }),
  (_i: number) => ({
    q: "What does `locate` use as its database?",
    o: ["updatedb's file list (mlocate)", "Live filesystem", "Index", "Search db"],
    c: 0,
    e: "locate searches pre-built database. updatedb builds it.",
    de: "Fast but may be stale. find is real-time. locate -i for case-insensitive."
  }),
  (_i: number) => ({
    q: "What does `which -a cmd` show?",
    o: ["All paths that would run cmd", "All matches", "All which", "All locations"],
    c: 0,
    e: "which -a lists all executables in PATH with that name.",
    de: "Useful when you have multiple (e.g. python, python3)."
  }),
  (_i: number) => ({
    q: "What does `type -a ls` show?",
    o: ["All definitions (alias, builtin, path)", "All types", "All ls", "All locations"],
    c: 0,
    e: "type -a shows how name is resolved: alias, builtin, or path.",
    de: "type ls might show 'ls is aliased to ls --color'. type -a for all."
  }),
  (_i: number) => ({
    q: "What does `readlink` without -f return for a symlink?",
    o: ["Target path as stored (may be relative)", "Absolute path", "Resolved path", "Full path"],
    c: 0,
    e: "readlink returns the link target string as-is (relative or absolute).",
    de: "readlink -f resolves to canonical absolute. readlink -e requires target to exist."
  }),
  (_i: number) => ({
    q: "What does `chmod -R u+w directory` do?",
    o: ["Recursively adds write for owner on all files", "Recursive chmod", "Add write", "Recurse"],
    c: 0,
    e: "chmod -R applies to directory and all contents recursively.",
    de: "Careful with -R. chmod -R a+rX adds read+execute (X=dirs only)."
  }),
  (_i: number) => ({
    q: "What does `ls -1` do?",
    o: ["One file per line (single column)", "First file only", "One entry", "Single column"],
    c: 0,
    e: "ls -1 forces one entry per line. Useful for piping.",
    de: "Default for non-tty. ls | wc -l counts files."
  }),
  (_i: number) => ({
    q: "What does `stat -f` (BSD) or `stat --file-system` show?",
    o: ["Filesystem info (block size, total blocks)", "File system", "FS stats", "Block info"],
    c: 0,
    e: "stat -f shows filesystem-level info, not file-level.",
    de: "df uses similar info. Block size, total/free blocks."
  }),
  (_i: number) => ({
    q: "What does `touch -r ref file` do?",
    o: ["Sets file's times to match ref file", "Reference touch", "Copy times", "Match ref"],
    c: 0,
    e: "touch -r uses reference file's timestamps for target.",
    de: "touch -r source dest. Useful for preserving times when copying."
  }),
  (_i: number) => ({
    q: "What does `cp -l source dest` do?",
    o: ["Creates hard link instead of copy", "Link copy", "Hard link", "Link mode"],
    c: 0,
    e: "cp -l creates hard links when possible (same filesystem).",
    de: "Saves space. Same inode. -s for symlinks."
  }),
  (_i: number) => ({
    q: "What does `cp -s source dest` do?",
    o: ["Creates symbolic link instead of copy", "Symlink copy", "Symbolic link", "Link copy"],
    c: 0,
    e: "cp -s creates symlink. dest is link pointing to source.",
    de: "Like ln -s. dest is the link name."
  }),
  (_i: number) => ({
    q: "What does `install -o root -g root file /usr/bin/` do?",
    o: ["Copies file with root:root ownership", "Installs as root", "Sets owner", "Root install"],
    c: 0,
    e: "install -o -g sets owner and group on installed file.",
    de: "Common for system installs. install -m 755 -o root script /usr/local/bin/"
  }),
  (_i: number) => ({
    q: "What does `mknod /dev/loop0 b 7 0` create?",
    o: ["Block device node for loop device", "Device node", "Loop device", "Block device"],
    c: 0,
    e: "mknod creates device node. b=block, 7 0=major,minor for loop.",
    de: "Usually use losetup. mknod for creating custom device nodes."
  }),
  (_i: number) => ({
    q: "What does `losetup -f` do?",
    o: ["Finds next free loop device", "Find free", "First free", "Free loop"],
    c: 0,
    e: "losetup -f prints first available loop device (e.g. /dev/loop0).",
    de: "loop=$(losetup -f); losetup $loop image.img"
  }),
  (_i: number) => ({
    q: "What does `ls -F` add to output?",
    o: ["Type indicators (/ = dir, * = exec, @ = symlink)", "File type", "Indicators", "Suffix"],
    c: 0,
    e: "ls -F appends / for dirs, * for executables, @ for symlinks.",
    de: "= for sockets, | for FIFOs. Quick visual scan."
  }),
  (_i: number) => ({
    q: "What does `ls -o` do (GNU ls)?",
    o: ["Like -l but omits group", "Owner only", "Long no group", "Omit group"],
    c: 0,
    e: "ls -o is -l without group column.",
    de: "ls -g omits owner. -l is full long format."
  }),
  (_i: number) => ({
    q: "What does `ls -G` do (BSD/macOS)?",
    o: ["Disables colorized output", "No color", "Disable color", "Grayscale"],
    c: 0,
    e: "ls -G turns off colors (opposite of --color).",
    de: "ls --color=never on GNU. -G on macOS is different (no group)."
  }),
  (_i: number) => ({
    q: "What does `ls --color=auto` do?",
    o: ["Colors only when output is terminal", "Auto color", "Terminal color", "Smart color"],
    c: 0,
    e: "auto: color when stdout is tty, no color when piped.",
    de: "ls | cat gets no color. ls --color=always always colors."
  }),
  (_i: number) => ({
    q: "What does `du -c` add?",
    o: ["Grand total at end", "Total", "Sum", "Count total"],
    c: 0,
    e: "du -c prints total of all arguments at end.",
    de: "du -ch * shows human-readable with total. -s for per-dir summary."
  }),
  (_i: number) => ({
    q: "What does `df --output=source,avail` show?",
    o: ["Only source and available columns", "Custom columns", "Source and avail", "Selected fields"],
    c: 0,
    e: "df --output= selects which columns to display.",
    de: "Fields: source, fstype, itotal, iused, avail, pcent, target."
  }),
  (_i: number) => ({
    q: "What does `find . -links +1` find?",
    o: ["Files with more than one hard link", "Multiple links", "Hard links", "Link count > 1"],
    c: 0,
    e: "find -links +1 finds files that have 2+ hard links.",
    de: "Same as link count in ls -l. -links 2 finds exactly 2 links."
  }),
  (_i: number) => ({
    q: "What does `find . -samefile name` find?",
    o: ["All files with same inode as name", "Same file", "Hard links to name", "Identical"],
    c: 0,
    e: "find -samefile finds all paths to same inode (hard links).",
    de: "find . -samefile /path/to/file. Shows all names for that file."
  }),
  (_i: number) => ({
    q: "What does `find . -newer reference` find?",
    o: ["Files newer than reference (mtime)", "Newer than ref", "Modified after", "Recent"],
    c: 0,
    e: "find -newer finds files modified after reference file.",
    de: "find . -newer timestamp_file. -anewer for access, -cnewer for change."
  }),
  (_i: number) => ({
    q: "What does `find . -size +100M` find?",
    o: ["Files larger than 100MB", "Size > 100M", "Big files", "Over 100M"],
    c: 0,
    e: "find -size +100M: files larger than 100 megabytes.",
    de: "-size -10k for smaller. -size 0 for empty. Units: k, M, G."
  }),
  (_i: number) => ({
    q: "What does `find . -user root` find?",
    o: ["Files owned by user root", "Root's files", "User root", "Root owned"],
    c: 0,
    e: "find -user finds files owned by that user. -uid for numeric.",
    de: "find -group wheel. -nouser finds orphaned (deleted user)."
  }),
  (_i: number) => ({
    q: "What does `find . -nouser` find?",
    o: ["Files whose owner is not in /etc/passwd", "Orphaned files", "No user", "Invalid owner"],
    c: 0,
    e: "find -nouser: owner UID not in passwd (user was deleted).",
    de: "Security/cleanup. chown to fix. -nogroup similar."
  }),
  (_i: number) => ({
    q: "What does `find . -path './.git' -prune` do?",
    o: ["Skips .git directory (doesn't descend)", "Prune git", "Skip git", "Exclude git"],
    c: 0,
    e: "-prune prevents descending into matched directory.",
    de: "find . -path './.git' -prune -o -print. Excludes .git from search."
  }),
  (_i: number) => ({
    q: "What does `tree -P '*.c'` show?",
    o: ["Only paths matching *.c", "Pattern filter", "C files only", "Filter by pattern"],
    c: 0,
    e: "tree -P pattern shows only files matching pattern.",
    de: "tree -I 'node_modules' excludes. -P includes only."
  }),
  (_i: number) => ({
    q: "What does `tree -L 1` do?",
    o: ["Limits depth to 1 (current dir only)", "One level", "Depth 1", "Shallow"],
    c: 0,
    e: "tree -L 1 shows only one level (no recursion).",
    de: "tree -L 2 = current + one level down. Like find -maxdepth."
  }),
  (_i: number) => ({
    q: "What does `ncdu -x` do?",
    o: ["Stays on one filesystem (like du -x)", "Exclude", "One fs", "Cross-fs off"],
    c: 0,
    e: "ncdu -x excludes other mount points.",
    de: "Avoids scanning /proc, /sys, other mounts. Faster, accurate."
  }),
  (_i: number) => ({
    q: "What does `fdisk -l /dev/sda` show?",
    o: ["Partition table of that disk", "Disk partitions", "Partition list", "Disk layout"],
    c: 0,
    e: "fdisk -l lists partitions. Without device, lists all.",
    de: "Requires root. lsblk is simpler for quick view."
  }),
  (_i: number) => ({
    q: "What does `parted /dev/sda print` do?",
    o: ["Prints partition table (non-interactive)", "Print partitions", "Partition info", "Disk table"],
    c: 0,
    e: "parted print shows partition layout. Scriptable.",
    de: "parted is GPT-aware. fdisk for MBR. Both need root."
  }),
  (_i: number) => ({
    q: "What does `lsblk -f` add?",
    o: ["Filesystem type, UUID, label", "FS info", "Filesystem details", "UUID and type"],
    c: 0,
    e: "lsblk -f shows filesystem, UUID, FSTYPE, LABEL.",
    de: "Useful for fstab. lsblk -o NAME,SIZE,FSTYPE,MOUNTPOINT."
  }),
  (_i: number) => ({
    q: "What does `blkid -o value -s UUID /dev/sda1` output?",
    o: ["Only the UUID value", "UUID only", "Value of UUID", "Just UUID"],
    c: 0,
    e: "blkid -o value -s UUID outputs just the UUID string.",
    de: "For scripts. blkid -s PARTUUID for partition UUID."
  }),
  (_i: number) => ({
    q: "What does `e2fsck -f` do?",
    o: ["Forces check even if filesystem seems clean", "Force check", "Full check", "Force fsck"],
    c: 0,
    e: "e2fsck -f forces check. Normally skips clean filesystems.",
    de: "Unmount first. e2fsck -y for non-interactive. -n for no changes."
  }),
  (_i: number) => ({
    q: "What does `tune2fs -c 100 /dev/sda1` set?",
    o: ["Max mount count before forced check", "Check interval", "Mount count", "Fsck trigger"],
    c: 0,
    e: "tune2fs -c N: after N mounts, fsck runs (or warn).",
    de: "tune2fs -i 2w for time-based. -c 0 or -i 0 disables."
  }),
  (_i: number) => ({
    q: "What does `dumpe2fs -h` show?",
    o: ["Superblock only (no block groups)", "Header only", "Superblock", "Short dump"],
    c: 0,
    e: "dumpe2fs -h shows superblock. Full dump is large.",
    de: "Block count, block size, inode count. -h = header."
  }),
  (_i: number) => ({
    q: "What does `debugfs -R 'lsdel' /dev/sda1` list?",
    o: ["Deleted inodes (recoverable)", "Deleted files", "Orphan inodes", "Lost files"],
    c: 0,
    e: "debugfs -R 'lsdel' lists inodes marked deleted.",
    de: "Advanced recovery. dump_inode, undel for recovery. Risky."
  }),
  (_i: number) => ({
    q: "What does `fallocate -l 1G -o 0 file` do?",
    o: ["Preallocates 1GB at offset 0", "Allocate at offset", "1G at start", "Preallocate"],
    c: 0,
    e: "fallocate -l size -o offset. -o 0 = from start.",
    de: "Creates sparse file or allocates blocks. -n for keep size (punch hole)."
  }),
  (_i: number) => ({
    q: "What does `truncate -s 0 file` do?",
    o: ["Empties file (size 0, keeps inode)", "Truncate to zero", "Empty file", "Clear file"],
    c: 0,
    e: "truncate -s 0 sets file to 0 bytes. Content gone.",
    de: "Faster than > file. Log rotation: truncate -s 0 log.txt"
  }),
  (_i: number) => ({
    q: "What does `mktemp -u` do?",
    o: ["Prints name only, doesn't create file", "Dry run", "Unlink", "Name only"],
    c: 0,
    e: "mktemp -u generates name without creating. Use with care (race).",
    de: "Generally avoid -u. mktemp creates and returns name."
  }),
  (_i: number) => ({
    q: "What does `mktemp -d` create?",
    o: ["Temporary directory", "Temp dir", "Directory", "Dir only"],
    c: 0,
    e: "mktemp -d creates a temporary directory.",
    de: "tmpdir=$(mktemp -d); ...; rm -rf $tmpdir"
  }),
  (_i: number) => ({
    q: "What does `tmpwatch 24 /tmp` do (tmpwatch/tmpreaper)?",
    o: ["Removes files not accessed in 24 hours", "Clean old files", "Tmp cleanup", "Remove unused"],
    c: 0,
    e: "tmpwatch removes files not accessed in N hours.",
    de: "Cron job for /tmp cleanup. tmpreaper is Debian alternative."
  }),
  (_i: number) => ({
    q: "What does `swapoff -a` do?",
    o: ["Disables all swap devices", "Turn off swap", "Disable swap", "No swap"],
    c: 0,
    e: "swapoff -a disables all swap. swapon -a re-enables.",
    de: "Requires enough free RAM. Used before hibernation or resize."
  }),
  (_i: number) => ({
    q: "What does `blockdev --getss /dev/sda` return?",
    o: ["Sector size in bytes", "Sector size", "Block sector", "Sector bytes"],
    c: 0,
    e: "blockdev --getss returns logical sector size (usually 512).",
    de: "blockdev --getsize64 for total size. --getss for sector."
  }),
  (_i: number) => ({
    q: "What does `hdparm -I /dev/sda` show?",
    o: ["Drive identification and capabilities", "Drive info", "HD info", "Disk identity"],
    c: 0,
    e: "hdparm -I shows model, serial, capabilities, supported features.",
    de: "Requires root. hdparm -t for read speed test."
  }),
  (_i: number) => ({
    q: "What does `smartctl -a /dev/sda` show?",
    o: ["SMART health and attributes", "Disk health", "SMART data", "Drive status"],
    c: 0,
    e: "smartctl reads SMART data: health, temperature, errors.",
    de: "smartctl -H for pass/fail. -a for full. Predicts failure."
  }),
  (_i: number) => ({
    q: "What does `namei -l /path/to/file` show?",
    o: ["Path resolution with permissions at each level", "Name resolution", "Path walk", "Permission chain"],
    c: 0,
    e: "namei shows each component of path and its permissions.",
    de: "Debug 'Permission denied'. Shows where access fails."
  }),
  (_i: number) => ({
    q: "What does `ionice -c 3 command` do?",
    o: ["Runs command with idle I/O priority", "Idle I/O", "Low priority I/O", "Background I/O"],
    c: 0,
    e: "ionice -c 3 = idle class. Doesn't compete for I/O.",
    de: "Good for backups. -c 1 = realtime, -c 2 = best-effort (default)."
  }),
  (_i: number) => ({
    q: "What does `getfattr -d file` show?",
    o: ["Extended attribute names and values", "xattr dump", "Attributes", "Extended attrs"],
    c: 0,
    e: "getfattr -d shows extended attribute values.",
    de: "getfattr -m . shows all. setfattr to set. Used by SELinux, capabilities."
  }),
  (_i: number) => ({
    q: "What does `setfattr -n user.comment -v 'note' file` do?",
    o: ["Sets extended attribute user.comment to 'note'", "Sets xattr", "User attribute", "Comment attr"],
    c: 0,
    e: "setfattr -n name -v value. user. namespace for user-defined.",
    de: "getfattr -d to read. Used for metadata, tagging."
  }),
  (_i: number) => ({
    q: "What does `restorecon -Rv /path` do?",
    o: ["Restores default SELinux contexts recursively", "Restore context", "SELinux restore", "Fix context"],
    c: 0,
    e: "restorecon resets SELinux context to default from policy.",
    de: "After copying files or mislabeling. -R recursive, -v verbose."
  }),
  (_i: number) => ({
    q: "What does `getenforce` output?",
    o: ["Enforcing, Permissive, or Disabled", "SELinux state", "Enforce mode", "SELinux status"],
    c: 0,
    e: "getenforce shows SELinux mode. setenforce 0 for permissive.",
    de: "Enforcing=deny. Permissive=log only. Disabled=off."
  }),
  (_i: number) => ({
    q: "What does `ls -Z` show on SELinux system?",
    o: ["Security context (user:role:type:level)", "SELinux context", "Security label", "Context"],
    c: 0,
    e: "ls -Z shows SELinux context. user:role:type:level.",
    de: "id -Z for process. getenforce to check if SELinux enabled."
  }),
  (_i: number) => ({
    q: "What does `chcon -t httpd_sys_content_t /var/www` do?",
    o: ["Sets SELinux type for web content", "Change context", "HTTP type", "Web context"],
    c: 0,
    e: "chcon -t sets type. httpd_sys_content_t for web dirs.",
    de: "semanage fcontext for persistent. restorecon applies policy."
  }),
  (_i: number) => ({
    q: "What is /sys/block?",
    o: ["Directory of block devices (disks)", "Block devices", "Disk list", "Block device dir"],
    c: 0,
    e: "/sys/block contains subdirs for each block device.",
    de: "sysfs. /sys/block/sda for disk. Contains queue, size, etc."
  }),
  (_i: number) => ({
    q: "What does /proc/mounts show?",
    o: ["Currently mounted filesystems", "Mount list", "Mounted fs", "Active mounts"],
    c: 0,
    e: "/proc/mounts is similar to mount output. Used by mount.",
    de: "/proc/self/mountinfo has more detail. findmnt is friendlier."
  }),
  (_i: number) => ({
    q: "What does /proc/self/exe point to?",
    o: ["Executable of current process", "Process exe", "Binary path", "Running program"],
    c: 0,
    e: "/proc/self/exe is symlink to the running program.",
    de: "readlink /proc/self/exe. Useful in scripts to find own path."
  }),
  (_i: number) => ({
    q: "What does `ls -b` show for special characters?",
    o: ["Escape sequences for non-printable chars", "Brief format", "Binary mode", "Backslash escape"],
    c: 0,
    e: "ls -b shows \\n, \\t etc. for special chars in filenames.",
    de: "Useful when filenames have newlines or tabs. ls -b for safe display."
  }),
  (_i: number) => ({
    q: "What does `ls -Q` do (GNU)?",
    o: ["Quotes filenames for safe parsing", "Quote names", "Safe output", "Quoted output"],
    c: 0,
    e: "ls -Q wraps names in double quotes. Safe for eval or parsing.",
    de: "ls --quoting=shell. Avoids injection. For script consumption."
  }),
  (_i: number) => ({
    q: "What does `du -b` show?",
    o: ["Size in bytes", "Block size", "Brief", "Byte count"],
    c: 0,
    e: "du -b shows apparent size in bytes. -B 1 equivalent.",
    de: "du -b for exact bytes. -h for human. -b for script parsing."
  }),
  (_i: number) => ({
    q: "What does `df --total` add?",
    o: ["Total row at bottom", "Grand total", "Sum row", "Total line"],
    c: 0,
    e: "df --total adds total line. Sum of all filesystems.",
    de: "df -h --total. Useful for overview. May double-count."
  }),
  (_i: number) => ({
    q: "What does `find . -executable` find?",
    o: ["Files with execute permission", "Executable files", "Run permission", "Execute bit"],
    c: 0,
    e: "find -executable matches files you can execute.",
    de: "find . -type f -executable. Scripts, binaries. -readable, -writable too."
  }),
];
