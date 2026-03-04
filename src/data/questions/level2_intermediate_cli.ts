// LEVEL 2 INTERMEDIATE — Filesystem & Storage (100 unique questions)
// Replaces placeholders. All options are meaningful, no "Option A/B/C/D".

export const level2Intermediate = [
  (_i: number) => ({
    q: "What does `chmod u=rwx,g=rx,o= file` set?",
    o: ["Owner rwx, group rx, others none", "All rwx", "User only rwx", "Group and others none"],
    c: 0,
    e: "Symbolic chmod: u/g/o with = sets exact permissions.",
    de: "chmod u+x adds execute for user. chmod o-w removes write for others.",
    deBeginner: "u=rwx gives owner read+write+execute; g=rx gives group read+execute; o= gives others nothing. The = sets exact permissions.",
    deExpert: "chmod u=rwx,g=rx,o=: symbolic. = sets exactly. u+x add, o-w remove. chmod(2)."
  }),
  (_i: number) => ({
    q: "What does `umask 022` mean for new files?",
    o: ["Others get no write (default 644 for files)", "Mode 022", "Umask 022", "Group write off"],
    c: 0,
    e: "umask masks out bits. 022 means others and group don't get write.",
    de: "New file: 666 & ~022 = 644. New dir: 777 & ~022 = 755.",
    deBeginner: "umask 022 means new files get 644 (group and others have no write). New dirs get 755. The umask is the bits to turn off.",
    deExpert: "umask: bits to clear. 022 -> files 644, dirs 755. 666&~022, 777&~022. Inherited by children."
  }),
  (_i: number) => ({
    q: "What does `readlink -f /path/to/link` return?",
    o: ["Canonical absolute path of target", "Link target as-is", "Link path", "Error"],
    c: 0,
    e: "readlink -f resolves symlinks and . and .. to canonical path.",
    de: "readlink without -f shows raw target. realpath is similar.",
    deBeginner: "readlink -f gives the final, absolute path after resolving all symlinks and . and ... Without -f you get the target string as stored.",
    deExpert: "readlink -f: canonical path. Resolve symlinks, . .. realpath(3). GNU. For script path resolution."
  }),
  (_i: number) => ({
    q: "What happens if you delete the target of a symlink?",
    o: ["Symlink becomes dangling (broken)", "Symlink is deleted too", "Target is restored", "Error on access"],
    c: 0,
    e: "Symlink stores path; if target is gone, link points to nothing.",
    de: "ls shows red/broken. file link shows 'broken symbolic link'.",
    deBeginner: "The symlink stays but becomes broken (dangling). It still stores the path; the target is gone. ls may show it in red; file says 'broken symbolic link'.",
    deExpert: "Symlink remains; target gone = dangling. ENOENT on open. ls -l shows -> target. file 'broken symbolic link'."
  }),
  (_i: number) => ({
    q: "What does `find . -type f -perm -4000` find?",
    o: ["Files with SUID bit set", "Files with 4000 permissions", "Executable files", "Read-only files"],
    c: 0,
    e: "-perm -4000 matches files that have at least SUID (4 in first octal).",
    de: "find . -perm -4000 finds SUID binaries. Security audit.",
    deBeginner: "find -perm -4000 finds files with the SUID bit set (the 4 in the first digit). Use for security audits: find SUID binaries.",
    deExpert: "find -perm -mode: match if all bits in mode set. -4000 = SUID. -perm /4000 any match. Security audit."
  }),
  (_i: number) => ({
    q: "What does `ls -l` show for a hard link?",
    o: ["Link count > 1, same inode as original", "Points to link", "Symlink indicator", "Different inode"],
    c: 0,
    e: "Hard links share inode. Link count shows how many names point to it.",
    de: "ls -li shows inode. Same inode = same file, different names.",
    deBeginner: "For a hard link, ls -l shows link count greater than 1. ls -li shows the inode; same inode means same file, different names.",
    deExpert: "Hard link: same inode, nlink>1. No -> in ls -l. ls -li for inode. Same file, multiple names."
  }),
  (_i: number) => ({
    q: "What does `df -T` add to df output?",
    o: ["Filesystem type column", "Total size", "Type of mount", "Timestamp"],
    c: 0,
    e: "df -T shows filesystem type (ext4, xfs, tmpfs, etc.).",
    de: "Useful to see what's mounted. df -hT for human + type.",
    deBeginner: "df -T adds a column with the filesystem type (ext4, xfs, tmpfs, etc.). df -hT for human-readable sizes and type.",
    deExpert: "df -T: fstype column. statvfs. df -hT. For mount audit."
  }),
  (_i: number) => ({
    q: "What does `du -x` do?",
    o: ["Excludes other filesystems (stay on one mount)", "Exclude files", "Extra mode", "Exact size"],
    c: 0,
    e: "du -x excludes directories on different mount points.",
    de: "du -shx / excludes /home if it's a separate mount. Avoids double-count.",
    deBeginner: "du -x keeps du on one filesystem and skips other mount points. So du -shx / won't cross into /home if it's a separate mount. Avoids double-counting.",
    deExpert: "du -x: don't cross mount points. One FS only. Avoid double-count. du -shx /."
  }),
  (_i: number) => ({
    q: "What does `ls -l` show for a directory's 'x' permission?",
    o: ["Execute = search/enter the directory", "Execute files inside", "Extra permission", "Exclude"],
    c: 0,
    e: "On directories, x means you can cd into it (search permission).",
    de: "Without x, you can't ls contents or cd. r alone lists names but not details.",
    deBeginner: "On a directory, x (execute) means you can enter it (cd) and access files inside. Without x you can't cd or ls the contents properly. r alone lets you list names only.",
    deExpert: "Dir x: search permission. cd, open files inside. Without x: EACCES. r = list names. X_OK on dir."
  }),
  (_i: number) => ({
    q: "What does `chmod g+s directory` do?",
    o: ["Sets SGID so new files inherit directory's group", "Sets group sticky", "Group set", "SGID bit"],
    c: 0,
    e: "SGID on directory: new files get the directory's group.",
    de: "Useful for shared project dirs. ls -l shows 's' in group position.",
    deBeginner: "chmod g+s sets the setgid bit on a directory. New files created there will inherit the directory's group. Good for shared project folders. ls -l shows 's' in the group position.",
    deExpert: "chmod g+s: setgid on dir. New files inherit dir gid. S_ISGID. For shared dirs. ls shows s."
  }),
  (_i: number) => ({
    q: "What does `ls -l` show for a symbolic link?",
    o: ["l in first char, -> target, size is target path length", "l and link count", "Points to file", "Symlink flag"],
    c: 0,
    e: "lrwxrwxrwx ... -> target. Size is length of target path string.",
    de: "readlink shows target. file shows 'symbolic link to ...'",
    deBeginner: "ls -l shows 'l' as the first character and -> target. The size is the length of the target path string. readlink shows the target.",
    deExpert: "Symlink: l first char, -> target. Size = len(target). lstat on link. readlink for target."
  }),
  (_i: number) => ({
    q: "What does `mount -o remount,ro /` do?",
    o: ["Remounts root as read-only", "Remounts with options", "Read-only remount", "Remount root"],
    c: 0,
    e: "remount changes options without unmounting. ro = read-only.",
    de: "Useful for maintenance. mount -o remount,rw / to make writable again.",
    deBeginner: "mount -o remount,ro / makes the root filesystem read-only without unmounting it. Useful for maintenance. mount -o remount,rw / to make it writable again.",
    deExpert: "mount -o remount,ro: change options in place. MS_REMOUNT. No umount. For maintenance, fsck."
  }),
  (_i: number) => ({
    q: "What is the purpose of /opt in FHS?",
    o: ["Optional/add-on software packages", "Operating system", "Optimization", "Output"],
    c: 0,
    e: "/opt holds optional software (third-party, add-ons).",
    de: "FHS: /opt for add-on packages. /usr/local for locally compiled.",
    deBeginner: "/opt is for optional or add-on software packages (third-party, bundled apps). FHS. /usr/local is for locally compiled software.",
    deExpert: "/opt: FHS. Add-on packages. Optional software. /usr/local for local build. Separate from /usr."
  }),
  (_i: number) => ({
    q: "What does `ls -i` show?",
    o: ["Inode number of each file", "Index", "Info", "Identifier"],
    c: 0,
    e: "ls -i prints inode number before each filename.",
    de: "Hard links show same inode. Useful for debugging.",
    deBeginner: "ls -i prints the inode number before each file. Hard links show the same inode. Useful for debugging and seeing which names point to the same file.",
    deExpert: "ls -i: inode. st_ino. Hard links same inode. For dedup, link check."
  }),
  (_i: number) => ({
    q: "What does `chown :group file` do?",
    o: ["Changes only the group (keeps owner)", "Changes to group", "Sets group", "Group change"],
    c: 0,
    e: "chown :group or chgrp changes group. Owner unchanged.",
    de: "chown user:group changes both. chown user: changes group to user's primary.",
    deBeginner: "chown :group changes only the file's group; the owner stays the same. chown user:group changes both. chgrp is the same as chown :group.",
    deExpert: "chown :group: group only. chgrp equivalent. chown user: sets group to user's primary. Root or member."
  }),
  (_i: number) => ({
    q: "What does `find . -maxdepth 2` do?",
    o: ["Limits search to 2 directory levels deep", "Finds max depth", "Depth 2 only", "Two levels"],
    c: 0,
    e: "maxdepth 2: current dir and one level below.",
    de: "find . -maxdepth 1 -type f. -mindepth for minimum depth.",
    deBeginner: "find -maxdepth 2 only goes 2 levels: current directory and one level of subdirs. find -maxdepth 1 -type f for files in current dir only. -mindepth sets a minimum.",
    deExpert: "find -maxdepth n: don't descend past n. -mindepth n. Depth 0 = start dir. Prune tree."
  }),
  (_i: number) => ({
    q: "What does `stat -c '%A' file` show?",
    o: ["Permissions in symbolic form (e.g. -rwxr-xr-x)", "Access time", "All stats", "Attributes"],
    c: 0,
    e: "stat -c format string. %A = access rights in symbolic form.",
    de: "stat -c '%a' for octal. %U=%u owner, %G=%g group.",
    deBeginner: "stat -c '%A' prints permissions in symbolic form like -rwxr-xr-x. stat -c '%a' gives octal (e.g. 755). %U and %G are owner and group names.",
    deExpert: "stat -c FORMAT: scriptable. %A symbolic mode, %a octal. %U %u %G %g. GNU. For scripts."
  }),
  (_i: number) => ({
    q: "What does `ls -L` do with symlinks?",
    o: ["Follows symlinks, shows target info", "Lists links", "Long format links", "Link info"],
    c: 0,
    e: "ls -L dereferences symlinks, shows info of target.",
    de: "Default ls shows link itself. -L shows what it points to.",
    deBeginner: "ls -L follows symlinks and shows information about the target file, not the link. Default ls shows the link itself (size of path, etc.).",
    deExpert: "ls -L: dereference symlinks. stat target. Default shows link. -H dereference command-line only."
  }),
  (_i: number) => ({
    q: "What does `chattr +a file` do?",
    o: ["Append-only: can only append, not overwrite", "Add attribute", "Archive", "Append mode"],
    c: 0,
    e: "chattr +a: file can only be appended to. Protects logs.",
    de: "Even root can't truncate. chattr -a to remove. lsattr shows.",
    deBeginner: "chattr +a makes the file append-only: you can add to the end but not overwrite or truncate. Even root. Good for logs. chattr -a to remove. lsattr shows it.",
    deExpert: "chattr +a: append-only. No overwrite, no truncate. FS-specific (ext). Root. chattr -a remove."
  }),
  (_i: number) => ({
    q: "What does `getfacl -d file` show?",
    o: ["Default ACLs (for directories)", "Detailed ACLs", "Directory ACLs", "Default access"],
    c: 0,
    e: "getfacl -d shows default ACLs (inherited by new files in dir).",
    de: "setfacl -d to set default. New files in dir inherit default ACLs.",
    deBeginner: "getfacl -d shows default ACLs on a directory—the ACLs that new files created in that dir will get. setfacl -d to set default ACLs.",
    deExpert: "getfacl -d: default ACL. Dir only. New files inherit. setfacl -d to set. acl(5)."
  }),
  (_i: number) => ({
    q: "What does `fuser -v /mnt` show?",
    o: ["Processes using that mount point", "File users", "Users of file", "Process list"],
    c: 0,
    e: "fuser shows PIDs of processes using the file/directory.",
    de: "fuser -km /mnt kills them. Useful before umount.",
    deBeginner: "fuser -v shows which processes are using that file or directory (e.g. /mnt). fuser -km /mnt kills those processes. Use before umount when something is in use.",
    deExpert: "fuser: processes using file. fuser -v verbose. fuser -km kill. Before umount. EBUSY."
  }),
  (_i: number) => ({
    q: "What does `lsof +D /var/log` list?",
    o: ["Files opened under that directory", "Log files open", "Directory usage", "Open files in dir"],
    c: 0,
    e: "lsof +D dir lists all files open under that directory.",
    de: "lsof /path for specific file. +D is recursive.",
    deBeginner: "lsof +D /var/log lists every file open under that directory (recursive). lsof /path lists opens of that specific path. +D scans the tree.",
    deExpert: "lsof +D dir: all open files under dir. Recursive. lsof path for one. For 'who has this open'."
  }),
  (_i: number) => ({
    q: "What does `mount --bind /src /dst` achieve?",
    o: ["Makes /src visible at /dst (same content)", "Binds two dirs", "Bind mount", "Mirror mount"],
    c: 0,
    e: "Bind mount: same filesystem visible at two paths.",
    de: "mount -o bind. Useful for chroot, overlays, or exposing subdirs.",
    deBeginner: "mount --bind makes the same directory visible at another path. /src and /dst show the same content. Used for chroot, overlays, or exposing a subdir elsewhere.",
    deExpert: "mount --bind: same dir, second path. mount -o bind. Same inode. chroot, overlay base."
  }),
  (_i: number) => ({
    q: "What does `find . -empty` find?",
    o: ["Empty files and directories", "Empty only", "Zero size", "Empty content"],
    c: 0,
    e: "find -empty matches empty files (0 bytes) and empty directories.",
    de: "find . -type f -empty for files only. Useful for cleanup.",
    deBeginner: "find -empty finds empty files (0 bytes) and empty directories. find . -type f -empty for empty files only. Handy for cleanup.",
    deExpert: "find -empty: 0-byte files, empty dirs. -type f -empty files only. Cleanup, audit."
  }),
  (_i: number) => ({
    q: "What does `rsync -a` preserve?",
    o: ["Permissions, timestamps, ownership, symlinks (archive mode)", "All files", "Archive", "Attributes"],
    c: 0,
    e: "rsync -a = archive: preserves permissions, times, owner, group, symlinks.",
    de: "Equivalent to -rlptgoD. Standard for backups.",
    deBeginner: "rsync -a (archive) preserves permissions, timestamps, owner, group, and symlinks. Same as -rlptgoD. Standard for backups.",
    deExpert: "rsync -a: archive. -rlptgoD. Preserve perms, times, owner, group, symlinks. Standard backup."
  }),
  (_i: number) => ({
    q: "What does `cp -a source dest` do?",
    o: ["Archive copy: preserves all attributes", "All files", "Archive mode", "Attributes copy"],
    c: 0,
    e: "cp -a preserves permissions, timestamps, links. Like cp -dpR.",
    de: "Use for backups. -d = no dereference, -p = preserve, -R = recursive.",
    deBeginner: "cp -a does an archive copy: preserves permissions, timestamps, and doesn't follow symlinks (-d). Like cp -dpR. Use for backups.",
    deExpert: "cp -a: archive. -dpR. Preserve mode, time, links. No dereference. Backup copy."
  }),
  (_i: number) => ({
    q: "What does `mv` do across filesystems?",
    o: ["Copy + delete (not atomic rename)", "Move fails", "Same as same-fs", "Copies only"],
    c: 0,
    e: "Across filesystems, mv copies then removes (can't rename across mounts).",
    de: "Same filesystem: mv is rename (atomic). Different: copy + unlink.",
    deBeginner: "When you mv to a different disk or mount, mv has to copy the file then delete the original (rename only works on the same filesystem). So it's not atomic and can be slower.",
    deExpert: "mv across FS: copy + unlink. rename(2) same FS only. Cross-mount = cp + rm. Not atomic."
  }),
  (_i: number) => ({
    q: "What does `ln -n` do (GNU ln)?",
    o: ["Don't dereference existing symlink dir", "No overwrite", "New link", "No follow"],
    c: 0,
    e: "ln -n: if target is symlink to dir, don't follow it.",
    de: "Prevents replacing symlink with directory. -n = --no-dereference.",
    deBeginner: "ln -n (--no-dereference) means: if the target is a symlink to a directory, don't follow it—put the new link in the directory that the symlink points to. Prevents accidentally replacing a symlink with a real directory.",
    deExpert: "ln -n/--no-dereference: don't dereference dir symlink. Prevents replacing symlink with dir. GNU."
  }),
  (_i: number) => ({
    q: "What does `find . -mtime -1` find?",
    o: ["Files modified in last 24 hours", "Modified today", "Last day", "Recent mods"],
    c: 0,
    e: "-mtime -1: modified less than 1 day ago. -mtime +7: over 7 days.",
    de: "Times in 24-hour units. -mmin for minutes. -atime for access.",
    deBeginner: "find -mtime -1 finds files modified in the last 24 hours. -mtime +7 is over 7 days ago. Times are in 24-hour units. Use -mmin for minutes, -atime for access time.",
    deExpert: "find -mtime n: 24h units. -1 <1 day, +7 >7 days. -mmin minutes. -atime -ctime. mtime = st_mtime."
  }),
  (_i: number) => ({
    q: "What does `setfacl -m u:jane:rw file` do?",
    o: ["Adds ACL: user jane gets rw", "Modifies ACL", "Sets user ACL", "Jane read-write"],
    c: 0,
    e: "setfacl -m adds/modifies ACL. u:jane:rw gives jane read and write.",
    de: "getfacl to view. setfacl -x u:jane to remove. -b to remove all ACLs.",
    deBeginner: "setfacl -m u:jane:rw file gives user jane read and write on the file. getfacl to view. setfacl -x u:jane to remove her entry. -b removes all ACLs.",
    deExpert: "setfacl -m: add/modify ACL. u:name:perms. setfacl -x remove. -b remove all. getfacl view."
  }),
  (_i: number) => ({
    q: "What does `pathchk -p` check?",
    o: ["Portable filename (POSIX safe chars)", "Path check", "Portable path", "Path validity"],
    c: 0,
    e: "pathchk -p checks if path is portable (POSIX portable filename).",
    de: "Rejects spaces, special chars. Useful before creating cross-platform paths.",
    deBeginner: "pathchk -p checks that the path uses only POSIX-portable characters (no spaces, no special chars). Use before creating paths that must work across systems.",
    deExpert: "pathchk -p: POSIX portable filename check. Rejects unsafe chars. For cross-platform paths."
  }),
  (_i: number) => ({
    q: "What does `install -m 755 -d /path/to/dir` do?",
    o: ["Creates directory with 755 permissions", "Installs dir", "Makes directory", "Dir with mode"],
    c: 0,
    e: "install -d creates directory. -m sets mode. Like mkdir -p with chmod.",
    de: "install copies files with specific mode/owner. -d for directories.",
    deBeginner: "install -m 755 -d creates the directory (and parents) with mode 755. Like mkdir -p plus chmod. install also copies files with a chosen mode/owner; -d is for dirs only.",
    deExpert: "install -d: mkdir -p. -m mode. install -m 755 -o root file dest. For packaging, install scripts."
  }),
  (_i: number) => ({
    q: "What does `split -b 1M file` produce?",
    o: ["Files of 1MB each (xaa, xab, ...)", "Split by 1M", "1M chunks", "Split file"],
    c: 0,
    e: "split -b 1M splits file into 1MB chunks. Default prefix x.",
    de: "cat x* to rejoin. -l 1000 for lines. -n for number of chunks.",
    deBeginner: "split -b 1M splits the file into 1MB pieces named xaa, xab, xac, ... cat x* rejoins. -l 1000 splits by lines. -n splits into N chunks.",
    deExpert: "split -b size: byte chunks. -l lines. -n chunks. Default prefix x. cat x* rejoin."
  }),
  (_i: number) => ({
    q: "What does `shred -v file` do?",
    o: ["Overwrites file with random data (verbose)", "Shreds file", "Secure delete", "Overwrite"],
    c: 0,
    e: "shred overwrites before unlink. -v = verbose. -n 3 for 3 passes.",
    de: "Not guaranteed on journaling FS. Consider full-disk encryption.",
    deBeginner: "shred -v overwrites the file with random data (and optionally multiple passes) before deleting it, to make recovery harder. -v is verbose. Not reliable on journaling FS; full-disk encryption is safer.",
    deExpert: "shred: overwrite then unlink. -v verbose, -n passes. Journaling FS may not overwrite. FDE better."
  }),
  (_i: number) => ({
    q: "What does `flock file cmd` do?",
    o: ["Runs cmd with exclusive lock on file", "File lock", "Locks file", "Exclusive lock"],
    c: 0,
    e: "flock acquires advisory lock on file, runs command, releases.",
    de: "flock /tmp/lock.lock ./script.sh. Prevents concurrent runs.",
    deBeginner: "flock acquires an advisory lock on the file, runs the command, then releases the lock. flock /tmp/lock.lock ./script.sh prevents the script from running twice at once.",
    deExpert: "flock: advisory lock. flock file cmd. flock(2). Prevents concurrent runs. Script singleton."
  }),
  (_i: number) => ({
    q: "What does `ls -U` do?",
    o: ["Unsorted (directory order)", "Unicode", "Universal", "Unchanged"],
    c: 0,
    e: "ls -U disables sorting. Shows order as stored in directory.",
    de: "Faster on huge dirs. Order is filesystem-dependent.",
    deBeginner: "ls -U turns off sorting; files appear in the order the filesystem returns them. Can be faster on huge directories. Order depends on the FS.",
    deExpert: "ls -U: no sort. Directory order. getdents order. Faster. FS-dependent."
  }),
  (_i: number) => ({
    q: "What does `find . -name '*.txt' -exec rm {} \\;` do?",
    o: ["Deletes each matching file (one rm per file)", "Removes matches", "Exec rm", "Delete matches"],
    c: 0,
    e: "-exec runs command for each match. {} is replaced. \\; ends -exec.",
    de: "find ... -exec rm {} + is faster (batches). -delete is simpler for rm.",
    deBeginner: "find runs rm on each matching file; {} is replaced by the path, and \\; ends the -exec. find ... -exec rm {} + runs rm with many args at once (faster). find ... -delete is simpler for delete.",
    deExpert: "find -exec cmd {} \\;: one invocation per file. {} + batches. -delete for rm. Replace {}."
  }),
  (_i: number) => ({
    q: "What does `find . -printf '%p %s\\n'` do?",
    o: ["Prints path and size for each file", "Print format", "Path and size", "Custom output"],
    c: 0,
    e: "find -printf uses format specifiers. %p=path, %s=size.",
    de: "%m=mode, %u=user, %T=modtime. More efficient than -exec stat.",
    deBeginner: "find -printf prints custom output. %p is path, %s is size. So you get path and size per line. %m mode, %u user, %T modtime. More efficient than -exec stat.",
    deExpert: "find -printf: format. %p path, %s size, %m mode, %u user. No -exec. GNU. Efficient."
  }),
  (_i: number) => ({
    q: "What does `locate` use as its database?",
    o: ["updatedb's file list (mlocate)", "Live filesystem", "Index", "Search db"],
    c: 0,
    e: "locate searches pre-built database. updatedb builds it.",
    de: "Fast but may be stale. find is real-time. locate -i for case-insensitive.",
    deBeginner: "locate searches a database that updatedb built (e.g. mlocate). So it's very fast but may be out of date. find scans the live filesystem. locate -i for case-insensitive.",
    deExpert: "locate: search prebuilt DB. updatedb builds. Fast, stale. find real-time. locate -i case."
  }),
  (_i: number) => ({
    q: "What does `which -a cmd` show?",
    o: ["All paths that would run cmd", "All matches", "All which", "All locations"],
    c: 0,
    e: "which -a lists all executables in PATH with that name.",
    de: "Useful when you have multiple (e.g. python, python3).",
    deBeginner: "which -a lists every executable in PATH with that name. Handy when you have several (e.g. python vs python3).",
    deExpert: "which -a: all PATH matches. type -a includes alias, builtin. which external only."
  }),
  (_i: number) => ({
    q: "What does `type -a ls` show?",
    o: ["All definitions (alias, builtin, path)", "All types", "All ls", "All locations"],
    c: 0,
    e: "type -a shows how name is resolved: alias, builtin, or path.",
    de: "type ls might show 'ls is aliased to ls --color'. type -a for all.",
    deBeginner: "type -a shows every way the name is defined: alias, builtin, or path to executable. type ls might show 'ls is aliased to ls --color'.",
    deExpert: "type -a: all resolutions. Alias, builtin, path. type is bash builtin. which external only."
  }),
  (_i: number) => ({
    q: "What does `readlink` without -f return for a symlink?",
    o: ["Target path as stored (may be relative)", "Absolute path", "Resolved path", "Full path"],
    c: 0,
    e: "readlink returns the link target string as-is (relative or absolute).",
    de: "readlink -f resolves to canonical absolute. readlink -e requires target to exist.",
    deBeginner: "readlink (no -f) returns the symlink target exactly as stored—maybe relative. readlink -f gives the full resolved path; -e requires the target to exist.",
    deExpert: "readlink: raw target. readlink -f canonical. readlink -e target must exist. No resolution without -f."
  }),
  (_i: number) => ({
    q: "What does `chmod -R u+w directory` do?",
    o: ["Recursively adds write for owner on all files", "Recursive chmod", "Add write", "Recurse"],
    c: 0,
    e: "chmod -R applies to directory and all contents recursively.",
    de: "Careful with -R. chmod -R a+rX adds read+execute (X=dirs only).",
    deBeginner: "chmod -R applies the change to the directory and everything under it. Here it adds owner write (u+w) on all files. Be careful: -R can change a lot. chmod -R a+rX adds read and execute (X = execute only on dirs).",
    deExpert: "chmod -R: recursive. Destructive. a+rX: X = execute dirs only. chmod(2) per file."
  }),
  (_i: number) => ({
    q: "What does `ls -1` do?",
    o: ["One file per line (single column)", "First file only", "One entry", "Single column"],
    c: 0,
    e: "ls -1 forces one entry per line. Useful for piping.",
    de: "Default for non-tty. ls | wc -l counts files.",
    deBeginner: "ls -1 prints one file per line (single column). Good for piping: ls -1 | wc -l counts files. This is the default when output isn't a terminal.",
    deExpert: "ls -1: one per line. Pipeline-friendly. Default when !isatty. ls | wc -l."
  }),
  (_i: number) => ({
    q: "What does `stat -f` (BSD) or `stat --file-system` show?",
    o: ["Filesystem info (block size, total blocks)", "File system", "FS stats", "Block info"],
    c: 0,
    e: "stat -f shows filesystem-level info, not file-level.",
    de: "df uses similar info. Block size, total/free blocks.",
    deBeginner: "stat -f (BSD) or stat --file-system (GNU) shows filesystem info: block size, total and free blocks. Similar to what df uses, not per-file stats.",
    deExpert: "stat -f/--file-system: statvfs. Block size, blocks. Not per-file. stat path for file."
  }),
  (_i: number) => ({
    q: "What does `touch -r ref file` do?",
    o: ["Sets file's times to match ref file", "Reference touch", "Copy times", "Match ref"],
    c: 0,
    e: "touch -r uses reference file's timestamps for target.",
    de: "touch -r source dest. Useful for preserving times when copying.",
    deBeginner: "touch -r ref file sets the access and modification times of file to match ref. Useful when copying and you want to keep the original times.",
    deExpert: "touch -r ref: copy atime/mtime from ref. utimensat(2). For preserving times on copy."
  }),
  (_i: number) => ({
    q: "What does `cp -l source dest` do?",
    o: ["Creates hard link instead of copy", "Link copy", "Hard link", "Link mode"],
    c: 0,
    e: "cp -l creates hard links when possible (same filesystem).",
    de: "Saves space. Same inode. -s for symlinks.",
    deBeginner: "cp -l makes a hard link instead of copying (same filesystem only). Saves space; dest shares inode with source. cp -s makes a symlink.",
    deExpert: "cp -l: hard link. link(2). Same FS. Same inode. cp -s symlink."
  }),
  (_i: number) => ({
    q: "What does `cp -s source dest` do?",
    o: ["Creates symbolic link instead of copy", "Symlink copy", "Symbolic link", "Link copy"],
    c: 0,
    e: "cp -s creates symlink. dest is link pointing to source.",
    de: "Like ln -s. dest is the link name.",
    deBeginner: "cp -s creates a symbolic link: dest is a link that points to source. Same effect as ln -s source dest.",
    deExpert: "cp -s: symlink. symlink(2). dest -> source. Like ln -s."
  }),
  (_i: number) => ({
    q: "What does `install -o root -g root file /usr/bin/` do?",
    o: ["Copies file with root:root ownership", "Installs as root", "Sets owner", "Root install"],
    c: 0,
    e: "install -o -g sets owner and group on installed file.",
    de: "Common for system installs. install -m 755 -o root script /usr/local/bin/",
    deBeginner: "install copies the file to /usr/bin/ and sets owner and group to root. install -m 755 -o root script /usr/local/bin/ is common for installing scripts.",
    deExpert: "install -o -g: set owner/group on copy. chown after cp. For packaging, Makefile install."
  }),
  (_i: number) => ({
    q: "What does `mknod /dev/loop0 b 7 0` create?",
    o: ["Block device node for loop device", "Device node", "Loop device", "Block device"],
    c: 0,
    e: "mknod creates device node. b=block, 7 0=major,minor for loop.",
    de: "Usually use losetup. mknod for creating custom device nodes.",
    deBeginner: "mknod creates a device file. b = block device; 7 0 are major and minor numbers (e.g. for loop). Normally you use losetup; mknod is for creating custom device nodes.",
    deExpert: "mknod: create device node. b block, c char. Major, minor. 7 0 = loop. Usually losetup. mknod(2)."
  }),
  (_i: number) => ({
    q: "What does `losetup -f` do?",
    o: ["Finds next free loop device", "Find free", "First free", "Free loop"],
    c: 0,
    e: "losetup -f prints first available loop device (e.g. /dev/loop0).",
    de: "loop=$(losetup -f); losetup $loop image.img",
    deBeginner: "losetup -f prints the first free loop device (e.g. /dev/loop0). Use it in scripts: loop=$(losetup -f); losetup $loop image.img",
    deExpert: "losetup -f: first free loop. For scripts. losetup -f then losetup device file."
  }),
  (_i: number) => ({
    q: "What does `ls -F` add to output?",
    o: ["Type indicators (/ = dir, * = exec, @ = symlink)", "File type", "Indicators", "Suffix"],
    c: 0,
    e: "ls -F appends / for dirs, * for executables, @ for symlinks.",
    de: "= for sockets, | for FIFOs. Quick visual scan.",
    deBeginner: "ls -F adds a character to each name: / for dirs, * for executables, @ for symlinks. Also = for sockets, | for FIFOs. Quick way to see types.",
    deExpert: "ls -F: type suffix. / dir * exec @ symlink = socket | FIFO. classify."
  }),
  (_i: number) => ({
    q: "What does `ls -o` do (GNU ls)?",
    o: ["Like -l but omits group", "Owner only", "Long no group", "Omit group"],
    c: 0,
    e: "ls -o is -l without group column.",
    de: "ls -g omits owner. -l is full long format.",
    deBeginner: "ls -o is long format (-l) but without the group column. ls -g omits the owner. -l shows both.",
    deExpert: "ls -o: -l no group. ls -g no owner. GNU. For narrow output."
  }),
  (_i: number) => ({
    q: "What does `ls -G` do (BSD/macOS)?",
    o: ["Disables colorized output", "No color", "Disable color", "Grayscale"],
    c: 0,
    e: "ls -G turns off colors (opposite of --color).",
    de: "ls --color=never on GNU. -G on macOS is different (no group).",
    deBeginner: "On BSD/macOS ls -G turns off color. On GNU use ls --color=never. Note: on macOS -G can mean something else (no group), so check your platform.",
    deExpert: "ls -G: BSD no color. GNU: --color=never. macOS -G sometimes no group. Platform-dependent."
  }),
  (_i: number) => ({
    q: "What does `ls --color=auto` do?",
    o: ["Colors only when output is terminal", "Auto color", "Terminal color", "Smart color"],
    c: 0,
    e: "auto: color when stdout is tty, no color when piped.",
    de: "ls | cat gets no color. ls --color=always always colors.",
    deBeginner: "ls --color=auto uses color only when output goes to a terminal. When you pipe (ls | cat) there's no color. --color=always always colors.",
    deExpert: "ls --color=auto: color iff isatty. Pipe = no color. always/never. TERM, NO_COLOR."
  }),
  (_i: number) => ({
    q: "What does `du -c` add?",
    o: ["Grand total at end", "Total", "Sum", "Count total"],
    c: 0,
    e: "du -c prints total of all arguments at end.",
    de: "du -ch * shows human-readable with total. -s for per-dir summary.",
    deBeginner: "du -c adds a grand total at the end (sum of all arguments). du -ch * gives human-readable sizes and a total. -s gives one line per directory.",
    deExpert: "du -c: grand total. du -ch * total. -s per-dir summary."
  }),
  (_i: number) => ({
    q: "What does `df --output=source,avail` show?",
    o: ["Only source and available columns", "Custom columns", "Source and avail", "Selected fields"],
    c: 0,
    e: "df --output= selects which columns to display.",
    de: "Fields: source, fstype, itotal, iused, avail, pcent, target.",
    deBeginner: "df --output=source,avail prints only those columns (device and available space). Other options: fstype, itotal, iused, pcent, target. Good for scripts.",
    deExpert: "df --output=: select columns. source, fstype, avail, pcent, target. GNU. Scriptable."
  }),
  (_i: number) => ({
    q: "What does `find . -links +1` find?",
    o: ["Files with more than one hard link", "Multiple links", "Hard links", "Link count > 1"],
    c: 0,
    e: "find -links +1 finds files that have 2+ hard links.",
    de: "Same as link count in ls -l. -links 2 finds exactly 2 links.",
    deBeginner: "find -links +1 finds files with more than one hard link (link count ≥ 2). Same as the number in ls -l. -links 2 finds exactly 2 links.",
    deExpert: "find -links +1: nlink > 1. -links 2 exact. st_nlink. Hard links."
  }),
  (_i: number) => ({
    q: "What does `find . -samefile name` find?",
    o: ["All files with same inode as name", "Same file", "Hard links to name", "Identical"],
    c: 0,
    e: "find -samefile finds all paths to same inode (hard links).",
    de: "find . -samefile /path/to/file. Shows all names for that file.",
    deBeginner: "find -samefile name finds every path that points to the same inode as name (all hard links to that file). find . -samefile /path/to/file.",
    deExpert: "find -samefile: same inode. All hard links. GNU. For dedup, link audit."
  }),
  (_i: number) => ({
    q: "What does `find . -newer reference` find?",
    o: ["Files newer than reference (mtime)", "Newer than ref", "Modified after", "Recent"],
    c: 0,
    e: "find -newer finds files modified after reference file.",
    de: "find . -newer timestamp_file. -anewer for access, -cnewer for change.",
    deBeginner: "find -newer ref finds files whose modification time is newer than the reference file. -anewer uses access time, -cnewer uses change time.",
    deExpert: "find -newer: mtime > ref. -anewer atime, -cnewer ctime. For incremental, backup."
  }),
  (_i: number) => ({
    q: "What does `find . -size +100M` find?",
    o: ["Files larger than 100MB", "Size > 100M", "Big files", "Over 100M"],
    c: 0,
    e: "find -size +100M: files larger than 100 megabytes.",
    de: "-size -10k for smaller. -size 0 for empty. Units: k, M, G.",
    deBeginner: "find -size +100M finds files larger than 100 MB. -size -10k finds files smaller than 10 KB. -size 0 finds empty files. Units: k, M, G.",
    deExpert: "find -size +n: larger than. -size -n smaller. -size 0 empty. k M G. st_size."
  }),
  (_i: number) => ({
    q: "What does `find . -user root` find?",
    o: ["Files owned by user root", "Root's files", "User root", "Root owned"],
    c: 0,
    e: "find -user finds files owned by that user. -uid for numeric.",
    de: "find -group wheel. -nouser finds orphaned (deleted user).",
    deBeginner: "find -user root finds files owned by root. -uid N uses numeric UID. find -group wheel for group. -nouser finds files whose owner UID is not in passwd (orphaned).",
    deExpert: "find -user/-uid: owner. -group/-gid. -nouser/-nogroup: orphaned. st_uid, getpwuid."
  }),
  (_i: number) => ({
    q: "What does `find . -nouser` find?",
    o: ["Files whose owner is not in /etc/passwd", "Orphaned files", "No user", "Invalid owner"],
    c: 0,
    e: "find -nouser: owner UID not in passwd (user was deleted).",
    de: "Security/cleanup. chown to fix. -nogroup similar.",
    deBeginner: "find -nouser finds files whose owner UID doesn't exist in /etc/passwd (e.g. user was removed). Useful for cleanup; chown to fix. -nogroup is the same for groups.",
    deExpert: "find -nouser: UID not in passwd. Orphaned. -nogroup. getpwuid fails. chown fix."
  }),
  (_i: number) => ({
    q: "What does `find . -path './.git' -prune` do?",
    o: ["Skips .git directory (doesn't descend)", "Prune git", "Skip git", "Exclude git"],
    c: 0,
    e: "-prune prevents descending into matched directory.",
    de: "find . -path './.git' -prune -o -print. Excludes .git from search.",
    deBeginner: "find -path './.git' -prune skips the .git directory and doesn't go into it. Often used with -o: find . -path './.git' -prune -o -print to list everything except under .git.",
    deExpert: "find -prune: don't descend. -path './.git' -prune -o -print. Exclude dirs. Order matters."
  }),
  (_i: number) => ({
    q: "What does `tree -P '*.c'` show?",
    o: ["Only paths matching *.c", "Pattern filter", "C files only", "Filter by pattern"],
    c: 0,
    e: "tree -P pattern shows only files matching pattern.",
    de: "tree -I 'node_modules' excludes. -P includes only.",
    deBeginner: "tree -P '*.c' shows only files (and their paths) matching that pattern. tree -I 'node_modules' excludes. -P = include only, -I = exclude.",
    deExpert: "tree -P: include pattern. -I exclude. -P *.c. -I node_modules. Filter output."
  }),
  (_i: number) => ({
    q: "What does `tree -L 1` do?",
    o: ["Limits depth to 1 (current dir only)", "One level", "Depth 1", "Shallow"],
    c: 0,
    e: "tree -L 1 shows only one level (no recursion).",
    de: "tree -L 2 = current + one level down. Like find -maxdepth.",
    deBeginner: "tree -L 1 limits the tree to one level (current directory only, no subdirs). tree -L 2 adds one more level. Similar to find -maxdepth.",
    deExpert: "tree -L n: max depth. -L 1 one level. Like find -maxdepth."
  }),
  (_i: number) => ({
    q: "What does `ncdu -x` do?",
    o: ["Stays on one filesystem (like du -x)", "Exclude", "One fs", "Cross-fs off"],
    c: 0,
    e: "ncdu -x excludes other mount points.",
    de: "Avoids scanning /proc, /sys, other mounts. Faster, accurate.",
    deBeginner: "ncdu -x stays on one filesystem and doesn't cross mount points (like du -x). Avoids /proc, /sys, other mounts—faster and avoids double-count.",
    deExpert: "ncdu -x: one FS. Don't cross mounts. Like du -x. Faster, accurate size."
  }),
  (_i: number) => ({
    q: "What does `fdisk -l /dev/sda` show?",
    o: ["Partition table of that disk", "Disk partitions", "Partition list", "Disk layout"],
    c: 0,
    e: "fdisk -l lists partitions. Without device, lists all.",
    de: "Requires root. lsblk is simpler for quick view.",
    deBeginner: "fdisk -l shows the partition table for that disk (or all disks if no device). Needs root. lsblk is simpler for a quick view.",
    deExpert: "fdisk -l: list partition table. MBR. Root. lsblk simpler. partprobe after changes."
  }),
  (_i: number) => ({
    q: "What does `parted /dev/sda print` do?",
    o: ["Prints partition table (non-interactive)", "Print partitions", "Partition info", "Disk table"],
    c: 0,
    e: "parted print shows partition layout. Scriptable.",
    de: "parted is GPT-aware. fdisk for MBR. Both need root.",
    deBeginner: "parted ... print shows the partition table without going interactive. Scriptable. parted handles GPT; fdisk is common for MBR. Both need root.",
    deExpert: "parted print: non-interactive partition table. GPT-aware. Scriptable. fdisk MBR."
  }),
  (_i: number) => ({
    q: "What does `lsblk -f` add?",
    o: ["Filesystem type, UUID, label", "FS info", "Filesystem details", "UUID and type"],
    c: 0,
    e: "lsblk -f shows filesystem, UUID, FSTYPE, LABEL.",
    de: "Useful for fstab. lsblk -o NAME,SIZE,FSTYPE,MOUNTPOINT.",
    deBeginner: "lsblk -f adds filesystem info: type, UUID, label. Handy when writing fstab. lsblk -o NAME,SIZE,FSTYPE,MOUNTPOINT for custom columns.",
    deExpert: "lsblk -f: FSTYPE, UUID, LABEL. For fstab. -o columns."
  }),
  (_i: number) => ({
    q: "What does `blkid -o value -s UUID /dev/sda1` output?",
    o: ["Only the UUID value", "UUID only", "Value of UUID", "Just UUID"],
    c: 0,
    e: "blkid -o value -s UUID outputs just the UUID string.",
    de: "For scripts. blkid -s PARTUUID for partition UUID.",
    deBeginner: "blkid -o value -s UUID prints only the UUID string for that partition, nothing else. Good for scripts. Use -s PARTUUID for partition UUID.",
    deExpert: "blkid -o value -s UUID: UUID only. Scriptable. PARTUUID for partition UUID."
  }),
  (_i: number) => ({
    q: "What does `e2fsck -f` do?",
    o: ["Forces check even if filesystem seems clean", "Force check", "Full check", "Force fsck"],
    c: 0,
    e: "e2fsck -f forces check. Normally skips clean filesystems.",
    de: "Unmount first. e2fsck -y for non-interactive. -n for no changes.",
    deBeginner: "e2fsck -f forces a check even if the filesystem is marked clean. Unmount first. e2fsck -y for non-interactive; -n for no changes (dry run).",
    deExpert: "e2fsck -f: force check. Skip clean. Unmount. -y non-interactive. -n no change."
  }),
  (_i: number) => ({
    q: "What does `tune2fs -c 100 /dev/sda1` set?",
    o: ["Max mount count before forced check", "Check interval", "Mount count", "Fsck trigger"],
    c: 0,
    e: "tune2fs -c N: after N mounts, fsck runs (or warn).",
    de: "tune2fs -i 2w for time-based. -c 0 or -i 0 disables.",
    deBeginner: "tune2fs -c 100 sets max mount count: after 100 mounts the system may force an fsck (or warn). tune2fs -i 2w for time-based. -c 0 or -i 0 disables.",
    deExpert: "tune2fs -c: max mount count. -i interval. -c 0 -i 0 disable. Trigger fsck."
  }),
  (_i: number) => ({
    q: "What does `dumpe2fs -h` show?",
    o: ["Superblock only (no block groups)", "Header only", "Superblock", "Short dump"],
    c: 0,
    e: "dumpe2fs -h shows superblock. Full dump is large.",
    de: "Block count, block size, inode count. -h = header.",
    deBeginner: "dumpe2fs -h shows only the superblock (header), not all block groups. Full dumpe2fs is huge. Shows block count, block size, inode count, etc.",
    deExpert: "dumpe2fs -h: superblock only. No block groups. Block size, counts."
  }),
  (_i: number) => ({
    q: "What does `debugfs -R 'lsdel' /dev/sda1` list?",
    o: ["Deleted inodes (recoverable)", "Deleted files", "Orphan inodes", "Lost files"],
    c: 0,
    e: "debugfs -R 'lsdel' lists inodes marked deleted.",
    de: "Advanced recovery. dump_inode, undel for recovery. Risky.",
    deBeginner: "debugfs -R 'lsdel' lists inodes that were deleted and may still be recoverable. Advanced recovery; dump_inode and undel can try to restore. Risky—unmount first.",
    deExpert: "debugfs -R lsdel: deleted inodes. undel, dump_inode. Recovery. Risky. Unmount."
  }),
  (_i: number) => ({
    q: "What does `fallocate -l 1G -o 0 file` do?",
    o: ["Preallocates 1GB at offset 0", "Allocate at offset", "1G at start", "Preallocate"],
    c: 0,
    e: "fallocate -l size -o offset. -o 0 = from start.",
    de: "Creates sparse file or allocates blocks. -n for keep size (punch hole).",
    deBeginner: "fallocate -l 1G -o 0 allocates 1 GB of space starting at offset 0 (beginning of file). Creates a sparse or full file. -n keeps size but punches a hole.",
    deExpert: "fallocate -l size -o offset. -o 0 from start. -n punch hole. fallocate(2)."
  }),
  (_i: number) => ({
    q: "What does `truncate -s 0 file` do?",
    o: ["Empties file (size 0, keeps inode)", "Truncate to zero", "Empty file", "Clear file"],
    c: 0,
    e: "truncate -s 0 sets file to 0 bytes. Content gone.",
    de: "Faster than > file. Log rotation: truncate -s 0 log.txt",
    deBeginner: "truncate -s 0 file sets the file size to 0; content is gone but the inode stays (same file, open handles still valid). Faster than redirecting > file. Common for log rotation.",
    deExpert: "truncate -s 0: zero size. Keep inode. truncate(2). Log rotation. > file similar."
  }),
  (_i: number) => ({
    q: "What does `mktemp -u` do?",
    o: ["Prints name only, doesn't create file", "Dry run", "Unlink", "Name only"],
    c: 0,
    e: "mktemp -u generates name without creating. Use with care (race).",
    de: "Generally avoid -u. mktemp creates and returns name.",
    deBeginner: "mktemp -u only prints a unique temp name; it doesn't create the file. There's a race: another process could create the same name. Usually avoid -u; use mktemp and create the file.",
    deExpert: "mktemp -u: name only, no create. TOCTOU race. Avoid. mktemp then use."
  }),
  (_i: number) => ({
    q: "What does `mktemp -d` create?",
    o: ["Temporary directory", "Temp dir", "Directory", "Dir only"],
    c: 0,
    e: "mktemp -d creates a temporary directory.",
    de: "tmpdir=$(mktemp -d); ...; rm -rf $tmpdir",
    deBeginner: "mktemp -d creates a temporary directory and prints its path. Use: tmpdir=$(mktemp -d); ...; rm -rf $tmpdir",
    deExpert: "mktemp -d: temp dir. mkdtemp(3). tmpdir=$(mktemp -d). rm -rf after."
  }),
  (_i: number) => ({
    q: "What does `tmpwatch 24 /tmp` do (tmpwatch/tmpreaper)?",
    o: ["Removes files not accessed in 24 hours", "Clean old files", "Tmp cleanup", "Remove unused"],
    c: 0,
    e: "tmpwatch removes files not accessed in N hours.",
    de: "Cron job for /tmp cleanup. tmpreaper is Debian alternative.",
    deBeginner: "tmpwatch 24 /tmp deletes files in /tmp that haven't been accessed in 24 hours. Often run from cron. On Debian, tmpreaper is the equivalent.",
    deExpert: "tmpwatch: remove files not accessed in N hours. Cron /tmp cleanup. tmpreaper Debian."
  }),
  (_i: number) => ({
    q: "What does `swapoff -a` do?",
    o: ["Disables all swap devices", "Turn off swap", "Disable swap", "No swap"],
    c: 0,
    e: "swapoff -a disables all swap. swapon -a re-enables.",
    de: "Requires enough free RAM. Used before hibernation or resize.",
    deBeginner: "swapoff -a turns off all swap. swapon -a turns it back on. You need enough free RAM. Used before hibernation or when resizing swap.",
    deExpert: "swapoff -a: disable all swap. swapon -a enable. Need free RAM. Hibernation, resize."
  }),
  (_i: number) => ({
    q: "What does `blockdev --getss /dev/sda` return?",
    o: ["Sector size in bytes", "Sector size", "Block sector", "Sector bytes"],
    c: 0,
    e: "blockdev --getss returns logical sector size (usually 512).",
    de: "blockdev --getsize64 for total size. --getss for sector.",
    deBeginner: "blockdev --getss returns the logical sector size in bytes (often 512). blockdev --getsize64 gives total device size in bytes.",
    deExpert: "blockdev --getss: sector size. Usually 512. --getsize64 total bytes. BLKSSZGET."
  }),
  (_i: number) => ({
    q: "What does `hdparm -I /dev/sda` show?",
    o: ["Drive identification and capabilities", "Drive info", "HD info", "Disk identity"],
    c: 0,
    e: "hdparm -I shows model, serial, capabilities, supported features.",
    de: "Requires root. hdparm -t for read speed test.",
    deBeginner: "hdparm -I shows drive identification: model, serial number, capabilities, supported features. Needs root. hdparm -t does a read speed test.",
    deExpert: "hdparm -I: identify. Model, serial, capabilities. Root. -t read benchmark."
  }),
  (_i: number) => ({
    q: "What does `smartctl -a /dev/sda` show?",
    o: ["SMART health and attributes", "Disk health", "SMART data", "Drive status"],
    c: 0,
    e: "smartctl reads SMART data: health, temperature, errors.",
    de: "smartctl -H for pass/fail. -a for full. Predicts failure.",
    deBeginner: "smartctl -a shows SMART data: health, temperature, error counts, etc. smartctl -H for a simple pass/fail. Used to predict disk failure.",
    deExpert: "smartctl -a: full SMART. -H health. Temperature, reallocated, pending. Predict failure."
  }),
  (_i: number) => ({
    q: "What does `namei -l /path/to/file` show?",
    o: ["Path resolution with permissions at each level", "Name resolution", "Path walk", "Permission chain"],
    c: 0,
    e: "namei shows each component of path and its permissions.",
    de: "Debug 'Permission denied'. Shows where access fails.",
    deBeginner: "namei -l shows how the path is resolved step by step and the permissions at each level. Great for debugging 'Permission denied'—see where access fails.",
    deExpert: "namei -l: path walk with perms. Each component. Debug EACCES."
  }),
  (_i: number) => ({
    q: "What does `ionice -c 3 command` do?",
    o: ["Runs command with idle I/O priority", "Idle I/O", "Low priority I/O", "Background I/O"],
    c: 0,
    e: "ionice -c 3 = idle class. Doesn't compete for I/O.",
    de: "Good for backups. -c 1 = realtime, -c 2 = best-effort (default).",
    deBeginner: "ionice -c 3 runs the command with idle I/O priority—it only uses I/O when the system is idle. Good for backups. -c 1 realtime, -c 2 best-effort (default).",
    deExpert: "ionice -c 3: I/O idle class. -c 1 realtime, 2 best-effort. For backup, batch."
  }),
  (_i: number) => ({
    q: "What does `getfattr -d file` show?",
    o: ["Extended attribute names and values", "xattr dump", "Attributes", "Extended attrs"],
    c: 0,
    e: "getfattr -d shows extended attribute values.",
    de: "getfattr -m . shows all. setfattr to set. Used by SELinux, capabilities.",
    deBeginner: "getfattr -d shows extended attribute names and values. getfattr -m . shows all (including empty). setfattr sets them. Used by SELinux, capabilities, and for custom metadata.",
    deExpert: "getfattr -d: xattr values. -m . all. setfattr set. user. namespace. SELinux, caps."
  }),
  (_i: number) => ({
    q: "What does `setfattr -n user.comment -v 'note' file` do?",
    o: ["Sets extended attribute user.comment to 'note'", "Sets xattr", "User attribute", "Comment attr"],
    c: 0,
    e: "setfattr -n name -v value. user. namespace for user-defined.",
    de: "getfattr -d to read. Used for metadata, tagging.",
    deBeginner: "setfattr -n user.comment -v 'note' sets the extended attribute user.comment to 'note'. getfattr -d to read. user. is the namespace for user-defined attributes (metadata, tags).",
    deExpert: "setfattr -n name -v value. user. namespace. getfattr -d read. xattr(7). Metadata, tag."
  }),
  (_i: number) => ({
    q: "What does `restorecon -Rv /path` do?",
    o: ["Restores default SELinux contexts recursively", "Restore context", "SELinux restore", "Fix context"],
    c: 0,
    e: "restorecon resets SELinux context to default from policy.",
    de: "After copying files or mislabeling. -R recursive, -v verbose.",
    deBeginner: "restorecon -Rv resets SELinux contexts under /path to the default from policy. Use after copying files or when contexts are wrong. -R recursive, -v verbose.",
    deExpert: "restorecon: reset context from policy. -R recursive. After cp, mislabel. semanage fcontext."
  }),
  (_i: number) => ({
    q: "What does `getenforce` output?",
    o: ["Enforcing, Permissive, or Disabled", "SELinux state", "Enforce mode", "SELinux status"],
    c: 0,
    e: "getenforce shows SELinux mode. setenforce 0 for permissive.",
    de: "Enforcing=deny. Permissive=log only. Disabled=off.",
    deBeginner: "getenforce prints the SELinux mode: Enforcing (deny violations), Permissive (log only), or Disabled. setenforce 0 makes it permissive.",
    deExpert: "getenforce: Enforcing/Permissive/Disabled. setenforce 0 permissive. selinuxfs."
  }),
  (_i: number) => ({
    q: "What does `ls -Z` show on SELinux system?",
    o: ["Security context (user:role:type:level)", "SELinux context", "Security label", "Context"],
    c: 0,
    e: "ls -Z shows SELinux context. user:role:type:level.",
    de: "id -Z for process. getenforce to check if SELinux enabled.",
    deBeginner: "On SELinux systems, ls -Z shows the security context (user:role:type:level) for each file. id -Z shows the process context. getenforce shows if SELinux is on.",
    deExpert: "ls -Z: SELinux context. user:role:type:level. id -Z process. getenforce."
  }),
  (_i: number) => ({
    q: "What does `chcon -t httpd_sys_content_t /var/www` do?",
    o: ["Sets SELinux type for web content", "Change context", "HTTP type", "Web context"],
    c: 0,
    e: "chcon -t sets type. httpd_sys_content_t for web dirs.",
    de: "semanage fcontext for persistent. restorecon applies policy.",
    deBeginner: "chcon -t sets the SELinux type; httpd_sys_content_t is for web content dirs so Apache can read them. For persistent changes use semanage fcontext; restorecon applies policy.",
    deExpert: "chcon -t: set type. httpd_sys_content_t web. semanage fcontext persistent. restorecon."
  }),
  (_i: number) => ({
    q: "What is /sys/block?",
    o: ["Directory of block devices (disks)", "Block devices", "Disk list", "Block device dir"],
    c: 0,
    e: "/sys/block contains subdirs for each block device.",
    de: "sysfs. /sys/block/sda for disk. Contains queue, size, etc.",
    deBeginner: "/sys/block is a directory in sysfs; each subdir is a block device (e.g. sda). Under it you see queue, size, etc. Part of the Linux sysfs.",
    deExpert: "/sys/block: sysfs block devices. /sys/block/sda. Queue, size. udev, scripts."
  }),
  (_i: number) => ({
    q: "What does /proc/mounts show?",
    o: ["Currently mounted filesystems", "Mount list", "Mounted fs", "Active mounts"],
    c: 0,
    e: "/proc/mounts is similar to mount output. Used by mount.",
    de: "/proc/self/mountinfo has more detail. findmnt is friendlier.",
    deBeginner: "/proc/mounts lists currently mounted filesystems in a format similar to mount output; the mount command uses it. /proc/self/mountinfo has more detail; findmnt is easier to read.",
    deExpert: "/proc/mounts: current mounts. mount(8) uses. mountinfo more detail. findmnt friendly."
  }),
  (_i: number) => ({
    q: "What does /proc/self/exe point to?",
    o: ["Executable of current process", "Process exe", "Binary path", "Running program"],
    c: 0,
    e: "/proc/self/exe is symlink to the running program.",
    de: "readlink /proc/self/exe. Useful in scripts to find own path.",
    deBeginner: "/proc/self/exe is a symlink to the executable of the current process. readlink /proc/self/exe in a script gives the path to the script or binary.",
    deExpert: "/proc/self/exe: symlink to process executable. readlink for path. Script self-location."
  }),
  (_i: number) => ({
    q: "What does `ls -b` show for special characters?",
    o: ["Escape sequences for non-printable chars", "Brief format", "Binary mode", "Backslash escape"],
    c: 0,
    e: "ls -b shows \\n, \\t etc. for special chars in filenames.",
    de: "Useful when filenames have newlines or tabs. ls -b for safe display.",
    deBeginner: "ls -b shows backslash escape sequences (e.g. \\n, \\t) for non-printable characters in filenames. Use when names contain newlines or tabs so you can see them safely.",
    deExpert: "ls -b: C-style escape non-printable. \\n \\t. Filenames with newline. Safe display."
  }),
  (_i: number) => ({
    q: "What does `ls -Q` do (GNU)?",
    o: ["Quotes filenames for safe parsing", "Quote names", "Safe output", "Quoted output"],
    c: 0,
    e: "ls -Q wraps names in double quotes. Safe for eval or parsing.",
    de: "ls --quoting=shell. Avoids injection. For script consumption.",
    deBeginner: "ls -Q (or --quoting=shell) wraps each filename in double quotes so output is safe for shell parsing or eval. Reduces injection risk when consuming ls in scripts.",
    deExpert: "ls -Q/--quoting=shell: quoted names. Safe for eval, parsing. Avoid injection."
  }),
  (_i: number) => ({
    q: "What does `du -b` show?",
    o: ["Size in bytes", "Block size", "Brief", "Byte count"],
    c: 0,
    e: "du -b shows apparent size in bytes. -B 1 equivalent.",
    de: "du -b for exact bytes. -h for human. -b for script parsing.",
    deBeginner: "du -b shows the apparent size of each file in bytes (like -B 1). Use -h for human-readable. -b is good for scripts that need exact byte counts.",
    deExpert: "du -b: size in bytes. Apparent. -B 1. -h human. Script parsing."
  }),
  (_i: number) => ({
    q: "What does `df --total` add?",
    o: ["Total row at bottom", "Grand total", "Sum row", "Total line"],
    c: 0,
    e: "df --total adds total line. Sum of all filesystems.",
    de: "df -h --total. Useful for overview. May double-count.",
    deBeginner: "df --total adds a total row at the bottom (sum across filesystems). df -h --total for human-readable. Handy for overview; can double-count if mounts overlap.",
    deExpert: "df --total: sum row. df -h --total. Overview. May double-count mounts."
  }),
  (_i: number) => ({
    q: "What does `find . -executable` find?",
    o: ["Files with execute permission", "Executable files", "Run permission", "Execute bit"],
    c: 0,
    e: "find -executable matches files you can execute.",
    de: "find . -type f -executable. Scripts, binaries. -readable, -writable too.",
    deBeginner: "find -executable finds files that have the execute bit set (and that you can execute). find . -type f -executable for files only. -readable and -writable work similarly.",
    deExpert: "find -executable: has execute perm. -readable -writable. Test by effective uid/gid."
  }),
];
