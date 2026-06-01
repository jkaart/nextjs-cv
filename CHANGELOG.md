# [1.11.0](https://github.com/jkaart/nextjs-cv/compare/v1.10.1...v1.11.0) (2026-06-01)


### Bug Fixes

* add sourceCodeUrl to rawData ([12e5a40](https://github.com/jkaart/nextjs-cv/commit/12e5a40c309b0d1e6dd8779b263afd2b9d7ab3fc))
* add target and rel attributes to external link for security ([7ddd86f](https://github.com/jkaart/nextjs-cv/commit/7ddd86f0db299fde2bcdd6bf799a6c02b7f61563))
* clean up Footer component documentation and fix typo in className ([ec7491d](https://github.com/jkaart/nextjs-cv/commit/ec7491d8a0fccf8dc48c7ba6b3331031c8cf4e0a))
* header and footer background colors  and render conditional last div in the footer grid ([1093900](https://github.com/jkaart/nextjs-cv/commit/1093900728399972477fb573b9fbc07979a75b0c))
* remove background color ([035b2de](https://github.com/jkaart/nextjs-cv/commit/035b2dea8c1885b2a9c043d0c3e372e22ee2a406))


### Features

* add optional source code ([7803fa5](https://github.com/jkaart/nextjs-cv/commit/7803fa5e8186a67944370d688b0a4f6c5415fa3d))

## [1.10.1](https://github.com/jkaart/nextjs-cv/compare/v1.10.0...v1.10.1) (2026-05-27)


### Bug Fixes

* remove unused @iconify/tools dependency from package.json and package-lock.json ([4b7cb01](https://github.com/jkaart/nextjs-cv/commit/4b7cb014da06a4f81f464b14f6776c48b2ea46ef))

# [1.10.0](https://github.com/jkaart/nextjs-cv/compare/v1.9.1...v1.10.0) (2026-05-26)


### Bug Fixes

* correct error messages in validateDevIcon tests and implementation ([ba91aba](https://github.com/jkaart/nextjs-cv/commit/ba91abaf9b815cbe0cdc6e8a1a2d75a501ea0268))
* correct test descriptions in validateDevIcon tests for clarity ([3716de7](https://github.com/jkaart/nextjs-cv/commit/3716de790289721ef25ed6fbeddba6338ebcc2aa))
* enhance validation logic in validateDevIcon and add tests for validateRawSkills ([03df186](https://github.com/jkaart/nextjs-cv/commit/03df186d5dd414e0d370c0ea1d3e5855bf302b62))
* ensure icon name is converted to string in validation error message ([08793e5](https://github.com/jkaart/nextjs-cv/commit/08793e59122bd907be8f02b65d917dfcd8be15c4))
* improve icon validation logic and update test cases for clarity ([75f7334](https://github.com/jkaart/nextjs-cv/commit/75f7334a76fbeb141d894ba8aa3b19887cd3e05b))
* improve validation error messages and refactor test cases for dev icons ([aa3203e](https://github.com/jkaart/nextjs-cv/commit/aa3203e34eda68f8e83abafe4b70e2d64e637178))
* rename validateRawSkill to validateRawSkills and update usage in data.ts ([926c6e6](https://github.com/jkaart/nextjs-cv/commit/926c6e6759161d2f0bfd611cf3a2eda921f910aa))
* reorder commands in prepare:allIcons script for consistency ([a1c1434](https://github.com/jkaart/nextjs-cv/commit/a1c1434a237854c6d9e4f56f792a95a238b54026))
* reorder commands in prepare:devIcons and prepare:allIcons scripts for consistency ([4258494](https://github.com/jkaart/nextjs-cv/commit/4258494a950ac640b77bbdab67eabef4cb9a227a))
* update console log messages in prepare-raw-data script for clarity ([980765c](https://github.com/jkaart/nextjs-cv/commit/980765cebc0e7758098a7625fefb1d33791762b0))
* update iconName references from 'css' to 'css3' in validation tests and data ([be5a927](https://github.com/jkaart/nextjs-cv/commit/be5a92702084b83d7012dcdcd7fce584aeac4ac2))
* update test scripts to include dev icons preparation ([2513b5d](https://github.com/jkaart/nextjs-cv/commit/2513b5d02ae73022120e0a08d17710c7a615002e))


### Features

* add validation for dev icons ([291a903](https://github.com/jkaart/nextjs-cv/commit/291a90354f56890ca0a52384ca462544666281c5))
* implement raw data preparation script and update allIcons script ([b607e95](https://github.com/jkaart/nextjs-cv/commit/b607e957d150ecdbfc670f55e5c22d355dd8566d))

## [1.9.1](https://github.com/jkaart/nextjs-cv/compare/v1.9.0...v1.9.1) (2026-05-25)


### Bug Fixes

* add hover effect to icons in PDFDownloadIcon , ContactIcon and ThemeChange components ([8d2a615](https://github.com/jkaart/nextjs-cv/commit/8d2a615d358ee655a7cded4777ee4c7847ce460d))
* ensure development environment returns localhost URL in getBaseUrl function ([86eb8cd](https://github.com/jkaart/nextjs-cv/commit/86eb8cd970c4c1c30185b78ea903b745df0c0c29))
* improve environment variable handling in development mode tests ([63674e3](https://github.com/jkaart/nextjs-cv/commit/63674e37a6642de8e05667a807bcd93d6998c9ef))
* remove redundant originalEnv declaration in getBaseUrl tests ([674dff0](https://github.com/jkaart/nextjs-cv/commit/674dff01399dfaa955ba694ef3cdbe9406a9dca7))
* translate loading messages to Finnish in CVDownload component ([f1b5a5b](https://github.com/jkaart/nextjs-cv/commit/f1b5a5b401aa73e569d1ff68c452dd7a4be47c6d))
* update loading message variable in PDFDownloadLink for clarity ([0bf4ad4](https://github.com/jkaart/nextjs-cv/commit/0bf4ad40d0af92ed0f984fb088a479a63c4e4e31))

# [1.9.0](https://github.com/jkaart/nextjs-cv/compare/v1.8.0...v1.9.0) (2026-05-22)


### Bug Fixes

* capitalize first letter of hobbies string in Hobbies component ([3346e80](https://github.com/jkaart/nextjs-cv/commit/3346e80e742cba54e8592f1da3baa4df2c7d71fc))
* trim trailing slashes from base URL in getBaseUrl function ([869b4b2](https://github.com/jkaart/nextjs-cv/commit/869b4b22218d49297b52cb893e3f8df551fafe96))
* update Link component usage to use 'src' prop instead of 'href' in PDFProjects and ([7ac7556](https://github.com/jkaart/nextjs-cv/commit/7ac755689abbdefcf8c970abc5546a57d16d8efd))


### Features

* enhance LinkContainer to display icons based on URL type and update label text ([be5608d](https://github.com/jkaart/nextjs-cv/commit/be5608d66cb2c0ea1d244cbca0014abfbe290dc7))
* enhance PDFProjects component to include project URL and 'Lue lisää' text ([91dc070](https://github.com/jkaart/nextjs-cv/commit/91dc070bf311d69eb7e9903a93b07e895d3fb063))

# [1.8.0](https://github.com/jkaart/nextjs-cv/compare/v1.7.2...v1.8.0) (2026-05-22)


### Bug Fixes

* update DataWithoutId interface to omit 'id' from SkillRaw in skill field ([45314bc](https://github.com/jkaart/nextjs-cv/commit/45314bc5a2da68008b69f32e66c67972c0b40457))
* update sitemap URL generation to remove trailing slash ([5575543](https://github.com/jkaart/nextjs-cv/commit/557554388c9daca34c924ce24ed667455750d653))
* update Skill type to SkillRaw and adjust addIdToData for iconName handling ([39f930e](https://github.com/jkaart/nextjs-cv/commit/39f930e1339d88edb5df052040871d77d85ac40e))


### Features

* add health check endpoint with no-store cache control ([c0168f9](https://github.com/jkaart/nextjs-cv/commit/c0168f984175079faacac2bc39b6ad6890aeaf27))
* add robots.txt generation for SEO optimization ([0091b15](https://github.com/jkaart/nextjs-cv/commit/0091b15dfc845893a24ba6ad265ecea1b8fd333b))

## [1.7.2](https://github.com/jkaart/nextjs-cv/compare/v1.7.1...v1.7.2) (2026-05-21)


### Bug Fixes

* add height to CVDownloadMenu button for improved layout ([d1b370c](https://github.com/jkaart/nextjs-cv/commit/d1b370c7e7c0880be38f9b78d7a72740f1dca85c))
* adjust width and minimum height of CVDownloadMenu button for better layout ([1db55fd](https://github.com/jkaart/nextjs-cv/commit/1db55fd1b8e907b133b62fe173c1937702466398))

## [1.7.1](https://github.com/jkaart/nextjs-cv/compare/v1.7.0...v1.7.1) (2026-05-21)


### Bug Fixes

* improve error handling in useProjects hook and update alt text in ContactIcon component ([bd134d5](https://github.com/jkaart/nextjs-cv/commit/bd134d5025d114ae20c41cbce133ef26799cf9a6))
* refactor useProjects hook to improve loading state management and error logging ([e1e1987](https://github.com/jkaart/nextjs-cv/commit/e1e1987f62ebb85d2060532e4da432829347e5ba))

# [1.7.0](https://github.com/jkaart/nextjs-cv/compare/v1.6.0...v1.7.0) (2026-05-21)


### Bug Fixes

* array mutation problem  in PDFProject and ProjectListItem components in tasks and roles array ([4a4a4fd](https://github.com/jkaart/nextjs-cv/commit/4a4a4fd533c5f5b02201dc3f0896df4e79b748f2))
* **biome:** remove leading slash from ignored icons directory ([1242488](https://github.com/jkaart/nextjs-cv/commit/1242488b3cfb2048138bce85ce1ae5f30cdd4eff))
* correct alt texts ([78eda4d](https://github.com/jkaart/nextjs-cv/commit/78eda4dc59c2c5652b41809173a3a75ee8fd9658))
* correct array sorting in PDFProject and ProjectListItem components ([937ebf1](https://github.com/jkaart/nextjs-cv/commit/937ebf1cf7c6b8a0cdee8d81aef68a6dfaddc9c6))
* **getBaseUrl:** streamline base URL retrieval with default fallback ([39b4c76](https://github.com/jkaart/nextjs-cv/commit/39b4c76f87c0f30f04cfb72da78ab8a14cce0c7e))
* **IconLink:** update iconType to use right types ([4269105](https://github.com/jkaart/nextjs-cv/commit/4269105aa10f70ea174d7b23c4604c2d3ba97e98))
* **LanguageSkill:** capitalize spoken and written language skill levels ([17e4447](https://github.com/jkaart/nextjs-cv/commit/17e4447822cc929871dea88629fa429d7152b720))
* **PDFResume:** adjust padding and font sizes for improved layout consistency ([cdfaad1](https://github.com/jkaart/nextjs-cv/commit/cdfaad1e947d553b358eaac58417ab62eda92a17))
* **pdfResume:** pdfLinks to use png files ([8ff8837](https://github.com/jkaart/nextjs-cv/commit/8ff8837b7188742cd509058ec38bdf44c36eb7cd))
* **pre-commit:** run build after linting ([d73ad3c](https://github.com/jkaart/nextjs-cv/commit/d73ad3caab032591199d3f1dc04f0039582f89a4))
* **prepare-other-icons:** replace 'mdi:internet' with 'ph:globe-bold' in usedIcons array ([3cd5bca](https://github.com/jkaart/nextjs-cv/commit/3cd5bca6a4cf4c463077265f18fe44138eae7c98))
* **ProjectListItem:** add icons for project URLs and update layout for better visibility ([b103c53](https://github.com/jkaart/nextjs-cv/commit/b103c53a296fba7dfeb94075ef09eb1404c9d0d3))
* **ProjectListItem:** restructure project item layout and add link to project details ([d3ebd9a](https://github.com/jkaart/nextjs-cv/commit/d3ebd9a9d744ed463dbaadde426cf7274f303d84))
* **ProjectsList:** remove unnecessary grid wrapper from project list and updated margins ([38da98e](https://github.com/jkaart/nextjs-cv/commit/38da98ef5c79a5c76164747c6a0fafea1c7a80b9))
* **sortSkills:** update iconName values to use correct naming conventions ([fc99373](https://github.com/jkaart/nextjs-cv/commit/fc99373ec31a74ab3634fae086e2989bdefa51f7))
* **ThemeChange:** update alt text for theme toggle icon ([182cda0](https://github.com/jkaart/nextjs-cv/commit/182cda0fd16980040736d8650533d6839765c3c4))
* update .gitignore to include icon types ([37a6ea4](https://github.com/jkaart/nextjs-cv/commit/37a6ea44ad7e9755bf70f54b46ecfce6c0ac8e6a))


### Features

* add hyphenation support and capitalize utility; update components to use new utility ([4a14a93](https://github.com/jkaart/nextjs-cv/commit/4a14a93307ef3cefac5f68edd29805d0869336f0))
* add license file and update README with project details and setup instructions ([eb0439a](https://github.com/jkaart/nextjs-cv/commit/eb0439a9ea38b024a4903a44a46e4f1d186b1020))
* **PDFProject:** add project detail link with base URL retrieval ([cecb683](https://github.com/jkaart/nextjs-cv/commit/cecb683f64a6c6220290e967cc64bacc5d73f6b2))
* **PDFProject:** refactor project display components for improved readability and structure ([0ce01ec](https://github.com/jkaart/nextjs-cv/commit/0ce01ece7fdf4ba0b634eac4e9af4d0e16deaef3))
* **Projects:** roles and tasks to project metadata and components ([2fd5e62](https://github.com/jkaart/nextjs-cv/commit/2fd5e6227534e56dd0939a575969fcc01c915ab7))

# [1.5.0](https://github.com/jkaart/nextjs-cv/compare/v1.4.0...v1.5.0) (2026-05-17)


### Bug Fixes

* noopener,noreferrer attribute needed for SEO ([#59](https://github.com/jkaart/nextjs-cv/issues/59)) ([594f7c7](https://github.com/jkaart/nextjs-cv/commit/594f7c7c967b654d047a6630bf2e820a66857876))
* potential fix for pull request finding ([89beb66](https://github.com/jkaart/nextjs-cv/commit/89beb66faef9aa25416e1dd88e49df04fee146a0))
* potential fix for pull request finding ([13eee99](https://github.com/jkaart/nextjs-cv/commit/13eee99f21c3a4236e1e7f41bbff2664eb58f07e))
* potential fix for pull request finding ([2bed17b](https://github.com/jkaart/nextjs-cv/commit/2bed17b9fc196299763c2148a1033c5005fd3df5))
* potential fix for pull request finding ([d85e84c](https://github.com/jkaart/nextjs-cv/commit/d85e84cd777109b0f516207a05ba94e568158603))
* project url ([#54](https://github.com/jkaart/nextjs-cv/issues/54)) ([99b9d66](https://github.com/jkaart/nextjs-cv/commit/99b9d666baa53c96250e5316d0366169be31c898))
* **ProjectUrl:** ensure button type is explicitly set ([0c7d143](https://github.com/jkaart/nextjs-cv/commit/0c7d1430a55b56f91903fefe67676dd8876686b0))
* update CVDownloadMenu styles for improved layout and appearance ([#52](https://github.com/jkaart/nextjs-cv/issues/52)) ([4823be6](https://github.com/jkaart/nextjs-cv/commit/4823be6b3c127df3942b9b32b1f9d5e9abb350c2))
* use projects ([#53](https://github.com/jkaart/nextjs-cv/issues/53)) ([655a19d](https://github.com/jkaart/nextjs-cv/commit/655a19d055537bd56bec3a362a9e1c1b066d7bf3))
* wrap Skill and IconLink components in ComponentWrapper for delay render ([#56](https://github.com/jkaart/nextjs-cv/issues/56)) ([4492d4f](https://github.com/jkaart/nextjs-cv/commit/4492d4f62103799149bc090421952236207038e8))


### Features

* add ComponentWrapper for conditional rendering of children ([#55](https://github.com/jkaart/nextjs-cv/issues/55)) ([86784a6](https://github.com/jkaart/nextjs-cv/commit/86784a68126b3b1f7c81f8d376955fc8719764ee))
* limit projects to 3 latest project in PDFClient ([#51](https://github.com/jkaart/nextjs-cv/issues/51)) ([8f7a459](https://github.com/jkaart/nextjs-cv/commit/8f7a459d84f1c77fd315d8b61d89365c901a4cd1))

# [1.4.0](https://github.com/jkaart/nextjs-cv/compare/v1.3.0...v1.4.0) (2026-05-17)


### Bug Fixes

* remove unnecessary commands in the clone step of deployment workflow ([#26](https://github.com/jkaart/nextjs-cv/issues/26)) ([49869a5](https://github.com/jkaart/nextjs-cv/commit/49869a5c6ee32323f653a9bd76d1de57236614a9))
* semantic release ([#47](https://github.com/jkaart/nextjs-cv/issues/47)) ([d7b3bb1](https://github.com/jkaart/nextjs-cv/commit/d7b3bb16c9a589527e00037fe283b40c54f09d5e))
* update CI workflow group naming and commitlint fetch reference ([cf29d5a](https://github.com/jkaart/nextjs-cv/commit/cf29d5a732bac2f7a36f010dadde5eb2630e9c52)), closes [#27](https://github.com/jkaart/nextjs-cv/issues/27) [#34](https://github.com/jkaart/nextjs-cv/issues/34) [#32](https://github.com/jkaart/nextjs-cv/issues/32)


### Features

* sync dev to main ([#32](https://github.com/jkaart/nextjs-cv/issues/32)) ([8192fd2](https://github.com/jkaart/nextjs-cv/commit/8192fd2090710625ab4e3b7a14486b0ea25ca9f0)), closes [#27](https://github.com/jkaart/nextjs-cv/issues/27)

# [1.3.0](https://github.com/jkaart/nextjs-cv/compare/v1.2.0...v1.3.0) (2026-05-15)


### Features

* update metadata titles and improve header text for better clarity  ([#19](https://github.com/jkaart/nextjs-cv/issues/19)) ([6e89b48](https://github.com/jkaart/nextjs-cv/commit/6e89b4842cb389fd43c1aaaac7e7d207203823aa)), closes [#13](https://github.com/jkaart/nextjs-cv/issues/13) [#15](https://github.com/jkaart/nextjs-cv/issues/15)

# [1.2.0](https://github.com/jkaart/nextjs-cv/compare/v1.1.0...v1.2.0) (2026-05-14)


### Features

* update deployment conditions to include client payload branches ([#11](https://github.com/jkaart/nextjs-cv/issues/11)) ([da16235](https://github.com/jkaart/nextjs-cv/commit/da1623524a35ce777192787c75d63b54a30d60d5))

# [1.1.0](https://github.com/jkaart/nextjs-cv/compare/v1.0.0...v1.1.0) (2026-05-14)


### Features

* add repository_dispatch event for sync-source in CI workflow ([e136fa7](https://github.com/jkaart/nextjs-cv/commit/e136fa75c4c5dac6390cb5b84e8753ad67b62280)), closes [#8](https://github.com/jkaart/nextjs-cv/issues/8)

# 1.0.0 (2026-05-13)


### Bug Fixes

*  Right type for ProjectProps params ([e5674d8](https://github.com/jkaart/nextjs-cv/commit/e5674d8fe8a783acb97473cf24a5e2c98e56a00c))
* add npm install --package-lock-only step in pipeline jobs ([6103885](https://github.com/jkaart/nextjs-cv/commit/61038857a2fd38e2510fbe801a34f6963d046f6a))
* add return type to addIdToData function for improved type safety ([068442f](https://github.com/jkaart/nextjs-cv/commit/068442fc14f9dfcf5876eb9acbf3dae278c68ae0))
* **addIdToData:** typo in file name ([1b8d7b2](https://github.com/jkaart/nextjs-cv/commit/1b8d7b21747e39f95b5e8df97012b3a6d2e6b8c4))
* assets loading in vercel ([16abc18](https://github.com/jkaart/nextjs-cv/commit/16abc1881b721aa14c3310fcc6f49aca0016d510))
* biome autoformat ([63bdaae](https://github.com/jkaart/nextjs-cv/commit/63bdaaed11650fa6d49f7b2a5f8388222026e157))
* biome lint ([a81a3a0](https://github.com/jkaart/nextjs-cv/commit/a81a3a04b836de9e863e94182060341e636ac2d1))
* bug that caused a 500 error ([2dd2786](https://github.com/jkaart/nextjs-cv/commit/2dd2786648581ef09330d00f6400a240a6b944a9))
* build warning ([a721829](https://github.com/jkaart/nextjs-cv/commit/a7218292ae482e31588c49d6a6de8b85434d1abb))
* change cp to mv for private data handling in CI and deploy workflows ([e91d98f](https://github.com/jkaart/nextjs-cv/commit/e91d98f376b7ea78089a8fdcc65da40df865a2fe))
* change publish source trigger to main branch ([49d7dee](https://github.com/jkaart/nextjs-cv/commit/49d7dee08855e25ae98c7726a911564ff035526d))
* checkout and setup-node actions versions upgraded ([809671f](https://github.com/jkaart/nextjs-cv/commit/809671f175e16724400f43f338a0e065e01c380d))
* **ci:** fix public source semantic release ([eeb4400](https://github.com/jkaart/nextjs-cv/commit/eeb4400a6bf764b83ed87893c152307cde916fc2))
* **ci:** fix typo ([723ede2](https://github.com/jkaart/nextjs-cv/commit/723ede268493488a17990e318090f7883e1c1a30))
* **ci:** publish source ([2081789](https://github.com/jkaart/nextjs-cv/commit/20817894b1ee06a9ac31ae6991bfba26f88e53f8))
* **contact:** removed slashes from email address ([811520f](https://github.com/jkaart/nextjs-cv/commit/811520f7195979ae7cfba81f2589fd38831603a5))
* correct data root path for local development and production environments ([5723cd0](https://github.com/jkaart/nextjs-cv/commit/5723cd09e274e4c7cd428bb244f434271cea00af))
* correct syntax for branches in deployment pipeline ([108b69f](https://github.com/jkaart/nextjs-cv/commit/108b69f61c31ec9568724dba146a9bd9398acbbe))
* **deploy_publish:** correct workflow_run reference in conditional checks #skip ([b75195e](https://github.com/jkaart/nextjs-cv/commit/b75195e65b47247f26966a4db87877658f87640a)), closes [#skip](https://github.com/jkaart/nextjs-cv/issues/skip)
* Education component unit test ([a9e48b2](https://github.com/jkaart/nextjs-cv/commit/a9e48b2fcde18e9e8dd2368bffe073f498c86286))
* **Educations, WorkExperiences:** update state initialization and ShowMore rendering logic ([64ebd41](https://github.com/jkaart/nextjs-cv/commit/64ebd4178855f4722e10607b3bd14081b591420e))
* filter only publish source workflow ([07a044b](https://github.com/jkaart/nextjs-cv/commit/07a044b447cb08981a3ee50be3a92b054bf78f28))
* font loading warning ([e3a0e97](https://github.com/jkaart/nextjs-cv/commit/e3a0e971c98636c11fa639f34988968292bfdf89))
* font weight in header ([c1db8d3](https://github.com/jkaart/nextjs-cv/commit/c1db8d3b84671c01f1c5d01dcb109f06a24f0b84))
* **Header:** header margins and font size ([4043c12](https://github.com/jkaart/nextjs-cv/commit/4043c125f493effb0a2ad9a4b7b28a83f0c71c8c))
* Icon size in pdf ([a28c0fd](https://github.com/jkaart/nextjs-cv/commit/a28c0fd948ba6ee8c00f60e332df612e8c8302a3))
* ImageGallery layout ([4c4917c](https://github.com/jkaart/nextjs-cv/commit/4c4917cf7595f8184663220fb538896be297984e))
* ImageGallery layout ([cf2b259](https://github.com/jkaart/nextjs-cv/commit/cf2b2595077d8f7ae08d4d18e2bdcb2d4cbafdb9))
* **ImageGallery:** Large images scaling correctly ([417d176](https://github.com/jkaart/nextjs-cv/commit/417d176e7de2080bd81d6d2f17b179dd442328e5))
* **ImageGallery:** Large images scaling correctly ([61bc76f](https://github.com/jkaart/nextjs-cv/commit/61bc76ff7788daaa869fbccdbc712deeec445846))
* **ImageGallery:** remove unnecessary border from image gallery ([913cfa0](https://github.com/jkaart/nextjs-cv/commit/913cfa08e890cf7cb92c99b9de9cb7ceafd52a51))
* **ImageGallery:** remove unnecessary border from image gallery ([8ce2dd6](https://github.com/jkaart/nextjs-cv/commit/8ce2dd6706c7d2378b1146c1967c704ecae441b5))
* **ImageGallery:** removed unneeded border color ([7523bef](https://github.com/jkaart/nextjs-cv/commit/7523bef15f5c587b5617ed5dc975fdf3d8343562))
* **ImageGallery:** removed unneeded border color ([5e9bcea](https://github.com/jkaart/nextjs-cv/commit/5e9bceabaa4824f5101c94cb824c33b29f1446de))
* **jest:** update moduleNameMapper for correct path resolution ([bfec645](https://github.com/jkaart/nextjs-cv/commit/bfec6453d88c19979f83c9fa7437e13d9cb163ad))
* layout ([bfdd9be](https://github.com/jkaart/nextjs-cv/commit/bfdd9be62aa3749b9a7001fd701196227e3e31aa))
* layout ([b74d7aa](https://github.com/jkaart/nextjs-cv/commit/b74d7aa327654acfd99ac1bdc8a9b3bef1c6d6c2))
* layout fixing ([b679585](https://github.com/jkaart/nextjs-cv/commit/b679585f908a5d6336cb07bb36f7b13ae3140efe))
* layout fixing ([75d0a30](https://github.com/jkaart/nextjs-cv/commit/75d0a3076e30852e51c29815efcc7ce569cfe261))
* layout fixing ([65bd064](https://github.com/jkaart/nextjs-cv/commit/65bd064104491b54e05dacc32734c85328b914d8))
* **layout:** change main element width to full ([70d416d](https://github.com/jkaart/nextjs-cv/commit/70d416d7f385df57f5a789e092b5efcc96796733))
* **layout:** main element overflow ([f5f9995](https://github.com/jkaart/nextjs-cv/commit/f5f99953974ced01945676f629e4ed68471fed78))
* light theme background ([e7465fa](https://github.com/jkaart/nextjs-cv/commit/e7465fa829ceefcb2ab531539c87ffec074ba27c))
* **MePhoto:** conditionally render Image component based on image source ([9e7adf4](https://github.com/jkaart/nextjs-cv/commit/9e7adf4284c69c2dd495b324cbfa1edf33f6c8e5))
* missing import ([b57b225](https://github.com/jkaart/nextjs-cv/commit/b57b22501b2f50fc3f579d43a3bc17456d735b6b))
* mockData added to vercel ignore ([4a5a67d](https://github.com/jkaart/nextjs-cv/commit/4a5a67d76054d66295f031329c5b195e5a2acd0a))
* more layout ([121c09a](https://github.com/jkaart/nextjs-cv/commit/121c09add8e5008cc93715c11c9be59074278316))
* **NavBar:** update className type to use HTMLProps for better type safety ([ea76630](https://github.com/jkaart/nextjs-cv/commit/ea7663090443f2b56d73d8b1f4c3e716cb28068d))
* **parseDateFields:** add return type annotation for improved type safety ([506de57](https://github.com/jkaart/nextjs-cv/commit/506de5717d645a5f49095f9f98acd44581f4dedd))
* **PDFEducation:**  component to display the year of decree correctly ([8fd2f7a](https://github.com/jkaart/nextjs-cv/commit/8fd2f7a3f8b780e1c0b2abbe7016b791f6574ae3))
* PDFProject and PDFProjects styles ([098d058](https://github.com/jkaart/nextjs-cv/commit/098d0587e1dbc3be138fd524412d4663259d9cfa))
* **pdfresume:** fix (hopefully) for 500 error that occurred when loading the page ([76ed38e](https://github.com/jkaart/nextjs-cv/commit/76ed38e3fe46f9a6206007bdf2182003d34488a9))
* photo loading warning ([207e93d](https://github.com/jkaart/nextjs-cv/commit/207e93d23d06d86735753ea597a5b38f33be23ff))
* **pipeline release:** fix pipeline crash ([e74cea8](https://github.com/jkaart/nextjs-cv/commit/e74cea87c3d1fa169958cf810aba37e69bac254f))
* pipeline trigger ([d98cb8f](https://github.com/jkaart/nextjs-cv/commit/d98cb8f93319b56ba15316244bcdb8c97b2552d9))
* **pipeline:** update path in git filter-repo command to deploy_publish.yml ([4b9e975](https://github.com/jkaart/nextjs-cv/commit/4b9e9751264ef108f435e47658b04d45ec3344b0))
* **pipeline:** update path in git filter-repo command to deploy_publish.yml ([381987c](https://github.com/jkaart/nextjs-cv/commit/381987cd3aae5e357d7e64647511fe6b95fbf868))
* **pipeline:** update public repo remote URL to use secret variable ([a275043](https://github.com/jkaart/nextjs-cv/commit/a275043c0ab3b11f893e61b155d4b1a828780538))
* prebuild script ([8c23477](https://github.com/jkaart/nextjs-cv/commit/8c2347732272c814dfe04641b3d067dc94a60455))
* prevent rendering of IconLink component when href is empty ([ad19b0c](https://github.com/jkaart/nextjs-cv/commit/ad19b0c6034e24dfbc9d6cceaa097c6285b8d3bc))
* ProjectListItem layout ([68b01a1](https://github.com/jkaart/nextjs-cv/commit/68b01a13503f8af79ca55c8873bc5f51246d3328))
* ProjectListItem layout more ([5e25def](https://github.com/jkaart/nextjs-cv/commit/5e25def64a02cafdc1a6d210411c9c26b6110059))
* **ProjectListItem:** source code links to column and left ([ee07076](https://github.com/jkaart/nextjs-cv/commit/ee070763ac5a444f5eda0631d804a42cd994d1f7))
* **ProjectListItem:** source code links to column and left ([5358037](https://github.com/jkaart/nextjs-cv/commit/53580375e609002ffdec3ac64704703f5a571cd8))
* **projects:** limit number of projects fetched to 3 ([713a5aa](https://github.com/jkaart/nextjs-cv/commit/713a5aa53d961f392b0676ff8ea59725b295ec69))
* react-pdf/render package imports ([724dbc0](https://github.com/jkaart/nextjs-cv/commit/724dbc047aa3b859ab45b8291be98c3f8ba80e14))
* replace cp with mv for moving private data in CI and deploy workflows ([38020bb](https://github.com/jkaart/nextjs-cv/commit/38020bbdd6ea27b6abc09096f104ea408cef8042))
* right import for MdxLayout component ([9dea2cc](https://github.com/jkaart/nextjs-cv/commit/9dea2cc5222195bdc91c5c721bc1713f794d3d3f))
* Skill tests error ([7001734](https://github.com/jkaart/nextjs-cv/commit/70017348272a61e117286ad136fc1579322914e2))
* **sortHobbies:** compare by lowerCase with localCompare function ([be24a01](https://github.com/jkaart/nextjs-cv/commit/be24a01de1868c302d17d55ce7d7a0535baed36a))
* src data submodule deleted ([d5c5bda](https://github.com/jkaart/nextjs-cv/commit/d5c5bda4eb86ce57c928fb0518153075a2252233))
* streamline content preparation and update CI workflow for data handling ([#2](https://github.com/jkaart/nextjs-cv/issues/2)) ([67716d0](https://github.com/jkaart/nextjs-cv/commit/67716d0e1c3a6cd1bafa2c0e63265dc801aff949))
* styles in the ShowMore and project pages component ([cfb555a](https://github.com/jkaart/nextjs-cv/commit/cfb555abdffe789910c6fecaeac79b1e2e282bed))
* tag-release write access ([972d1da](https://github.com/jkaart/nextjs-cv/commit/972d1da661cea6cafa16e3dea540156f07263bb7))
* test if this now works #skip_deploy ([ce62ae9](https://github.com/jkaart/nextjs-cv/commit/ce62ae98a38002da331df3571e202d4b0cb180ee)), closes [#skip_deploy](https://github.com/jkaart/nextjs-cv/issues/skip_deploy)
* test version dump ([8a8a888](https://github.com/jkaart/nextjs-cv/commit/8a8a888961e85c100037aeb572c1243d71a8afe5))
* TS path aliases ([713679f](https://github.com/jkaart/nextjs-cv/commit/713679fb8a9e06e6888b9a4dc21d6336f88b5d02))
* typescript error ([ba27760](https://github.com/jkaart/nextjs-cv/commit/ba2776031c576d62eb0d44bc1cea268cff514eb2))
* typo ([102bc0c](https://github.com/jkaart/nextjs-cv/commit/102bc0c32bb362c9db5f68c4031824ba8ddf42b2))
* typo in filename ([bacbe66](https://github.com/jkaart/nextjs-cv/commit/bacbe662209bf176ac48981a39f95e23d44300d6))
* update build command to use npm run build for project artifacts ([8a4f72c](https://github.com/jkaart/nextjs-cv/commit/8a4f72c65d15e54df5e13b92219dd326601fa6d8))
* update className prop types to use HTMLProps for better type safety ([05f945d](https://github.com/jkaart/nextjs-cv/commit/05f945d47641629366326cc5fc8a4336e85dac4a))
* update environment variable for local content handling in copy-assets script ([33322d6](https://github.com/jkaart/nextjs-cv/commit/33322d6595aa4cceb5826ab5c9499611767b352c))
* update linkedIn property in mockContact for accurate testing ([641a180](https://github.com/jkaart/nextjs-cv/commit/641a180d198f2113bdfbcea75fc68139b9f24480))
* webpack import error ([bd24fde](https://github.com/jkaart/nextjs-cv/commit/bd24fdea2d985a153f965d145db4f1fed3ff216f))
* **workflows:** filter changelog and template data ([031f27a](https://github.com/jkaart/nextjs-cv/commit/031f27abfb2fe68dc4700851518c9c7d48ab020b))


### Features

* add build job #skip ([33fd478](https://github.com/jkaart/nextjs-cv/commit/33fd4782a7afdf6b7b075448823129bca38388ee)), closes [#skip](https://github.com/jkaart/nextjs-cv/issues/skip)
* add Hobbies component and integrate it into Hero component ([ea41f19](https://github.com/jkaart/nextjs-cv/commit/ea41f19b25b9b5a01a084085afc0de0cff732efe))
* add LanguageSkills and LanguageSkill components ([e05f407](https://github.com/jkaart/nextjs-cv/commit/e05f407191f6eefc18876a06f6db8b7d12d0701e))
* add layout and project pages with dynamic content rendering ([9bf558d](https://github.com/jkaart/nextjs-cv/commit/9bf558d6801828aa9b1094d7233b28aff2f44e00))
* added data template for public repo ([a43d9e9](https://github.com/jkaart/nextjs-cv/commit/a43d9e90ffd2116fe75540d59d564ac89e6519a1))
* **allprojects:** page which shows all projects ([f8ef2b7](https://github.com/jkaart/nextjs-cv/commit/f8ef2b77df9fad07f02e3d273f7d7f06ea6f75c5))
* Contact component unit tests ([46160b2](https://github.com/jkaart/nextjs-cv/commit/46160b2407d85672a4312a32cac2b03672c72e05))
* **CVDownload:** add pdfFileName prop for customizable download filenames ([c762e62](https://github.com/jkaart/nextjs-cv/commit/c762e62857ba3d91c1a7723fe9529647ec6e9448))
* dateToString tests and modified dateToString return always string ([7f0ca8b](https://github.com/jkaart/nextjs-cv/commit/7f0ca8bed6e0ce4bf5c8ed83974f30181ab97f14))
* description for PDF resume ([66f6329](https://github.com/jkaart/nextjs-cv/commit/66f6329a4a1d1584468a666475c78081a022f55f))
* disable vercel auto deployment ([cf2ad2e](https://github.com/jkaart/nextjs-cv/commit/cf2ad2e888677727a28eb47cd53c4c13690b12b1))
* Education tests ([f08f07a](https://github.com/jkaart/nextjs-cv/commit/f08f07a35f1f7428b8e5c04068de8870626a0609))
* Educations and WorkExperience unit tests ([a56d0c4](https://github.com/jkaart/nextjs-cv/commit/a56d0c48fe00518cae2a2f463d704705fffc1da1))
* enhance getDataRoot to support production and local development environments ([705111f](https://github.com/jkaart/nextjs-cv/commit/705111f347271bc7bf285510eb3604e9380cef7f))
* **favicon:** changed default nextjs favicon to another one ([e6f7c05](https://github.com/jkaart/nextjs-cv/commit/e6f7c052cb48bc4e7f764361b30480341a55e02f))
* footer for pdf file ([588f1d7](https://github.com/jkaart/nextjs-cv/commit/588f1d75b1b3159aab08ca507489ab313a968b53))
* **footer:** content update date ([1077576](https://github.com/jkaart/nextjs-cv/commit/10775762ad00843672d5c31b1ac5d820083a1bed))
* **footer:** content update date ([c13847a](https://github.com/jkaart/nextjs-cv/commit/c13847ac92a3cdd5fe264618dd1e6376a52bf409))
* formatProjectsDates function with unit tests ([3acdd5b](https://github.com/jkaart/nextjs-cv/commit/3acdd5b904ea42e336bda54098f746e502136afa))
* formatTechnologiesString with unit tests ([bfb6d8c](https://github.com/jkaart/nextjs-cv/commit/bfb6d8cce33041e742e00901214af65b7dd4219f))
* FullScreenImage unit tests ([534290d](https://github.com/jkaart/nextjs-cv/commit/534290db703a389fb60333ad80a4d871fbd46753))
* getDevIcon function unit tests ([3c289e1](https://github.com/jkaart/nextjs-cv/commit/3c289e1fc36ba9db485ccf8ccbc7005cedc72eb2))
* getIcon and IconLink tests ([d2d6eb3](https://github.com/jkaart/nextjs-cv/commit/d2d6eb36fc46c1d6eacff24056ffae86f26d34e0))
* HamburgerMenu for mobile ([abca15b](https://github.com/jkaart/nextjs-cv/commit/abca15b125bd801734e04227e252e6eadf398097))
* Header with NavBar ([d1aac18](https://github.com/jkaart/nextjs-cv/commit/d1aac188c79259179e9d901a3ec6f7287ee55439))
* **HeadingH2:** create HeadingH2 component and use it in Contact, Skills, and Section components ([de6c014](https://github.com/jkaart/nextjs-cv/commit/de6c014ee16eb8d759f014d97a3ab529ba6465f6))
* HeroHeader unit tests ([f950531](https://github.com/jkaart/nextjs-cv/commit/f950531a3a4640aa208d7021c8f099f0518e0d96))
* ImageGallery unit tests ([19abac2](https://github.com/jkaart/nextjs-cv/commit/19abac2ffba22f719d5c4317027f33ef61bebfc8))
* implement theme switching and update styles for light/dark modes ([8482a5f](https://github.com/jkaart/nextjs-cv/commit/8482a5fa59575242a8d96edf8c5ec0bec69e3335))
* me photo for pdf page ([dd8936b](https://github.com/jkaart/nextjs-cv/commit/dd8936ba9c54015cd73d82b2df3be42dbc336ea8))
* MePhoto with unit tests ([3374a09](https://github.com/jkaart/nextjs-cv/commit/3374a09e758c17c739a383e97aa0504630470755))
* **navbar:** autohide mobile menu when menu item clicked ([a1f6b8b](https://github.com/jkaart/nextjs-cv/commit/a1f6b8b600e44b53ffdc94e313241d885f8df9e5))
* **navbar:** autohide mobile menu when menu item clicked ([5bce3d7](https://github.com/jkaart/nextjs-cv/commit/5bce3d7df58708f2ee347ca19963862c193d2484))
* **package.json:** added commit npm script ([b189829](https://github.com/jkaart/nextjs-cv/commit/b189829c81310b4495ad0ec46fc3e9c82c7e2314))
* PDFProject and PDFProjects components ([bc54276](https://github.com/jkaart/nextjs-cv/commit/bc54276e5ef11275ad81d5e9dd3842da77645533))
* **PDFResume:**  display language skills in PDFResume ([41015ea](https://github.com/jkaart/nextjs-cv/commit/41015ea6632cda92944592cb8aeecc83f5a2382d))
* **PDFResume:** add hobbies section to PDFResume ([815d4ee](https://github.com/jkaart/nextjs-cv/commit/815d4ee52e560a4c1553016c0aee07d91535fce1))
* **PDFResume:** content update date for footer ([f8cf6c5](https://github.com/jkaart/nextjs-cv/commit/f8cf6c5cbfdf3335504d9459947e535bc3052865))
* PDFWorkExperience and PDFWorkExperiences components ([1cec1b0](https://github.com/jkaart/nextjs-cv/commit/1cec1b09a14dbd81d8b6b9537f4444e31b042db9))
* pipeline workflow ([35cd914](https://github.com/jkaart/nextjs-cv/commit/35cd9143410e01d2a5d9c196b5a369346f406802))
* ProjectLinks for PDF ([9a64b96](https://github.com/jkaart/nextjs-cv/commit/9a64b9684f3a5e09eb6aeb36874fee5d704dd813))
* ProjectListItem and ProjectList unit tests ([5b19a62](https://github.com/jkaart/nextjs-cv/commit/5b19a6275651f80d56fb103a6c34cfca49f077c4))
* ProjectListItem unit tests updated to cover ProjectLinks ([b59f631](https://github.com/jkaart/nextjs-cv/commit/b59f6317541f31857133137dc8547af416558361))
* ProjectUrls for ProjectListItem ([2b1e329](https://github.com/jkaart/nextjs-cv/commit/2b1e32997a0a33b9d1a5a205338ce0b5cff1d9d8))
* react to pdf ([72c2d65](https://github.com/jkaart/nextjs-cv/commit/72c2d653a9658d95e2e69477fe55e009b639f819))
* Section unit tests ([4eff685](https://github.com/jkaart/nextjs-cv/commit/4eff685b3d318fbac4fce79c4f4d471651e79db1))
* ShowMore unit tests ([c87fbe5](https://github.com/jkaart/nextjs-cv/commit/c87fbe5527f0b910484251e6ae8c05764b770269))
* Skill tests ([9f2f33f](https://github.com/jkaart/nextjs-cv/commit/9f2f33f18858b060f73020a0a966a7015c4137a0))
* sorted skills and Tooltip that show language as text ([d33fd32](https://github.com/jkaart/nextjs-cv/commit/d33fd328b6cb40de7aa7e97cfb6a3379880d1ffb))
* sorting projects by endDate ([0be0d67](https://github.com/jkaart/nextjs-cv/commit/0be0d67dbf58670f7dd15301caddb292795b4848))
* source publish workflow ([3a2bd19](https://github.com/jkaart/nextjs-cv/commit/3a2bd19d8ccf6cfe64eb838b45094769f44a74be))
* tag release job ([cb29c53](https://github.com/jkaart/nextjs-cv/commit/cb29c53eb6a02917e064622c63e5f1ac502b8527))
* target attribute for IconLink ([1d08ad4](https://github.com/jkaart/nextjs-cv/commit/1d08ad4aa3e90ad302cfd1963db90909b6ae7475))
* **translateLevel:** add translateLevel function for level translations ([e1e451e](https://github.com/jkaart/nextjs-cv/commit/e1e451e72ac6f3b65059204ca9890678787ba595))
* **translateLevel:** add translateLevel function for level translations ([55271c4](https://github.com/jkaart/nextjs-cv/commit/55271c4310c820f672192fd2a6f81c758ea0b184))
* Typescript for mdx ([7105c3c](https://github.com/jkaart/nextjs-cv/commit/7105c3cd51e185d0a0a1563b182101996a9579af))
* unit tests for HamburgerMenu component ([41c5c59](https://github.com/jkaart/nextjs-cv/commit/41c5c59185533d8c4a9da9ccdfabb40639c21326))
* unit tests for ProjectUrl component ([a5c8443](https://github.com/jkaart/nextjs-cv/commit/a5c8443b432247d142077b0ef307f5dbba4a677a))
* useProjects hook and projects api with get all projects endpoint ([b1d551d](https://github.com/jkaart/nextjs-cv/commit/b1d551d5d48085d75273d6f6ccbfc2123229ed70))
* vercel deploy job ([49254ea](https://github.com/jkaart/nextjs-cv/commit/49254eae57976398c0a6ca3933ea6edd4c57e2c3))
* webpack dev script ([f08b9f8](https://github.com/jkaart/nextjs-cv/commit/f08b9f86593907312ab0de4e526c41bbc56a1d26))
* **workflows:** add preview deployment workflow for dev branch ([#1](https://github.com/jkaart/nextjs-cv/issues/1)) ([fdf5540](https://github.com/jkaart/nextjs-cv/commit/fdf5540bd9effad15a68101e2da167e8a12d6ac6))
* **workflows:** deployment to vercel ([bd3ed1d](https://github.com/jkaart/nextjs-cv/commit/bd3ed1db2f2755ccc9cb8358f3cc708c027089b0))
