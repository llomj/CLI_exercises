// LEVEL 5: OCTOPUS — Package Management (CLI)
// 100 Beginner questions. Intermediate/Expert use placeholders.

const beginner = [
  (_i: number) => ({
    q: "What does `apt update` do?",
    o: ["Refreshes package index from repositories", "Updates all packages", "Updates apt itself", "Updates kernel"],
    c: 0,
    e: "apt update fetches latest package lists. Run before apt upgrade.",
    de: "Updates /var/lib/apt/lists/. Does not install. apt update && apt upgrade for full update."
  }),
  (_i: number) => ({
    q: "What does `apt upgrade` do?",
    o: ["Upgrades installed packages to latest versions", "Updates repository list", "Upgrades system", "Upgrades kernel only"],
    c: 0,
    e: "apt upgrade installs newest versions of installed packages. Run apt update first.",
    de: "Won't remove packages. apt full-upgrade may remove to resolve conflicts. Requires root."
  }),
  (_i: number) => ({
    q: "What does `apt install package` do?",
    o: ["Installs package and dependencies", "Installs package only", "Downloads package", "Configures package"],
    c: 0,
    e: "apt install fetches and installs package plus any dependencies. Requires root.",
    de: "apt install nginx. Resolves deps automatically. -y for non-interactive."
  }),
  (_i: number) => ({
    q: "What does `apt remove package` do?",
    o: ["Removes package but keeps config files", "Removes package and config", "Removes dependencies", "Removes all related"],
    c: 0,
    e: "apt remove uninstalls package. Config files remain. apt purge to remove configs too.",
    de: "apt remove nginx. Leaves /etc/nginx. apt purge nginx removes config. apt autoremove cleans orphan deps."
  }),
  (_i: number) => ({
    q: "What does `apt search keyword` do?",
    o: ["Searches package names and descriptions", "Searches names only", "Searches installed", "Searches repos"],
    c: 0,
    e: "apt search finds packages matching keyword. apt update first for fresh index.",
    de: "apt search nginx. apt show package for details. apt list for listing."
  }),
  (_i: number) => ({
    q: "What does `dnf install package` do?",
    o: ["Installs package (RHEL/Fedora)", "Downloads only", "Installs on Debian", "Installs dependencies only"],
    c: 0,
    e: "dnf is Fedora/RHEL package manager. dnf install = apt install.",
    de: "dnf replace yum. dnf install, remove, update, search. Same concepts as apt."
  }),
  (_i: number) => ({
    q: "What does `brew install formula` do?",
    o: ["Installs package via Homebrew (macOS/Linux)", "Brews package", "Installs from source", "Installs binary"],
    c: 0,
    e: "brew install installs from Homebrew. Common on macOS. /usr/local or /opt/homebrew.",
    de: "brew install wget. brew update && brew upgrade. Formulas in homebrew-core."
  }),
  (_i: number) => ({
    q: "What does `snap install package` do?",
    o: ["Installs snap package (sandboxed)", "Installs traditional package", "Snapshots package", "Installs from snap store"],
    c: 0,
    e: "snap install from Snap store. Packages are sandboxed, auto-updating.",
    de: "snap install chromium. Confined. snap list, snap remove. Used on Ubuntu, some others."
  }),
  (_i: number) => ({
    q: "What does `flatpak install app` do?",
    o: ["Installs Flatpak application (sandboxed)", "Installs flat package", "Installs from Flathub", "Installs flatpak"],
    c: 0,
    e: "flatpak install from Flathub or repo. Sandboxed, portable across distros.",
    de: "flatpak install flathub org.gimp.GIMP. flatpak run, list, uninstall. Runtimes shared."
  }),
  (_i: number) => ({
    q: "What does `make` do?",
    o: ["Builds project using Makefile", "Makes files", "Compiles C", "Runs makefile"],
    c: 0,
    e: "make runs targets from Makefile. make or make all for default target.",
    de: "make reads Makefile. make install, make clean. Uses make's dependency rules."
  }),
  (_i: number) => ({
    q: "What does `./configure` typically do?",
    o: ["Configures build for your system before make", "Configures system", "Runs configuration", "Sets up build"],
    c: 0,
    e: "./configure checks dependencies, generates Makefile. Then make && make install.",
    de: "Autoconf script. ./configure --prefix=/usr/local. make; make install. Classic build flow."
  }),
  (_i: number) => ({
    q: "What does `apt-cache search keyword` do?",
    o: ["Searches package cache (same as apt search)", "Searches cache only", "Caches search", "Searches apt cache"],
    c: 0,
    e: "apt-cache search finds packages. Lower-level than apt search. apt-cache show for details.",
    de: "apt-cache policy package shows version info. apt-cache depends for dependencies."
  }),
  (_i: number) => ({
    q: "What does `dpkg -i package.deb` do?",
    o: ["Installs .deb file directly (no dependency resolution)", "Installs with deps", "Imports package", "Installs package"],
    c: 0,
    e: "dpkg -i installs deb file. Does not resolve dependencies. apt handles deps better.",
    de: "dpkg -i foo.deb. dpkg -l lists installed. dpkg -L package shows files. Low-level."
  }),
  (_i: number) => ({
    q: "What does `dpkg -l` show?",
    o: ["List of installed packages", "List of packages", "Package list", "Installed packages"],
    c: 0,
    e: "dpkg -l lists all installed packages. ii = installed, rc = config only.",
    de: "dpkg -l | grep nginx. First column: desired, second: status. Use apt for search."
  }),
  (_i: number) => ({
    q: "What does `apt list --installed` show?",
    o: ["Installed packages from apt", "All packages", "Available packages", "Upgradable packages"],
    c: 0,
    e: "apt list --installed lists packages installed via apt. apt list --upgradable for updates.",
    de: "apt list --installed | grep nginx. Newer interface than dpkg -l for apt-managed."
  }),
  (_i: number) => ({
    q: "What does `apt autoremove` do?",
    o: ["Removes orphaned dependencies", "Removes all unused", "Auto removes packages", "Removes old kernels"],
    c: 0,
    e: "apt autoremove removes packages no longer needed by any installed package.",
    de: "After apt remove, dependencies may be orphaned. autoremove cleans them. Safe to run."
  }),
  (_i: number) => ({
    q: "What does `apt purge package` do?",
    o: ["Removes package and its config files", "Purges package", "Removes and purges", "Deletes package"],
    c: 0,
    e: "apt purge removes package and deletes configuration files. Stronger than remove.",
    de: "apt purge nginx. Config in /etc removed. Use when you want clean uninstall."
  }),
  (_i: number) => ({
    q: "What does `which program` show?",
    o: ["Path to executable", "Program location", "Which program", "Executable path"],
    c: 0,
    e: "which shows path of command that would run. Searches PATH.",
    de: "which python. type python gives more (alias, function). whereis for binary, source, man."
  }),
  (_i: number) => ({
    q: "What does `whereis program` show?",
    o: ["Paths to binary, source, and man pages", "Program location", "Where is program", "Binary path"],
    c: 0,
    e: "whereis finds binary, source, man. whereis ls. Broader than which.",
    de: "whereis -b ls for binary only. Searches standard locations."
  }),
  (_i: number) => ({
    q: "What does `ldconfig` do?",
    o: ["Updates shared library cache", "Links config", "Loads config", "Library config"],
    c: 0,
    e: "ldconfig updates ld.so.cache for shared library lookup. Run after installing libs.",
    de: "ldconfig. /etc/ld.so.conf. Needed when adding libs to /usr/local/lib. Requires root."
  }),
  (_i: number) => ({
    q: "What does `make install` typically do?",
    o: ["Installs built files to system directories", "Installs make", "Installs build", "Installs to prefix"],
    c: 0,
    e: "make install copies binaries, libs, headers to prefix (often /usr/local).",
    de: "./configure --prefix=/usr. make. sudo make install. Installs to prefix/bin, lib, etc."
  }),
  (_i: number) => ({
    q: "What does `make clean` do?",
    o: ["Removes built files (object files, etc.)", "Cleans make", "Removes source", "Cleans build"],
    c: 0,
    e: "make clean removes compiled objects. Fresh build: make clean && make.",
    de: "Removes .o, binaries from build dir. Doesn't touch source. make distclean for more."
  }),
  (_i: number) => ({
    q: "What does `rpm -qa` show?",
    o: ["All installed RPM packages", "Query all", "RPM packages", "Installed RPMs"],
    c: 0,
    e: "rpm -qa lists all installed packages. rpm -qi package for info.",
    de: "rpm -qa | grep nginx. rpm -ql package for files. Low-level on RHEL/Fedora."
  }),
  (_i: number) => ({
    q: "What does `rpm -ql package` show?",
    o: ["Files installed by package", "Package list", "Query list", "Package files"],
    c: 0,
    e: "rpm -ql lists files belonging to package. rpm -qf file for reverse (which package).",
    de: "rpm -ql nginx. rpm -qf /usr/bin/nginx finds owning package."
  }),
  (_i: number) => ({
    q: "What does `brew update` do?",
    o: ["Updates Homebrew and formulae", "Updates packages", "Updates brew", "Refreshes formulae"],
    c: 0,
    e: "brew update fetches latest formulae. Then brew upgrade for packages.",
    de: "brew update. brew upgrade upgrades all. brew upgrade formula for one."
  }),
  (_i: number) => ({
    q: "What does `brew list` show?",
    o: ["Installed formulae", "List of formulae", "Installed packages", "Brew packages"],
    c: 0,
    e: "brew list shows installed formulae. brew list --versions for versions.",
    de: "brew list. brew info formula for details. brew deps for dependencies."
  }),
  (_i: number) => ({
    q: "What does `snap list` show?",
    o: ["Installed snap packages", "Snap list", "All snaps", "Installed snaps"],
    c: 0,
    e: "snap list shows installed snaps with version and revision.",
    de: "snap list. snap info package for details. snap changes for recent operations."
  }),
  (_i: number) => ({
    q: "What does `flatpak list` show?",
    o: ["Installed Flatpak applications", "Flatpak list", "All flatpaks", "Installed apps"],
    c: 0,
    e: "flatpak list shows installed apps and runtimes. flatpak run app-id to run.",
    de: "flatpak list. flatpak info app-id. flatpak remote-add flathub for Flathub."
  }),
  (_i: number) => ({
    q: "What does `pip install package` do?",
    o: ["Installs Python package from PyPI", "Installs pip", "Installs Python", "Installs package"],
    c: 0,
    e: "pip install fetches from PyPI. pip install -r requirements.txt for file.",
    de: "pip install requests. pip list, pip uninstall. Use venv to avoid system pollution."
  }),
  (_i: number) => ({
    q: "What does `npm install` do?",
    o: ["Installs Node.js dependencies from package.json", "Installs npm", "Installs Node", "Installs packages"],
    c: 0,
    e: "npm install reads package.json, installs deps to node_modules. npm i shorthand.",
    de: "npm install. npm install package for add. npm list. package-lock.json locks versions."
  }),
  (_i: number) => ({
    q: "What does `gem install gemname` do?",
    o: ["Installs Ruby gem", "Installs gem", "Installs Ruby package", "Installs gemname"],
    c: 0,
    e: "gem install fetches from RubyGems. gem list for installed. gem uninstall.",
    de: "gem install rails. Bundler (bundle install) preferred for projects."
  }),
  (_i: number) => ({
    q: "What does `cargo build` do?",
    o: ["Builds Rust project", "Builds cargo", "Compiles Rust", "Builds project"],
    c: 0,
    e: "cargo build compiles Rust project. cargo build --release for optimized.",
    de: "cargo build. cargo run, cargo test. Fetches deps from crates.io. Creates target/."
  }),
  (_i: number) => ({
    q: "What does `apt show package` show?",
    o: ["Package metadata and description", "Package info", "Shows package", "Package details"],
    c: 0,
    e: "apt show displays description, version, deps, size. Before installing.",
    de: "apt show nginx. Same info as apt-cache show. Read before apt install."
  }),
  (_i: number) => ({
    q: "What does `apt policy package` show?",
    o: ["Version and repository info", "Package policy", "Version policy", "Repo info"],
    c: 0,
    e: "apt policy shows installed vs available versions, which repo provides each.",
    de: "apt policy nginx. 500, 100 = priority. Useful for pinning or debugging."
  }),
  (_i: number) => ({
    q: "What does `apt hold package` do?",
    o: ["Prevents package from being upgraded", "Holds package", "Locks package", "Pins package"],
    c: 0,
    e: "apt hold (apt-mark hold) prevents upgrades. apt unhold to allow again.",
    de: "apt-mark hold package. For holding kernel or critical package. apt-mark unhold."
  }),
  (_i: number) => ({
    q: "What does `apt source package` do?",
    o: ["Downloads source code of package", "Gets source", "Source package", "Downloads source"],
    c: 0,
    e: "apt source fetches source package. Creates dir with source. For rebuilding or inspection.",
    de: "apt source nginx. Need deb-src in sources.list. For patching or learning."
  }),
  (_i: number) => ({
    q: "What does `apt build-dep package` do?",
    o: ["Installs build dependencies for package", "Build deps", "Build dependencies", "Installs build deps"],
    c: 0,
    e: "apt build-dep installs packages needed to build from source. For apt source workflow.",
    de: "apt build-dep nginx. Installs compiler, libs. Then apt source nginx; cd nginx-*; dpkg-buildpackage."
  }),
  (_i: number) => ({
    q: "What does `dnf search keyword` do?",
    o: ["Searches packages (RHEL/Fedora)", "DNF search", "Searches dnf", "Finds packages"],
    c: 0,
    e: "dnf search finds packages. dnf info package for details. Like apt search.",
    de: "dnf search nginx. dnf provides /path for which package provides file."
  }),
  (_i: number) => ({
    q: "What does `dnf remove package` do?",
    o: ["Removes package (RHEL/Fedora)", "DNF remove", "Removes package", "Uninstalls package"],
    c: 0,
    e: "dnf remove uninstalls package. dnf autoremove for orphan deps. Like apt remove.",
    de: "dnf remove nginx. dnf erase is alias. Handles dependencies."
  }),
  (_i: number) => ({
    q: "What does `dnf update` do?",
    o: ["Updates packages (upgrade)", "Updates dnf", "Updates repo", "Refreshes packages"],
    c: 0,
    e: "dnf update upgrades all packages. dnf check-update to see what would update.",
    de: "dnf update. Same as dnf upgrade. Replaces yum update."
  }),
  (_i: number) => ({
    q: "What does `dnf provides /path/to/file` do?",
    o: ["Finds package that provides the file", "Provides file", "Which package", "File provider"],
    c: 0,
    e: "dnf provides finds which package owns a file. Like apt-file search.",
    de: "dnf provides /usr/bin/nginx. dnf provides '*/nginx'. Useful when file missing."
  }),
  (_i: number) => ({
    q: "What does `brew doctor` do?",
    o: ["Checks Homebrew for problems", "Doctor brew", "Diagnoses brew", "Brew check"],
    c: 0,
    e: "brew doctor diagnoses common issues. PATH, permissions, etc.",
    de: "brew doctor. Suggests fixes. Run when brew acts weird."
  }),
  (_i: number) => ({
    q: "What does `brew uninstall formula` do?",
    o: ["Removes Homebrew formula", "Uninstalls formula", "Removes formula", "Brew remove"],
    c: 0,
    e: "brew uninstall removes formula. brew uninstall --ignore-dependencies for force.",
    de: "brew uninstall wget. Leaves config in ~/.config if any. brew cleanup for old versions."
  }),
  (_i: number) => ({
    q: "What does `brew upgrade` do?",
    o: ["Upgrades all outdated formulae", "Upgrades brew", "Upgrades all", "Brew upgrade"],
    c: 0,
    e: "brew upgrade updates installed formulae. brew upgrade formula for one.",
    de: "brew update && brew upgrade. brew upgrade formula for specific. Keeps old versions until cleanup."
  }),
  (_i: number) => ({
    q: "What does `snap refresh` do?",
    o: ["Updates snap packages", "Refreshes snaps", "Updates snaps", "Snap update"],
    c: 0,
    e: "snap refresh updates all snaps. Snap auto-updates by default.",
    de: "snap refresh. snap refresh package for one. Snaps update in background usually."
  }),
  (_i: number) => ({
    q: "What does `snap remove package` do?",
    o: ["Removes snap package", "Removes snap", "Uninstalls snap", "Snap uninstall"],
    c: 0,
    e: "snap remove uninstalls snap. --purge to remove data too.",
    de: "snap remove chromium. snap remove package --purge for config/data."
  }),
  (_i: number) => ({
    q: "What does `flatpak update` do?",
    o: ["Updates Flatpak apps and runtimes", "Updates flatpak", "Updates apps", "Flatpak upgrade"],
    c: 0,
    e: "flatpak update upgrades all. flatpak update app-id for one.",
    de: "flatpak update. flatpak update --system for system-wide. Runtimes updated too."
  }),
  (_i: number) => ({
    q: "What does `flatpak uninstall app-id` do?",
    o: ["Removes Flatpak application", "Uninstalls flatpak", "Removes app", "Flatpak remove"],
    c: 0,
    e: "flatpak uninstall removes app. --unused removes orphaned runtimes.",
    de: "flatpak uninstall org.gimp.GIMP. flatpak uninstall --unused to clean."
  }),
  (_i: number) => ({
    q: "What does `make -j4` do?",
    o: ["Runs make with 4 parallel jobs", "Make jobs", "Parallel make", "4 jobs"],
    c: 0,
    e: "make -j4 runs 4 jobs in parallel. Speeds up build. -j uses all cores.",
    de: "make -j$(nproc). Parallel compilation. -j with no number = unlimited (careful)."
  }),
  (_i: number) => ({
    q: "What does `./configure --prefix=/usr` do?",
    o: ["Sets install prefix to /usr", "Configures prefix", "Prefix /usr", "Install to /usr"],
    c: 0,
    e: "configure --prefix sets where make install puts files. Default often /usr/local.",
    de: "./configure --prefix=/usr. Then bin, lib go under /usr. --prefix=$HOME for user install."
  }),
  (_i: number) => ({
    q: "What does `checkinstall` do?",
    o: ["Creates package from make install", "Checks install", "Install checker", "Package from install"],
    c: 0,
    e: "checkinstall runs make install but creates .deb/.rpm for easy removal.",
    de: "make; sudo checkinstall. Tracks files, creates package. Better than make install for cleanup."
  }),
  (_i: number) => ({
    q: "What does `apt edit-sources` do?",
    o: ["Opens sources.list for editing", "Edits sources", "Edits repos", "Source editor"],
    c: 0,
    e: "apt edit-sources opens repository config. sources.list and sources.list.d/.",
    de: "Adds/edits repos. apt update after. Prefer sources.list.d/ for new repos."
  }),
  (_i: number) => ({
    q: "What does `/etc/apt/sources.list` contain?",
    o: ["Repository URLs for apt", "Source list", "Package sources", "Apt repositories"],
    c: 0,
    e: "sources.list lists deb/deb-src lines. Each: type url suite component.",
    de: "deb http://archive.ubuntu.com/ubuntu jammy main. apt update reads this."
  }),
  (_i: number) => ({
    q: "What does `apt-cache policy` show?",
    o: ["Repository priorities and package versions", "Cache policy", "Apt policy", "Repo priorities"],
    c: 0,
    e: "apt-cache policy (or apt policy) shows version candidates and priorities.",
    de: "apt policy nginx. 500 from repo A, 100 from repo B. Higher = preferred."
  }),
  (_i: number) => ({
    q: "What does `dpkg --configure -a` do?",
    o: ["Configures any unpacked but unconfigured packages", "Configures all", "Dpkg configure", "Finishes installs"],
    c: 0,
    e: "Resumes interrupted package configuration. Fixes 'dpkg was interrupted' state.",
    de: "After failed apt install. dpkg --configure -a. Then apt -f install for deps."
  }),
  (_i: number) => ({
    q: "What does `apt -f install` do?",
    o: ["Fixes broken dependencies", "Fix install", "Repairs deps", "Fixes packages"],
    c: 0,
    e: "apt -f install (fix broken) attempts to resolve dependency problems.",
    de: "apt --fix-broken install. Run after failed install or dpkg --configure -a."
  }),
  (_i: number) => ({
    q: "What does `apt dist-upgrade` do?",
    o: ["Upgrades and may remove packages to resolve conflicts", "Dist upgrade", "Full upgrade", "Distribution upgrade"],
    c: 0,
    e: "dist-upgrade (full-upgrade) handles dependency changes, may remove packages.",
    de: "apt full-upgrade. For major releases. More aggressive than upgrade. Read changes first."
  }),
  (_i: number) => ({
    q: "What does `pip freeze` output?",
    o: ["Installed packages in requirements format", "Frozen packages", "Package list", "Requirements format"],
    c: 0,
    e: "pip freeze lists installed packages as package==version. pip freeze > requirements.txt.",
    de: "pip freeze. pip freeze > requirements.txt for reproducible env. pip install -r requirements.txt."
  }),
  (_i: number) => ({
    q: "What does `pip list` show?",
    o: ["Installed packages and versions", "Pip list", "Package list", "Installed packages"],
    c: 0,
    e: "pip list shows installed packages. pip list --outdated for upgradable.",
    de: "pip list. pip list -v for more. pip show package for one package details."
  }),
  (_i: number) => ({
    q: "What does `npm list` show?",
    o: ["Dependency tree of project", "NPM list", "Package tree", "Dependencies"],
    c: 0,
    e: "npm list shows installed deps. npm list -g for global. npm ls shorthand.",
    de: "npm list. npm list --depth=0 for top-level only. npm outdated for updates."
  }),
  (_i: number) => ({
    q: "What does `npm update` do?",
    o: ["Updates packages within semver range", "Updates npm", "Updates all", "NPM update"],
    c: 0,
    e: "npm update updates to latest within package.json range. npm outdated first.",
    de: "npm update. Respects ^ and ~ in package.json. npm install package@latest for specific."
  }),
  (_i: number) => ({
    q: "What does `cargo install crate` do?",
    o: ["Installs Rust binary to $HOME/.cargo/bin", "Installs crate", "Cargo install", "Installs binary"],
    c: 0,
    e: "cargo install builds and installs binary from crate. For CLI tools.",
    de: "cargo install ripgrep. Goes to ~/.cargo/bin. cargo install --path . for local."
  }),
  (_i: number) => ({
    q: "What does `cargo update` do?",
    o: ["Updates Cargo.lock within semver", "Updates cargo", "Updates deps", "Cargo update"],
    c: 0,
    e: "cargo update updates lock file. Respects Cargo.toml version requirements.",
    de: "cargo update. cargo update -p crate for one. Regenerates Cargo.lock."
  }),
  (_i: number) => ({
    q: "What does `gem list` show?",
    o: ["Installed Ruby gems", "Gem list", "Ruby gems", "Installed gems"],
    c: 0,
    e: "gem list shows installed gems. gem list -d for details.",
    de: "gem list. gem environment for paths. bundle list for Bundler projects."
  }),
  (_i: number) => ({
    q: "What does `bundle install` do?",
    o: ["Installs Ruby deps from Gemfile", "Installs bundle", "Installs gems", "Bundler install"],
    c: 0,
    e: "bundle install reads Gemfile, installs gems. Creates Gemfile.lock.",
    de: "bundle install. bundle update for latest. Prefer over gem install for projects."
  }),
  (_i: number) => ({
    q: "What does `go get package` do?",
    o: ["Downloads and installs Go package", "Gets package", "Go get", "Installs Go package"],
    c: 0,
    e: "go get fetches package, builds, installs. go get -u for update. go mod tidy for cleanup.",
    de: "go get github.com/foo/bar. Adds to go.mod. go install for binaries (Go 1.17+)."
  }),
  (_i: number) => ({
    q: "What does `go mod tidy` do?",
    o: ["Cleans go.mod and go.sum", "Tidies mod", "Go mod tidy", "Cleans dependencies"],
    c: 0,
    e: "go mod tidy adds missing deps, removes unused. Run after editing imports.",
    de: "go mod tidy. Updates go.mod, go.sum. Good practice before commit."
  }),
  (_i: number) => ({
    q: "What does `yum` do (legacy)?",
    o: ["RHEL/CentOS package manager (replaced by dnf)", "Yellowdog updater", "Yum manager", "RPM manager"],
    c: 0,
    e: "yum was RHEL package manager. dnf is replacement. Same commands: install, remove, update.",
    de: "yum install nginx. dnf is drop-in replacement. CentOS 8+, RHEL 8+ use dnf."
  }),
  (_i: number) => ({
    q: "What does `zypper` do?",
    o: ["openSUSE/SLE package manager", "Zypper manager", "SUSE package manager", "OpenSUSE apt"],
    c: 0,
    e: "zypper is openSUSE package manager. zypper install, remove, update.",
    de: "zypper install nginx. zypper ref for refresh. zypper dup for distribution upgrade."
  }),
  (_i: number) => ({
    q: "What does `pacman -S package` do?",
    o: ["Installs package (Arch Linux)", "Syncs package", "Pacman install", "Arch install"],
    c: 0,
    e: "pacman -S installs. pacman -Syu for full system update. Arch's package manager.",
    de: "pacman -S nginx. pacman -Ss to search. pacman -R to remove. -Sy to refresh then install."
  }),
  (_i: number) => ({
    q: "What does `pacman -Syu` do?",
    o: ["Full system upgrade (Arch)", "Sync and upgrade", "Pacman upgrade", "Arch upgrade"],
    c: 0,
    e: "pacman -Syu refreshes db and upgrades all packages. Standard Arch update.",
    de: "pacman -Syu. -Sy refreshes, -u upgrades. Run regularly on Arch."
  }),
  (_i: number) => ({
    q: "What does `emerge package` do?",
    o: ["Installs package (Gentoo)", "Emerges package", "Gentoo install", "Portage install"],
    c: 0,
    e: "emerge installs from Portage. Compiles from source. emerge -uD @world for update.",
    de: "emerge nginx. Compilation takes time. USE flags customize. Gentoo-specific."
  }),
  (_i: number) => ({
    q: "What does `nix-env -i package` do?",
    o: ["Installs package in Nix user env", "Nix install", "Installs nix package", "User install"],
    c: 0,
    e: "nix-env -i installs to user profile. nix-env -e to remove. Nix package manager.",
    de: "nix-env -iA nixpkgs.nginx. Declarative: use configuration.nix. Imperative: nix-env."
  }),
  (_i: number) => ({
    q: "What does `apt-mark auto package` do?",
    o: ["Marks package as automatically installed", "Auto mark", "Marks auto", "Dependency mark"],
    c: 0,
    e: "apt-mark auto marks as auto (will be removed by autoremove if orphaned).",
    de: "apt-mark auto package. apt-mark manual to keep. apt-mark showauto for list."
  }),
  (_i: number) => ({
    q: "What does `apt-mark manual package` do?",
    o: ["Marks package as manually installed (kept)", "Manual mark", "Marks manual", "Keep package"],
    c: 0,
    e: "apt-mark manual prevents autoremove from removing it. Treated as explicitly wanted.",
    de: "apt-mark manual package. Use when you want to keep a dependency after removing parent."
  }),
  (_i: number) => ({
    q: "What does `apt-get` vs `apt`?",
    o: ["apt is user-friendly frontend; apt-get is low-level", "Same thing", "apt-get is newer", "apt is deprecated"],
    c: 0,
    e: "apt is newer, friendlier. apt-get is scriptable, stable CLI. Both use same backend.",
    de: "apt install = apt-get install. apt is for interactive. apt-get in scripts (stable)."
  }),
  (_i: number) => ({
    q: "What does `stow` do?",
    o: ["Symlinks package files into a directory (GNU Stow)", "Stows files", "Package stow", "Symlink manager"],
    c: 0,
    e: "stow creates symlinks from package dir to target. For managing /usr/local installs.",
    de: "cd /usr/local/stow/nginx; stow -t /usr/local . Creates symlinks. stow -D to unstow."
  }),
  (_i: number) => ({
    q: "What does `alien` do?",
    o: ["Converts between package formats (.deb, .rpm, etc.)", "Converts packages", "Package converter", "Format converter"],
    c: 0,
    e: "alien converts .rpm to .deb or vice versa. alien -d package.rpm.",
    de: "alien -d foo.rpm creates foo.deb. Not perfect for complex packages. Use with care."
  }),
  (_i: number) => ({
    q: "What does `apt-file search filename` do?",
    o: ["Finds package containing file", "Searches apt files", "File search", "Which package has file"],
    c: 0,
    e: "apt-file search finds which package provides a file. apt-file update first.",
    de: "apt-file search nginx.conf. Like dnf provides. Need apt-file install and update."
  }),
  (_i: number) => ({
    q: "What does `pip install --user package` do?",
    o: ["Installs to user directory (no root)", "User install", "Installs for user", "Local install"],
    c: 0,
    e: "pip install --user installs to ~/.local. No sudo. Overrides system packages for user.",
    de: "pip install --user package. ~/.local/bin may need to be in PATH. Avoids polluting system."
  }),
  (_i: number) => ({
    q: "What does `npm install -g package` do?",
    o: ["Installs package globally", "Global install", "Installs global", "NPM global"],
    c: 0,
    e: "npm install -g installs to global location. For CLI tools. Prefer npx for one-off.",
    de: "npm install -g typescript. Global bin in npm root. npm list -g. Avoid for project deps."
  }),
  (_i: number) => ({
    q: "What does `npx` do?",
    o: ["Runs package without installing (or uses cached)", "Npx run", "Execute package", "Run without install"],
    c: 0,
    e: "npx runs package. npx create-react-app. Downloads if needed, runs, can cache.",
    de: "npx package. npx -p package cmd. Good for one-off tools. Replaces global install for many cases."
  }),
  (_i: number) => ({
    q: "What does `cargo add package` do?",
    o: ["Adds dependency to Cargo.toml", "Adds package", "Cargo add", "Adds dep"],
    c: 0,
    e: "cargo add adds crate to Cargo.toml. cargo add serde. cargo add --dev for dev deps.",
    de: "cargo add serde. cargo add serde --features derive. Updates Cargo.toml and Cargo.lock."
  }),
  (_i: number) => ({
    q: "What does `cargo run` do?",
    o: ["Builds and runs the project", "Runs cargo", "Cargo run", "Build and run"],
    c: 0,
    e: "cargo run compiles (if needed) and runs binary. cargo run --release for optimized.",
    de: "cargo run. For bins. cargo run --bin name for multiple. Default: main or first bin."
  }),
  (_i: number) => ({
    q: "What does `meson build` do?",
    o: ["Configures Meson build in build/", "Meson build", "Configures build", "Build setup"],
    c: 0,
    e: "meson setup build or meson build. Generates Ninja files. meson compile -C build.",
    de: "meson setup build. meson compile -C build. Alternative to autotools. ninja -C build."
  }),
  (_i: number) => ({
    q: "What does `cmake .` do?",
    o: ["Generates build files in current directory", "CMake config", "Configures cmake", "Build generation"],
    c: 0,
    e: "cmake . generates Makefile or Ninja. cmake -B build for out-of-tree. make or ninja after.",
    de: "cmake . or cmake -B build -S . cmake --build build. Cross-platform build system."
  }),
];

import { level5Intermediate } from './level5_intermediate_cli';
import { level5Expert } from './level5_expert_cli';

export const level5Patterns = beginner;
export const level5IntermediateA = level5Intermediate.slice(0, 50);
export const level5IntermediateB = level5Intermediate.slice(50, 100);
export const level5ExpertA = level5Expert.slice(0, 50);
export const level5ExpertB = level5Expert.slice(50, 114);
