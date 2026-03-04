// LEVEL 2 EXPERT — Filesystem & Storage (123 unique questions)
// Replaces placeholders. All options are meaningful, no "Option A/B/C/D".

export const level2Expert = [
  (_i: number) => ({
    q: "What does `chmod 4755 file` set?",
    o: ["rwxr-xr-x with SUID", "SUID executable", "Setuid 755", "SUID bit"],
    c: 0,
    e: "4 in first digit = SUID. 4755 = rwsr-xr-x.",
    de: "Process runs as file owner. Common for passwd, sudo.",
    deBeginner: "chmod 4755 sets permissions to rwxr-xr-x and adds the SUID bit (4). When you run the file, the process runs as the file owner. Used for passwd, sudo.",
    deExpert: "chmod 4755: mode 0755 + S_ISUID. Process effective uid = file owner. setuid binary. passwd, sudo."
  }),
  (_i: number) => ({
    q: "What does `chmod 2755 directory` set?",
    o: ["rwxr-sr-x with SGID", "SGID directory", "Setgid 755", "SGID bit"],
    c: 0,
    e: "2 in first digit = SGID. New files inherit group.",
    de: "chmod g+s. 2755 = rwxr-sr-x. s in group position.",
    deBeginner: "chmod 2755 sets rwxr-xr-x and the SGID bit (2). New files in the directory inherit the directory's group. ls -l shows 's' in the group position.",
    deExpert: "chmod 2755: S_ISGID. New files inherit dir gid. chmod g+s. Shared dirs."
  }),
  (_i: number) => ({
    q: "What does `chmod 1777 directory` set?",
    o: ["rwxrwxrwt (sticky bit)", "Sticky directory", "Sticky 777", "Sticky bit"],
    c: 0,
    e: "1 in first digit = sticky. 1777 = rwxrwxrwt. t = sticky.",
    de: "Like /tmp. Users can only delete own files.",
    deBeginner: "chmod 1777 sets rwxrwxrwx plus the sticky bit (1). Like /tmp: anyone can create files but only the owner (or root) can delete a file. The 't' appears in the others position.",
    deExpert: "chmod 1777: S_ISVTX sticky. Only owner/root can unlink. /tmp. t in ls -l."
  }),
  (_i: number) => ({
    q: "Why can't you hard-link across filesystems?",
    o: ["Inodes are unique per filesystem", "Different fs", "Inode scope", "FS boundary"],
    c: 0,
    e: "Inode numbers are only unique within one filesystem.",
    de: "Hard links share inode. Different mount = different inode space.",
    deBeginner: "A hard link is the same inode with another name. Inode numbers only identify a file on one filesystem, so you can't point a name on another mount to that inode.",
    deExpert: "Hard link = same inode, second name. inode number unique per FS. link(2) same device only."
  }),
  (_i: number) => ({
    q: "What does `find . -inum 12345` find?",
    o: ["All paths with that inode (hard links)", "Inode 12345", "Same file", "Hard links"],
    c: 0,
    e: "find -inum finds all names for that inode.",
    de: "Shows all hard links to a file. ls -i for inode number.",
    deBeginner: "find -inum 12345 finds every path that has inode 12345—i.e. all hard links to that file. Use ls -i to get the inode number of a file.",
    deExpert: "find -inum n: all paths with st_ino n. All hard links. ls -i for inode."
  }),
  (_i: number) => ({
    q: "What does `mount -o noatime` do?",
    o: ["Disables access time updates (performance)", "No atime", "Skip atime", "Atime off"],
    c: 0,
    e: "noatime: don't update access time on read. Faster.",
    de: "Reduces writes. relatime is default on many (update atime less often).",
    deBeginner: "mount -o noatime stops the kernel from updating the file's access time on read. Fewer writes, better performance. Many systems use relatime (update atime only sometimes) by default.",
    deExpert: "mount -o noatime: no atime updates. MS_NOATIME. relatime default. Fewer writes."
  }),
  (_i: number) => ({
    q: "What does `mount -o nodiratime` do?",
    o: ["Disables atime on directories only", "No dir atime", "Dir atime off", "Directory atime"],
    c: 0,
    e: "nodiratime: don't update atime when listing directories.",
    de: "Often used with noatime. Some FS combine them.",
    deBeginner: "nodiratime disables access time updates only for directories (e.g. when you ls). Often used with noatime. Some filesystems treat noatime as implying nodiratime.",
    deExpert: "nodiratime: no atime on dirs. MS_NODIRATIME. Often with noatime. FS may combine."
  }),
  (_i: number) => ({
    q: "What does `mount -o bind,ro /src /dst` do?",
    o: ["Read-only bind mount", "Bind read-only", "RO bind", "Immutable bind"],
    c: 0,
    e: "bind,ro: same content at /dst but read-only.",
    de: "Original can stay rw. Useful for safe chroot.",
    deBeginner: "mount -o bind,ro makes /src visible at /dst but read-only at /dst. The original can stay writable. Good for a read-only chroot or safe view.",
    deExpert: "mount -o bind,ro: bind + MS_RDONLY. /dst ro, /src can stay rw. Chroot safety."
  }),
  (_i: number) => ({
    q: "What is a stacked mount?",
    o: ["Mount on top of existing mount (overlay)", "Overlay mount", "Stack mount", "Layered mount"],
    c: 0,
    e: "Stacking: mount over existing. overlayfs, bind over bind.",
    de: "Overlay: lower + upper. Union mounts. Containers use this.",
    deBeginner: "A stacked mount is a mount on top of an existing mount (e.g. overlayfs with lower and upper, or bind over bind). Containers often use overlay for layers.",
    deExpert: "Stacked: mount over mount. overlayfs lower+upper. Union. Containers. Propagation."
  }),
  (_i: number) => ({
    q: "What does `mount --make-private /mnt` do?",
    o: ["Makes mount private (not shared with peers)", "Private mount", "Unshare mount", "Isolate mount"],
    c: 0,
    e: "mount --make-private: changes propagation. Not shared.",
    de: "Propagation: shared, private, slave, unbindable. For namespaces.",
    deBeginner: "mount --make-private makes that mount private: mount/unmount events there are not propagated to other mount points. Propagation types: shared, private, slave, unbindable; used with namespaces.",
    deExpert: "mount --make-private: MS_PRIVATE. No propagation. shared/private/slave/unbindable. Namespaces."
  }),
  (_i: number) => ({
    q: "What does `findmnt --submounts /` show?",
    o: ["Mount tree under / including submounts", "Submounts", "Nested mounts", "Mount hierarchy"],
    c: 0,
    e: "findmnt --submounts shows mount tree recursively.",
    de: "findmnt -R. Clear view of what's mounted where.",
    deBeginner: "findmnt --submounts shows the full mount tree under /, including all submounts. findmnt -R is similar. Gives a clear picture of what is mounted where.",
    deExpert: "findmnt --submounts/-R: recursive mount tree. /proc/self/mountinfo. Clear hierarchy."
  }),
  (_i: number) => ({
    q: "What does `btrfs subvolume list /` show?",
    o: ["Btrfs subvolumes", "Subvolumes", "Btrfs volumes", "Subvolume list"],
    c: 0,
    e: "btrfs subvolume list shows subvolumes (btrfs feature).",
    de: "Subvolumes are like separate mounts. Snapshot is subvolume copy.",
    deBeginner: "btrfs subvolume list lists all btrfs subvolumes under the given path. Subvolumes behave like separate mountable roots. A snapshot is a copy-on-write subvolume.",
    deExpert: "btrfs subvolume list: list subvols. Subvol = independent tree. Snapshot = COW subvol. btrfs subvolume delete."
  }),
  (_i: number) => ({
    q: "What does `btrfs subvolume snapshot src dst` do?",
    o: ["Creates copy-on-write snapshot", "Btrfs snapshot", "COW snapshot", "Instant snapshot"],
    c: 0,
    e: "Snapshot is instant COW copy. Shares data until modified.",
    de: "Backup without full copy. btrfs subvolume delete to remove.",
    deBeginner: "btrfs subvolume snapshot creates an instant copy-on-write snapshot: dst shares blocks with src until either is modified. No full copy. btrfs subvolume delete to remove.",
    deExpert: "btrfs subvolume snapshot: COW clone. Instant. Shared blocks. btrfs subvolume delete."
  }),
  (_i: number) => ({
    q: "What does `xfs_repair` require?",
    o: ["Unmounted filesystem", "Unmounted", "Offline", "Not mounted"],
    c: 0,
    e: "xfs_repair needs unmounted filesystem. Unlike ext4.",
    de: "Boot from live USB if root. xfs_repair -n for dry run.",
    deBeginner: "xfs_repair must be run on an unmounted XFS filesystem (unlike e2fsck which can sometimes run on a mounted FS). Use a live USB if you need to repair root. xfs_repair -n for dry run.",
    deExpert: "xfs_repair: unmounted only. No online repair. Live USB for root. -n no modify."
  }),
  (_i: number) => ({
    q: "What does `xfs_admin -l` show?",
    o: ["Filesystem label", "XFS label", "Volume label", "FS label"],
    c: 0,
    e: "xfs_admin -l prints label. -L to set.",
    de: "xfs_admin -L mylabel /dev/sda1. For fstab LABEL=.",
    deBeginner: "xfs_admin -l shows the XFS filesystem label. xfs_admin -L mylabel /dev/sda1 sets it. Use LABEL=mylabel in fstab.",
    deExpert: "xfs_admin -l: label. -L set. fstab LABEL=. xfs_db also."
  }),
  (_i: number) => ({
    q: "What does `zfs list` show?",
    o: ["ZFS datasets and usage", "ZFS list", "Datasets", "ZFS usage"],
    c: 0,
    e: "zfs list shows datasets, used, avail, mountpoint.",
    de: "zfs list -r pool for recursive. zpool list for pools.",
    deBeginner: "zfs list shows ZFS datasets with used space, available, mountpoint. zfs list -r pool for recursive. zpool list lists pools.",
    deExpert: "zfs list: datasets, used, avail, mountpoint. -r recursive. zpool list pools."
  }),
  (_i: number) => ({
    q: "What does `zfs snapshot pool/ds@snap` create?",
    o: ["Instant ZFS snapshot", "ZFS snapshot", "Dataset snapshot", "COW snapshot"],
    c: 0,
    e: "zfs snapshot creates instant COW snapshot.",
    de: "zfs clone for writable. zfs rollback to restore.",
    deBeginner: "zfs snapshot creates an instant COW snapshot named @snap of pool/ds. zfs clone makes a writable copy. zfs rollback restores to a snapshot.",
    deExpert: "zfs snapshot: COW snapshot. zfs clone writable. zfs rollback restore. @name."
  }),
  (_i: number) => ({
    q: "What does `lsof +L1` list?",
    o: ["Deleted files still open (link count 0)", "Unlinked open files", "Deleted open", "Orphaned files"],
    c: 0,
    e: "lsof +L1 finds open files that were deleted (link count 0).",
    de: "File exists until process closes. Recover from /proc/PID/fd.",
    deBeginner: "lsof +L1 lists open files that have link count 0 (deleted but still held open). The file stays on disk until the process closes it. You can recover from /proc/PID/fd.",
    deExpert: "lsof +L1: link count 0, deleted open. File until close. /proc/PID/fd recover."
  }),
  (_i: number) => ({
    q: "What does `fuser -k -m /mnt` do?",
    o: ["Kills processes using that mount", "Kill users", "Force umount", "Kill mount users"],
    c: 0,
    e: "fuser -k sends SIGKILL to processes using /mnt.",
    de: "Last resort before umount -l. -k = kill, -m = mount.",
    deBeginner: "fuser -k -m /mnt sends SIGKILL to every process using that mount. Use as a last resort before umount -l. -k = kill, -m = treat as mount.",
    deExpert: "fuser -k -m: SIGKILL processes using mount. Last resort. umount -l lazy after."
  }),
  (_i: number) => ({
    q: "What does `umount -l` do?",
    o: ["Lazy unmount (detach when unused)", "Lazy umount", "Detach", "Lazy unmount"],
    c: 0,
    e: "umount -l: lazy. Detaches now, actually unmounts when no users.",
    de: "Use when fuser can't kill. Process holds it until exit.",
    deBeginner: "umount -l (lazy unmount) detaches the mount now; the filesystem is actually unmounted when no process is using it. Use when fuser can't kill the process; it will unmount when the process exits.",
    deExpert: "umount -l: MNT_DETACH. Lazy. Unmount when no users. Process holds until exit."
  }),
  (_i: number) => ({
    q: "What does `umount -f` do?",
    o: ["Force unmount (NFS, can cause issues)", "Force umount", "Forced unmount", "Force"],
    c: 0,
    e: "umount -f forces. For NFS when server unreachable.",
    de: "Can corrupt if FS has pending writes. Use carefully.",
    deBeginner: "umount -f forces an unmount (e.g. when NFS server is unreachable). Can cause corruption if the filesystem has pending writes. Use with care.",
    deExpert: "umount -f: force. NFS unreachable. Risk of corruption. Use carefully."
  }),
  (_i: number) => ({
    q: "What does `dd if=/dev/zero of=file bs=1M count=100` create?",
    o: ["100MB file of zeros", "Zero file", "100M zeros", "Sparse-like file"],
    c: 0,
    e: "dd creates 100MB file. if=input, of=output, bs=block size.",
    de: "Actually writes zeros. fallocate is faster for preallocation.",
    deBeginner: "dd reads from /dev/zero and writes 100 blocks of 1MB to file (100MB). if=input, of=output, bs=block size. It really writes zeros; fallocate is faster if you just need space.",
    deExpert: "dd: if input, of output, bs, count. Writes zeros. fallocate faster for prealloc."
  }),
  (_i: number) => ({
    q: "What does `dd if=file of=dev bs=4M status=progress` add?",
    o: ["Progress display during copy", "Progress", "Status", "Transfer progress"],
    c: 0,
    e: "status=progress shows bytes and speed during dd.",
    de: "dd if=img.iso of=/dev/sdb status=progress. Burn/restore.",
    deBeginner: "status=progress makes dd print progress (bytes written and speed) while copying. Useful for imaging: dd if=img.iso of=/dev/sdb status=progress.",
    deExpert: "dd status=progress: show bytes, rate. For imaging. SIGUSR1 also."
  }),
  (_i: number) => ({
    q: "What does `fallocate -n -p -o 0 -l 1M file` do?",
    o: ["Punch hole (deallocate) 1MB at start", "Punch hole", "Deallocate", "Hole punch"],
    c: 0,
    e: "fallocate -n -p punches hole: deallocates blocks.",
    de: "Creates sparse region. -n = keep size. -p = punch. Requires support.",
    deBeginner: "fallocate -n -p -o 0 -l 1M punches a 1MB hole at the start: deallocates those blocks (file becomes sparse). -n = keep size, -p = punch. FS must support it.",
    deExpert: "fallocate -n -p: FALLOC_FL_PUNCH_HOLE. Deallocate. Sparse. -o -l. FS support."
  }),
  (_i: number) => ({
    q: "What does `file -b file` output?",
    o: ["Brief (no filename in output)", "Brief", "No name", "Short output"],
    c: 0,
    e: "file -b omits filename. Just the type description.",
    de: "Useful in scripts. file -b -z for compressed.",
    deBeginner: "file -b prints only the type description, not the filename. Handy in scripts. file -b -z also looks inside compressed files.",
    deExpert: "file -b: brief, no filename. Scripts. -z compressed."
  }),
  (_i: number) => ({
    q: "What does `file -s /dev/sda1` do?",
    o: ["Reads block device (special file)", "Special file", "Block device", "Device file"],
    c: 0,
    e: "file -s: don't ignore block/char special files.",
    de: "Without -s, file says 'block special'. -s reads content.",
    deBeginner: "Normally file doesn't read block/char devices and just says 'block special'. file -s reads the device content and guesses the filesystem or type.",
    deExpert: "file -s: read special files. Without -s: 'block special'. -s reads content, type."
  }),
  (_i: number) => ({
    q: "What does `rsync -H` preserve?",
    o: ["Hard links", "Hard link", "Links", "Link structure"],
    c: 0,
    e: "rsync -H preserves hard links. Recreates link structure.",
    de: "Important for backups with many hard links. -a doesn't include -H.",
    deBeginner: "rsync -H preserves hard links: it recreates the link structure on the destination. Important for backups with many hard links. -a does not include -H.",
    deExpert: "rsync -H: preserve hard links. Recreate link structure. -a no -H. For backups."
  }),
  (_i: number) => ({
    q: "What does `rsync --delete` do?",
    o: ["Deletes files in dest not in source", "Sync delete", "Remove extra", "Mirror delete"],
    c: 0,
    e: "rsync --delete removes files in dest that aren't in source.",
    de: "Makes dest mirror of source. Dangerous! Test with --dry-run.",
    deBeginner: "rsync --delete deletes files on the destination that are not in the source, so dest becomes a mirror. Dangerous—always try with --dry-run first.",
    deExpert: "rsync --delete: mirror. Remove dest not in source. Dangerous. --dry-run first."
  }),
  (_i: number) => ({
    q: "What does `rsync -x` do?",
    o: ["Don't cross filesystem boundaries", "One filesystem", "No cross", "Stay on fs"],
    c: 0,
    e: "rsync -x excludes other filesystems (like du -x).",
    de: "Avoids /proc, /sys, other mounts. -x = one filesystem.",
    deBeginner: "rsync -x stays on one filesystem and doesn't cross mount points (like du -x). Avoids /proc, /sys, and other mounts.",
    deExpert: "rsync -x: one filesystem. Don't cross mounts. Like du -x. Avoid /proc, etc."
  }),
  (_i: number) => ({
    q: "What does `rsync --inplace` do?",
    o: ["Updates file in place (no temp)", "In place", "Direct write", "No temp file"],
    c: 0,
    e: "rsync --inplace writes directly. No .tmp then rename.",
    de: "Useful for large files, DBs. Can leave partial on interrupt.",
    deBeginner: "rsync --inplace writes changes directly into the destination file instead of writing to a temp and renaming. Good for large files or DBs; if interrupted, the file can be left partial.",
    deExpert: "rsync --inplace: write in place. No .tmp + rename. Large files, DBs. Partial on interrupt."
  }),
  (_i: number) => ({
    q: "What does `cp --reflink=auto` do?",
    o: ["COW copy when possible (same fs)", "Reflink copy", "COW copy", "Instant copy"],
    c: 0,
    e: "cp --reflink=auto uses copy-on-write if supported (btrfs, xfs).",
    de: "Instant copy, shares blocks. Modifications copy blocks.",
    deBeginner: "cp --reflink=auto does a copy-on-write copy when the filesystem supports it (btrfs, xfs): instant copy that shares blocks until either file is modified.",
    deExpert: "cp --reflink=auto: FICLONE/reflink. COW copy. btrfs, xfs. Instant, shared blocks."
  }),
  (_i: number) => ({
    q: "What does `mv -n` do?",
    o: ["No-clobber: don't overwrite existing", "No overwrite", "No clobber", "Preserve existing"],
    c: 0,
    e: "mv -n: don't overwrite destination if it exists.",
    de: "Like cp -n. mv -u only overwrites if source newer.",
    deBeginner: "mv -n (no-clobber) does not overwrite the destination if it already exists. Similar to cp -n. mv -u overwrites only if the source is newer.",
    deExpert: "mv -n: no clobber. Like cp -n. mv -u overwrite if source newer."
  }),
  (_i: number) => ({
    q: "What does `install -D file /a/b/c` do?",
    o: ["Creates /a/b/ and copies file to /a/b/c", "Create path", "Copy with dirs", "Install with dirs"],
    c: 0,
    e: "install -D creates all parent dirs, then copies.",
    de: "Like mkdir -p dirname + cp. Common in Makefiles.",
    deBeginner: "install -D creates all parent directories (/a/b/) and copies file to /a/b/c. Same as mkdir -p plus cp. Often used in Makefiles.",
    deExpert: "install -D: mkdir -p dirname + cp. One command. Makefile install targets."
  }),
  (_i: number) => ({
    q: "What does `find . -execdir rm {} \\;` do vs -exec?",
    o: ["Runs from file's directory (safer)", "Exec from dir", "Execdir", "Run in dir"],
    c: 0,
    e: "execdir: runs from subdir containing file. More secure.",
    de: "Avoids path injection. {} is basename in execdir.",
    deBeginner: "find -execdir runs the command from the directory containing each file (and {} is just the basename). Safer than -exec: avoids path injection. -exec runs from the start dir with full path.",
    deExpert: "find -execdir: run in file's dir. {} = basename. Safer, no path injection. -exec from start."
  }),
  (_i: number) => ({
    q: "What does `find . -exec cmd {} +` do vs `\\;`?",
    o: ["Batches multiple files per invocation", "Batch exec", "Multiple args", "Fewer invocations"],
    c: 0,
    e: "find -exec cmd {} + passes multiple files per call.",
    de: "Faster. Like xargs. + at end. Some cmds need \\; (one per call).",
    deBeginner: "find -exec cmd {} + passes many files to cmd in one go (like xargs). Faster than \\; which runs cmd once per file. Some commands need one path per call, so use \\; for those.",
    deExpert: "find -exec {} +: batch. Multiple args per invocation. \\; one per file. Like xargs."
  }),
  (_i: number) => ({
    q: "What does `find . -print0 | xargs -0` achieve?",
    o: ["Safely handles filenames with spaces", "Null delimiter", "Safe xargs", "No word split"],
    c: 0,
    e: "print0 and -0 use null delimiter. Safe for any filename.",
    de: "find | xargs breaks on spaces. -print0/-0 fixes that.",
    deBeginner: "find -print0 outputs filenames separated by null (\\0); xargs -0 reads null-separated input. So filenames with spaces or newlines are handled safely. Plain find | xargs breaks on spaces.",
    deExpert: "find -print0, xargs -0: null delimiter. Safe for any filename. No word split."
  }),
  (_i: number) => ({
    q: "What does `locate -S` show?",
    o: ["Database statistics", "Locate stats", "DB stats", "Database info"],
    c: 0,
    e: "locate -S shows mlocate database statistics.",
    de: "Number of files, directories. When updated.",
    deBeginner: "locate -S prints statistics about the mlocate database: number of files, directories, when it was updated, etc.",
    deExpert: "locate -S: mlocate DB stats. File count, dirs, update time."
  }),
  (_i: number) => ({
    q: "What does `updatedb --prunepaths` exclude?",
    o: ["Paths not to index", "Prune paths", "Exclude paths", "Skip paths"],
    c: 0,
    e: "updatedb --prunepaths='/tmp /proc' excludes from index.",
    de: "updatedb.conf has prune rules. Speeds up, reduces size.",
    deBeginner: "updatedb --prunepaths='/tmp /proc' keeps those paths out of the locate database. updatedb.conf can set prune rules. Speeds up updatedb and keeps the DB smaller.",
    deExpert: "updatedb --prunepaths: exclude from index. updatedb.conf. Faster, smaller DB."
  }),
  (_i: number) => ({
    q: "What does `getfacl -R dir | setfacl -R -M - dir` do?",
    o: ["Backup and restore ACLs recursively", "ACL backup", "Save ACLs", "ACL copy"],
    c: 0,
    e: "Backup: getfacl -R > acls. Restore: setfacl -R -M acls.",
    de: "Useful for migrating. -M - reads from stdin.",
    deBeginner: "getfacl -R dumps all ACLs under dir; piping to setfacl -R -M - applies them (e.g. to another dir). So you backup and restore ACLs. -M - reads the ACL list from stdin. Useful when migrating.",
    deExpert: "getfacl -R | setfacl -R -M -: backup/restore ACLs. -M - stdin. Migrate, clone ACLs."
  }),
  (_i: number) => ({
    q: "What does `setfacl -b file` do?",
    o: ["Removes all ACLs (base permissions only)", "Remove ACLs", "Clear ACLs", "Base only"],
    c: 0,
    e: "setfacl -b removes all extended ACL entries.",
    de: "Back to standard Unix permissions. -x to remove specific.",
    deBeginner: "setfacl -b removes all ACL entries; only standard owner/group/other permissions stay. Use -x to remove one specific entry.",
    deExpert: "setfacl -b: remove all ACLs. Base mode only. -x one entry. acl(5)."
  }),
  (_i: number) => ({
    q: "What does `setfacl -k dir` do?",
    o: ["Removes default ACLs", "Remove default", "Kill default", "No default ACLs"],
    c: 0,
    e: "setfacl -k removes default ACLs from directory.",
    de: "New files won't inherit. -b removes all including default.",
    deBeginner: "setfacl -k removes only the default ACLs from the directory; new files there won't inherit. -b removes all ACLs including default.",
    deExpert: "setfacl -k: remove default ACL. New files no inherit. -b all."
  }),
  (_i: number) => ({
    q: "What does `chattr +C file` do (btrfs)?",
    o: ["Disables COW for that file", "No COW", "Disable copy-on-write", "Btrfs nocow"],
    c: 0,
    e: "chattr +C on btrfs: no copy-on-write. For VMs, DBs.",
    de: "Better performance for certain workloads. Can't be reverted easily.",
    deBeginner: "On btrfs, chattr +C turns off copy-on-write for that file. Good for VM images or DBs. Can't be reverted easily.",
    deExpert: "chattr +C: btrfs NODATACOW. VMs, DBs. One-way. Performance."
  }),
  (_i: number) => ({
    q: "What does `chattr +e` mean (ext4)?",
    o: ["Extent format (default on ext4)", "Extent", "Ext4 extent", "Normal extent"],
    c: 0,
    e: "chattr +e: extent format. Default for ext4. Can't remove.",
    de: "lsattr shows e. Old ext3 used indirect blocks.",
    deBeginner: "chattr +e means extent format (default on ext4). Can't remove. lsattr shows e. ext3 used indirect blocks.",
    deExpert: "chattr +e: ext4 extent. Default. Can't clear. ext3 indirect."
  }),
  (_i: number) => ({
    q: "What does `chattr +u` do?",
    o: ["Saves undelete info (ext3, rarely used)", "Undelete", "Undelete info", "Recovery"],
    c: 0,
    e: "chattr +u: undelete. Ext3 feature. Largely obsolete.",
    de: "Helped recovery. ext4 has better tools. Rare.",
    deBeginner: "chattr +u was ext3 undelete hint. Largely obsolete; ext4 has better tools. Rare.",
    deExpert: "chattr +u: ext3 undelete. Obsolete. Rare."
  }),
  (_i: number) => ({
    q: "What does `lsattr -a` show?",
    o: ["Attributes of hidden files too", "All files", "Including dotfiles", "Hidden attrs"],
    c: 0,
    e: "lsattr -a includes files starting with .",
    de: "lsattr -d for directory itself. -R for recursive.",
    deBeginner: "lsattr -a lists attributes including dotfiles. -d for directory itself, -R recursive.",
    deExpert: "lsattr -a: include dotfiles. -d dir, -R recursive."
  }),
  (_i: number) => ({
    q: "What does `capsh --print` show?",
    o: ["Current process capabilities", "Capabilities", "Cap set", "Process caps"],
    c: 0,
    e: "capsh --print shows capability set. Alternative to getcap.",
    de: "Linux capabilities: fine-grained privileges. getcap for files.",
    deBeginner: "capsh --print shows the current process capability set. getcap shows file capabilities. capabilities(7).",
    deExpert: "capsh --print: process caps. getcap files. capabilities(7)."
  }),
  (_i: number) => ({
    q: "What does `getcap /usr/bin/ping` show?",
    o: ["File capabilities (if set)", "Capabilities", "File caps", "Ping caps"],
    c: 0,
    e: "getcap shows capabilities on file. cap_net_raw for ping.",
    de: "setcap to set. Replaces need for setuid for specific caps.",
    deBeginner: "getcap shows file capabilities (e.g. ping has cap_net_raw). setcap sets them. Alternative to setuid.",
    deExpert: "getcap: file caps. setcap set. cap_net_raw ping. Alternative setuid."
  }),
  (_i: number) => ({
    q: "What does `setcap cap_net_bind_service=ep /usr/bin/foo` do?",
    o: ["Allows binding to ports < 1024 without root", "Bind service cap", "Low port bind", "Capability"],
    c: 0,
    e: "cap_net_bind_service=ep: effective, permitted. Bind to 80.",
    de: "Alternative to setuid. =ep means effective and permitted.",
    deBeginner: "Gives binary capability to bind to ports <1024 (e.g. 80). =ep = effective, permitted. Alternative to setuid.",
    deExpert: "setcap cap_net_bind_service=ep: bind <1024. =ep. Alternative setuid."
  }),
  (_i: number) => ({
    q: "What does `tune2fs -E stride=N,stripe_width=M` optimize?",
    o: ["RAID stripe alignment", "RAID tune", "Stripe alignment", "RAID optimization"],
    c: 0,
    e: "stride/stripe_width for RAID. Aligns to stripe boundaries.",
    de: "Better performance on RAID. stride = chunk/block, stripe_width = stride * disks.",
    deBeginner: "tune2fs -E stride=N,stripe_width=M optimizes ext for RAID: aligns to stripe. stride ≈ chunk/block, stripe_width = stride * num disks. Better RAID performance.",
    deExpert: "tune2fs -E stride, stripe_width: RAID alignment. stride chunk/block. stripe_width stride*disks."
  }),
  (_i: number) => ({
    q: "What does `resize2fs -M /dev/sda1` do?",
    o: ["Shrinks to minimum size", "Minimize", "Shrink to min", "Minimum resize"],
    c: 0,
    e: "resize2fs -M shrinks to minimum (moves data to start).",
    de: "Dangerous. Shrink partition after. Backup first.",
    deBeginner: "resize2fs -M shrinks the filesystem to the minimum size (moves data to the start). Dangerous. Shrink the partition after. Backup first.",
    deExpert: "resize2fs -M: shrink to minimum. Move data. Shrink partition after. Backup. Dangerous."
  }),
  (_i: number) => ({
    q: "What does `e2image -r` create?",
    o: ["Raw image for recovery", "Raw image", "Recovery image", "E2image raw"],
    c: 0,
    e: "e2image -r creates raw metadata image for recovery.",
    de: "e2image for metadata backup. -r for raw format.",
    deBeginner: "e2image -r creates a raw metadata image for recovery. e2image backs up metadata; -r is raw format.",
    deExpert: "e2image -r: raw metadata image. Recovery. e2image metadata backup."
  }),
  (_i: number) => ({
    q: "What does `e4defrag` do?",
    o: ["Defragments ext4 files", "Ext4 defrag", "Defragment", "Ext4 defragmentation"],
    c: 0,
    e: "e4defrag defragments ext4. Online, per-file.",
    de: "ext4 is usually low fragmentation. Use for specific files.",
    deBeginner: "e4defrag defragments ext4 files online, per file. ext4 is usually low fragmentation; use for specific files that need it.",
    deExpert: "e4defrag: ext4 online defrag. Per-file. ext4 usually low frag."
  }),
  (_i: number) => ({
    q: "What does `xfs_fsr` do?",
    o: ["Defragments XFS filesystem", "XFS defrag", "XFS defragmentation", "XFS reorganize"],
    c: 0,
    e: "xfs_fsr defragments XFS. Online.",
    de: "xfs_fsr /path. XFS has good allocation, less need than ext3.",
    deBeginner: "xfs_fsr defragments XFS online. xfs_fsr /path. XFS allocates well; less need than ext3.",
    deExpert: "xfs_fsr: XFS defrag. Online. Good allocation, less need."
  }),
  (_i: number) => ({
    q: "What does `btrfs balance start` do?",
    o: ["Rebalances data across devices", "Balance", "Rebalance", "Btrfs balance"],
    c: 0,
    e: "btrfs balance redistributes data. For RAID, or full devices.",
    de: "btrfs balance start /. Can use -d -m -s for data/metadata/system.",
    deBeginner: "btrfs balance start / redistributes data across devices. Use after adding a device or when one is full. -d -m -s for data/metadata/system.",
    deExpert: "btrfs balance: redistribute. After add device. -d -m -s data/metadata/system."
  }),
  (_i: number) => ({
    q: "What does `btrfs scrub start /` do?",
    o: ["Reads all data and repairs if redundant copy exists", "Scrub", "Verify and repair", "Btrfs scrub"],
    c: 0,
    e: "btrfs scrub reads all data, checks checksums, repairs from copy.",
    de: "For RAID or dup. btrfs scrub status / for progress.",
    deBeginner: "btrfs scrub start / reads all data, verifies checksums, and repairs from another copy if present (RAID or dup). btrfs scrub status / for progress.",
    deExpert: "btrfs scrub: read all, verify checksum, repair from copy. RAID/dup. status progress."
  }),
  (_i: number) => ({
    q: "What does `btrfs device add /dev/sdb /` do?",
    o: ["Adds device to btrfs pool", "Add device", "Expand pool", "Btrfs add disk"],
    c: 0,
    e: "btrfs device add adds disk to existing filesystem.",
    de: "Then btrfs balance to use space. btrfs device remove to take out.",
    deBeginner: "btrfs device add adds /dev/sdb to the btrfs pool. Then run btrfs balance to use the space. btrfs device remove to take a device out.",
    deExpert: "btrfs device add: add disk to pool. balance to use. device remove to take out."
  }),
  (_i: number) => ({
    q: "What does `zpool add pool mirror sdc sdd` do?",
    o: ["Adds mirror vdev to pool", "Add mirror", "Expand pool", "ZFS add mirror"],
    c: 0,
    e: "zpool add adds vdev. mirror sdc sdd = RAID1 pair.",
    de: "zpool add pool raidz2 sde sdf sdg for RAID6-like.",
    deBeginner: "zpool add adds a vdev to the pool. mirror sdc sdd adds a RAID1 pair. zpool add pool raidz2 ... for RAID6-like.",
    deExpert: "zpool add: add vdev. mirror RAID1. raidz2 RAID6-like. Expand pool."
  }),
  (_i: number) => ({
    q: "What does `zfs set compression=lz4 pool/ds` do?",
    o: ["Enables LZ4 compression on dataset", "Compression", "LZ4 compress", "ZFS compression"],
    c: 0,
    e: "zfs set compression=lz4. Transparent. lz4 fast, gzip higher ratio.",
    de: "New data compressed. zfs get compression to check.",
    deBeginner: "zfs set compression=lz4 turns on transparent LZ4 compression for new data. lz4 is fast; gzip gives higher ratio. zfs get compression to check.",
    deExpert: "zfs set compression=lz4: transparent. lz4 fast. gzip ratio. zfs get."
  }),
  (_i: number) => ({
    q: "What does `zfs set dedup=on pool/ds` enable?",
    o: ["Block-level deduplication", "Deduplication", "Dedup", "ZFS dedup"],
    c: 0,
    e: "zfs dedup=on: identical blocks stored once.",
    de: "Uses RAM for DDT. Often not worth it. Good for VMs with same OS.",
    deBeginner: "zfs set dedup=on enables block-level dedup: identical blocks stored once. Uses RAM for DDT; often not worth it. Good for many VMs with same OS.",
    deExpert: "zfs dedup=on: block dedup. DDT in RAM. Costly. VMs same OS."
  }),
  (_i: number) => ({
    q: "What does `zpool iostat 1` show?",
    o: ["I/O statistics every second", "Pool I/O", "ZFS iostat", "Pool stats"],
    c: 0,
    e: "zpool iostat shows read/write. 1 = refresh every second.",
    de: "Like iostat for disks. zpool iostat -v for per-disk.",
    deBeginner: "zpool iostat shows pool I/O stats; the 1 means refresh every second. zpool iostat -v for per-disk. Like iostat for ZFS.",
    deExpert: "zpool iostat [interval]: pool I/O. -v per-disk. Like iostat."
  }),
  (_i: number) => ({
    q: "What does `mdadm --create` do?",
    o: ["Creates software RAID array", "Create RAID", "RAID create", "mdadm create"],
    c: 0,
    e: "mdadm --create /dev/md0 --level=1 --raid-devices=2 /dev/sda1 /dev/sdb1",
    de: "Software RAID. level 0,1,5,6,10. /proc/mdstat for status.",
    deBeginner: "mdadm --create creates a software RAID array. Example: --level=1 --raid-devices=2 for RAID1. Levels 0,1,5,6,10. /proc/mdstat for status.",
    deExpert: "mdadm --create: software RAID. level 0,1,5,6,10. /proc/mdstat."
  }),
  (_i: number) => ({
    q: "What does `mdadm --grow --raid-devices=4` do?",
    o: ["Adds devices to RAID array", "Grow RAID", "Expand RAID", "Add RAID devices"],
    c: 0,
    e: "mdadm --grow increases raid-devices. Add disk first.",
    de: "For RAID5/6. Rebuild takes time. mdadm --grow --size=max.",
    deBeginner: "mdadm --grow --raid-devices=4 adds devices to the array (add the disk first). For RAID5/6. Rebuild takes time. --size=max to use all space.",
    deExpert: "mdadm --grow: add devices. RAID5/6. Rebuild. --size=max."
  }),
  (_i: number) => ({
    q: "What does `lvm pvcreate /dev/sdb` do?",
    o: ["Initializes disk as LVM physical volume", "Create PV", "PV create", "Physical volume"],
    c: 0,
    e: "pvcreate prepares disk for LVM. pvs to list.",
    de: "vgcreate to make volume group. lvcreate for logical volume.",
    deBeginner: "pvcreate initializes the disk as an LVM physical volume. Then vgcreate for volume group, lvcreate for logical volume. pvs lists PVs.",
    deExpert: "pvcreate: init PV. vgcreate, lvcreate. pvs list."
  }),
  (_i: number) => ({
    q: "What does `lvextend -L +10G /dev/vg/lv` do?",
    o: ["Extends LV by 10GB", "Extend LV", "Grow LV", "Add space"],
    c: 0,
    e: "lvextend -L +10G adds 10GB. -l +100%FREE for all free.",
    de: "Then resize2fs or xfs_growfs to use space. Requires free space in VG.",
    deBeginner: "lvextend -L +10G adds 10GB to the LV. -l +100%FREE uses all free space in VG. Then resize2fs or xfs_growfs to grow the filesystem.",
    deExpert: "lvextend: grow LV. -L +10G. resize2fs/xfs_growfs after. Need free VG."
  }),
  (_i: number) => ({
    q: "What does `lvresize -L 20G /dev/vg/lv` do?",
    o: ["Sets LV size to 20GB (shrink or grow)", "Resize LV", "Set LV size", "LV resize"],
    c: 0,
    e: "lvresize -L 20G sets exact size. Shrink: resize fs first.",
    de: "Grow: lvextend then resize fs. Shrink: resize fs then lvreduce.",
    deBeginner: "lvresize -L 20G sets the LV to exactly 20GB. To shrink: resize the filesystem first, then lvreduce. To grow: lvextend then resize fs.",
    deExpert: "lvresize -L: set size. Shrink: fs first. Grow: lvextend, resize fs."
  }),
  (_i: number) => ({
    q: "What does `vgextend vg /dev/sdc` do?",
    o: ["Adds PV to volume group", "Extend VG", "Add to VG", "VG extend"],
    c: 0,
    e: "vgextend adds physical volume to volume group.",
    de: "More space for LVs. vgreduce to remove (after pvmove).",
    deBeginner: "vgextend adds the PV /dev/sdc to the volume group. More space for LVs. vgreduce to remove a PV (after pvmove to evacuate it).",
    deExpert: "vgextend: add PV to VG. vgreduce after pvmove."
  }),
  (_i: number) => ({
    q: "What does `pvmove /dev/sda1` do?",
    o: ["Moves data off PV to other PVs in VG", "Move PV", "Evacuate PV", "PV move"],
    c: 0,
    e: "pvmove relocates data. To replace or remove disk.",
    de: "pvmove /dev/sda1. Then vgreduce vg /dev/sda1.",
    deBeginner: "pvmove moves all data off that PV onto other PVs in the same VG. Use before replacing or removing a disk. Then vgreduce to remove the PV.",
    deExpert: "pvmove: evacuate PV. Then vgreduce. Replace/remove disk."
  }),
  (_i: number) => ({
    q: "What does `cryptsetup luksOpen /dev/sda1 enc` do?",
    o: ["Opens LUKS partition as /dev/mapper/enc", "Open LUKS", "Decrypt", "LUKS open"],
    c: 0,
    e: "cryptsetup luksOpen opens encrypted device. Maps to /dev/mapper/enc.",
    de: "Then mount /dev/mapper/enc /mnt. luksClose to close.",
    deBeginner: "cryptsetup luksOpen opens the LUKS partition; you get /dev/mapper/enc. Mount that to use the filesystem. luksClose enc to close.",
    deExpert: "cryptsetup luksOpen: open LUKS. /dev/mapper/enc. mount. luksClose."
  }),
  (_i: number) => ({
    q: "What does `cryptsetup luksAddKey` do?",
    o: ["Adds another passphrase to LUKS", "Add key", "New passphrase", "LUKS add key"],
    c: 0,
    e: "luksAddKey adds key slot. Existing passphrase required.",
    de: "Up to 8 key slots. luksRemoveKey to remove. luksChangeKey to change.",
    deBeginner: "luksAddKey adds another passphrase (key slot); you need an existing one. Up to 8 slots. luksRemoveKey to remove, luksChangeKey to change.",
    deExpert: "luksAddKey: add key slot. 8 slots. luksRemoveKey, luksChangeKey."
  }),
  (_i: number) => ({
    q: "What does `dmsetup table` show?",
    o: ["Device mapper table (mapping)", "DM table", "Mapper table", "Device mapper"],
    c: 0,
    e: "dmsetup table shows active device-mapper mappings.",
    de: "Used by LVM, cryptsetup, etc. dmsetup ls for list.",
    deBeginner: "dmsetup table shows the active device-mapper mapping table. Used by LVM, cryptsetup. dmsetup ls lists devices.",
    deExpert: "dmsetup table: DM mapping. LVM, cryptsetup. dmsetup ls."
  }),
  (_i: number) => ({
    q: "What does `wipefs -a /dev/sda` do?",
    o: ["Erases all filesystem signatures", "Wipe all", "Clear signatures", "Wipe fs"],
    c: 0,
    e: "wipefs -a removes magic strings. Device appears empty.",
    de: "Dangerous! Data may still be recoverable. Full overwrite for secure.",
    deBeginner: "wipefs -a removes all filesystem signatures from the device so it looks empty. Dangerous; data may still be recoverable. Full overwrite for secure wipe.",
    deExpert: "wipefs -a: erase signatures. Dangerous. Full overwrite secure."
  }),
  (_i: number) => ({
    q: "What does `sgdisk -G /dev/sda` do?",
    o: ["Randomizes GPT GUIDs (new disk identity)", "New GUIDs", "Randomize GPT", "New identity"],
    c: 0,
    e: "sgdisk -G generates new GUIDs. For cloning without UUID clash.",
    de: "Use before first boot of cloned system. Fixes UUID conflicts.",
    deBeginner: "sgdisk -G generates new random GUIDs for the GPT. Use when cloning a disk so the clone has a different identity and you avoid UUID conflicts. Do before first boot of cloned system.",
    deExpert: "sgdisk -G: new GUIDs. Clone disk, avoid UUID clash. Before first boot."
  }),
  (_i: number) => ({
    q: "What does `partx -a /dev/sda` do?",
    o: ["Informs kernel of new partitions", "Add partitions", "Reread partition table", "Partition add"],
    c: 0,
    e: "partx -a adds partition table to kernel. After fdisk/sgdisk.",
    de: "Alternative to partprobe. partx -d to delete.",
    deBeginner: "partx -a tells the kernel about the partition table (e.g. after fdisk or sgdisk). Alternative to partprobe. partx -d to remove partition info.",
    deExpert: "partx -a: add partition table to kernel. After fdisk. partprobe alternative."
  }),
  (_i: number) => ({
    q: "What does `ls -n` show for numeric IDs?",
    o: ["UID and GID numbers instead of names", "Numeric IDs", "UID GID", "Numbers"],
    c: 0,
    e: "ls -n shows numeric uid:gid. When NSS broken or in initramfs.",
    de: "id -u, id -g for current user. getent for name lookup.",
    deBeginner: "ls -n shows numeric UID and GID instead of names. Useful when NSS is broken or in initramfs. id -u, id -g for current user.",
    deExpert: "ls -n: numeric uid:gid. NSS broken, initramfs. id -u, getent."
  }),
  (_i: number) => ({
    q: "What does `id -un` output?",
    o: ["Username of current user", "User name", "Login name", "Current user"],
    c: 0,
    e: "id -un prints username. id -u for UID.",
    de: "whoami is similar. id shows full id info.",
    deBeginner: "id -un prints the current user's name. id -u for UID. whoami is similar. id with no options shows full identity info.",
    deExpert: "id -un: username. id -u UID. whoami similar."
  }),
  (_i: number) => ({
    q: "What does `newgrp group` do?",
    o: ["Switches primary group for this shell", "Switch group", "New group", "Change group"],
    c: 0,
    e: "newgrp starts subshell with primary group = group.",
    de: "If user in group. Or with password for group. exit to return.",
    deBeginner: "newgrp starts a new shell with primary group set to group (if you're in that group, or with the group password). exit to return to the previous group.",
    deExpert: "newgrp: subshell, primary group. Group membership or password. exit return."
  }),
  (_i: number) => ({
    q: "What does `sg group command` do?",
    o: ["Runs command with group as primary", "Run as group", "Set group", "Group exec"],
    c: 0,
    e: "sg group cmd runs with group as primary. No new shell.",
    de: "sg users ./script. Like newgrp but for single command.",
    deBeginner: "sg runs the command with the given group as primary. Like newgrp but for one command, no new shell. sg users ./script.",
    deExpert: "sg: run with group as primary. One command. newgrp subshell."
  }),
  (_i: number) => ({
    q: "What does `flock -s file cmd` use?",
    o: ["Shared (read) lock", "Shared lock", "Read lock", "Share lock"],
    c: 0,
    e: "flock -s = shared lock. Multiple readers OK.",
    de: "flock (default) = exclusive. -s = shared. -x = exclusive (explicit).",
    deBeginner: "flock -s uses a shared (read) lock; multiple readers can hold it. Default flock is exclusive. -x is explicitly exclusive.",
    deExpert: "flock -s: shared lock. Multiple readers. Default exclusive. -x explicit."
  }),
  (_i: number) => ({
    q: "What does `flock -n file cmd` do if lock held?",
    o: ["Fails immediately (non-blocking)", "Non-blocking", "No wait", "Fail if locked"],
    c: 0,
    e: "flock -n: don't wait. Exit with error if lock held.",
    de: "Use in cron: flock -n /tmp/lock.lock ./script || exit 1",
    deBeginner: "flock -n does not wait; if the lock is held it fails immediately. Use in cron: flock -n /tmp/lock.lock ./script || exit 1 so only one instance runs.",
    deExpert: "flock -n: non-blocking. Fail if locked. Cron singleton."
  }),
  (_i: number) => ({
    q: "What does `fadvise -s` (posix_fadvise sequential) hint?",
    o: ["Sequential access pattern", "Sequential", "Read ahead", "Access hint"],
    c: 0,
    e: "posix_fadvise sequential: kernel may read ahead more.",
    de: "Hints for optimization. Random, willneed, dontneed. Not all FS honor.",
    deBeginner: "posix_fadvise with sequential hint tells the kernel you'll read sequentially, so it can read ahead. Other hints: random, willneed, dontneed. Not all filesystems honor them.",
    deExpert: "posix_fadvise sequential: read-ahead hint. POSIX_FADV_SEQUENTIAL. FS may ignore."
  }),
  (_i: number) => ({
    q: "What does `sync; sync; sync` (triple) achieve?",
    o: ["Extra assurance buffers flushed (historical)", "Triple sync", "Force sync", "Buffer flush"],
    c: 0,
    e: "sync flushes buffers. Triple was old workaround. One usually enough.",
    de: "Modern sync is sufficient. Some used triple for buggy drivers.",
    deBeginner: "sync flushes buffer cache. Triple sync was an old workaround; one sync is usually enough on modern systems. Some used it for buggy drivers.",
    deExpert: "sync: flush buffers. Triple historical. One sufficient. sync(2)."
  }),
  (_i: number) => ({
    q: "What does `ls -X` do (GNU)?",
    o: ["Sort by extension", "Extension sort", "Sort by ext", "Ext order"],
    c: 0,
    e: "ls -X sorts by extension. file.txt before file.log.",
    de: "ls -X groups by suffix. Useful for organizing by type.",
    deBeginner: "ls -X sorts by file extension so files with the same suffix are grouped. Useful to see files by type.",
    deExpert: "ls -X: sort by extension. Group by suffix."
  }),
  (_i: number) => ({
    q: "What does `ls -v` do (GNU)?",
    o: ["Natural sort (version numbers)", "Version sort", "Natural order", "Ver sort"],
    c: 0,
    e: "ls -v: natural/version sort. file2 before file10.",
    de: "sort -V for same. ls -v for filenames with numbers.",
    deBeginner: "ls -v does natural/version sort: file2 comes before file10. sort -V does the same. Good for filenames with numbers.",
    deExpert: "ls -v: version sort. file2 before file10. sort -V same."
  }),
  (_i: number) => ({
    q: "What does `ls --group-directories-first` do?",
    o: ["Lists directories before files", "Dirs first", "Group dirs", "Dirs then files"],
    c: 0,
    e: "Directories appear first, then files.",
    de: "Cleaner listing. Often combined with -l.",
    deBeginner: "ls --group-directories-first lists all directories first, then files. Cleaner output. Often used with -l.",
    deExpert: "ls --group-directories-first: dirs then files. Cleaner. With -l."
  }),
  (_i: number) => ({
    q: "What does `du --apparent-size` show?",
    o: ["Logical size (not disk usage)", "Apparent size", "Logical", "File size"],
    c: 0,
    e: "du --apparent-size shows logical size, not blocks used.",
    de: "Sparse files: apparent > disk. du -b for bytes.",
    deBeginner: "du --apparent-size shows logical (file) size, not actual disk blocks used. For sparse files, apparent can be larger than disk. du -b for bytes.",
    deExpert: "du --apparent-size: logical size. Sparse apparent > disk. -b bytes."
  }),
  (_i: number) => ({
    q: "What does `du -B 1M` do?",
    o: ["Shows size in 1MB blocks", "Block size", "1M blocks", "Block unit"],
    c: 0,
    e: "du -B 1M uses 1MB blocks. -B 1 for bytes.",
    de: "Different from -h. -h is human-readable (K,M,G).",
    deBeginner: "du -B 1M reports size in 1MB blocks. -B 1 for bytes. Different from -h which picks a human-readable unit.",
    deExpert: "du -B 1M: block size 1M. -B 1 bytes. -h human."
  }),
  (_i: number) => ({
    q: "What does `stat -c '%w' file` show?",
    o: ["Birth time (creation) if supported", "Birth time", "Creation time", "Birth"],
    c: 0,
    e: "stat %w = birth time. Not all FS support. %x=%X atime, etc.",
    de: "Linux 4.11+. ext4, btrfs, xfs. %w for birth.",
    deBeginner: "stat -c '%w' shows birth (creation) time if the filesystem supports it (Linux 4.11+, ext4, btrfs, xfs). %x atime, %y mtime, %z ctime.",
    deExpert: "stat %w: birth time. st_birthtime. ext4, btrfs, xfs. 4.11+."
  }),
  (_i: number) => ({
    q: "What does `find . -newerXY ref` use for X,Y?",
    o: ["a=access, m=modify, c=change, B=birth", "Time types", "Compare types", "Newer types"],
    c: 0,
    e: "find -newermt, -newerat, etc. -newerBt for birth.",
    de: "find . -newermt '2024-01-01' -newermt '2024-12-31' for range.",
    deBeginner: "find -newerXY: X,Y can be a (access), m (modify), c (change), B (birth). E.g. -newermt for mtime, -newerBt for birth. Use two -newermt for a date range.",
    deExpert: "find -newerXY: a,m,c,B. -newermt, -newerBt. Range with two -newermt."
  }),
  (_i: number) => ({
    q: "What does `find . -regex '.*\\.txt$'` use?",
    o: ["Full path regex (not glob)", "Path regex", "Regex match", "Full regex"],
    c: 0,
    e: "find -regex matches full path. Use .* for any prefix.",
    de: "find -regextype posix-extended for extended regex. -iregex for case-insensitive.",
    deBeginner: "find -regex matches the full path against the pattern (not just the filename). Use .* for any prefix. -regextype posix-extended, -iregex for case-insensitive.",
    deExpert: "find -regex: full path. .* prefix. -regextype posix-extended. -iregex."
  }),
  (_i: number) => ({
    q: "What does `find . -warn` do (GNU)?",
    o: ["Warns about issues (e.g. permissions)", "Warn", "Show warnings", "Permission warn"],
    c: 0,
    e: "find -warn prints warnings for permission denied, etc.",
    de: "Default is -nowarn. -warn for debugging find issues.",
    deBeginner: "find -warn prints warnings (e.g. permission denied) instead of silencing them. Default is -nowarn. Use -warn when debugging find.",
    deExpert: "find -warn: print warnings. Permission denied etc. Default -nowarn."
  }),
  (_i: number) => ({
    q: "What does `find . -quit` do?",
    o: ["Exits immediately after first match", "Quit early", "First match", "Stop"],
    c: 0,
    e: "find -quit stops after first match. For 'any' check.",
    de: "find . -name '*.txt' -quit -print. Exits after first .txt.",
    deBeginner: "find -quit makes find exit right after the first match. Good for 'does any file match?' e.g. find . -name '*.txt' -quit -print.",
    deExpert: "find -quit: exit after first match. Any-match check."
  }),
  (_i: number) => ({
    q: "What does `realpath -s file` do?",
    o: ["Resolves without following symlinks", "No symlinks", "Skip symlinks", "Don't follow"],
    c: 0,
    e: "realpath -s doesn't follow symlinks. Path as-is.",
    de: "realpath (default) follows. -s = --no-symlinks.",
    deBeginner: "realpath -s (--no-symlinks) resolves the path but does not follow symlinks. Default realpath follows them.",
    deExpert: "realpath -s: no dereference. Path as-is. Default follows. realpath(3)."
  }),
  (_i: number) => ({
    q: "What does `readlink -e` require?",
    o: ["Target must exist", "Target exists", "Must exist", "Existing target"],
    c: 0,
    e: "readlink -e fails if any component doesn't exist.",
    de: "readlink -f can succeed with broken link. -e = canonical, must exist.",
    deBeginner: "readlink -e gives the canonical path but fails if any part of the path does not exist. readlink -f can still succeed with a broken link.",
    deExpert: "readlink -e: canonical, target must exist. -f can succeed broken. ENOENT."
  }),
  (_i: number) => ({
    q: "What does `basename path .suffix` return?",
    o: ["Last component with suffix stripped", "Strip suffix", "Base without ext", "Name no suffix"],
    c: 0,
    e: "basename /path/foo.txt .txt returns foo.",
    de: "dirname gets directory. basename gets filename. Both from coreutils.",
    deBeginner: "basename path .suffix returns the last path component with that suffix removed. basename /path/foo.txt .txt gives foo. dirname gets the directory part.",
    deExpert: "basename path [suffix]: strip dir and optional suffix. dirname dir. coreutils."
  }),
  (_i: number) => ({
    q: "What does `pathchk -p` reject?",
    o: ["Non-portable chars (space, leading dash, etc.)", "Bad chars", "Invalid path", "Non-portable"],
    c: 0,
    e: "pathchk -p rejects paths with space, -, newline, etc.",
    de: "POSIX portable filename character set. For cross-platform scripts.",
    deBeginner: "pathchk -p rejects paths that use characters outside the POSIX portable set (e.g. space, leading -, newline). Use for cross-platform scripts.",
    deExpert: "pathchk -p: POSIX portable filename. Reject space, -, etc. Cross-platform."
  }),
  (_i: number) => ({
    q: "What does `mkfifo /tmp/myfifo` create?",
    o: ["Named pipe (FIFO)", "FIFO", "Named pipe", "Pipe file"],
    c: 0,
    e: "mkfifo creates named pipe. cat file > fifo & cat fifo.",
    de: "First-in-first-out. Blocking. Used for IPC.",
    deBeginner: "mkfifo creates a named pipe (FIFO). One process writes (e.g. cat file > fifo), another reads (cat fifo). Blocking. Used for IPC.",
    deExpert: "mkfifo: named pipe. FIFO. mkfifo(3). Blocking. IPC. cat > fifo & cat fifo."
  }),
  (_i: number) => ({
    q: "What does `mknod /dev/mynull c 1 3` create?",
    o: ["Character device (like /dev/null)", "Char device", "Device node", "Null device"],
    c: 0,
    e: "mknod name c major minor. 1 3 = null. c = character.",
    de: "Usually use udev. mknod for manual. ls -l shows c.",
    deBeginner: "mknod creates a device node. c = character; 1 3 are major, minor (e.g. /dev/null). Usually udev creates nodes; mknod for manual. ls -l shows c.",
    deExpert: "mknod c major minor: char device. 1 3 = null. udev usual. mknod(2)."
  }),
  (_i: number) => ({
    q: "What does `ls -Z` show without SELinux?",
    o: ["Nothing or unsupported", "Empty", "No output", "N/A"],
    c: 0,
    e: "ls -Z on non-SELinux: empty or error.",
    de: "SELinux only. getenforce to check.",
    deBeginner: "On a system without SELinux, ls -Z shows nothing useful or may error. getenforce to see if SELinux is enabled.",
    deExpert: "ls -Z non-SELinux: empty/error. getenforce. SELinux only."
  }),
  (_i: number) => ({
    q: "What does `semanage fcontext -a -t type '/path(/.*)?'` do?",
    o: ["Adds persistent SELinux context rule", "SELinux rule", "Context rule", "Persistent context"],
    c: 0,
    e: "semanage fcontext adds default context. restorecon applies.",
    de: "Persists across reboot. chcon is temporary.",
    deBeginner: "semanage fcontext -a adds a default context rule for that path (and subpaths with (/.*)?). restorecon applies it. Persists; chcon is temporary.",
    deExpert: "semanage fcontext -a: persistent default context. restorecon applies. chcon temp."
  }),
  (_i: number) => ({
    q: "What does `ausearch -m avc` find?",
    o: ["SELinux AVC denials in audit log", "AVC denials", "SELinux denials", "Audit denials"],
    c: 0,
    e: "ausearch -m avc searches audit log for SELinux denials.",
    de: "Troubleshooting. audit2why to explain. setenforce 0 for permissive.",
    deBeginner: "ausearch -m avc searches the audit log for SELinux AVC (access vector cache) denials. Use for troubleshooting; audit2why explains. setenforce 0 for permissive mode.",
    deExpert: "ausearch -m avc: SELinux denials in audit. audit2why. setenforce 0 permissive."
  }),
  (_i: number) => ({
    q: "What does `matchpathcon /path` show?",
    o: ["Default SELinux context for path", "Default context", "Path context", "Expected context"],
    c: 0,
    e: "matchpathcon shows what context path should have.",
    de: "From policy. Compare with ls -Z. restorecon to fix.",
    deBeginner: "matchpathcon shows the default SELinux context for that path from policy. Compare with ls -Z; restorecon to fix mismatches.",
    deExpert: "matchpathcon: default context from policy. Compare ls -Z. restorecon fix."
  }),
  (_i: number) => ({
    q: "What does `btrfs filesystem defragment` do?",
    o: ["Defragments files or directory", "Btrfs defrag", "Defragment", "Reorganize blocks"],
    c: 0,
    e: "btrfs filesystem defragment reorganizes file blocks. Per-file or -r recursive.",
    de: "btrfs filesystem defragment -r /path. Online. Can cause temporary performance hit.",
    deBeginner: "btrfs filesystem defragment reorganizes file blocks (per file or -r recursive). Online. Can cause a temporary performance hit. btrfs filesystem defragment -r /path.",
    deExpert: "btrfs filesystem defragment: online defrag. -r recursive. Temp perf hit."
  }),
  (_i: number) => ({
    q: "What does `zfs set atime=off pool/ds` do?",
    o: ["Disables access time updates", "No atime", "Atime off", "Performance"],
    c: 0,
    e: "zfs atime=off skips access time. Better performance for reads.",
    de: "Similar to mount noatime. zfs get atime. atime=on to re-enable.",
    deBeginner: "zfs set atime=off disables access time updates on that dataset. Better read performance. Similar to mount noatime. zfs get atime to check; atime=on to turn back on.",
    deExpert: "zfs atime=off: no atime. Performance. zfs get. atime=on re-enable."
  }),
  (_i: number) => ({
    q: "What does `zpool scrub pool` do?",
    o: ["Verifies and repairs data integrity", "Scrub pool", "Verify data", "ZFS scrub"],
    c: 0,
    e: "zpool scrub reads all data, checks checksums, repairs from redundancy.",
    de: "Like btrfs scrub. zpool status during scrub. -s to cancel.",
    deBeginner: "zpool scrub reads all data, verifies checksums, and repairs using redundancy if needed. Like btrfs scrub. zpool status shows progress; -s to cancel.",
    deExpert: "zpool scrub: verify, repair from redundancy. zpool status. -s cancel."
  }),
  (_i: number) => ({
    q: "What does `mdadm --detail /dev/md0` show?",
    o: ["RAID array status and configuration", "RAID detail", "Array info", "MD status"],
    c: 0,
    e: "mdadm --detail shows array state, devices, sync status.",
    de: "mdadm -D /dev/md0. State: clean, degraded, recovering. Per-disk status.",
    deBeginner: "mdadm --detail (or -D) shows RAID array state, devices, and sync status. States: clean, degraded, recovering. Per-disk status.",
    deExpert: "mdadm -D/--detail: array state, devices, sync. clean/degraded/recovering."
  }),
  (_i: number) => ({
    q: "What does `cryptsetup status enc` show?",
    o: ["LUKS device status (cipher, offset)", "LUKS status", "Encryption status", "Crypto status"],
    c: 0,
    e: "cryptsetup status shows cipher, key size, offset for open device.",
    de: "cryptsetup status enc. /dev/mapper/enc. luksDump for more.",
    deBeginner: "cryptsetup status enc shows status of the open LUKS device enc: cipher, key size, offset. luksDump for full LUKS header info.",
    deExpert: "cryptsetup status: cipher, offset. Open device. luksDump more."
  }),
  (_i: number) => ({
    q: "What does `lsblk -o +UUID` add?",
    o: ["UUID column to output", "UUID column", "Add UUID", "Show UUID"],
    c: 0,
    e: "lsblk -o +UUID adds UUID. -o for column selection.",
    de: "lsblk -o NAME,SIZE,UUID,FSTYPE. + adds to default. -O for all.",
    deBeginner: "lsblk -o +UUID adds the UUID column to the default output. -o NAME,SIZE,UUID,FSTYPE for chosen columns. + adds to default; -O lists all columns.",
    deExpert: "lsblk -o +UUID: add UUID column. -o select. + default, -O all."
  }),
  (_i: number) => ({
    q: "What does `find . -newerXY ref` use for X,Y?",
    o: ["a=access m=modify c=change B=birth", "Time comparison", "Newer types", "Timestamp types"],
    c: 0,
    e: "find -newerXY. a,m,c,B for access, modify, change, birth.",
    de: "find . -newermt '2024-01-01'. -newerBt for birth. Flexible comparison.",
    deBeginner: "find -newerXY: X,Y are a (access), m (modify), c (change), B (birth). E.g. -newermt for mtime. -newerBt for birth. -newermt '2024-01-01' for date.",
    deExpert: "find -newerXY: a,m,c,B. -newermt, -newerBt. Flexible time compare."
  }),
  (_i: number) => ({
    q: "What does `stat -c '%y' file` show?",
    o: ["Modification time (mtime)", "Mtime", "Mod time", "Last modify"],
    c: 0,
    e: "stat -c '%y' outputs modification time. %x atime, %z ctime.",
    de: "stat -c '%Y' for Unix timestamp. %y human. %X %Z for atime ctime.",
    deBeginner: "stat -c '%y' shows modification time in human form. %x atime, %z ctime. %Y is mtime as Unix timestamp. %X %Z for atime/ctime timestamps.",
    deExpert: "stat -c '%y': mtime human. %Y Unix. %x %z atime ctime."
  }),
  (_i: number) => ({
    q: "What does `touch -d '2024-01-15' file` do?",
    o: ["Sets file times to that date", "Set date", "Specific date", "Touch date"],
    c: 0,
    e: "touch -d sets atime and mtime to specified date.",
    de: "touch -d '2 days ago'. touch -d @timestamp for Unix time.",
    deBeginner: "touch -d sets atime and mtime to the given date string. touch -d '2 days ago' or touch -d @unix_timestamp. Useful for setting times without changing content.",
    deExpert: "touch -d: set atime/mtime. Date string or @timestamp. utimensat(2)."
  }),
  (_i: number) => ({
    q: "What does `rsync --info=progress2` show?",
    o: ["Single-line transfer progress", "Progress info", "Transfer progress", "Rsync progress"],
    c: 0,
    e: "rsync --info=progress2 shows one line. Better for logs.",
    de: "rsync -av --info=progress2. progress for per-file. progress2 for overall.",
    deBeginner: "rsync --info=progress2 shows one line of overall transfer progress (better for logs). progress is per-file. rsync -av --info=progress2.",
    deExpert: "rsync --info=progress2: single-line overall. progress per-file. Logs."
  }),
  (_i: number) => ({
    q: "What does `rsync --link-dest=dir` use?",
    o: ["Hard links to dir for unchanged files", "Link dest", "Incremental", "Hard link backup"],
    c: 0,
    e: "rsync --link-dest=prev backup. Unchanged files hard-linked. Saves space.",
    de: "Incremental backup. cp -al style. Each run: link-dest=previous.",
    deBeginner: "rsync --link-dest=prev uses the previous backup as a reference; unchanged files are hard-linked into the new backup. Saves space. Incremental backup; each run set link-dest=previous.",
    deExpert: "rsync --link-dest: hard link unchanged from dir. Incremental. cp -al style."
  }),
  (_i: number) => ({
    q: "What does `cp -n` do?",
    o: ["No-clobber: don't overwrite existing", "No overwrite", "No clobber", "Preserve existing"],
    c: 0,
    e: "cp -n skips existing files. No overwrite. Like mv -n.",
    de: "cp -n src dest. Safe copy. -u only overwrites if source newer.",
    deBeginner: "cp -n (no-clobber) does not overwrite existing destination files. Safe copy. cp -u overwrites only if source is newer.",
    deExpert: "cp -n: no clobber. Skip existing. -u overwrite if newer."
  }),
  (_i: number) => ({
    q: "What does `install -m 644` set?",
    o: ["File mode to rw-r--r--", "Permissions", "Mode 644", "Install permissions"],
    c: 0,
    e: "install -m 644 sets permissions. Common for config files.",
    de: "install -m 755 for executables. -m 644 for data. Combines cp + chmod.",
    deBeginner: "install -m 644 sets the file mode to 644 (rw-r--r--) when copying. Common for config files. -m 755 for executables. install = cp + chmod (and optional -o -g).",
    deExpert: "install -m 644: mode on copy. 755 exec, 644 data. cp+chmod. Makefile."
  }),
  (_i: number) => ({
    q: "What does `find . -printf '%T+\\n'` show?",
    o: ["Modification time in ISO format", "Mtime ISO", "Time format", "Mod time readable"],
    c: 0,
    e: "find -printf '%T+' = mtime in YYYY-MM-DD+HH:MM:SS.",
    de: "find . -printf '%T+ %p\\n'. %A+ atime. %C+ ctime. %B+ birth.",
    deBeginner: "find -printf '%T+' prints mtime in ISO-like form (YYYY-MM-DD+HH:MM:SS). %A+ atime, %C+ ctime, %B+ birth. find . -printf '%T+ %p\\n' for path too.",
    deExpert: "find -printf '%T+': mtime ISO. %A+ %C+ %B+. GNU."
  }),
  (_i: number) => ({
    q: "What does `locate -i pattern` do?",
    o: ["Case-insensitive search", "Ignore case", "Case insensitive", "No case"],
    c: 0,
    e: "locate -i ignores case. locate -i Foo matches foo, FOO.",
    de: "locate -i. Faster than grep -i on find. Uses pre-built index.",
    deBeginner: "locate -i does case-insensitive search. locate -i Foo matches foo, FOO. Uses the pre-built index so it's faster than find with grep -i.",
    deExpert: "locate -i: case-insensitive. Prebuilt index. Faster than find grep -i."
  }),
  (_i: number) => ({
    q: "What does `find . -readable` match?",
    o: ["Files readable by current user", "Readable", "Can read", "Read permission"],
    c: 0,
    e: "find -readable matches files you can read. -writable, -executable.",
    de: "find . -readable -type f. Test based on effective permissions.",
    deBeginner: "find -readable matches files the current user can read (effective permissions). -writable and -executable work the same. find . -readable -type f.",
    deExpert: "find -readable: can read. -writable -executable. Effective perms."
  }),
  (_i: number) => ({
    q: "What does `realpath --relative-to=dir file` output?",
    o: ["Path relative to dir", "Relative path", "Rel to dir", "Relative"],
    c: 0,
    e: "realpath --relative-to=dir gives path from dir to file.",
    de: "realpath --relative-to=/home/user /home/user/a/b -> a/b. For portability.",
    deBeginner: "realpath --relative-to=dir outputs the path to file relative to dir. Example: realpath --relative-to=/home/user /home/user/a/b gives a/b. Good for portable paths.",
    deExpert: "realpath --relative-to: path relative to dir. Portable. a/b."
  }),
  (_i: number) => ({
    q: "What does `ls -N` do (GNU)?",
    o: ["Disables quoting of filenames", "No quoting", "Raw names", "No quote"],
    c: 0,
    e: "ls -N turns off quoting. Opposite of -Q.",
    de: "ls --quoting=none. For piping to other tools. Default in scripts.",
    deBeginner: "ls -N (or --quoting=none) disables quoting of filenames—opposite of -Q. Useful when piping to other tools. Often default in scripts.",
    deExpert: "ls -N: no quoting. --quoting=none. Opposite -Q. Pipeline."
  }),
  (_i: number) => ({
    q: "What does `du --exclude='*.log'` do?",
    o: ["Excludes matching files from size calc", "Exclude pattern", "Skip logs", "No log files"],
    c: 0,
    e: "du --exclude skips matching paths. Like find -path -prune.",
    de: "du -sh --exclude='*.log' /var. Multiple --exclude. For accurate totals.",
    deBeginner: "du --exclude skips paths that match the pattern when calculating size. du -sh --exclude='*.log' /var. Multiple --exclude allowed. Like find -path -prune.",
    deExpert: "du --exclude: skip pattern. Multiple. Accurate totals. Like find -prune."
  }),
  (_i: number) => ({
    q: "What does `fdisk -l` without device show?",
    o: ["Partition tables of all block devices", "All disks", "All partitions", "Full listing"],
    c: 0,
    e: "fdisk -l with no device lists all. With device: that disk only.",
    de: "fdisk -l. Requires root for full info. lsblk simpler for quick view.",
    deBeginner: "fdisk -l with no device lists partition tables for all block devices. With a device it shows only that disk. Needs root for full info. lsblk is simpler for a quick view.",
    deExpert: "fdisk -l: all devices. With device that disk. Root. lsblk simpler."
  }),
  (_i: number) => ({
    q: "What does `parted -l` do?",
    o: ["Lists partition layout of all disks", "List partitions", "Partition list", "Disk layout"],
    c: 0,
    e: "parted -l shows partition tables. Non-interactive. Scriptable.",
    de: "parted -l. Like fdisk -l. GPT and MBR. parted for partitioning.",
    deBeginner: "parted -l lists partition layout for all disks. Non-interactive, scriptable. Like fdisk -l. Handles GPT and MBR.",
    deExpert: "parted -l: list all partition tables. Non-interactive. GPT, MBR."
  }),
  (_i: number) => ({
    q: "What does `blkid -o udev` output?",
    o: ["Key=value for udev rules", "Udev format", "Udev output", "Key value"],
    c: 0,
    e: "blkid -o udev outputs KEY=value. For udev rules.",
    de: "blkid -o udev /dev/sda1. ID_FS_UUID, ID_FS_TYPE. udevadm uses.",
    deBeginner: "blkid -o udev outputs KEY=value pairs (e.g. ID_FS_UUID, ID_FS_TYPE) suitable for udev rules. blkid -o udev /dev/sda1. udevadm uses this format.",
    deExpert: "blkid -o udev: KEY=value. udev rules. ID_FS_UUID, ID_FS_TYPE."
  }),
  (_i: number) => ({
    q: "What does `tune2fs -j /dev/sda1` do?",
    o: ["Adds journal (ext3) to ext2", "Add journal", "Ext3 upgrade", "Journal add"],
    c: 0,
    e: "tune2fs -j adds journal. Converts ext2 to ext3. Non-destructive.",
    de: "tune2fs -j. No data loss. ext2 -> ext3. Reversible with debugfs.",
    deBeginner: "tune2fs -j adds a journal to an ext2 filesystem, turning it into ext3. Non-destructive, no data loss. Reversible with debugfs.",
    deExpert: "tune2fs -j: add journal. ext2 -> ext3. Non-destructive. Reversible."
  }),
  (_i: number) => ({
    q: "What does `btrfs subvolume set-default` do?",
    o: ["Sets default subvolume for mount", "Default subvol", "Set default", "Default mount"],
    c: 0,
    e: "btrfs subvolume set-default sets which subvol is mounted by default.",
    de: "btrfs subvolume set-default 256 /. ID from subvolume list. For rollback.",
    deBeginner: "btrfs subvolume set-default sets which subvolume is used when you mount the filesystem (e.g. btrfs subvolume set-default 256 /). Subvol ID from subvolume list. Used for rollback.",
    deExpert: "btrfs subvolume set-default: default subvol on mount. ID from list. Rollback."
  }),
  (_i: number) => ({
    q: "What does `zfs allow pool/ds snapshot` grant?",
    o: ["Permission to create snapshots", "Snapshot permission", "ZFS allow", "Delegate snapshot"],
    c: 0,
    e: "zfs allow grants permission. snapshot = create snapshots. Per-dataset.",
    de: "zfs allow user snapshot pool/ds. Delegation. clone, destroy, etc.",
    deBeginner: "zfs allow grants a permission on a dataset. zfs allow pool/ds snapshot lets the specified user create snapshots. Delegation: clone, destroy, etc. Per-dataset.",
    deExpert: "zfs allow: delegate permission. snapshot, clone, destroy. Per-dataset."
  }),
];
