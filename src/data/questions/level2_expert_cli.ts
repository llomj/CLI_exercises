// LEVEL 2 EXPERT — Filesystem & Storage (123 unique questions)
// Replaces placeholders. All options are meaningful, no "Option A/B/C/D".

export const level2Expert = [
  (_i: number) => ({
    q: "What does `chmod 4755 file` set?",
    o: ["rwxr-xr-x with SUID", "SUID executable", "Setuid 755", "SUID bit"],
    c: 0,
    e: "4 in first digit = SUID. 4755 = rwsr-xr-x.",
    de: "Process runs as file owner. Common for passwd, sudo."
  }),
  (_i: number) => ({
    q: "What does `chmod 2755 directory` set?",
    o: ["rwxr-sr-x with SGID", "SGID directory", "Setgid 755", "SGID bit"],
    c: 0,
    e: "2 in first digit = SGID. New files inherit group.",
    de: "chmod g+s. 2755 = rwxr-sr-x. s in group position."
  }),
  (_i: number) => ({
    q: "What does `chmod 1777 directory` set?",
    o: ["rwxrwxrwt (sticky bit)", "Sticky directory", "Sticky 777", "Sticky bit"],
    c: 0,
    e: "1 in first digit = sticky. 1777 = rwxrwxrwt. t = sticky.",
    de: "Like /tmp. Users can only delete own files."
  }),
  (_i: number) => ({
    q: "Why can't you hard-link across filesystems?",
    o: ["Inodes are unique per filesystem", "Different fs", "Inode scope", "FS boundary"],
    c: 0,
    e: "Inode numbers are only unique within one filesystem.",
    de: "Hard links share inode. Different mount = different inode space."
  }),
  (_i: number) => ({
    q: "What does `find . -inum 12345` find?",
    o: ["All paths with that inode (hard links)", "Inode 12345", "Same file", "Hard links"],
    c: 0,
    e: "find -inum finds all names for that inode.",
    de: "Shows all hard links to a file. ls -i for inode number."
  }),
  (_i: number) => ({
    q: "What does `mount -o noatime` do?",
    o: ["Disables access time updates (performance)", "No atime", "Skip atime", "Atime off"],
    c: 0,
    e: "noatime: don't update access time on read. Faster.",
    de: "Reduces writes. relatime is default on many (update atime less often)."
  }),
  (_i: number) => ({
    q: "What does `mount -o nodiratime` do?",
    o: ["Disables atime on directories only", "No dir atime", "Dir atime off", "Directory atime"],
    c: 0,
    e: "nodiratime: don't update atime when listing directories.",
    de: "Often used with noatime. Some FS combine them."
  }),
  (_i: number) => ({
    q: "What does `mount -o bind,ro /src /dst` do?",
    o: ["Read-only bind mount", "Bind read-only", "RO bind", "Immutable bind"],
    c: 0,
    e: "bind,ro: same content at /dst but read-only.",
    de: "Original can stay rw. Useful for safe chroot."
  }),
  (_i: number) => ({
    q: "What is a stacked mount?",
    o: ["Mount on top of existing mount (overlay)", "Overlay mount", "Stack mount", "Layered mount"],
    c: 0,
    e: "Stacking: mount over existing. overlayfs, bind over bind.",
    de: "Overlay: lower + upper. Union mounts. Containers use this."
  }),
  (_i: number) => ({
    q: "What does `mount --make-private /mnt` do?",
    o: ["Makes mount private (not shared with peers)", "Private mount", "Unshare mount", "Isolate mount"],
    c: 0,
    e: "mount --make-private: changes propagation. Not shared.",
    de: "Propagation: shared, private, slave, unbindable. For namespaces."
  }),
  (_i: number) => ({
    q: "What does `findmnt --submounts /` show?",
    o: ["Mount tree under / including submounts", "Submounts", "Nested mounts", "Mount hierarchy"],
    c: 0,
    e: "findmnt --submounts shows mount tree recursively.",
    de: "findmnt -R. Clear view of what's mounted where."
  }),
  (_i: number) => ({
    q: "What does `btrfs subvolume list /` show?",
    o: ["Btrfs subvolumes", "Subvolumes", "Btrfs volumes", "Subvolume list"],
    c: 0,
    e: "btrfs subvolume list shows subvolumes (btrfs feature).",
    de: "Subvolumes are like separate mounts. Snapshot is subvolume copy."
  }),
  (_i: number) => ({
    q: "What does `btrfs subvolume snapshot src dst` do?",
    o: ["Creates copy-on-write snapshot", "Btrfs snapshot", "COW snapshot", "Instant snapshot"],
    c: 0,
    e: "Snapshot is instant COW copy. Shares data until modified.",
    de: "Backup without full copy. btrfs subvolume delete to remove."
  }),
  (_i: number) => ({
    q: "What does `xfs_repair` require?",
    o: ["Unmounted filesystem", "Unmounted", "Offline", "Not mounted"],
    c: 0,
    e: "xfs_repair needs unmounted filesystem. Unlike ext4.",
    de: "Boot from live USB if root. xfs_repair -n for dry run."
  }),
  (_i: number) => ({
    q: "What does `xfs_admin -l` show?",
    o: ["Filesystem label", "XFS label", "Volume label", "FS label"],
    c: 0,
    e: "xfs_admin -l prints label. -L to set.",
    de: "xfs_admin -L mylabel /dev/sda1. For fstab LABEL=."
  }),
  (_i: number) => ({
    q: "What does `zfs list` show?",
    o: ["ZFS datasets and usage", "ZFS list", "Datasets", "ZFS usage"],
    c: 0,
    e: "zfs list shows datasets, used, avail, mountpoint.",
    de: "zfs list -r pool for recursive. zpool list for pools."
  }),
  (_i: number) => ({
    q: "What does `zfs snapshot pool/ds@snap` create?",
    o: ["Instant ZFS snapshot", "ZFS snapshot", "Dataset snapshot", "COW snapshot"],
    c: 0,
    e: "zfs snapshot creates instant COW snapshot.",
    de: "zfs clone for writable. zfs rollback to restore."
  }),
  (_i: number) => ({
    q: "What does `lsof +L1` list?",
    o: ["Deleted files still open (link count 0)", "Unlinked open files", "Deleted open", "Orphaned files"],
    c: 0,
    e: "lsof +L1 finds open files that were deleted (link count 0).",
    de: "File exists until process closes. Recover from /proc/PID/fd."
  }),
  (_i: number) => ({
    q: "What does `fuser -k -m /mnt` do?",
    o: ["Kills processes using that mount", "Kill users", "Force umount", "Kill mount users"],
    c: 0,
    e: "fuser -k sends SIGKILL to processes using /mnt.",
    de: "Last resort before umount -l. -k = kill, -m = mount."
  }),
  (_i: number) => ({
    q: "What does `umount -l` do?",
    o: ["Lazy unmount (detach when unused)", "Lazy umount", "Detach", "Lazy unmount"],
    c: 0,
    e: "umount -l: lazy. Detaches now, actually unmounts when no users.",
    de: "Use when fuser can't kill. Process holds it until exit."
  }),
  (_i: number) => ({
    q: "What does `umount -f` do?",
    o: ["Force unmount (NFS, can cause issues)", "Force umount", "Forced unmount", "Force"],
    c: 0,
    e: "umount -f forces. For NFS when server unreachable.",
    de: "Can corrupt if FS has pending writes. Use carefully."
  }),
  (_i: number) => ({
    q: "What does `dd if=/dev/zero of=file bs=1M count=100` create?",
    o: ["100MB file of zeros", "Zero file", "100M zeros", "Sparse-like file"],
    c: 0,
    e: "dd creates 100MB file. if=input, of=output, bs=block size.",
    de: "Actually writes zeros. fallocate is faster for preallocation."
  }),
  (_i: number) => ({
    q: "What does `dd if=file of=dev bs=4M status=progress` add?",
    o: ["Progress display during copy", "Progress", "Status", "Transfer progress"],
    c: 0,
    e: "status=progress shows bytes and speed during dd.",
    de: "dd if=img.iso of=/dev/sdb status=progress. Burn/restore."
  }),
  (_i: number) => ({
    q: "What does `fallocate -n -p -o 0 -l 1M file` do?",
    o: ["Punch hole (deallocate) 1MB at start", "Punch hole", "Deallocate", "Hole punch"],
    c: 0,
    e: "fallocate -n -p punches hole: deallocates blocks.",
    de: "Creates sparse region. -n = keep size. -p = punch. Requires support."
  }),
  (_i: number) => ({
    q: "What does `file -b file` output?",
    o: ["Brief (no filename in output)", "Brief", "No name", "Short output"],
    c: 0,
    e: "file -b omits filename. Just the type description.",
    de: "Useful in scripts. file -b -z for compressed."
  }),
  (_i: number) => ({
    q: "What does `file -s /dev/sda1` do?",
    o: ["Reads block device (special file)", "Special file", "Block device", "Device file"],
    c: 0,
    e: "file -s: don't ignore block/char special files.",
    de: "Without -s, file says 'block special'. -s reads content."
  }),
  (_i: number) => ({
    q: "What does `rsync -H` preserve?",
    o: ["Hard links", "Hard link", "Links", "Link structure"],
    c: 0,
    e: "rsync -H preserves hard links. Recreates link structure.",
    de: "Important for backups with many hard links. -a doesn't include -H."
  }),
  (_i: number) => ({
    q: "What does `rsync --delete` do?",
    o: ["Deletes files in dest not in source", "Sync delete", "Remove extra", "Mirror delete"],
    c: 0,
    e: "rsync --delete removes files in dest that aren't in source.",
    de: "Makes dest mirror of source. Dangerous! Test with --dry-run."
  }),
  (_i: number) => ({
    q: "What does `rsync -x` do?",
    o: ["Don't cross filesystem boundaries", "One filesystem", "No cross", "Stay on fs"],
    c: 0,
    e: "rsync -x excludes other filesystems (like du -x).",
    de: "Avoids /proc, /sys, other mounts. -x = one filesystem."
  }),
  (_i: number) => ({
    q: "What does `rsync --inplace` do?",
    o: ["Updates file in place (no temp)", "In place", "Direct write", "No temp file"],
    c: 0,
    e: "rsync --inplace writes directly. No .tmp then rename.",
    de: "Useful for large files, DBs. Can leave partial on interrupt."
  }),
  (_i: number) => ({
    q: "What does `cp --reflink=auto` do?",
    o: ["COW copy when possible (same fs)", "Reflink copy", "COW copy", "Instant copy"],
    c: 0,
    e: "cp --reflink=auto uses copy-on-write if supported (btrfs, xfs).",
    de: "Instant copy, shares blocks. Modifications copy blocks."
  }),
  (_i: number) => ({
    q: "What does `mv -n` do?",
    o: ["No-clobber: don't overwrite existing", "No overwrite", "No clobber", "Preserve existing"],
    c: 0,
    e: "mv -n: don't overwrite destination if it exists.",
    de: "Like cp -n. mv -u only overwrites if source newer."
  }),
  (_i: number) => ({
    q: "What does `install -D file /a/b/c` do?",
    o: ["Creates /a/b/ and copies file to /a/b/c", "Create path", "Copy with dirs", "Install with dirs"],
    c: 0,
    e: "install -D creates all parent dirs, then copies.",
    de: "Like mkdir -p dirname + cp. Common in Makefiles."
  }),
  (_i: number) => ({
    q: "What does `find . -execdir rm {} \\;` do vs -exec?",
    o: ["Runs from file's directory (safer)", "Exec from dir", "Execdir", "Run in dir"],
    c: 0,
    e: "execdir: runs from subdir containing file. More secure.",
    de: "Avoids path injection. {} is basename in execdir."
  }),
  (_i: number) => ({
    q: "What does `find . -exec cmd {} +` do vs `\\;`?",
    o: ["Batches multiple files per invocation", "Batch exec", "Multiple args", "Fewer invocations"],
    c: 0,
    e: "find -exec cmd {} + passes multiple files per call.",
    de: "Faster. Like xargs. + at end. Some cmds need \\; (one per call)."
  }),
  (_i: number) => ({
    q: "What does `find . -print0 | xargs -0` achieve?",
    o: ["Safely handles filenames with spaces", "Null delimiter", "Safe xargs", "No word split"],
    c: 0,
    e: "print0 and -0 use null delimiter. Safe for any filename.",
    de: "find | xargs breaks on spaces. -print0/-0 fixes that."
  }),
  (_i: number) => ({
    q: "What does `locate -S` show?",
    o: ["Database statistics", "Locate stats", "DB stats", "Database info"],
    c: 0,
    e: "locate -S shows mlocate database statistics.",
    de: "Number of files, directories. When updated."
  }),
  (_i: number) => ({
    q: "What does `updatedb --prunepaths` exclude?",
    o: ["Paths not to index", "Prune paths", "Exclude paths", "Skip paths"],
    c: 0,
    e: "updatedb --prunepaths='/tmp /proc' excludes from index.",
    de: "updatedb.conf has prune rules. Speeds up, reduces size."
  }),
  (_i: number) => ({
    q: "What does `getfacl -R dir | setfacl -R -M - dir` do?",
    o: ["Backup and restore ACLs recursively", "ACL backup", "Save ACLs", "ACL copy"],
    c: 0,
    e: "Backup: getfacl -R > acls. Restore: setfacl -R -M acls.",
    de: "Useful for migrating. -M - reads from stdin."
  }),
  (_i: number) => ({
    q: "What does `setfacl -b file` do?",
    o: ["Removes all ACLs (base permissions only)", "Remove ACLs", "Clear ACLs", "Base only"],
    c: 0,
    e: "setfacl -b removes all extended ACL entries.",
    de: "Back to standard Unix permissions. -x to remove specific."
  }),
  (_i: number) => ({
    q: "What does `setfacl -k dir` do?",
    o: ["Removes default ACLs", "Remove default", "Kill default", "No default ACLs"],
    c: 0,
    e: "setfacl -k removes default ACLs from directory.",
    de: "New files won't inherit. -b removes all including default."
  }),
  (_i: number) => ({
    q: "What does `chattr +C file` do (btrfs)?",
    o: ["Disables COW for that file", "No COW", "Disable copy-on-write", "Btrfs nocow"],
    c: 0,
    e: "chattr +C on btrfs: no copy-on-write. For VMs, DBs.",
    de: "Better performance for certain workloads. Can't be reverted easily."
  }),
  (_i: number) => ({
    q: "What does `chattr +e` mean (ext4)?",
    o: ["Extent format (default on ext4)", "Extent", "Ext4 extent", "Normal extent"],
    c: 0,
    e: "chattr +e: extent format. Default for ext4. Can't remove.",
    de: "lsattr shows e. Old ext3 used indirect blocks."
  }),
  (_i: number) => ({
    q: "What does `chattr +u` do?",
    o: ["Saves undelete info (ext3, rarely used)", "Undelete", "Undelete info", "Recovery"],
    c: 0,
    e: "chattr +u: undelete. Ext3 feature. Largely obsolete.",
    de: "Helped recovery. ext4 has better tools. Rare."
  }),
  (_i: number) => ({
    q: "What does `lsattr -a` show?",
    o: ["Attributes of hidden files too", "All files", "Including dotfiles", "Hidden attrs"],
    c: 0,
    e: "lsattr -a includes files starting with .",
    de: "lsattr -d for directory itself. -R for recursive."
  }),
  (_i: number) => ({
    q: "What does `capsh --print` show?",
    o: ["Current process capabilities", "Capabilities", "Cap set", "Process caps"],
    c: 0,
    e: "capsh --print shows capability set. Alternative to getcap.",
    de: "Linux capabilities: fine-grained privileges. getcap for files."
  }),
  (_i: number) => ({
    q: "What does `getcap /usr/bin/ping` show?",
    o: ["File capabilities (if set)", "Capabilities", "File caps", "Ping caps"],
    c: 0,
    e: "getcap shows capabilities on file. cap_net_raw for ping.",
    de: "setcap to set. Replaces need for setuid for specific caps."
  }),
  (_i: number) => ({
    q: "What does `setcap cap_net_bind_service=ep /usr/bin/foo` do?",
    o: ["Allows binding to ports < 1024 without root", "Bind service cap", "Low port bind", "Capability"],
    c: 0,
    e: "cap_net_bind_service=ep: effective, permitted. Bind to 80.",
    de: "Alternative to setuid. =ep means effective and permitted."
  }),
  (_i: number) => ({
    q: "What does `tune2fs -E stride=N,stripe_width=M` optimize?",
    o: ["RAID stripe alignment", "RAID tune", "Stripe alignment", "RAID optimization"],
    c: 0,
    e: "stride/stripe_width for RAID. Aligns to stripe boundaries.",
    de: "Better performance on RAID. stride = chunk/block, stripe_width = stride * disks."
  }),
  (_i: number) => ({
    q: "What does `resize2fs -M /dev/sda1` do?",
    o: ["Shrinks to minimum size", "Minimize", "Shrink to min", "Minimum resize"],
    c: 0,
    e: "resize2fs -M shrinks to minimum (moves data to start).",
    de: "Dangerous. Shrink partition after. Backup first."
  }),
  (_i: number) => ({
    q: "What does `e2image -r` create?",
    o: ["Raw image for recovery", "Raw image", "Recovery image", "E2image raw"],
    c: 0,
    e: "e2image -r creates raw metadata image for recovery.",
    de: "e2image for metadata backup. -r for raw format."
  }),
  (_i: number) => ({
    q: "What does `e4defrag` do?",
    o: ["Defragments ext4 files", "Ext4 defrag", "Defragment", "Ext4 defragmentation"],
    c: 0,
    e: "e4defrag defragments ext4. Online, per-file.",
    de: "ext4 is usually low fragmentation. Use for specific files."
  }),
  (_i: number) => ({
    q: "What does `xfs_fsr` do?",
    o: ["Defragments XFS filesystem", "XFS defrag", "XFS defragmentation", "XFS reorganize"],
    c: 0,
    e: "xfs_fsr defragments XFS. Online.",
    de: "xfs_fsr /path. XFS has good allocation, less need than ext3."
  }),
  (_i: number) => ({
    q: "What does `btrfs balance start` do?",
    o: ["Rebalances data across devices", "Balance", "Rebalance", "Btrfs balance"],
    c: 0,
    e: "btrfs balance redistributes data. For RAID, or full devices.",
    de: "btrfs balance start /. Can use -d -m -s for data/metadata/system."
  }),
  (_i: number) => ({
    q: "What does `btrfs scrub start /` do?",
    o: ["Reads all data and repairs if redundant copy exists", "Scrub", "Verify and repair", "Btrfs scrub"],
    c: 0,
    e: "btrfs scrub reads all data, checks checksums, repairs from copy.",
    de: "For RAID or dup. btrfs scrub status / for progress."
  }),
  (_i: number) => ({
    q: "What does `btrfs device add /dev/sdb /` do?",
    o: ["Adds device to btrfs pool", "Add device", "Expand pool", "Btrfs add disk"],
    c: 0,
    e: "btrfs device add adds disk to existing filesystem.",
    de: "Then btrfs balance to use space. btrfs device remove to take out."
  }),
  (_i: number) => ({
    q: "What does `zpool add pool mirror sdc sdd` do?",
    o: ["Adds mirror vdev to pool", "Add mirror", "Expand pool", "ZFS add mirror"],
    c: 0,
    e: "zpool add adds vdev. mirror sdc sdd = RAID1 pair.",
    de: "zpool add pool raidz2 sde sdf sdg for RAID6-like."
  }),
  (_i: number) => ({
    q: "What does `zfs set compression=lz4 pool/ds` do?",
    o: ["Enables LZ4 compression on dataset", "Compression", "LZ4 compress", "ZFS compression"],
    c: 0,
    e: "zfs set compression=lz4. Transparent. lz4 fast, gzip higher ratio.",
    de: "New data compressed. zfs get compression to check."
  }),
  (_i: number) => ({
    q: "What does `zfs set dedup=on pool/ds` enable?",
    o: ["Block-level deduplication", "Deduplication", "Dedup", "ZFS dedup"],
    c: 0,
    e: "zfs dedup=on: identical blocks stored once.",
    de: "Uses RAM for DDT. Often not worth it. Good for VMs with same OS."
  }),
  (_i: number) => ({
    q: "What does `zpool iostat 1` show?",
    o: ["I/O statistics every second", "Pool I/O", "ZFS iostat", "Pool stats"],
    c: 0,
    e: "zpool iostat shows read/write. 1 = refresh every second.",
    de: "Like iostat for disks. zpool iostat -v for per-disk."
  }),
  (_i: number) => ({
    q: "What does `mdadm --create` do?",
    o: ["Creates software RAID array", "Create RAID", "RAID create", "mdadm create"],
    c: 0,
    e: "mdadm --create /dev/md0 --level=1 --raid-devices=2 /dev/sda1 /dev/sdb1",
    de: "Software RAID. level 0,1,5,6,10. /proc/mdstat for status."
  }),
  (_i: number) => ({
    q: "What does `mdadm --grow --raid-devices=4` do?",
    o: ["Adds devices to RAID array", "Grow RAID", "Expand RAID", "Add RAID devices"],
    c: 0,
    e: "mdadm --grow increases raid-devices. Add disk first.",
    de: "For RAID5/6. Rebuild takes time. mdadm --grow --size=max."
  }),
  (_i: number) => ({
    q: "What does `lvm pvcreate /dev/sdb` do?",
    o: ["Initializes disk as LVM physical volume", "Create PV", "PV create", "Physical volume"],
    c: 0,
    e: "pvcreate prepares disk for LVM. pvs to list.",
    de: "vgcreate to make volume group. lvcreate for logical volume."
  }),
  (_i: number) => ({
    q: "What does `lvextend -L +10G /dev/vg/lv` do?",
    o: ["Extends LV by 10GB", "Extend LV", "Grow LV", "Add space"],
    c: 0,
    e: "lvextend -L +10G adds 10GB. -l +100%FREE for all free.",
    de: "Then resize2fs or xfs_growfs to use space. Requires free space in VG."
  }),
  (_i: number) => ({
    q: "What does `lvresize -L 20G /dev/vg/lv` do?",
    o: ["Sets LV size to 20GB (shrink or grow)", "Resize LV", "Set LV size", "LV resize"],
    c: 0,
    e: "lvresize -L 20G sets exact size. Shrink: resize fs first.",
    de: "Grow: lvextend then resize fs. Shrink: resize fs then lvreduce."
  }),
  (_i: number) => ({
    q: "What does `vgextend vg /dev/sdc` do?",
    o: ["Adds PV to volume group", "Extend VG", "Add to VG", "VG extend"],
    c: 0,
    e: "vgextend adds physical volume to volume group.",
    de: "More space for LVs. vgreduce to remove (after pvmove)."
  }),
  (_i: number) => ({
    q: "What does `pvmove /dev/sda1` do?",
    o: ["Moves data off PV to other PVs in VG", "Move PV", "Evacuate PV", "PV move"],
    c: 0,
    e: "pvmove relocates data. To replace or remove disk.",
    de: "pvmove /dev/sda1. Then vgreduce vg /dev/sda1."
  }),
  (_i: number) => ({
    q: "What does `cryptsetup luksOpen /dev/sda1 enc` do?",
    o: ["Opens LUKS partition as /dev/mapper/enc", "Open LUKS", "Decrypt", "LUKS open"],
    c: 0,
    e: "cryptsetup luksOpen opens encrypted device. Maps to /dev/mapper/enc.",
    de: "Then mount /dev/mapper/enc /mnt. luksClose to close."
  }),
  (_i: number) => ({
    q: "What does `cryptsetup luksAddKey` do?",
    o: ["Adds another passphrase to LUKS", "Add key", "New passphrase", "LUKS add key"],
    c: 0,
    e: "luksAddKey adds key slot. Existing passphrase required.",
    de: "Up to 8 key slots. luksRemoveKey to remove. luksChangeKey to change."
  }),
  (_i: number) => ({
    q: "What does `dmsetup table` show?",
    o: ["Device mapper table (mapping)", "DM table", "Mapper table", "Device mapper"],
    c: 0,
    e: "dmsetup table shows active device-mapper mappings.",
    de: "Used by LVM, cryptsetup, etc. dmsetup ls for list."
  }),
  (_i: number) => ({
    q: "What does `wipefs -a /dev/sda` do?",
    o: ["Erases all filesystem signatures", "Wipe all", "Clear signatures", "Wipe fs"],
    c: 0,
    e: "wipefs -a removes magic strings. Device appears empty.",
    de: "Dangerous! Data may still be recoverable. Full overwrite for secure."
  }),
  (_i: number) => ({
    q: "What does `sgdisk -G /dev/sda` do?",
    o: ["Randomizes GPT GUIDs (new disk identity)", "New GUIDs", "Randomize GPT", "New identity"],
    c: 0,
    e: "sgdisk -G generates new GUIDs. For cloning without UUID clash.",
    de: "Use before first boot of cloned system. Fixes UUID conflicts."
  }),
  (_i: number) => ({
    q: "What does `partx -a /dev/sda` do?",
    o: ["Informs kernel of new partitions", "Add partitions", "Reread partition table", "Partition add"],
    c: 0,
    e: "partx -a adds partition table to kernel. After fdisk/sgdisk.",
    de: "Alternative to partprobe. partx -d to delete."
  }),
  (_i: number) => ({
    q: "What does `ls -n` show for numeric IDs?",
    o: ["UID and GID numbers instead of names", "Numeric IDs", "UID GID", "Numbers"],
    c: 0,
    e: "ls -n shows numeric uid:gid. When NSS broken or in initramfs.",
    de: "id -u, id -g for current user. getent for name lookup."
  }),
  (_i: number) => ({
    q: "What does `id -un` output?",
    o: ["Username of current user", "User name", "Login name", "Current user"],
    c: 0,
    e: "id -un prints username. id -u for UID.",
    de: "whoami is similar. id shows full id info."
  }),
  (_i: number) => ({
    q: "What does `newgrp group` do?",
    o: ["Switches primary group for this shell", "Switch group", "New group", "Change group"],
    c: 0,
    e: "newgrp starts subshell with primary group = group.",
    de: "If user in group. Or with password for group. exit to return."
  }),
  (_i: number) => ({
    q: "What does `sg group command` do?",
    o: ["Runs command with group as primary", "Run as group", "Set group", "Group exec"],
    c: 0,
    e: "sg group cmd runs with group as primary. No new shell.",
    de: "sg users ./script. Like newgrp but for single command."
  }),
  (_i: number) => ({
    q: "What does `flock -s file cmd` use?",
    o: ["Shared (read) lock", "Shared lock", "Read lock", "Share lock"],
    c: 0,
    e: "flock -s = shared lock. Multiple readers OK.",
    de: "flock (default) = exclusive. -s = shared. -x = exclusive (explicit)."
  }),
  (_i: number) => ({
    q: "What does `flock -n file cmd` do if lock held?",
    o: ["Fails immediately (non-blocking)", "Non-blocking", "No wait", "Fail if locked"],
    c: 0,
    e: "flock -n: don't wait. Exit with error if lock held.",
    de: "Use in cron: flock -n /tmp/lock.lock ./script || exit 1"
  }),
  (_i: number) => ({
    q: "What does `fadvise -s` (posix_fadvise sequential) hint?",
    o: ["Sequential access pattern", "Sequential", "Read ahead", "Access hint"],
    c: 0,
    e: "posix_fadvise sequential: kernel may read ahead more.",
    de: "Hints for optimization. Random, willneed, dontneed. Not all FS honor."
  }),
  (_i: number) => ({
    q: "What does `sync; sync; sync` (triple) achieve?",
    o: ["Extra assurance buffers flushed (historical)", "Triple sync", "Force sync", "Buffer flush"],
    c: 0,
    e: "sync flushes buffers. Triple was old workaround. One usually enough.",
    de: "Modern sync is sufficient. Some used triple for buggy drivers."
  }),
  (_i: number) => ({
    q: "What does `ls -X` do (GNU)?",
    o: ["Sort by extension", "Extension sort", "Sort by ext", "Ext order"],
    c: 0,
    e: "ls -X sorts by extension. file.txt before file.log.",
    de: "ls -X groups by suffix. Useful for organizing by type."
  }),
  (_i: number) => ({
    q: "What does `ls -v` do (GNU)?",
    o: ["Natural sort (version numbers)", "Version sort", "Natural order", "Ver sort"],
    c: 0,
    e: "ls -v: natural/version sort. file2 before file10.",
    de: "sort -V for same. ls -v for filenames with numbers."
  }),
  (_i: number) => ({
    q: "What does `ls --group-directories-first` do?",
    o: ["Lists directories before files", "Dirs first", "Group dirs", "Dirs then files"],
    c: 0,
    e: "Directories appear first, then files.",
    de: "Cleaner listing. Often combined with -l."
  }),
  (_i: number) => ({
    q: "What does `du --apparent-size` show?",
    o: ["Logical size (not disk usage)", "Apparent size", "Logical", "File size"],
    c: 0,
    e: "du --apparent-size shows logical size, not blocks used.",
    de: "Sparse files: apparent > disk. du -b for bytes."
  }),
  (_i: number) => ({
    q: "What does `du -B 1M` do?",
    o: ["Shows size in 1MB blocks", "Block size", "1M blocks", "Block unit"],
    c: 0,
    e: "du -B 1M uses 1MB blocks. -B 1 for bytes.",
    de: "Different from -h. -h is human-readable (K,M,G)."
  }),
  (_i: number) => ({
    q: "What does `stat -c '%w' file` show?",
    o: ["Birth time (creation) if supported", "Birth time", "Creation time", "Birth"],
    c: 0,
    e: "stat %w = birth time. Not all FS support. %x=%X atime, etc.",
    de: "Linux 4.11+. ext4, btrfs, xfs. %w for birth."
  }),
  (_i: number) => ({
    q: "What does `find . -newerXY ref` use for X,Y?",
    o: ["a=access, m=modify, c=change, B=birth", "Time types", "Compare types", "Newer types"],
    c: 0,
    e: "find -newermt, -newerat, etc. -newerBt for birth.",
    de: "find . -newermt '2024-01-01' -newermt '2024-12-31' for range."
  }),
  (_i: number) => ({
    q: "What does `find . -regex '.*\\.txt$'` use?",
    o: ["Full path regex (not glob)", "Path regex", "Regex match", "Full regex"],
    c: 0,
    e: "find -regex matches full path. Use .* for any prefix.",
    de: "find -regextype posix-extended for extended regex. -iregex for case-insensitive."
  }),
  (_i: number) => ({
    q: "What does `find . -warn` do (GNU)?",
    o: ["Warns about issues (e.g. permissions)", "Warn", "Show warnings", "Permission warn"],
    c: 0,
    e: "find -warn prints warnings for permission denied, etc.",
    de: "Default is -nowarn. -warn for debugging find issues."
  }),
  (_i: number) => ({
    q: "What does `find . -quit` do?",
    o: ["Exits immediately after first match", "Quit early", "First match", "Stop"],
    c: 0,
    e: "find -quit stops after first match. For 'any' check.",
    de: "find . -name '*.txt' -quit -print. Exits after first .txt."
  }),
  (_i: number) => ({
    q: "What does `realpath -s file` do?",
    o: ["Resolves without following symlinks", "No symlinks", "Skip symlinks", "Don't follow"],
    c: 0,
    e: "realpath -s doesn't follow symlinks. Path as-is.",
    de: "realpath (default) follows. -s = --no-symlinks."
  }),
  (_i: number) => ({
    q: "What does `readlink -e` require?",
    o: ["Target must exist", "Target exists", "Must exist", "Existing target"],
    c: 0,
    e: "readlink -e fails if any component doesn't exist.",
    de: "readlink -f can succeed with broken link. -e = canonical, must exist."
  }),
  (_i: number) => ({
    q: "What does `basename path .suffix` return?",
    o: ["Last component with suffix stripped", "Strip suffix", "Base without ext", "Name no suffix"],
    c: 0,
    e: "basename /path/foo.txt .txt returns foo.",
    de: "dirname gets directory. basename gets filename. Both from coreutils."
  }),
  (_i: number) => ({
    q: "What does `pathchk -p` reject?",
    o: ["Non-portable chars (space, leading dash, etc.)", "Bad chars", "Invalid path", "Non-portable"],
    c: 0,
    e: "pathchk -p rejects paths with space, -, newline, etc.",
    de: "POSIX portable filename character set. For cross-platform scripts."
  }),
  (_i: number) => ({
    q: "What does `mkfifo /tmp/myfifo` create?",
    o: ["Named pipe (FIFO)", "FIFO", "Named pipe", "Pipe file"],
    c: 0,
    e: "mkfifo creates named pipe. cat file > fifo & cat fifo.",
    de: "First-in-first-out. Blocking. Used for IPC."
  }),
  (_i: number) => ({
    q: "What does `mknod /dev/mynull c 1 3` create?",
    o: ["Character device (like /dev/null)", "Char device", "Device node", "Null device"],
    c: 0,
    e: "mknod name c major minor. 1 3 = null. c = character.",
    de: "Usually use udev. mknod for manual. ls -l shows c."
  }),
  (_i: number) => ({
    q: "What does `ls -Z` show without SELinux?",
    o: ["Nothing or unsupported", "Empty", "No output", "N/A"],
    c: 0,
    e: "ls -Z on non-SELinux: empty or error.",
    de: "SELinux only. getenforce to check."
  }),
  (_i: number) => ({
    q: "What does `semanage fcontext -a -t type '/path(/.*)?'` do?",
    o: ["Adds persistent SELinux context rule", "SELinux rule", "Context rule", "Persistent context"],
    c: 0,
    e: "semanage fcontext adds default context. restorecon applies.",
    de: "Persists across reboot. chcon is temporary."
  }),
  (_i: number) => ({
    q: "What does `ausearch -m avc` find?",
    o: ["SELinux AVC denials in audit log", "AVC denials", "SELinux denials", "Audit denials"],
    c: 0,
    e: "ausearch -m avc searches audit log for SELinux denials.",
    de: "Troubleshooting. audit2why to explain. setenforce 0 for permissive."
  }),
  (_i: number) => ({
    q: "What does `matchpathcon /path` show?",
    o: ["Default SELinux context for path", "Default context", "Path context", "Expected context"],
    c: 0,
    e: "matchpathcon shows what context path should have.",
    de: "From policy. Compare with ls -Z. restorecon to fix."
  }),
  (_i: number) => ({
    q: "What does `btrfs filesystem defragment` do?",
    o: ["Defragments files or directory", "Btrfs defrag", "Defragment", "Reorganize blocks"],
    c: 0,
    e: "btrfs filesystem defragment reorganizes file blocks. Per-file or -r recursive.",
    de: "btrfs filesystem defragment -r /path. Online. Can cause temporary performance hit."
  }),
  (_i: number) => ({
    q: "What does `zfs set atime=off pool/ds` do?",
    o: ["Disables access time updates", "No atime", "Atime off", "Performance"],
    c: 0,
    e: "zfs atime=off skips access time. Better performance for reads.",
    de: "Similar to mount noatime. zfs get atime. atime=on to re-enable."
  }),
  (_i: number) => ({
    q: "What does `zpool scrub pool` do?",
    o: ["Verifies and repairs data integrity", "Scrub pool", "Verify data", "ZFS scrub"],
    c: 0,
    e: "zpool scrub reads all data, checks checksums, repairs from redundancy.",
    de: "Like btrfs scrub. zpool status during scrub. -s to cancel."
  }),
  (_i: number) => ({
    q: "What does `mdadm --detail /dev/md0` show?",
    o: ["RAID array status and configuration", "RAID detail", "Array info", "MD status"],
    c: 0,
    e: "mdadm --detail shows array state, devices, sync status.",
    de: "mdadm -D /dev/md0. State: clean, degraded, recovering. Per-disk status."
  }),
  (_i: number) => ({
    q: "What does `cryptsetup status enc` show?",
    o: ["LUKS device status (cipher, offset)", "LUKS status", "Encryption status", "Crypto status"],
    c: 0,
    e: "cryptsetup status shows cipher, key size, offset for open device.",
    de: "cryptsetup status enc. /dev/mapper/enc. luksDump for more."
  }),
  (_i: number) => ({
    q: "What does `lsblk -o +UUID` add?",
    o: ["UUID column to output", "UUID column", "Add UUID", "Show UUID"],
    c: 0,
    e: "lsblk -o +UUID adds UUID. -o for column selection.",
    de: "lsblk -o NAME,SIZE,UUID,FSTYPE. + adds to default. -O for all."
  }),
  (_i: number) => ({
    q: "What does `find . -newerXY ref` use for X,Y?",
    o: ["a=access m=modify c=change B=birth", "Time comparison", "Newer types", "Timestamp types"],
    c: 0,
    e: "find -newerXY. a,m,c,B for access, modify, change, birth.",
    de: "find . -newermt '2024-01-01'. -newerBt for birth. Flexible comparison."
  }),
  (_i: number) => ({
    q: "What does `stat -c '%y' file` show?",
    o: ["Modification time (mtime)", "Mtime", "Mod time", "Last modify"],
    c: 0,
    e: "stat -c '%y' outputs modification time. %x atime, %z ctime.",
    de: "stat -c '%Y' for Unix timestamp. %y human. %X %Z for atime ctime."
  }),
  (_i: number) => ({
    q: "What does `touch -d '2024-01-15' file` do?",
    o: ["Sets file times to that date", "Set date", "Specific date", "Touch date"],
    c: 0,
    e: "touch -d sets atime and mtime to specified date.",
    de: "touch -d '2 days ago'. touch -d @timestamp for Unix time."
  }),
  (_i: number) => ({
    q: "What does `rsync --info=progress2` show?",
    o: ["Single-line transfer progress", "Progress info", "Transfer progress", "Rsync progress"],
    c: 0,
    e: "rsync --info=progress2 shows one line. Better for logs.",
    de: "rsync -av --info=progress2. progress for per-file. progress2 for overall."
  }),
  (_i: number) => ({
    q: "What does `rsync --link-dest=dir` use?",
    o: ["Hard links to dir for unchanged files", "Link dest", "Incremental", "Hard link backup"],
    c: 0,
    e: "rsync --link-dest=prev backup. Unchanged files hard-linked. Saves space.",
    de: "Incremental backup. cp -al style. Each run: link-dest=previous."
  }),
  (_i: number) => ({
    q: "What does `cp -n` do?",
    o: ["No-clobber: don't overwrite existing", "No overwrite", "No clobber", "Preserve existing"],
    c: 0,
    e: "cp -n skips existing files. No overwrite. Like mv -n.",
    de: "cp -n src dest. Safe copy. -u only overwrites if source newer."
  }),
  (_i: number) => ({
    q: "What does `install -m 644` set?",
    o: ["File mode to rw-r--r--", "Permissions", "Mode 644", "Install permissions"],
    c: 0,
    e: "install -m 644 sets permissions. Common for config files.",
    de: "install -m 755 for executables. -m 644 for data. Combines cp + chmod."
  }),
  (_i: number) => ({
    q: "What does `find . -printf '%T+\\n'` show?",
    o: ["Modification time in ISO format", "Mtime ISO", "Time format", "Mod time readable"],
    c: 0,
    e: "find -printf '%T+' = mtime in YYYY-MM-DD+HH:MM:SS.",
    de: "find . -printf '%T+ %p\\n'. %A+ atime. %C+ ctime. %B+ birth."
  }),
  (_i: number) => ({
    q: "What does `locate -i pattern` do?",
    o: ["Case-insensitive search", "Ignore case", "Case insensitive", "No case"],
    c: 0,
    e: "locate -i ignores case. locate -i Foo matches foo, FOO.",
    de: "locate -i. Faster than grep -i on find. Uses pre-built index."
  }),
  (_i: number) => ({
    q: "What does `find . -readable` match?",
    o: ["Files readable by current user", "Readable", "Can read", "Read permission"],
    c: 0,
    e: "find -readable matches files you can read. -writable, -executable.",
    de: "find . -readable -type f. Test based on effective permissions."
  }),
  (_i: number) => ({
    q: "What does `realpath --relative-to=dir file` output?",
    o: ["Path relative to dir", "Relative path", "Rel to dir", "Relative"],
    c: 0,
    e: "realpath --relative-to=dir gives path from dir to file.",
    de: "realpath --relative-to=/home/user /home/user/a/b -> a/b. For portability."
  }),
  (_i: number) => ({
    q: "What does `ls -N` do (GNU)?",
    o: ["Disables quoting of filenames", "No quoting", "Raw names", "No quote"],
    c: 0,
    e: "ls -N turns off quoting. Opposite of -Q.",
    de: "ls --quoting=none. For piping to other tools. Default in scripts."
  }),
  (_i: number) => ({
    q: "What does `du --exclude='*.log'` do?",
    o: ["Excludes matching files from size calc", "Exclude pattern", "Skip logs", "No log files"],
    c: 0,
    e: "du --exclude skips matching paths. Like find -path -prune.",
    de: "du -sh --exclude='*.log' /var. Multiple --exclude. For accurate totals."
  }),
  (_i: number) => ({
    q: "What does `fdisk -l` without device show?",
    o: ["Partition tables of all block devices", "All disks", "All partitions", "Full listing"],
    c: 0,
    e: "fdisk -l with no device lists all. With device: that disk only.",
    de: "fdisk -l. Requires root for full info. lsblk simpler for quick view."
  }),
  (_i: number) => ({
    q: "What does `parted -l` do?",
    o: ["Lists partition layout of all disks", "List partitions", "Partition list", "Disk layout"],
    c: 0,
    e: "parted -l shows partition tables. Non-interactive. Scriptable.",
    de: "parted -l. Like fdisk -l. GPT and MBR. parted for partitioning."
  }),
  (_i: number) => ({
    q: "What does `blkid -o udev` output?",
    o: ["Key=value for udev rules", "Udev format", "Udev output", "Key value"],
    c: 0,
    e: "blkid -o udev outputs KEY=value. For udev rules.",
    de: "blkid -o udev /dev/sda1. ID_FS_UUID, ID_FS_TYPE. udevadm uses."
  }),
  (_i: number) => ({
    q: "What does `tune2fs -j /dev/sda1` do?",
    o: ["Adds journal (ext3) to ext2", "Add journal", "Ext3 upgrade", "Journal add"],
    c: 0,
    e: "tune2fs -j adds journal. Converts ext2 to ext3. Non-destructive.",
    de: "tune2fs -j. No data loss. ext2 -> ext3. Reversible with debugfs."
  }),
  (_i: number) => ({
    q: "What does `btrfs subvolume set-default` do?",
    o: ["Sets default subvolume for mount", "Default subvol", "Set default", "Default mount"],
    c: 0,
    e: "btrfs subvolume set-default sets which subvol is mounted by default.",
    de: "btrfs subvolume set-default 256 /. ID from subvolume list. For rollback."
  }),
  (_i: number) => ({
    q: "What does `zfs allow pool/ds snapshot` grant?",
    o: ["Permission to create snapshots", "Snapshot permission", "ZFS allow", "Delegate snapshot"],
    c: 0,
    e: "zfs allow grants permission. snapshot = create snapshots. Per-dataset.",
    de: "zfs allow user snapshot pool/ds. Delegation. clone, destroy, etc."
  }),
];
