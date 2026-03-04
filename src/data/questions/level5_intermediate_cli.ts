// LEVEL 5 INTERMEDIATE — Package Management (100 unique questions)
// Topics: apt, dnf, brew, snap, flatpak, make, configure

export const level5Intermediate = [
  (_i: number) => ({
    q: "What does `apt update && apt upgrade -y` do?",
    o: ["Refreshes index then upgrades all packages non-interactively", "Update and upgrade", "Full upgrade", "Refresh and upgrade"],
    c: 0,
    e: "update fetches lists, upgrade installs. -y skips confirmation prompts.",
    de: "Standard update flow. apt update && apt upgrade -y. -y for scripts, CI."
  }),
  (_i: number) => ({
    q: "What does `apt install --no-install-recommends package` do?",
    o: ["Skips recommended packages (smaller install)", "No recommends", "Minimal install", "Skip optional deps"],
    c: 0,
    e: "Installs only Depends, not Recommends. Reduces installed packages.",
    de: "apt install --no-install-recommends nginx. Smaller footprint. Docker images often use."
  }),
  (_i: number) => ({
    q: "What does `apt-cache depends package` show?",
    o: ["Dependency tree of package", "Package deps", "Dependencies", "Dep tree"],
    c: 0,
    e: "apt-cache depends shows what package needs. Depends, Recommends, Suggests.",
    de: "apt-cache depends nginx. Depends vs PreDepends. Depends: for reverse."
  }),
  (_i: number) => ({
    q: "What does `apt-cache rdepends package` show?",
    o: ["Packages that depend on this one", "Reverse deps", "Dependents", "What needs this"],
    c: 0,
    e: "rdepends = reverse. What packages require this. Before removing.",
    de: "apt-cache rdepends libc6. See impact of removal. apt-cache rdepends --installed."
  }),
  (_i: number) => ({
    q: "What does `dpkg --configure -a` fix?",
    o: ["Completes interrupted package configuration", "Fix config", "Resume config", "Configure unpacked"],
    c: 0,
    e: "Configures any unpacked but unconfigured packages. After failed install.",
    de: "dpkg --configure -a. Fixes 'dpkg was interrupted' state. Then apt -f install."
  }),
  (_i: number) => ({
    q: "What does `apt-mark hold package` do?",
    o: ["Prevents package from being upgraded", "Hold package", "Pin upgrade", "Block upgrade"],
    c: 0,
    e: "apt-mark hold prevents upgrade. apt-mark unhold to allow. For kernel, critical packages.",
    de: "apt-mark hold linux-image-*. apt-mark showhold. Pinning alternative."
  }),
  (_i: number) => ({
    q: "What does `apt-mark auto package` do?",
    o: ["Marks as auto-installed (candidate for autoremove)", "Auto mark", "Dependency mark", "Autoremove candidate"],
    c: 0,
    e: "Marks package as auto. If nothing else needs it, autoremove may remove.",
    de: "apt-mark auto libfoo. apt-mark manual to keep. apt-mark showauto."
  }),
  (_i: number) => ({
    q: "What does `dnf history list` show?",
    o: ["Transaction history (install/remove)", "DNF history", "Transaction log", "Past operations"],
    c: 0,
    e: "dnf history lists recent transactions. dnf history undo N to rollback.",
    de: "dnf history list. dnf history undo 5. dnf history rollback. RHEL/Fedora."
  }),
  (_i: number) => ({
    q: "What does `dnf install --downloadonly package` do?",
    o: ["Downloads packages without installing", "Download only", "Fetch packages", "No install"],
    c: 0,
    e: "Downloads to cache. For offline install. dnf install from cache later.",
    de: "dnf install --downloadonly nginx. Packages in /var/cache/dnf. Offline install."
  }),
  (_i: number) => ({
    q: "What does `brew tap user/repo` do?",
    o: ["Adds external repository for formulae", "Add tap", "New repo", "Tap repository"],
    c: 0,
    e: "brew tap adds repo. Formulas from github.com/user/homebrew-repo. Third-party.",
    de: "brew tap homebrew/cask. brew tap user/repo. tap for more packages."
  }),
  (_i: number) => ({
    q: "What does `brew untap user/repo` do?",
    o: ["Removes the tapped repository", "Remove tap", "Untap", "Delete tap"],
    c: 0,
    e: "brew untap removes tap. Formulas from that tap no longer available.",
    de: "brew untap user/repo. Cleanup. brew tap to list."
  }),
  (_i: number) => ({
    q: "What does `snap info package` show?",
    o: ["Package details, channels, version", "Snap info", "Package info", "Snap details"],
    c: 0,
    e: "snap info shows description, version, channels. snap list for installed.",
    de: "snap info chromium. Channels: stable, edge, beta. Publisher, confinement."
  }),
  (_i: number) => ({
    q: "What does `snap revert package` do?",
    o: ["Reverts to previous revision", "Revert snap", "Previous version", "Rollback snap"],
    c: 0,
    e: "snap revert reverts to previous revision. After bad update.",
    de: "snap revert chromium. Snap keeps revisions. snap list --all shows revisions."
  }),
  (_i: number) => ({
    q: "What does `flatpak remote-add flathub https://flathub.org/repo/flathub.flatpakrepo` do?",
    o: ["Adds Flathub as remote source", "Add Flathub", "Flathub remote", "Remote add"],
    c: 0,
    e: "Adds Flathub remote. flatpak install flathub app-id. Main Flatpak repo.",
    de: "flatpak remote-add flathub URL. flatpak remote-list. flatpak install flathub org.gimp.GIMP."
  }),
  (_i: number) => ({
    q: "What does `flatpak run --filesystem=home app-id` do?",
    o: ["Runs app with home directory access", "Home access", "Filesystem home", "Allow home"],
    c: 0,
    e: "Override: grant home filesystem access. Sandbox escape for specific dir.",
    de: "flatpak run --filesystem=home org.gimp.GIMP. flatpak override for persistent."
  }),
  (_i: number) => ({
    q: "What does `make -f Makefile.custom target` do?",
    o: ["Uses Makefile.custom instead of Makefile", "Custom makefile", "Alternate makefile", "Specify makefile"],
    c: 0,
    e: "make -f specifies file. Default is Makefile, makefile. For alternate build.",
    de: "make -f Makefile.debug. make -f build.mk. -f for non-standard names."
  }),
  (_i: number) => ({
    q: "What does `make -C /path/to build` do?",
    o: ["Runs make in that directory", "Change dir", "Make in directory", "Cd and make"],
    c: 0,
    e: "make -C dir changes to dir first. make -C /usr/src/linux build.",
    de: "make -C subdir. For recursive builds. -C before target."
  }),
  (_i: number) => ({
    q: "What does `./configure --help` show?",
    o: ["Available configure options", "Config help", "Options list", "Configure options"],
    c: 0,
    e: "configure --help lists options. --prefix, --with-x, etc. Before configuring.",
    de: "./configure --help. Autoconf script. --prefix, --enable-*, --with-*."
  }),
  (_i: number) => ({
    q: "What does `./configure --disable-feature` do?",
    o: ["Disables optional feature", "Disable feature", "Turn off feature", "No feature"],
    c: 0,
    e: "configure --disable-feature. Excludes optional component. Smaller build.",
    de: "./configure --disable-nls. --enable-feature for opposite. Check --help."
  }),
  (_i: number) => ({
    q: "What does `rpm -qa --queryformat '%{NAME}-%{VERSION}\\n'` output?",
    o: ["Name-version per line", "Custom format", "Query format", "Name version"],
    c: 0,
    e: "rpm --queryformat for custom output. %{NAME}, %{VERSION}, %{RELEASE}, etc.",
    de: "rpm -qa --qf '%{NAME}\\n'. Many tags. For scripting. rpm --querytags for list."
  }),
  (_i: number) => ({
    q: "What does `rpm -V package` do?",
    o: ["Verifies package files (checksums, etc)", "Verify package", "RPM verify", "Package verify"],
    c: 0,
    e: "rpm -V checks files against package. Modified files. S=size, M=md5, L=link.",
    de: "rpm -V nginx. Missing, modified. rpm -Va for all. Security audit."
  }),
  (_i: number) => ({
    q: "What does `rpm -e package` do?",
    o: ["Erases (removes) package", "Remove package", "Erase package", "Uninstall"],
    c: 0,
    e: "rpm -e removes package. Does not resolve dependencies. dnf remove preferred.",
    de: "rpm -e foo. Fails if dependencies. --nodeps to force (dangerous). dnf remove better."
  }),
  (_i: number) => ({
    q: "What does `pip install -e .` do?",
    o: ["Editable install (links to source, changes apply)", "Editable mode", "Development install", "Link mode"],
    c: 0,
    e: "pip install -e . installs in editable mode. Code changes apply without reinstall.",
    de: "pip install -e . In setup.py dir. For development. Symlink to source."
  }),
  (_i: number) => ({
    q: "What does `pip install --no-deps package` do?",
    o: ["Installs package without dependencies", "No deps", "Skip deps", "Package only"],
    c: 0,
    e: "pip install --no-deps. Skips dependency resolution. Use when deps already met.",
    de: "pip install --no-deps foo. Risky. May break. For controlled environments."
  }),
  (_i: number) => ({
    q: "What does `npm install --save-dev package` do?",
    o: ["Adds to devDependencies", "Dev dependency", "Save dev", "Development dep"],
    c: 0,
    e: "npm install --save-dev adds to devDependencies. For build/test tools.",
    de: "npm install --save-dev jest. devDependencies not in production. -D shorthand."
  }),
  (_i: number) => ({
    q: "What does `npm ci` do vs `npm install`?",
    o: ["Clean install from lock file (no update)", "CI install", "Lock file install", "Reproducible install"],
    c: 0,
    e: "npm ci removes node_modules, installs from package-lock.json. Reproducible. CI use.",
    de: "npm ci. Faster, deterministic. Fails if package.json and lock mismatch. For CI."
  }),
  (_i: number) => ({
    q: "What does `cargo build --release` do?",
    o: ["Builds with optimizations (production)", "Release build", "Optimized build", "Production build"],
    c: 0,
    e: "cargo build --release. Optimized. No debug symbols. target/release/.",
    de: "cargo build --release. Slower compile, faster runtime. Default is debug."
  }),
  (_i: number) => ({
    q: "What does `cargo build --target x86_64-unknown-linux-gnu` do?",
    o: ["Cross-compiles for that target", "Cross compile", "Target build", "Alternate target"],
    c: 0,
    e: "cargo build --target. Cross-compilation. Need target installed: rustup target add.",
    de: "cargo build --target x86_64-unknown-linux-musl. Static binary. rustup target list."
  }),
  (_i: number) => ({
    q: "What does `gem install --user-install gem` do?",
    o: ["Installs to user directory (~/.gem)", "User install", "Local install", "User gem"],
    c: 0,
    e: "gem install --user-install. No root. ~/.gem/ruby/version/. GEM_HOME.",
    de: "gem install --user-install foo. Avoids system pollute. PATH for bin."
  }),
  (_i: number) => ({
    q: "What does `bundle exec cmd` do?",
    o: ["Runs cmd with Gemfile's gem versions", "Bundle exec", "Gemfile env", "Bundler context"],
    c: 0,
    e: "bundle exec runs in Gemfile context. Uses locked versions. Not system gems.",
    de: "bundle exec rake. bundle exec jekyll. Ensures correct gem versions. Avoid conflicts."
  }),
  (_i: number) => ({
    q: "What does `go build -o binary cmd/main.go` do?",
    o: ["Builds and names output binary", "Output binary", "Named output", "Build to file"],
    c: 0,
    e: "go build -o binary. Output filename. go build -o myapp . for package.",
    de: "go build -o myapp ./cmd. -o output. go build -o myapp.exe for Windows."
  }),
  (_i: number) => ({
    q: "What does `go mod download` do?",
    o: ["Downloads modules to cache without building", "Download only", "Fetch modules", "Cache modules"],
    c: 0,
    e: "go mod download fetches deps. No build. Populates cache. For CI cache.",
    de: "go mod download. GOPATH/pkg/mod. go mod download -x for verbose."
  }),
  (_i: number) => ({
    q: "What does `apt list --upgradable` show?",
    o: ["Packages that have updates available", "Upgradable", "Updates available", "Can upgrade"],
    c: 0,
    e: "apt list --upgradable. Packages with newer version in repo. After apt update.",
    de: "apt list --upgradable. apt upgrade installs these. Check before upgrade."
  }),
  (_i: number) => ({
    q: "What does `apt-cache policy` show without package?",
    o: ["Repository priorities (general)", "Policy info", "Repo priorities", "Apt policy"],
    c: 0,
    e: "apt-cache policy shows priorities. With package: version candidates.",
    de: "apt policy nginx for package. apt policy for system. 500, 100 = priority numbers."
  }),
  (_i: number) => ({
    q: "What does `dpkg -S /path/to/file` find?",
    o: ["Package that owns that file", "Which package", "File owner", "Package for file"],
    c: 0,
    e: "dpkg -S finds owning package. Reverse of dpkg -L. rpm -qf equivalent.",
    de: "dpkg -S /usr/bin/nginx. Package: nginx. For 'file belongs to'."
  }),
  (_i: number) => ({
    q: "What does `dpkg -i --force-overwrite package.deb` do?",
    o: ["Installs despite file conflicts (overwrites)", "Force overwrite", "Overwrite files", "Force install"],
    c: 0,
    e: "dpkg --force-overwrite. Overwrites conflicting files. Risky. Use with care.",
    de: "dpkg --force-help for all. --force-overwrite. Can break system. Last resort."
  }),
  (_i: number) => ({
    q: "What does `apt-get install --reinstall package` do?",
    o: ["Reinstalls package (fixes corrupted)", "Reinstall", "Re-install", "Fix install"],
    c: 0,
    e: "apt-get install --reinstall. Replaces files. For corrupted packages.",
    de: "apt install --reinstall nginx. Keeps config. Replaces binaries. Fix corruption."
  }),
  (_i: number) => ({
    q: "What does `apt-get clean` do?",
    o: ["Removes downloaded package files from cache", "Clean cache", "Remove debs", "Clear cache"],
    c: 0,
    e: "apt-get clean removes /var/cache/apt/archives/*. Frees space. Fetches again on install.",
    de: "apt-get clean. apt-get autoclean removes obsolete. apt-get autoremove for packages."
  }),
  (_i: number) => ({
    q: "What does `dnf repolist` show?",
    o: ["Enabled repositories", "Repo list", "Repositories", "DNF repos"],
    c: 0,
    e: "dnf repolist. Enabled repos. dnf repolist all for disabled too.",
    de: "dnf repolist. dnf repolist all. /etc/yum.repos.d/ for config."
  }),
  (_i: number) => ({
    q: "What does `dnf config-manager --add-repo URL` do?",
    o: ["Adds repository from URL", "Add repo", "New repo", "Add repository"],
    c: 0,
    e: "dnf config-manager --add-repo adds repo. Creates file in /etc/yum.repos.d/.",
    de: "dnf config-manager --add-repo https://.... Creates .repo file. dnf makecache."
  }),
  (_i: number) => ({
    q: "What does `brew install --build-from-source formula` do?",
    o: ["Compiles from source instead of bottle", "Build from source", "Source build", "No bottle"],
    c: 0,
    e: "brew install --build-from-source. Skips prebuilt bottle. Compiles locally.",
    de: "For debugging, custom flags. Slower. brew install -s formula. Bottle = binary."
  }),
  (_i: number) => ({
    q: "What does `brew install --HEAD formula` do?",
    o: ["Installs from git HEAD (latest)", "HEAD install", "Latest from git", "Development version"],
    c: 0,
    e: "brew install --HEAD. Uses latest from repo. Unstable. For bleeding edge.",
    de: "brew install --HEAD formula. From git. May be broken. Development version."
  }),
  (_i: number) => ({
    q: "What does `snap install --classic package` do?",
    o: ["Installs with classic confinement (less sandbox)", "Classic mode", "Less sandbox", "Classic install"],
    c: 0,
    e: "snap install --classic. Relaxed confinement. Access to filesystem. Like traditional.",
    de: "snap install --classic code. VS Code needs full access. --devmode for dev."
  }),
  (_i: number) => ({
    q: "What does `snap install --channel=edge package` do?",
    o: ["Installs from edge channel (unstable)", "Edge channel", "Unstable channel", "Edge install"],
    c: 0,
    e: "snap install --channel=edge. Edge = latest, unstable. stable default.",
    de: "snap install --channel=beta. Channels: stable, candidate, beta, edge."
  }),
  (_i: number) => ({
    q: "What does `flatpak install --user app-id` do?",
    o: ["Installs to user (not system)", "User install", "Per-user", "User flatpak"],
    c: 0,
    e: "flatpak install --user. ~/.local/share/flatpak. No root. --system for system.",
    de: "flatpak install --user flathub org.gimp.GIMP. User vs system. flatpak list --user."
  }),
  (_i: number) => ({
    q: "What does `flatpak update --unused` do?",
    o: ["Removes unused runtimes and extensions", "Unused cleanup", "Remove unused", "Prune runtimes"],
    c: 0,
    e: "flatpak update --unused removes orphaned runtimes. Frees space.",
    de: "flatpak uninstall --unused. Same. Removes runtimes no app needs."
  }),
  (_i: number) => ({
    q: "What does `make -n target` do?",
    o: ["Dry run (shows commands without executing)", "Dry run", "No execute", "Preview"],
    c: 0,
    e: "make -n or make --just-print. Shows what would run. No execution. Debug.",
    de: "make -n all. See commands. make -n install. Safe preview."
  }),
  (_i: number) => ({
    q: "What does `make -j` with no number do?",
    o: ["Unlimited parallel jobs (all cores)", "Unlimited jobs", "Parallel all", "All cores"],
    c: 0,
    e: "make -j with no number = unlimited parallel. Can overload. -j$(nproc) safer.",
    de: "make -j. Use with care. make -j$(nproc) for CPU count. Can cause OOM."
  }),
  (_i: number) => ({
    q: "What does `make -k` or `make --keep-going` do?",
    o: ["Continues after target failure", "Keep going", "Don't stop", "Continue on error"],
    c: 0,
    e: "make -k continues building other targets after one fails. See all errors.",
    de: "make -k. Build as much as possible. For finding multiple errors."
  }),
  (_i: number) => ({
    q: "What does `./configure CC=gcc-9` do?",
    o: ["Uses gcc-9 as C compiler", "Set compiler", "CC override", "Custom compiler"],
    c: 0,
    e: "configure CC= sets C compiler. CXX= for C++. For alternate compiler.",
    de: "./configure CC=clang. CFLAGS= for flags. Cross: CC=arm-linux-gcc."
  }),
  (_i: number) => ({
    q: "What does `cmake -B build -S .` do?",
    o: ["Out-of-tree build (build in build/)", "Out of tree", "Build dir", "Separate build"],
    c: 0,
    e: "cmake -B build dir, -S source dir. Out-of-tree. Keeps source clean.",
    de: "cmake -B build -S . cmake --build build. Standard modern cmake."
  }),
  (_i: number) => ({
    q: "What does `meson compile -C build` do?",
    o: ["Builds in existing build directory", "Meson compile", "Build dir", "Compile in build"],
    c: 0,
    e: "meson compile -C build. Like make -C build. ninja -C build equivalent.",
    de: "meson setup build. meson compile -C build. Alternative to autotools."
  }),
  (_i: number) => ({
    q: "What does `checkinstall` do?",
    o: ["Creates package from make install", "Package from install", "Make install package", "Install to package"],
    c: 0,
    e: "checkinstall runs make install but creates .deb/.rpm. Tracks files. Easy removal.",
    de: "make; sudo checkinstall. Tracks install. Better than make install for cleanup."
  }),
  (_i: number) => ({
    q: "What does `apt-cache madison package` show?",
    o: ["All versions from all repos", "Version table", "Madison output", "All versions"],
    c: 0,
    e: "apt-cache madison shows version candidates. Which repo has what. For pinning.",
    de: "apt-cache madison nginx. |, || = repo. Version, priority. For apt pinning."
  }),
  (_i: number) => ({
    q: "What does `equivs-build package` create?",
    o: ["Builds dummy package from control file", "Dummy package", "Equivs package", "Meta package"],
    c: 0,
    e: "equivs-build creates package satisfying dependencies. For 'fake' package.",
    de: "equivs-control creates template. equivs-build. Satisfies deps without real package."
  }),
  (_i: number) => ({
    q: "What does `apt-get install -s package` do?",
    o: ["Simulates install (no install)", "Simulate", "Dry run", "No install"],
    c: 0,
    e: "apt-get install -s. Simulates. Shows what would happen. No changes.",
    de: "apt install -s nginx. See deps, conflicts. Safe preview. -s = simulate."
  }),
  (_i: number) => ({
    q: "What does `dnf install package --nogpgcheck` do?",
    o: ["Skips GPG signature verification", "No GPG check", "Skip verify", "Disable GPG"],
    c: 0,
    e: "dnf --nogpgcheck. Skips package signature. Insecure. For broken repos only.",
    de: "dnf install --nogpgcheck. Temporary. Fix repo keys instead."
  }),
  (_i: number) => ({
    q: "What does `dnf downgrade package` do?",
    o: ["Installs older version of package", "Downgrade", "Older version", "Install older"],
    c: 0,
    e: "dnf downgrade installs older version. When update breaks things.",
    de: "dnf downgrade nginx. dnf history undo for rollback. Check available versions."
  }),
  (_i: number) => ({
    q: "What does `brew link --overwrite formula` do?",
    o: ["Overwrites conflicting links", "Overwrite links", "Force link", "Replace links"],
    c: 0,
    e: "brew link --overwrite. Replaces existing symlinks. For conflicts.",
    de: "brew link --overwrite python. When multiple versions. brew unlink first."
  }),
  (_i: number) => ({
    q: "What does `brew pin formula` do?",
    o: ["Prevents formula from upgrade", "Pin formula", "Hold upgrade", "Freeze version"],
    c: 0,
    e: "brew pin prevents upgrade. brew unpin to allow. Like apt hold.",
    de: "brew pin python@3.9. brew upgrade skips. brew unpin to allow."
  }),
  (_i: number) => ({
    q: "What does `snap connections package` show?",
    o: ["Interfaces and connections for snap", "Snap connections", "Interfaces", "Plugs slots"],
    c: 0,
    e: "snap connections shows interface connections. Plugs, slots. Security.",
    de: "snap connections chromium. network, home, etc. snap connect for manual."
  }),
  (_i: number) => ({
    q: "What does `snap connect package:interface` do?",
    o: ["Connects snap to interface (grants access)", "Connect interface", "Grant interface", "Snap connect"],
    c: 0,
    e: "snap connect grants interface. package:plug. For manual connection.",
    de: "snap connect chromium:removable-media. Grant access. snap disconnect to revoke."
  }),
  (_i: number) => ({
    q: "What does `flatpak repair` do?",
    o: ["Repairs corrupted Flatpak installation", "Repair flatpak", "Fix installation", "Repair install"],
    c: 0,
    e: "flatpak repair. Fixes corrupted refs, runtime. Re-downloads if needed.",
    de: "flatpak repair. When flatpak broken. Fixes refs, remotes. Re-downloads."
  }),
  (_i: number) => ({
    q: "What does `flatpak mask app-id` do?",
    o: ["Prevents app from being installed", "Mask app", "Block install", "Prevent install"],
    c: 0,
    e: "flatpak mask prevents install. For broken apps. flatpak mask --remove to undo.",
    de: "flatpak mask org.bad.app. Won't install. flatpak mask --remove org.bad.app."
  }),
  (_i: number) => ({
    q: "What does `make DESTDIR=/tmp/stage install` do?",
    o: ["Installs to DESTDIR (staging)", "Staging install", "DESTDIR install", "Stage install"],
    c: 0,
    e: "make DESTDIR= installs to staging. For packaging. Doesn't touch system.",
    de: "make DESTDIR=/tmp/pkg install. Creates package tree. For packaging."
  }),
  (_i: number) => ({
    q: "What does `make dist` typically create?",
    o: ["Distribution tarball", "Dist tarball", "Release archive", "Source tarball"],
    c: 0,
    e: "make dist creates tarball. For release. Autotools. package-version.tar.gz.",
    de: "make dist. make distcheck. Creates releasable tarball. Autotools."
  }),
  (_i: number) => ({
    q: "What does `make distclean` do?",
    o: ["Removes all generated files (including configure)", "Full clean", "Dist clean", "Remove all"],
    c: 0,
    e: "make distclean. More than clean. Removes configure-generated. Back to source.",
    de: "make distclean. Removes Makefile, config, etc. clean < distclean. For fresh."
  }),
  (_i: number) => ({
    q: "What does `pkg-config --cflags package` output?",
    o: ["Compiler flags for package", "Cflags", "Include flags", "Compile flags"],
    c: 0,
    e: "pkg-config --cflags. -I paths. For compiling against library. --libs for link.",
    de: "pkg-config --cflags gtk4. -I/usr/include/gtk-4. configure uses it."
  }),
  (_i: number) => ({
    q: "What does `pkg-config --libs package` output?",
    o: ["Linker flags for package", "Libs", "Link flags", "Library flags"],
    c: 0,
    e: "pkg-config --libs. -l and -L. For linking. --cflags for compile.",
    de: "pkg-config --libs gtk4. -lgtk-4 -lpango. configure uses."
  }),
  (_i: number) => ({
    q: "What does `ldconfig -p` show?",
    o: ["Cached library links (what ldconfig knows)", "Library cache", "Linker cache", "Cached libs"],
    c: 0,
    e: "ldconfig -p prints cache. What libs are linked. For debugging.",
    de: "ldconfig -p | grep libfoo. See what's in cache. ldconfig -p."
  }),
  (_i: number) => ({
    q: "What does `apt-file update` do?",
    o: ["Updates apt-file search index", "Apt-file index", "File index", "Update apt-file"],
    c: 0,
    e: "apt-file update updates file index. For apt-file search. Before searching.",
    de: "apt-file update. apt-file search filename. Need apt-file install first."
  }),
  (_i: number) => ({
    q: "What does `pip download --dest dir package` do?",
    o: ["Downloads package and deps to dir", "Download to dir", "Fetch packages", "Offline download"],
    c: 0,
    e: "pip download --dest. Downloads to directory. For offline install.",
    de: "pip download -d ./packages requests. pip install --no-index -f ./packages."
  }),
  (_i: number) => ({
    q: "What does `npm pack` create?",
    o: ["Creates tarball of package", "Package tarball", "NPM pack", "Create tarball"],
    c: 0,
    e: "npm pack creates .tgz. From package.json. For distribution.",
    de: "npm pack. package-name-1.0.0.tgz. npm pack --dry-run to preview."
  }),
  (_i: number) => ({
    q: "What does `npm publish --access public` do?",
    o: ["Publishes scoped package as public", "Public publish", "Publish public", "Scoped public"],
    c: 0,
    e: "npm publish --access public. For @scope packages. Default is restricted.",
    de: "npm publish --access public. @user/package. Public for org packages."
  }),
  (_i: number) => ({
    q: "What does `cargo publish --dry-run` do?",
    o: ["Validates package without publishing", "Dry run publish", "Validate only", "No publish"],
    c: 0,
    e: "cargo publish --dry-run. Checks package. No upload. Before real publish.",
    de: "cargo publish --dry-run. Validates Cargo.toml, checks. cargo publish for real."
  }),
  (_i: number) => ({
    q: "What does `cargo doc --open` do?",
    o: ["Builds and opens docs in browser", "Open docs", "Browser docs", "View docs"],
    c: 0,
    e: "cargo doc --open. Builds docs, opens in browser. For crate docs.",
    de: "cargo doc --open. Documentation. --no-deps for crate only."
  }),
  (_i: number) => ({
    q: "What does `gem uninstall --executables gem` do?",
    o: ["Removes gem and its executables", "Uninstall with bins", "Remove execs", "Full uninstall"],
    c: 0,
    e: "gem uninstall --executables. Removes gem and its executables. --all for versions.",
    de: "gem uninstall foo --executables. Removes gem and its bin files."
  }),
  (_i: number) => ({
    q: "What does `bundle install --deployment` do?",
    o: ["Production mode (no update to lock)", "Deployment mode", "Production install", "No lock update"],
    c: 0,
    e: "bundle install --deployment. Fails if Gemfile.lock missing. No update. Production.",
    de: "bundle install --deployment. For production. Fails if lock not in sync."
  }),
  (_i: number) => ({
    q: "What does `go get -u package` do?",
    o: ["Updates package to latest", "Update package", "Get latest", "Upgrade package"],
    c: 0,
    e: "go get -u updates. -u = update. Fetches latest. Updates go.mod.",
    de: "go get -u github.com/foo/bar. go get -u ./... for all. -u = upgrade."
  }),
  (_i: number) => ({
    q: "What does `go mod vendor` do?",
    o: ["Copies deps to vendor/", "Vendor deps", "Copy deps", "Vendor directory"],
    c: 0,
    e: "go mod vendor copies deps to vendor/. For offline, reproducible builds.",
    de: "go mod vendor. vendor/ in repo. -mod=vendor for build. No network."
  }),
  (_i: number) => ({
    q: "What does `pacman -Qdt` list?",
    o: ["Orphan packages (no deps need them)", "Orphans", "Unneeded", "Orphan list"],
    c: 0,
    e: "pacman -Qdt. Orphan packages. pacman -Rns $(pacman -Qdtq) to remove.",
    de: "pacman -Qdt. Orphans. -Qdtq for names only. Cleanup."
  }),
  (_i: number) => ({
    q: "What does `pacman -Sg group` show?",
    o: ["Packages in group", "Group packages", "Group list", "Package group"],
    c: 0,
    e: "pacman -Sg group. Lists packages in group. pacman -Sg for all groups.",
    de: "pacman -Sg base. base-devel. pacman -Qg for installed groups."
  }),
  (_i: number) => ({
    q: "What does `zypper patch` do?",
    o: ["Installs security patches", "Security patches", "Patch install", "Patches"],
    c: 0,
    e: "zypper patch installs patches. For SUSE. Security updates. zypper patch-check.",
    de: "zypper patch. SUSE. zypper patch-check for available. Security focus."
  }),
  (_i: number) => ({
    q: "What does `emerge --ask package` do?",
    o: ["Shows what would happen and asks", "Ask before", "Confirm emerge", "Prompt emerge"],
    c: 0,
    e: "emerge --ask. Shows dependencies, asks. -a shorthand. For Gentoo.",
    de: "emerge -a package. Shows build. --ask. -av for verbose."
  }),
  (_i: number) => ({
    q: "What does `nix-env -iA nixpkgs.package` do?",
    o: ["Installs from nixpkgs attribute", "Nix install attr", "Install from attr", "Nixpkgs install"],
    c: 0,
    e: "nix-env -iA nixpkgs.nginx. Installs by attribute. -e to remove.",
    de: "nix-env -iA nixpkgs.nginx. nix-env -qa for search. Nix package manager."
  }),
  (_i: number) => ({
    q: "What does `guix package -i package` do?",
    o: ["Installs package (GNU Guix)", "Guix install", "Install guix", "Guix package"],
    c: 0,
    e: "guix package -i installs. -r to remove. -l for generations. -u for upgrade.",
    de: "guix package -i nginx. -r nginx to remove. -u for upgrade. -l for history."
  }),
  (_i: number) => ({
    q: "What does `apt-cache policy package` show?",
    o: ["Version priorities and sources", "Package policy", "Version info", "Install candidate"],
    c: 0,
    e: "apt-cache policy shows installed, candidate, version list. Pinned?",
    de: "apt-cache policy nginx. 500, 100 = priorities. Which version would install."
  }),
  (_i: number) => ({
    q: "What does `apt-mark hold package` do?",
    o: ["Prevents package from upgrade", "Hold package", "Block upgrade", "Freeze version"],
    c: 0,
    e: "apt-mark hold prevents upgrade. apt-mark unhold to allow. Like pinning.",
    de: "apt-mark hold kernel. apt-mark showhold. Prevents accidental upgrade."
  }),
  (_i: number) => ({
    q: "What does `dpkg --configure -a` do?",
    o: ["Configures all unpacked packages", "Finish config", "Configure pending", "Complete install"],
    c: 0,
    e: "dpkg --configure -a. Runs postinst for unpacked. After interrupted install.",
    de: "dpkg --configure -a. Fixes half-installed. After crash or Ctrl+C."
  }),
  (_i: number) => ({
    q: "What does `rpm -Va` verify?",
    o: ["All package files (integrity)", "Verify all", "RPM verify", "Package integrity"],
    c: 0,
    e: "rpm -Va checks all installed. 5=md5, S=size, L=link, T=mtime. Missing = deleted.",
    de: "rpm -Va. After compromise. . = ok. 5 = md5 changed. Reinstall if bad."
  }),
  (_i: number) => ({
    q: "What does `yum history undo last` do?",
    o: ["Undoes last yum transaction", "Undo last", "Rollback", "Yum undo"],
    c: 0,
    e: "yum history undo last. Reverts last transaction. Like apt snapshot.",
    de: "yum history list. yum history undo 5. Rollback. dnf has same."
  }),
  (_i: number) => ({
    q: "What does `brew doctor` check?",
    o: ["Homebrew installation health", "Brew health", "Check brew", "Diagnose brew"],
    c: 0,
    e: "brew doctor. Checks paths, permissions, config. Fix common issues.",
    de: "brew doctor. Follow suggestions. Fixes broken brew. Regular maintenance."
  }),
  (_i: number) => ({
    q: "What does `snap revert package` do?",
    o: ["Reverts to previous revision", "Revert snap", "Previous version", "Rollback snap"],
    c: 0,
    e: "snap revert. Back to previous revision. After bad update.",
    de: "snap revert chromium. snap list --all shows revisions. Quick rollback."
  }),
  (_i: number) => ({
    q: "What does `flatpak run --command=bash app-id` do?",
    o: ["Runs bash inside app sandbox", "Shell in sandbox", "App shell", "Debug sandbox"],
    c: 0,
    e: "flatpak run --command overrides. Runs bash instead of app. For debugging.",
    de: "flatpak run --command=bash org.gimp.GIMP. Explore sandbox. flatpak enter."
  }),
  (_i: number) => ({
    q: "What does `make -j$(nproc)` do?",
    o: ["Parallel build using all CPUs", "Parallel make", "All cores", "Multi-job make"],
    c: 0,
    e: "make -j N runs N jobs. nproc = CPU count. -j$(nproc) = use all.",
    de: "make -j8. Speeds build. -j with no number = unlimited. Watch memory."
  }),
  (_i: number) => ({
    q: "What does `./configure --prefix=/opt/app` set?",
    o: ["Installation directory", "Install prefix", "Target dir", "Prefix path"],
    c: 0,
    e: "./configure --prefix sets install dir. Default /usr/local. /opt for apps.",
    de: "make DESTDIR=/tmp install. prefix = where. DESTDIR = staging."
  }),
  (_i: number) => ({
    q: "What does `pip freeze > requirements.txt` create?",
    o: ["Pinned dependency list", "Requirements", "Freeze deps", "Pin versions"],
    c: 0,
    e: "pip freeze. All installed with versions. requirements.txt for reproduce.",
    de: "pip freeze > requirements.txt. pip install -r requirements.txt. Reproducible."
  }),
  (_i: number) => ({
    q: "What does `npm ci` do vs `npm install`?",
    o: ["Clean install from lockfile (no update)", "Clean install", "From lock", "CI install"],
    c: 0,
    e: "npm ci. Deletes node_modules, installs from package-lock. Reproducible. Faster.",
    de: "npm ci for CI. Never updates lock. npm install may change lock."
  }),
  (_i: number) => ({
    q: "What does `cargo build --release` do?",
    o: ["Optimized release build", "Release build", "Optimized", "Production build"],
    c: 0,
    e: "cargo build --release. Optimized. Slower compile. For production.",
    de: "cargo build = debug. --release = opt-level 3. target/release/."
  }),
  (_i: number) => ({
    q: "What does `go build -o binary .` do?",
    o: ["Builds Go package, outputs to binary", "Go build output", "Output binary", "Build to file"],
    c: 0,
    e: "go build -o binary. Output name. . = current dir. Single binary.",
    de: "go build -o myapp . go build -o /tmp/app ./cmd. Output path."
  }),
];
