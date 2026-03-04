// LEVEL 5 EXPERT — Package Management (114 unique questions)
// Topics: apt, dnf, brew, snap, flatpak, make, configure

export const level5Expert = [
  (_i: number) => ({
    q: "What does `apt-get install -t stretch package` do?",
    o: ["Installs from specific release/suite", "Target release", "Suite install", "Release pin"],
    c: 0,
    e: "apt-get -t targets release. For backports, oldstable. -t stretch.",
    de: "apt install -t bullseye-backports nginx. Specific suite. APT::Default-Release."
  }),
  (_i: number) => ({
    q: "What does `/etc/apt/preferences` or `preferences.d` control?",
    o: ["Package pinning (version/release preference)", "APT pinning", "Version pinning", "Preferences"],
    c: 0,
    e: "APT preferences. Pin-Priority. Which version wins. Package, version, origin.",
    de: "Package: nginx Pin: release a=stable Pin-Priority: 1001. Pinning."
  }),
  (_i: number) => ({
    q: "What does `apt-get source package` create?",
    o: ["Source package directory with .dsc", "Source package", "Get source", "Download source"],
    c: 0,
    e: "apt-get source fetches source. Creates dir. .dsc, .tar. For rebuild, patch.",
    de: "apt-get source nginx. Need deb-src in sources.list. dpkg-buildpackage to build."
  }),
  (_i: number) => ({
    q: "What does `dpkg-buildpackage -us -uc` do?",
    o: ["Builds package without signing", "Build unsigned", "No sign", "Build package"],
    c: 0,
    e: "dpkg-buildpackage -us -uc. -us unsigned source, -uc unsigned changes. For local.",
    de: "dpkg-buildpackage -us -uc -b for binary only. After apt source. Creates .deb."
  }),
  (_i: number) => ({
    q: "What does `debuild` do?",
    o: ["Builds Debian package with proper env", "Debian build", "Debuild", "Package build"],
    c: 0,
    e: "debuild wraps dpkg-buildpackage. Sets env. Lintian. Cleaner build.",
    de: "debuild. devscripts. Sets DEB_*. Lintian checks. For proper Debian build."
  }),
  (_i: number) => ({
    q: "What does `apt-get build-dep package` install?",
    o: ["Build dependencies for package", "Build deps", "Compile deps", "Build dependencies"],
    c: 0,
    e: "apt-get build-dep installs packages needed to build. For apt source workflow.",
    de: "apt-get build-dep nginx. Compiler, libs. Then apt source nginx; cd nginx-*; debuild."
  }),
  (_i: number) => ({
    q: "What does `dget URL` do?",
    o: ["Downloads and extracts Debian source package", "Get source", "Dget", "Fetch source"],
    c: 0,
    e: "dget fetches .dsc, extracts. devscripts. For source from URL.",
    de: "dget http://.../package_1.0-1.dsc. Downloads, unpacks. For building."
  }),
  (_i: number) => ({
    q: "What does `quilt` manage in Debian packaging?",
    o: ["Patch series for source", "Patch management", "Quilt patches", "Debian patches"],
    c: 0,
    e: "quilt manages patch stack. debian/patches/. push, pop. For source mods.",
    de: "quilt push -a. debian/patches/series. Standard Debian patch workflow."
  }),
  (_i: number) => ({
    q: "What does `dnf module enable module:stream` do?",
    o: ["Enables module stream", "Enable module", "Module stream", "DNF module"],
    c: 0,
    e: "dnf module enable. Modularity. Enables stream. dnf module list.",
    de: "dnf module enable nginx:1.20. Modular streams. RHEL 8+."
  }),
  (_i: number) => ({
    q: "What does `dnf module install module:stream` do?",
    o: ["Installs module and its default profile", "Install module", "Module install", "Profile install"],
    c: 0,
    e: "dnf module install. Installs module stream. Default profile. Modularity.",
    de: "dnf module install nginx:1.20. Or nodejs:18. Profiles: default, minimal."
  }),
  (_i: number) => ({
    q: "What does `rpmbuild -ba specfile.spec` do?",
    o: ["Builds source and binary RPMs", "Build all", "Source and binary", "RPM build"],
    c: 0,
    e: "rpmbuild -ba builds both. -bs source, -bb binary. From .spec.",
    de: "rpmbuild -ba package.spec. Creates .src.rpm and .rpm. ~/rpmbuild/."
  }),
  (_i: number) => ({
    q: "What does `mock -r epel-8-x86_64 rebuild package.src.rpm` do?",
    o: ["Builds in clean chroot", "Mock build", "Chroot build", "Clean build"],
    c: 0,
    e: "mock builds in chroot. Clean env. No host deps. Reproducible.",
    de: "mock -r epel-8-x86_64 rebuild foo.src.rpm. Result in result/."
  }),
  (_i: number) => ({
    q: "What does `brew create URL` do?",
    o: ["Creates formula from URL", "Create formula", "New formula", "Formula from URL"],
    c: 0,
    e: "brew create URL. Generates formula. For new package. Edit after.",
    de: "brew create https://example.com/foo-1.0.tar.gz. Creates Formula/foo.rb."
  }),
  (_i: number) => ({
    q: "What does `brew edit formula` do?",
    o: ["Opens formula in editor", "Edit formula", "Modify formula", "Formula editor"],
    c: 0,
    e: "brew edit opens formula. $EDITOR. For patching formula. Local change.",
    de: "brew edit nginx. Modifies Formula/nginx.rb. brew reinstall to apply."
  }),
  (_i: number) => ({
    q: "What does `brew fetch --deps formula` do?",
    o: ["Downloads formula and dependencies", "Fetch with deps", "Download deps", "Fetch all"],
    c: 0,
    e: "brew fetch --deps. Downloads formula and its deps. For offline.",
    de: "brew fetch --deps nginx. Caches. brew install --offline later."
  }),
  (_i: number) => ({
    q: "What does `snapcraft` do?",
    o: ["Builds snap packages", "Snap build", "Create snap", "Snap builder"],
    c: 0,
    e: "snapcraft builds .snap. snapcraft.yaml. For creating snaps.",
    de: "snapcraft. Reads snapcraft.yaml. Creates .snap. snap install *.snap --dangerous."
  }),
  (_i: number) => ({
    q: "What does `flatpak-builder` do?",
    o: ["Builds Flatpak from manifest", "Flatpak build", "Build flatpak", "Manifest build"],
    c: 0,
    e: "flatpak-builder builds from JSON manifest. Creates repo. For building Flatpaks.",
    de: "flatpak-builder build-dir org.app.json. flatpak-builder --run build-dir run."
  }),
  (_i: number) => ({
    q: "What does `make -j$(nproc)` use for job count?",
    o: ["Number of processors", "CPU count", "Nproc", "Processor count"],
    c: 0,
    e: "nproc returns CPU count. make -j uses that. Optimal parallel.",
    de: "make -j$(nproc). Portable. Linux: nproc. macOS: sysctl -n hw.ncpu."
  }),
  (_i: number) => ({
    q: "What does `make -B` or `make --always-make` do?",
    o: ["Rebuilds all targets", "Force rebuild", "Always make", "Rebuild all"],
    c: 0,
    e: "make -B rebuilds everything. Ignores timestamps. Force full rebuild.",
    de: "make -B. When timestamps wrong. make clean && make equivalent."
  }),
  (_i: number) => ({
    q: "What does `make -d` output?",
    o: ["Debug output (why targets rebuild)", "Make debug", "Debug mode", "Verbose debug"],
    c: 0,
    e: "make -d shows debug. Why targets rebuilt. Dependency reasoning.",
    de: "make -d. Very verbose. For understanding make decisions."
  }),
  (_i: number) => ({
    q: "What does `make -j2 -l3` mean for -l?",
    o: ["Load limit: don't start new job if load > 3", "Load limit", "Limit load", "Max load"],
    c: 0,
    e: "make -l N limits by load average. Don't add jobs if load exceeds N.",
    de: "make -j4 -l4. Prevents overload. -l = load average limit."
  }),
  (_i: number) => ({
    q: "What does `autoconf` generate?",
    o: ["configure script from configure.ac", "Configure script", "Generate configure", "Autoconf output"],
    c: 0,
    e: "autoconf reads configure.ac, produces configure. Part of autotools.",
    de: "autoconf. configure.ac -> configure. autoreconf for full regenerate."
  }),
  (_i: number) => ({
    q: "What does `automake` generate?",
    o: ["Makefile.in from Makefile.am", "Makefile template", "Automake", "Makefile.in"],
    c: 0,
    e: "automake reads Makefile.am, produces Makefile.in. configure turns to Makefile.",
    de: "automake. Makefile.am -> Makefile.in. configure -> Makefile. Autotools."
  }),
  (_i: number) => ({
    q: "What does `libtool` provide?",
    o: ["Portable shared library building", "Shared lib helper", "Libtool", "Library tool"],
    c: 0,
    e: "libtool abstracts shared lib creation. .la files. Cross-platform.",
    de: "libtool. Handles .so, .dylib, .dll. ltmain.sh. Autotools."
  }),
  (_i: number) => ({
    q: "What does `cmake --build build --target install` do?",
    o: ["Runs install target in build dir", "CMake install", "Build install", "Install target"],
    c: 0,
    e: "cmake --build runs target. --target install. No make directly.",
    de: "cmake --build build --target install. DESTDIR= for staging."
  }),
  (_i: number) => ({
    q: "What does `cmake -DCMAKE_BUILD_TYPE=Release` set?",
    o: ["Release build (optimized)", "Build type", "Release mode", "Optimized build"],
    c: 0,
    e: "CMAKE_BUILD_TYPE=Release. Debug, Release, RelWithDebInfo, MinSizeRel.",
    de: "cmake -DCMAKE_BUILD_TYPE=Release. Affects flags. -O3 for Release."
  }),
  (_i: number) => ({
    q: "What does `cmake --install build --prefix /opt` do?",
    o: ["Installs from build to /opt", "Install prefix", "CMake install prefix", "Install to prefix"],
    c: 0,
    e: "cmake --install. Installs to prefix. cmake 3.15+. Replaces make install.",
    de: "cmake --install build --prefix /opt. DESTDIR for staging."
  }),
  (_i: number) => ({
    q: "What does `meson configure build -Doption=value` do?",
    o: ["Sets build option", "Configure option", "Meson option", "Set option"],
    c: 0,
    e: "meson configure changes option. -Dbuildtype=release. Without re-running setup.",
    de: "meson configure build -Dbuildtype=release. meson configure build for list."
  }),
  (_i: number) => ({
    q: "What does `ninja -t compdb` output?",
    o: ["Compilation database (JSON)", "Compdb", "Compile commands", "JSON database"],
    c: 0,
    e: "ninja -t compdb. Outputs compile_commands.json. For clangd, etc.",
    de: "ninja -C build -t compdb > compile_commands.json. IDE integration."
  }),
  (_i: number) => ({
    q: "What does `ccache` do?",
    o: ["Caches compilation for faster rebuilds", "Compile cache", "Build cache", "CC cache"],
    c: 0,
    e: "ccache caches object files. Same source = cache hit. Speeds rebuilds.",
    de: "CC=ccache gcc. Or ccache gcc. ccache -s for stats. Huge speedup."
  }),
  (_i: number) => ({
    q: "What does `dpkg-shlibdeps` do?",
    o: ["Computes shared library deps for package", "Shlib deps", "Library deps", "Shared lib deps"],
    c: 0,
    e: "dpkg-shlibdeps finds lib deps. For debian/control Depends. Packaging.",
    de: "dpkg-shlibdeps -O. In debian/rules. Fills shlibs:Depends."
  }),
  (_i: number) => ({
    q: "What does `dh_auto_install` do in debian/rules?",
    o: ["Runs make install to staging", "Auto install", "DH install", "Staging install"],
    c: 0,
    e: "dh_auto_install runs make install DESTDIR=debian/package. Debhelper.",
    de: "dh_auto_install. Part of debian/rules. Debhelper sequence."
  }),
  (_i: number) => ({
    q: "What does `lintian` check?",
    o: ["Debian policy compliance", "Package lint", "Policy check", "Debian lint"],
    c: 0,
    e: "lintian checks .deb for policy. Warnings, errors. Quality assurance.",
    de: "lintian package.deb. Many checks. Fix before upload. rlintian for reverse."
  }),
  (_i: number) => ({
    q: "What does `reprepro` manage?",
    o: ["Local APT repository", "APT repo", "Local repo", "Repository manager"],
    c: 0,
    e: "reprepro manages Debian repo. Incoming, pool. For private repos.",
    de: "reprepro includedeb jammy package.deb. Creates repo. apt update from it."
  }),
  (_i: number) => ({
    q: "What does `createrepo` do?",
    o: ["Creates RPM repository metadata", "RPM repo", "Yum repo", "Repo metadata"],
    c: 0,
    e: "createrepo creates repodata/. For yum/dnf. From directory of .rpm.",
    de: "createrepo . In dir with .rpms. createrepo -g comps.xml for groups."
  }),
  (_i: number) => ({
    q: "What does `dnf repository-packages repo list` show?",
    o: ["Packages from that repo", "Repo packages", "Repository packages", "Packages in repo"],
    c: 0,
    e: "dnf repository-packages repo list. Packages from specific repo.",
    de: "dnf repository-packages epel list. dnf repolist for repo names."
  }),
  (_i: number) => ({
    q: "What does `rpm --addsign package.rpm` do?",
    o: ["Signs RPM with GPG", "Sign RPM", "GPG sign", "RPM sign"],
    c: 0,
    e: "rpm --addsign signs package. GPG key. For verified installs.",
    de: "rpm --addsign foo.rpm. rpm -K to verify. dnf needs import of key."
  }),
  (_i: number) => ({
    q: "What does `rpmsign --addsign` require?",
    o: ["GPG key configured for signing", "GPG key", "Signing key", "RPM sign key"],
    c: 0,
    e: "rpmsign/rpm --addsign needs GPG. ~/.rpmmacros %_gpg_name. Key for signing.",
    de: "Configure GPG. rpmsign --addsign. For secure repos."
  }),
  (_i: number) => ({
    q: "What does `debsign` do?",
    o: ["Signs Debian package (.changes)", "Sign debs", "Debian sign", "Package sign"],
    c: 0,
    e: "debsign signs .changes. GPG. For upload to archive. Incoming.",
    de: "debsign package_1.0_amd64.changes. dpkg-sig for .deb signing."
  }),
  (_i: number) => ({
    q: "What does `apt-key` do (deprecated)?",
    o: ["Manages APT keyring (use signed-by now)", "APT keys", "Key management", "GPG keys"],
    c: 0,
    e: "apt-key add/del. Deprecated. Prefer signed-by in sources.list.",
    de: "apt-key deprecated. Use [signed-by=/path] in sources. Better isolation."
  }),
  (_i: number) => ({
    q: "What does `signed-by=` in sources.list do?",
    o: ["Specifies GPG key for repo verification", "Key for repo", "Signed by", "Repo key"],
    c: 0,
    e: "deb [signed-by=/usr/share/keyrings/foo.gpg] url. Per-repo key. Secure.",
    de: "deb [signed-by=/etc/apt/keyrings/nginx.asc] https://... Replaces apt-key."
  }),
  (_i: number) => ({
    q: "What does `pip install --target dir package` do?",
    o: ["Installs to specific directory", "Target dir", "Custom location", "Install to dir"],
    c: 0,
    e: "pip install --target. Installs to dir. Not in site-packages. For bundling.",
    de: "pip install --target ./vendor requests. PYTHONPATH=./vendor. For apps."
  }),
  (_i: number) => ({
    q: "What does `pip install --platform manylinux_x86_64` do?",
    o: ["Forces wheel for that platform", "Platform wheel", "Cross platform", "Target platform"],
    c: 0,
    e: "pip install --platform. For cross-platform. manylinux, win, macos.",
    de: "pip install --platform manylinux2014_x86_64 --only-binary=:all: package. Lambda."
  }),
  (_i: number) => ({
    q: "What does `pip wheel` create?",
    o: ["Builds wheel files", "Create wheel", "Wheel build", "Build wheel"],
    c: 0,
    e: "pip wheel builds .whl. For distribution. pip install from wheel.",
    de: "pip wheel . pip wheel -w dist/. Creates .whl. Faster install from wheel."
  }),
  (_i: number) => ({
    q: "What does `npm run` execute?",
    o: ["Scripts from package.json", "Package scripts", "NPM scripts", "Run script"],
    c: 0,
    e: "npm run script. From package.json scripts. npm run build, test.",
    de: "npm run build. scripts.build. npm run without args lists. npm run-script."
  }),
  (_i: number) => ({
    q: "What does `npm link` do?",
    o: ["Creates symlink for local development", "Link package", "Dev link", "Symlink package"],
    c: 0,
    e: "npm link. In package dir: link. In consumer: npm link package. Local dev.",
    de: "cd my-pkg && npm link. cd app && npm link my-pkg. Symlink. For development."
  }),
  (_i: number) => ({
    q: "What does `npm pack --pack-destination dir` do?",
    o: ["Packs to specific directory", "Pack destination", "Output dir", "Pack to dir"],
    c: 0,
    e: "npm pack --pack-destination. Puts tarball in dir. For CI artifacts.",
    de: "npm pack --pack-destination ./dist. Creates in dist/."
  }),
  (_i: number) => ({
    q: "What does `cargo build --features feat1` do?",
    o: ["Enables optional feature", "Feature flag", "Enable feature", "Cargo feature"],
    c: 0,
    e: "cargo build --features. Enables [features] in Cargo.toml. Optional deps.",
    de: "cargo build --features json. --no-default-features to disable default."
  }),
  (_i: number) => ({
    q: "What does `cargo build --no-default-features` do?",
    o: ["Disables default features", "No default", "Minimal features", "Disable default"],
    c: 0,
    e: "cargo build --no-default-features. Only explicitly enabled. Minimal build.",
    de: "cargo build --no-default-features. For minimal. Add --features for specific."
  }),
  (_i: number) => ({
    q: "What does `cargo metadata` output?",
    o: ["JSON dependency graph", "Cargo metadata", "Dep graph", "Package metadata"],
    c: 0,
    e: "cargo metadata. Machine-readable. Deps, features. For tooling.",
    de: "cargo metadata --no-deps. JSON. For IDE, scripts. Package graph."
  }),
  (_i: number) => ({
    q: "What does `gem specification package` show?",
    o: ["Gem spec (metadata)", "Gem spec", "Package spec", "Specification"],
    c: 0,
    e: "gem specification shows .gemspec. Metadata. gem spec shorthand.",
    de: "gem spec rails. Version, deps, files. From installed or fetch."
  }),
  (_i: number) => ({
    q: "What does `bundle config set --local path vendor` do?",
    o: ["Sets local path for gems", "Bundle path", "Vendor path", "Local path"],
    c: 0,
    e: "bundle config path. Gems in vendor/bundle. For deployment. --local = project.",
    de: "bundle config set --local path vendor/bundle. bundle install. Isolated."
  }),
  (_i: number) => ({
    q: "What does `bundle lock --add-platform x86_64-linux` do?",
    o: ["Adds platform to lockfile", "Add platform", "Lock platform", "Platform lock"],
    c: 0,
    e: "bundle lock --add-platform. For multi-platform. Gemfile.lock platforms.",
    de: "bundle lock --add-platform x86_64-linux. For deployment. ruby, java, etc."
  }),
  (_i: number) => ({
    q: "What does `go build -ldflags '-s -w'` do?",
    o: ["Strips debug info (smaller binary)", "Strip binary", "Ldflags", "Smaller binary"],
    c: 0,
    e: "go build -ldflags '-s -w'. -s strip, -w no DWARF. Smaller binary.",
    de: "go build -ldflags '-s -w'. 20-30% smaller. No debug. For release."
  }),
  (_i: number) => ({
    q: "What does `go build -trimpath` do?",
    o: ["Removes path from binary (reproducible)", "Trim path", "Reproducible", "No path"],
    c: 0,
    e: "go build -trimpath. Removes build paths. Reproducible. Security.",
    de: "go build -trimpath. No /home/user in binary. Reproducible builds."
  }),
  (_i: number) => ({
    q: "What does `go list -m all` show?",
    o: ["All modules in build", "Module list", "All modules", "Build modules"],
    c: 0,
    e: "go list -m all. All modules. go list -m -json for JSON.",
    de: "go list -m all. Direct and indirect. go mod graph for graph."
  }),
  (_i: number) => ({
    q: "What does `zypper in -l package` do?",
    o: ["Installs with auto-agree to licenses", "License accept", "Auto license", "License agree"],
    c: 0,
    e: "zypper in -l. Accepts licenses. -l = auto-agree-with-licenses. Non-interactive.",
    de: "zypper in -l package. For scripts. License prompts skipped."
  }),
  (_i: number) => ({
    q: "What does `emerge --depclean` do?",
    o: ["Removes unused dependencies", "Dep clean", "Unused deps", "Gentoo cleanup"],
    c: 0,
    e: "emerge --depclean. Removes orphans. Like apt autoremove. Gentoo.",
    de: "emerge --depclean. After removing package. Cleans deps. -p for pretend."
  }),
  (_i: number) => ({
    q: "What does `emerge -uDNav @world` do?",
    o: ["Updates all packages (full system)", "World update", "Full update", "Update all"],
    c: 0,
    e: "emerge -uDNav @world. -u update, -D deep, -N newuse, -a ask, -v verbose.",
    de: "emerge -uDNav @world. Full Gentoo update. -a asks. -p for pretend."
  }),
  (_i: number) => ({
    q: "What does `nix-build` do?",
    o: ["Builds Nix expression", "Nix build", "Build expression", "Nix expression build"],
    c: 0,
    e: "nix-build builds .nix. Creates result symlink. For one-off builds.",
    de: "nix-build default.nix. result -> store path. nix-build -A attr."
  }),
  (_i: number) => ({
    q: "What does `nix-collect-garbage -d` do?",
    o: ["Deletes unused store paths", "Garbage collect", "Nix gc", "Remove unused"],
    c: 0,
    e: "nix-collect-garbage -d. Deletes unreachable. -d delete old generations.",
    de: "nix-collect-garbage -d. Frees space. nix-store --gc. After uninstall."
  }),
  (_i: number) => ({
    q: "What does `guix pull` do?",
    o: ["Updates Guix itself", "Update Guix", "Guix pull", "Upgrade Guix"],
    c: 0,
    e: "guix pull updates Guix. Newer packages. Like apt update for Guix.",
    de: "guix pull. Updates guix. guix package -u for packages. Two levels."
  }),
  (_i: number) => ({
    q: "What does `alien -d package.rpm` create?",
    o: [".deb from .rpm", "Convert to deb", "RPM to deb", "Alien deb"],
    c: 0,
    e: "alien -d converts rpm to deb. alien -r for deb to rpm. Not perfect.",
    de: "alien -d package.rpm. Creates package.deb. Use with care. May need fixes."
  }),
  (_i: number) => ({
    q: "What does `fpm` create?",
    o: ["Packages from various inputs", "FPM package", "Create package", "Package builder"],
    c: 0,
    e: "fpm creates .deb, .rpm, etc. From dir, gem, python. Flexible.",
    de: "fpm -s dir -t deb -n myapp -v 1.0 . fpm -s gem -t rpm package."
  }),
  (_i: number) => ({
    q: "What does `conda create -n env python=3.9` do?",
    o: ["Creates conda env with Python 3.9", "Conda env", "Create env", "Python env"],
    c: 0,
    e: "conda create -n name. New env. python=3.9 pins version. conda activate.",
    de: "conda create -n myenv python=3.9. conda activate myenv. Anaconda/Miniconda."
  }),
  (_i: number) => ({
    q: "What does `conda env export > env.yml` create?",
    o: ["Exports env to YAML", "Export env", "Env YAML", "Environment file"],
    c: 0,
    e: "conda env export. Full env to YAML. conda env create -f env.yml to recreate.",
    de: "conda env export > env.yml. Reproducible. conda env export --no-builds for portable."
  }),
  (_i: number) => ({
    q: "What does `poetry install` do?",
    o: ["Installs deps from poetry.lock", "Poetry install", "Install deps", "Poetry deps"],
    c: 0,
    e: "poetry install reads pyproject.toml, poetry.lock. Installs. Creates venv.",
    de: "poetry install. poetry add package. Modern Python. pyproject.toml."
  }),
  (_i: number) => ({
    q: "What does `poetry build` create?",
    o: ["sdist and wheel", "Poetry build", "Source and wheel", "Build artifacts"],
    c: 0,
    e: "poetry build creates dist/. sdist and wheel. For publishing.",
    de: "poetry build. dist/package-1.0.tar.gz and .whl. poetry publish."
  }),
  (_i: number) => ({
    q: "What does `mason install package` do (vcpkg)?",
    o: ["Installs C++ package (vcpkg)", "Vcpkg install", "Mason install", "C++ package"],
    c: 0,
    e: "vcpkg install. C++ libraries. CMake finds them. Cross-platform.",
    de: "vcpkg install curl. vcpkg integrate. CMake finds. C++ package manager."
  }),
  (_i: number) => ({
    q: "What does `conan install .` do?",
    o: ["Installs Conan dependencies", "Conan deps", "C++ deps", "Conan install"],
    c: 0,
    e: "conan install. C/C++ deps. conanfile.txt or conanfile.py. Generates files.",
    de: "conan install . Creates conanbuildinfo. CMake integration. C++ package manager."
  }),
  (_i: number) => ({
    q: "What does `bazel build //path:target` do?",
    o: ["Builds Bazel target", "Bazel build", "Build target", "Bazel target"],
    c: 0,
    e: "bazel build. Builds target. //package:target. Hermetic, reproducible.",
    de: "bazel build //src:main. BUILD file. bazel test, run. Google's build system."
  }),
  (_i: number) => ({
    q: "What does `buck build target` do?",
    o: ["Builds Buck target", "Buck build", "Build target", "Facebook build"],
    c: 0,
    e: "buck build. Meta's build. Similar to Bazel. Incremental.",
    de: "buck build //app:app. BUCK file. Fast incremental. Java, C++, etc."
  }),
  (_i: number) => ({
    q: "What does `scons` use for config?",
    o: ["SConstruct and SConscript", "SConstruct", "SCons config", "Python build"],
    c: 0,
    e: "scons uses SConstruct. Python-based. Alternative to make.",
    de: "scons. SConstruct = root. SConscript in dirs. Python for build logic."
  }),
  (_i: number) => ({
    q: "What does `waf` use for build config?",
    o: ["wscript (Python)", "Waf script", "Wscript", "Python waf"],
    c: 0,
    e: "waf uses wscript. Python. ./waf configure, ./waf build. Lightweight.",
    de: "waf configure. waf build. wscript. Python-based. Alternative to autotools."
  }),
  (_i: number) => ({
    q: "What does `gradle build` do?",
    o: ["Builds Java/Kotlin project", "Gradle build", "Java build", "Build project"],
    c: 0,
    e: "gradle build. Java, Kotlin. build.gradle. Compiles, tests, packages.",
    de: "gradle build. ./gradlew build. build/ output. Java ecosystem."
  }),
  (_i: number) => ({
    q: "What does `mvn package` do?",
    o: ["Builds and packages Maven project", "Maven package", "Package JAR", "Maven build"],
    c: 0,
    e: "mvn package. Compiles, tests, creates JAR. target/ directory.",
    de: "mvn package. pom.xml. target/*.jar. mvn install for local repo."
  }),
  (_i: number) => ({
    q: "What does `cabal build` do?",
    o: ["Builds Haskell project", "Cabal build", "Haskell build", "Cabal project"],
    c: 0,
    e: "cabal build. Haskell. .cabal file. Compiles. stack build alternative.",
    de: "cabal build. cabal install. Haskell package manager. GHC."
  }),
  (_i: number) => ({
    q: "What does `stack build` do?",
    o: ["Builds Haskell with Stack", "Stack build", "Haskell stack", "Stack project"],
    c: 0,
    e: "stack build. Haskell. stack.yaml. Reproducible. Resolver for snapshot.",
    de: "stack build. stack.yaml, package.yaml. Pinned deps. Alternative to cabal."
  }),
  (_i: number) => ({
    q: "What does `opam install package` do?",
    o: ["Installs OCaml package", "OPAM install", "OCaml package", "OPAM package"],
    c: 0,
    e: "opam install. OCaml packages. opam init first. opam switch for compiler.",
    de: "opam install dune. OCaml ecosystem. opam switch, opam repo."
  }),
  (_i: number) => ({
    q: "What does `cargo vendor` do?",
    o: ["Copies deps to vendor/", "Vendor deps", "Cargo vendor", "Copy crates"],
    c: 0,
    e: "cargo vendor. Copies crates to vendor/. For offline. -mod=vendor.",
    de: "cargo vendor. vendor/ directory. cargo build --offline. Reproducible."
  }),
  (_i: number) => ({
    q: "What does `cargo tree` show?",
    o: ["Dependency tree", "Dep tree", "Cargo tree", "Dependency graph"],
    c: 0,
    e: "cargo tree. Dependency tree. -i for inverse. -d for duplicates.",
    de: "cargo tree. cargo tree -d for dupes. cargo tree -i package for reverse."
  }),
  (_i: number) => ({
    q: "What does `cargo audit` check?",
    o: ["Known vulnerabilities in deps", "Security audit", "Vuln check", "Cargo audit"],
    c: 0,
    e: "cargo audit. Checks deps against advisory DB. Security. cargo-audit.",
    de: "cargo audit. RUSTSEC. Fix with cargo update -p package. Security."
  }),
  (_i: number) => ({
    q: "What does `pip-audit` do?",
    o: ["Checks Python deps for vulnerabilities", "Pip audit", "Python vulns", "Security audit"],
    c: 0,
    e: "pip-audit. Scans installed. Known vulns. Like cargo audit for Python.",
    de: "pip-audit. pip-audit -r requirements.txt. Fix with pip install -U."
  }),
  (_i: number) => ({
    q: "What does `npm audit` do?",
    o: ["Checks for known vulnerabilities", "NPM audit", "Security check", "Vuln audit"],
    c: 0,
    e: "npm audit. Checks deps. npm audit fix for auto-fix. Security.",
    de: "npm audit. npm audit fix. npm audit fix --force. Breaks possible."
  }),
  (_i: number) => ({
    q: "What does `trivy fs .` do?",
    o: ["Scans filesystem for vulnerabilities", "Trivy scan", "FS scan", "Vuln scan"],
    c: 0,
    e: "trivy fs scans dir. Vulns in deps. lock files. Containers too.",
    de: "trivy fs . Scans package files. trivy image for containers. Security."
  }),
  (_i: number) => ({
    q: "What does `renovate` or `dependabot` do?",
    o: ["Opens PRs for dependency updates", "Dep updates", "Renovate", "Auto updates"],
    c: 0,
    e: "Renovate/Dependabot. Bot. Opens PRs for outdated deps. CI integration.",
    de: "renovate.json. dependabot.yml. Automated. Keeps deps current. GitHub."
  }),
  (_i: number) => ({
    q: "What does `apt-key` deprecation mean?",
    o: ["Keys should go in /etc/apt/trusted.gpg.d/", "Key location", "Deprecated keys", "GPG key path"],
    c: 0,
    e: "apt-key add deprecated. Use signed-by in sources.list. Or trusted.gpg.d/.",
    de: "apt-key deprecated. deb [signed-by=/usr/share/keyrings/foo.gpg] url. Secure."
  }),
  (_i: number) => ({
    q: "What does `equivs-build` create?",
    o: ["Fake package from control file", "Fake package", "Meta package", "Equivs package"],
    c: 0,
    e: "equivs-build. Creates .deb from control. For meta-packages, dummy deps.",
    de: "equivs-control package. equivs-build. Satisfies deps without real package."
  }),
  (_i: number) => ({
    q: "What does `checkinstall` do?",
    o: ["Creates package from make install", "Make to package", "Install to package", "Checkinstall"],
    c: 0,
    e: "checkinstall replaces make install. Tracks files, creates .deb/.rpm. Uninstallable.",
    de: "make && checkinstall. Creates package. apt remove later. Better than make install."
  }),
  (_i: number) => ({
    q: "What does `stow` do for /usr/local?",
    o: ["Manages symlinks for package trees", "Symlink manager", "Stow packages", "Link manager"],
    c: 0,
    e: "stow creates symlinks. stow pkg in /usr/local/stow/pkg. Clean uninstall.",
    de: "stow -t /usr/local nginx. stow -D to unstow. GNU stow. Source installs."
  }),
  (_i: number) => ({
    q: "What does `pip install -e .` do?",
    o: ["Editable install (develop mode)", "Editable", "Develop mode", "Link to source"],
    c: 0,
    e: "pip install -e . Editable. Links to source. Changes reflect. For development.",
    de: "pip install -e . In project dir. No copy. Edit and run. pyproject.toml."
  }),
  (_i: number) => ({
    q: "What does `npm link` do?",
    o: ["Links local package globally for development", "Link package", "Dev link", "Global link"],
    c: 0,
    e: "npm link. In package: npm link. In app: npm link package. Symlink. Dev.",
    de: "cd my-pkg && npm link. cd ../app && npm link my-pkg. Test locally."
  }),
  (_i: number) => ({
    q: "What does `cargo publish` require?",
    o: ["crates.io account and token", "Crates account", "Publish token", "Registry auth"],
    c: 0,
    e: "cargo publish. Needs crates.io. cargo login for token. Package name unique.",
    de: "cargo login <token>. cargo publish. Name on crates.io. Version in Cargo.toml."
  }),
  (_i: number) => ({
    q: "What does `meson compile -C builddir` do?",
    o: ["Builds in build directory", "Meson build", "Compile in dir", "Ninja build"],
    c: 0,
    e: "meson compile = ninja in builddir. -C sets dir. meson setup first.",
    de: "meson setup build. meson compile -C build. Or ninja -C build. Modern."
  }),
  (_i: number) => ({
    q: "What does `cmake --build . --target install` do?",
    o: ["Builds and runs install target", "Build install", "CMake install", "Install target"],
    c: 0,
    e: "cmake --build . --target install. Runs install. Like make install.",
    de: "cmake -B build. cmake --build build --target install. DESTDIR for staging."
  }),
  (_i: number) => ({
    q: "What does `rpmbuild -ba specfile.spec` do?",
    o: ["Builds source and binary RPMs", "Build RPM", "RPM build all", "SRPM and RPM"],
    c: 0,
    e: "rpmbuild -ba. Builds .src.rpm and .rpm. -bs source only. -bb binary only.",
    de: "rpmbuild -ba package.spec. ~/rpmbuild/{SOURCES,SPECS}. Full build."
  }),
  (_i: number) => ({
    q: "What does `debuild` do?",
    o: ["Builds Debian package with debsign", "Debian build", "Deb build", "Full deb build"],
    c: 0,
    e: "debuild. Runs dpkg-buildpackage, lintian, debsign. Full Debian workflow.",
    de: "debuild -us -uc for local. -sa for source. debian/rules. Lintian checks."
  }),
  (_i: number) => ({
    q: "What does `pip install --no-deps` do?",
    o: ["Installs package without dependencies", "No deps", "Skip deps", "Package only"],
    c: 0,
    e: "pip install --no-deps. Skips dependency resolution. For controlled env.",
    de: "pip install --no-deps package. When you manage deps. Or broken deps."
  }),
  (_i: number) => ({
    q: "What does `npm audit fix` do?",
    o: ["Fixes vulnerabilities in dependencies", "Fix vulns", "Audit fix", "Security fix"],
    c: 0,
    e: "npm audit fix. Updates to non-vulnerable. npm audit for report. --force for breaking.",
    de: "npm audit. npm audit fix. Updates package-lock. Security patches."
  }),
  (_i: number) => ({
    q: "What does `cargo update` do?",
    o: ["Updates Cargo.lock within semver", "Update lock", "Refresh deps", "Cargo update"],
    c: 0,
    e: "cargo update. Updates Cargo.lock. Stays within Cargo.toml semver. New patch/minor.",
    de: "cargo update. cargo update -p crate for one. Refreshes lock. Semver."
  }),
  (_i: number) => ({
    q: "What does `vcpkg integrate` do?",
    o: ["Integrates vcpkg with build systems", "Build integration", "CMake find", "Integrate"],
    c: 0,
    e: "vcpkg integrate. Makes CMake/MSBuild find vcpkg packages. Toolchain.",
    de: "vcpkg integrate install. -DCMAKE_TOOLCHAIN_FILE. CMake finds."
  }),
  (_i: number) => ({
    q: "What does `conan create` do?",
    o: ["Builds and exports package to cache", "Create package", "Conan export", "Build export"],
    c: 0,
    e: "conan create. Builds recipe, exports to local cache. For creating packages.",
    de: "conan create . user/channel. Builds, tests, exports. Package creation."
  }),
  (_i: number) => ({
    q: "What does `bazel query 'deps(//target)'` show?",
    o: ["All dependencies of target", "Target deps", "Dependency graph", "Bazel deps"],
    c: 0,
    e: "bazel query deps(//target). All deps. Graph. allpaths, somepath.",
    de: "bazel query 'deps(//app:main)'. What does target need. Build graph."
  }),
  (_i: number) => ({
    q: "What does `make -n` do?",
    o: ["Dry run (print commands, don't execute)", "Dry run", "No exec", "Print only"],
    c: 0,
    e: "make -n. Prints what would run. No execution. Debug Makefile.",
    de: "make -n. make --dry-run. See commands. Verify before run."
  }),
  (_i: number) => ({
    q: "What does `autoreconf -fi` do?",
    o: ["Regenerates configure and build files", "Regen autotools", "Bootstrap", "Autoreconf"],
    c: 0,
    e: "autoreconf -fi. Runs autoconf, automake, etc. Regenerates. After git clone.",
    de: "autoreconf -fi. Creates configure. -f force. -i install missing. Bootstrap."
  }),
  (_i: number) => ({
    q: "What does `libtool` provide?",
    o: ["Portable shared library creation", "Shared lib", "Libtool", "Portable libs"],
    c: 0,
    e: "libtool. Wraps cc for shared libs. .la files. Portable. Autotools.",
    de: "libtool. Handles .so, .dylib, .dll. configure uses. .la = libtool archive."
  }),
  (_i: number) => ({
    q: "What does `patchelf` do?",
    o: ["Modifies ELF rpath, interpreter", "ELF patcher", "Rpath", "ELF mod"],
    c: 0,
    e: "patchelf. Changes rpath, interpreter. For relocating binaries. Nix uses.",
    de: "patchelf --set-rpath /opt/lib binary. Fix broken links. Relocation."
  }),
  (_i: number) => ({
    q: "What does `pip cache purge` do?",
    o: ["Deletes pip download cache", "Clear pip cache", "Purge cache", "Remove cache"],
    c: 0,
    e: "pip cache purge. Removes cached wheels. Frees space. pip cache dir for location.",
    de: "pip cache purge. pip cache list. After bad downloads. Clean slate."
  }),
  (_i: number) => ({
    q: "What does `npm cache clean --force` do?",
    o: ["Deletes npm cache", "Clear npm", "Purge npm cache", "Clean cache"],
    c: 0,
    e: "npm cache clean --force. Removes cache. Fixes corruption. --force required.",
    de: "npm cache clean --force. npm cache verify. After weird errors."
  }),
  (_i: number) => ({
    q: "What does `cargo cache` (tool) do?",
    o: ["Shows and cleans cargo cache", "Cargo cache", "Rust cache", "Cache tool"],
    c: 0,
    e: "cargo-cache. Third-party. Shows cargo cache size. Cleans. Saves space.",
    de: "cargo install cargo-cache. cargo cache. Cleans target/, registry. Optional."
  }),
  (_i: number) => ({
    q: "What does `apt list --upgradable` show?",
    o: ["Packages with available upgrades", "Upgradable", "Available updates", "Upgrade list"],
    c: 0,
    e: "apt list --upgradable. What can be upgraded. apt upgrade to do it.",
    de: "apt list --upgradable. Like apt-get upgrade -s. Preview. No install."
  }),
  (_i: number) => ({
    q: "What does `dnf repolist` show?",
    o: ["Enabled repositories", "Repo list", "Repositories", "DNF repos"],
    c: 0,
    e: "dnf repolist. Lists repos. repolist all for disabled. dnf repolist -v for URLs.",
    de: "dnf repolist. Which repos. /etc/yum.repos.d/. repolist enabled."
  }),
  (_i: number) => ({
    q: "What does `zypper lr` show?",
    o: ["Repository list", "Repos", "Zypper repos", "Repo list"],
    c: 0,
    e: "zypper lr. Lists repos. lr = list repos. Like dnf repolist. OpenSUSE.",
    de: "zypper lr. zypper ref to refresh. zypper lr -d for URLs."
  }),
  (_i: number) => ({
    q: "What does `portage` use for config?",
    o: ["/etc/portage/ (make.conf, package.use)", "Portage config", "Gentoo config", "Portage dir"],
    c: 0,
    e: "portage. /etc/portage/make.conf. package.use, package.keywords. USE flags.",
    de: "make.conf. CFLAGS, USE. package.use for per-package. Gentoo."
  }),
];
