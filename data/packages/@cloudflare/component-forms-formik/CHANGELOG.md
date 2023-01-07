# Change Log

## 6.2.0

### Minor Changes

- 46c2fbb47e: Add id to form tags

### Patch Changes

- Updated dependencies [46c2fbb47e]
  - @cloudflare/component-button@5.1.0

## 6.1.0

### Minor Changes

- f60dee0a88: Fixing bug in clearable Select component

## 6.0.0

### Minor Changes

- fa17f50f56: Change the method FormGrid uses to recognise form components.
  Individual form components now have a static formGridType property which
  is used by FormGrid to recognise and properly layout such components.

  Also resolves a number of react key warnings.

### Patch Changes

- Updated dependencies [20596e58c4]
- Updated dependencies [fa17f50f56]
- Updated dependencies [77059b4a95]
  - @cloudflare/component-forms@5.0.0
  - @cloudflare/style-container@7.10.0
  - @cloudflare/component-button@5.0.0
  - @cloudflare/elements@3.0.0
  - @cloudflare/component-listbox@1.7.11

## 5.0.0

### Minor Changes

- e2cf563e32: Correctly list the following packages as peer dependencies:

  - @cloudflare/style-const
  - @cloudflare/style-container
  - @cloudflare/style-provider

  These packages used to install `fela` and `react-fela` as transitive dependencies, which can cause issues if the version installed by the package is different than the version that is installed by the host application.

  To prevent this from happening, it is recommended that the host application specifies its own version of the `@cloudflare/style-*` packages.

### Patch Changes

- Updated dependencies [e2cf563e32]
  - @cloudflare/elements@2.0.0
  - @cloudflare/style-container@7.9.0
  - @cloudflare/component-button@4.0.0
  - @cloudflare/component-forms@4.0.0
  - @cloudflare/component-listbox@1.7.10

## 4.5.13

### Patch Changes

- 10091c695b: Correctly list @cloudflare/intl-react@^1.9.80 as a dependency

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [4.5.12](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.5.11...@cloudflare/component-forms-formik@4.5.12) (2022-07-27)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.5.11](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.5.10...@cloudflare/component-forms-formik@4.5.11) (2022-07-26)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.5.10](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.5.9...@cloudflare/component-forms-formik@4.5.10) (2022-07-22)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.5.9](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.5.8...@cloudflare/component-forms-formik@4.5.9) (2022-07-22)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.5.8](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.5.7...@cloudflare/component-forms-formik@4.5.8) (2022-07-22)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.5.7](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.5.6...@cloudflare/component-forms-formik@4.5.7) (2022-07-21)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.5.6](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.5.5...@cloudflare/component-forms-formik@4.5.6) (2022-07-19)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.5.5](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.5.4...@cloudflare/component-forms-formik@4.5.5) (2022-07-19)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.5.4](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.5.3...@cloudflare/component-forms-formik@4.5.4) (2022-07-14)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.5.3](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.5.2...@cloudflare/component-forms-formik@4.5.3) (2022-07-12)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.5.2](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.5.1...@cloudflare/component-forms-formik@4.5.2) (2022-07-12)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.5.1](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.5.0...@cloudflare/component-forms-formik@4.5.1) (2022-07-11)

**Note:** Version bump only for package @cloudflare/component-forms-formik

# [4.5.0](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.4.31...@cloudflare/component-forms-formik@4.5.0) (2022-06-30)

### Bug Fixes

- **component-forms-formik:** A11Y-722 Fix import ([907d723](http://stash.cfops.it:7999/fe/stratus/commits/907d723))

### Features

- **component-forms-formik:** A11Y-722 Error comp, better error handling ([af29cb1](http://stash.cfops.it:7999/fe/stratus/commits/af29cb1))

## [4.4.31](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.4.30...@cloudflare/component-forms-formik@4.4.31) (2022-06-27)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.4.30](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.4.29...@cloudflare/component-forms-formik@4.4.30) (2022-06-24)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.4.29](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.4.28...@cloudflare/component-forms-formik@4.4.29) (2022-06-21)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.4.28](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.4.27...@cloudflare/component-forms-formik@4.4.28) (2022-06-21)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.4.27](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.4.26...@cloudflare/component-forms-formik@4.4.27) (2022-06-21)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.4.26](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.4.25...@cloudflare/component-forms-formik@4.4.26) (2022-06-20)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.4.25](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.4.24...@cloudflare/component-forms-formik@4.4.25) (2022-06-20)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.4.24](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.4.23...@cloudflare/component-forms-formik@4.4.24) (2022-06-17)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.4.23](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.4.22...@cloudflare/component-forms-formik@4.4.23) (2022-06-17)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.4.22](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.4.21...@cloudflare/component-forms-formik@4.4.22) (2022-06-14)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.4.21](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.4.20...@cloudflare/component-forms-formik@4.4.21) (2022-06-14)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.4.20](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.4.19...@cloudflare/component-forms-formik@4.4.20) (2022-06-14)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.4.19](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.4.18...@cloudflare/component-forms-formik@4.4.19) (2022-06-10)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.4.18](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.4.17...@cloudflare/component-forms-formik@4.4.18) (2022-06-07)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.4.17](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.4.16...@cloudflare/component-forms-formik@4.4.17) (2022-06-07)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.4.16](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.4.15...@cloudflare/component-forms-formik@4.4.16) (2022-06-07)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.4.15](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.4.14...@cloudflare/component-forms-formik@4.4.15) (2022-05-31)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.4.14](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.4.13...@cloudflare/component-forms-formik@4.4.14) (2022-05-31)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.4.13](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.4.12...@cloudflare/component-forms-formik@4.4.13) (2022-05-30)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.4.12](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.4.11...@cloudflare/component-forms-formik@4.4.12) (2022-05-30)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.4.11](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.4.10...@cloudflare/component-forms-formik@4.4.11) (2022-05-30)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.4.10](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.4.9...@cloudflare/component-forms-formik@4.4.10) (2022-05-24)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.4.9](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.4.8...@cloudflare/component-forms-formik@4.4.9) (2022-05-13)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.4.8](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.4.7...@cloudflare/component-forms-formik@4.4.8) (2022-05-13)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.4.7](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.4.6...@cloudflare/component-forms-formik@4.4.7) (2022-05-12)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.4.6](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.4.5...@cloudflare/component-forms-formik@4.4.6) (2022-05-11)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.4.5](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.4.4...@cloudflare/component-forms-formik@4.4.5) (2022-05-11)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.4.4](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.4.3...@cloudflare/component-forms-formik@4.4.4) (2022-05-10)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.4.3](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.4.2...@cloudflare/component-forms-formik@4.4.3) (2022-05-10)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.4.2](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.4.1...@cloudflare/component-forms-formik@4.4.2) (2022-05-09)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.4.1](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.4.0...@cloudflare/component-forms-formik@4.4.1) (2022-05-09)

**Note:** Version bump only for package @cloudflare/component-forms-formik

# [4.4.0](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.3.11...@cloudflare/component-forms-formik@4.4.0) (2022-05-09)

### Features

- **component-listbox:** A11Y-737 Reduce dependence on context ([9a3120c](http://stash.cfops.it:7999/fe/stratus/commits/9a3120c))

## [4.3.11](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.3.10...@cloudflare/component-forms-formik@4.3.11) (2022-05-08)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.3.10](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.3.9...@cloudflare/component-forms-formik@4.3.10) (2022-05-05)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.3.9](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.3.8...@cloudflare/component-forms-formik@4.3.9) (2022-05-05)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.3.8](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.3.7...@cloudflare/component-forms-formik@4.3.8) (2022-05-04)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.3.7](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.3.6...@cloudflare/component-forms-formik@4.3.7) (2022-05-04)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.3.6](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.3.5...@cloudflare/component-forms-formik@4.3.6) (2022-05-04)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.3.5](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.3.4...@cloudflare/component-forms-formik@4.3.5) (2022-05-03)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.3.4](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.3.3...@cloudflare/component-forms-formik@4.3.4) (2022-04-29)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.3.3](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.3.2...@cloudflare/component-forms-formik@4.3.3) (2022-04-29)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.3.2](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.3.1...@cloudflare/component-forms-formik@4.3.2) (2022-04-26)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.3.1](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.3.0...@cloudflare/component-forms-formik@4.3.1) (2022-04-25)

**Note:** Version bump only for package @cloudflare/component-forms-formik

# [4.3.0](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.2.35...@cloudflare/component-forms-formik@4.3.0) (2022-04-21)

### Features

- **component-forms-formik:** A11Y-741 Add inputStyleProps ([c836b70](http://stash.cfops.it:7999/fe/stratus/commits/c836b70))
- **component-forms-formik:** A11Y-741 Add omitSubmit prop to SearchForm ([fe58dc3](http://stash.cfops.it:7999/fe/stratus/commits/fe58dc3))
- **component-forms-formik:** A11Y-741 Add submitProps ([cc57142](http://stash.cfops.it:7999/fe/stratus/commits/cc57142))

## [4.2.35](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.2.34...@cloudflare/component-forms-formik@4.2.35) (2022-04-20)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.2.34](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.2.33...@cloudflare/component-forms-formik@4.2.34) (2022-04-18)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.2.33](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.2.32...@cloudflare/component-forms-formik@4.2.33) (2022-04-15)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.2.32](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.2.31...@cloudflare/component-forms-formik@4.2.32) (2022-04-13)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.2.31](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.2.30...@cloudflare/component-forms-formik@4.2.31) (2022-04-13)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.2.30](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.2.29...@cloudflare/component-forms-formik@4.2.30) (2022-04-12)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.2.29](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.2.28...@cloudflare/component-forms-formik@4.2.29) (2022-04-11)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.2.28](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.2.27...@cloudflare/component-forms-formik@4.2.28) (2022-04-06)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.2.27](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.2.26...@cloudflare/component-forms-formik@4.2.27) (2022-04-06)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.2.26](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.2.25...@cloudflare/component-forms-formik@4.2.26) (2022-04-05)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.2.25](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.2.24...@cloudflare/component-forms-formik@4.2.25) (2022-04-05)

### Bug Fixes

- INCIDENT-2555 Ensure we have a el to clone ([cc0f178](http://stash.cfops.it:7999/fe/stratus/commits/cc0f178))

## [4.2.24](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.2.23...@cloudflare/component-forms-formik@4.2.24) (2022-04-04)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.2.23](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.2.22...@cloudflare/component-forms-formik@4.2.23) (2022-04-04)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.2.22](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.2.21...@cloudflare/component-forms-formik@4.2.22) (2022-03-31)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.2.21](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.2.20...@cloudflare/component-forms-formik@4.2.21) (2022-03-30)

### Bug Fixes

- **component-forms-formik:** A11Y-12 remove displayed test id ([11849cd](http://stash.cfops.it:7999/fe/stratus/commits/11849cd))

## [4.2.20](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.2.19...@cloudflare/component-forms-formik@4.2.20) (2022-03-29)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.2.19](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.2.18...@cloudflare/component-forms-formik@4.2.19) (2022-03-29)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.2.18](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.2.17...@cloudflare/component-forms-formik@4.2.18) (2022-03-29)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.2.17](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.2.16...@cloudflare/component-forms-formik@4.2.17) (2022-03-29)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.2.16](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.2.15...@cloudflare/component-forms-formik@4.2.16) (2022-03-28)

### Bug Fixes

- **component-forms-formik:** A11Y-12 bug fix ([9586e88](http://stash.cfops.it:7999/fe/stratus/commits/9586e88))
- **component-forms-formik:** A11Y-12 fixes ([f82b9e4](http://stash.cfops.it:7999/fe/stratus/commits/f82b9e4))
- **component-forms-formik:** A11Y-12 Search updates ([8707a91](http://stash.cfops.it:7999/fe/stratus/commits/8707a91))
- **component-forms-formik:** A11Y-12 typescript fixes ([eb7733d](http://stash.cfops.it:7999/fe/stratus/commits/eb7733d))

## [4.2.15](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.2.14...@cloudflare/component-forms-formik@4.2.15) (2022-03-24)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.2.14](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.2.13...@cloudflare/component-forms-formik@4.2.14) (2022-03-24)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.2.13](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.2.12...@cloudflare/component-forms-formik@4.2.13) (2022-03-24)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.2.12](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.2.11...@cloudflare/component-forms-formik@4.2.12) (2022-03-23)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.2.11](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.2.10...@cloudflare/component-forms-formik@4.2.11) (2022-03-23)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.2.10](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.2.9...@cloudflare/component-forms-formik@4.2.10) (2022-03-22)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.2.9](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.2.8...@cloudflare/component-forms-formik@4.2.9) (2022-03-22)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.2.8](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.2.7...@cloudflare/component-forms-formik@4.2.8) (2022-03-21)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.2.7](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.2.6...@cloudflare/component-forms-formik@4.2.7) (2022-03-16)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.2.6](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.2.5...@cloudflare/component-forms-formik@4.2.6) (2022-03-16)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.2.5](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.2.4...@cloudflare/component-forms-formik@4.2.5) (2022-03-11)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.2.4](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.2.3...@cloudflare/component-forms-formik@4.2.4) (2022-03-11)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.2.3](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.2.2...@cloudflare/component-forms-formik@4.2.3) (2022-03-09)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.2.2](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.2.1...@cloudflare/component-forms-formik@4.2.2) (2022-03-09)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.2.1](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.2.0...@cloudflare/component-forms-formik@4.2.1) (2022-03-08)

**Note:** Version bump only for package @cloudflare/component-forms-formik

# [4.2.0](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.1.0...@cloudflare/component-forms-formik@4.2.0) (2022-03-08)

### Features

- **component-forms-formik:** A11Y-659 Async validation support ([e3af2f0](http://stash.cfops.it:7999/fe/stratus/commits/e3af2f0))

# [4.1.0](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.0.18...@cloudflare/component-forms-formik@4.1.0) (2022-03-08)

### Bug Fixes

- **component-forms-formik:** A11Y-656 Simplify SearchForm onChange ([04e10f8](http://stash.cfops.it:7999/fe/stratus/commits/04e10f8))
- **component-forms-formik:** A11Y-656 typescript fix ([327c2e4](http://stash.cfops.it:7999/fe/stratus/commits/327c2e4))

### Features

- **component-forms-formik:** A11Y-656 Saerch and SearchForm component ([56143d3](http://stash.cfops.it:7999/fe/stratus/commits/56143d3))

## [4.0.18](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.0.17...@cloudflare/component-forms-formik@4.0.18) (2022-03-04)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.0.17](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.0.16...@cloudflare/component-forms-formik@4.0.17) (2022-03-04)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.0.16](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.0.15...@cloudflare/component-forms-formik@4.0.16) (2022-03-03)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.0.15](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.0.14...@cloudflare/component-forms-formik@4.0.15) (2022-03-01)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.0.14](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.0.13...@cloudflare/component-forms-formik@4.0.14) (2022-03-01)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.0.13](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.0.12...@cloudflare/component-forms-formik@4.0.13) (2022-03-01)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.0.12](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.0.11...@cloudflare/component-forms-formik@4.0.12) (2022-02-28)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.0.11](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.0.10...@cloudflare/component-forms-formik@4.0.11) (2022-02-19)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.0.10](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.0.9...@cloudflare/component-forms-formik@4.0.10) (2022-02-18)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.0.9](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.0.8...@cloudflare/component-forms-formik@4.0.9) (2022-02-16)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.0.8](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.0.7...@cloudflare/component-forms-formik@4.0.8) (2022-02-14)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.0.7](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.0.6...@cloudflare/component-forms-formik@4.0.7) (2022-02-14)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.0.6](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.0.5...@cloudflare/component-forms-formik@4.0.6) (2022-02-14)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.0.5](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.0.4...@cloudflare/component-forms-formik@4.0.5) (2022-02-11)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.0.4](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.0.3...@cloudflare/component-forms-formik@4.0.4) (2022-02-11)

### Bug Fixes

- **component-forms-formik:** A11Y-43 Typescript fix ([d835178](http://stash.cfops.it:7999/fe/stratus/commits/d835178))
- **component-forms-formik:** A11Y-43 Typescript fixes ([abb07cc](http://stash.cfops.it:7999/fe/stratus/commits/abb07cc))

## [4.0.3](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.0.2...@cloudflare/component-forms-formik@4.0.3) (2022-02-11)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.0.2](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.0.1...@cloudflare/component-forms-formik@4.0.2) (2022-02-10)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [4.0.1](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@4.0.0...@cloudflare/component-forms-formik@4.0.1) (2022-02-10)

**Note:** Version bump only for package @cloudflare/component-forms-formik

# [4.0.0](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@3.0.5...@cloudflare/component-forms-formik@4.0.0) (2022-02-09)

### Features

- **component-forms-formik:** TSX-171 Add generic types for form values ([2533e49](http://stash.cfops.it:7999/fe/stratus/commits/2533e49))

### BREAKING CHANGES

- **component-forms-formik:** Strictly enforces generic types for values

## [3.0.5](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@3.0.4...@cloudflare/component-forms-formik@3.0.5) (2022-02-08)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [3.0.4](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@3.0.3...@cloudflare/component-forms-formik@3.0.4) (2022-02-08)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [3.0.3](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@3.0.2...@cloudflare/component-forms-formik@3.0.3) (2022-02-05)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [3.0.2](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@3.0.1...@cloudflare/component-forms-formik@3.0.2) (2022-02-04)

**Note:** Version bump only for package @cloudflare/component-forms-formik

## [3.0.1](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-forms-formik@3.0.0...@cloudflare/component-forms-formik@3.0.1) (2022-02-01)

**Note:** Version bump only for package @cloudflare/component-forms-formik

# 3.0.0 (2022-01-25)

### Bug Fixes

- **component-forms-formik:** A11Y-591 Fix package name ([30a7aee](http://stash.cfops.it:7999/fe/stratus/commits/30a7aee))
- **component-forms-formik:** A11Y-591 Move to component directory ([233c405](http://stash.cfops.it:7999/fe/stratus/commits/233c405))

### BREAKING CHANGES

- **component-forms-formik:** rename package

## [1.0.5](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/forms-formik@1.0.4...@cloudflare/forms-formik@1.0.5) (2022-01-19)

**Note:** Version bump only for package @cloudflare/forms-formik

## [1.0.4](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/forms-formik@1.0.3...@cloudflare/forms-formik@1.0.4) (2022-01-17)

**Note:** Version bump only for package @cloudflare/forms-formik

## [1.0.3](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/forms-formik@1.0.2...@cloudflare/forms-formik@1.0.3) (2022-01-14)

**Note:** Version bump only for package @cloudflare/forms-formik

## [1.0.2](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/forms-formik@1.0.1...@cloudflare/forms-formik@1.0.2) (2022-01-14)

**Note:** Version bump only for package @cloudflare/forms-formik

## 1.0.1 (2022-01-13)

### Bug Fixes

- **forms-formik:** A11Y-591 Change directory ([ba0b0d3](http://stash.cfops.it:7999/fe/stratus/commits/ba0b0d3))
