<h2 align="center">react-email-misspelled</h2>  

<div align="center">  

[![npm](https://img.shields.io/npm/v/react-email-misspelled.svg?style=flat-square)](https://www.npmjs.com/package/react-email-misspelled)
[![CircleCI Status](https://img.shields.io/circleci/build/github/sl-julienamblard/react-email-misspelled/master?style=flat-square)](https://circleci.com/gh/sl-julienamblard/react-email-misspelled)
[![codecov](https://img.shields.io/codecov/c/github/sl-julienamblard/react-email-misspelled?logo=codecov&style=flat-square)](https://codecov.io/gh/sl-julienamblard/react-email-misspelled)
[![npm](https://img.shields.io/bundlephobia/minzip/react-email-misspelled?style=flat-square)](https://www.npmjs.com/package/react-email-misspelled)
[![npm](https://img.shields.io/npm/dt/react-email-misspelled.svg?style=flat-square)](https://www.npmjs.com/package/react-email-misspelled)
[![npm](https://img.shields.io/npm/l/react-email-misspelled.svg?style=flat-square)](https://github.com/sl-julienamblard/react-email-misspelled/blob/master/LICENSE)

</div>  

This is a react wrapper for [email-misspelled package](https://www.npmjs.com/package/email-misspelled)  
Check the misspelled email's domain and return a list (or first) of matching domain suggestions sorted by corrections needed

The string comparison is based on [this algorithm](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/string/levenshtein-distance)

## [live codepen demo](https://codepen.io/Capse/full/LYGVRoP)

![example](https://raw.githubusercontent.com/sl-julienamblard/email-misspelled/v3/doc/example.gif)

# TODO  

## Table of Contents

1. [Install](#install)
2. [Usages](#usages)
3. [Options](#options)
    - [**option**](#option)
4. [Typescript support](#types)

<a id="install"></a>

<h2 align="center">Install</h2>

*Install with npm:*

```bash
    npm i react-email-misspelled --save
```

*Install with yarn:*

```bash
    yarn add react-email-misspelled
```

<a id="usages"></a>

<h2 align="center">Usages</h2>


```js
import packageTempalte from "react-email-misspelled"
//do some examples
```

<br />


<a id="options"></a>

<h2 align="center">Options</h2>

### `option` <a id="option"></a>

| Type | Required | Description |
| :--- | :------- | :---------- |
| `type` | true/false | description |

<br />

```js
import packageTemplate from "react-email-misspelled"
//do some js
```

<br />

---


<br />

<a id="types"></a>  

<h2 align="center">Typescript support</h2>  

description...

<a id="TDomainList"></a>  

**`TypeName`**
```ts
    import { TypeName } from "react-email-misspelled/typings"

    //type
```

---

## TODO
- [ ] Doc
- [ ] TU
- [ ] TS
