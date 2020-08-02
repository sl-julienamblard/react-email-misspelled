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

<!-- ## [live codepen demo](https://codepen.io/Capse/full/LYGVRoP) -->

![example](https://raw.githubusercontent.com/sl-julienamblard/react-email-misspelled/master/doc/example.gif)

<h1 align="center">WIP WIP WIP WIP WIP WIP WIP</h1>  

## Table of Contents

1. [Install](#install)
1. [\<EmailMisspelledWithInput />](#cmpwithinput)
    - [usages](#cmpwithinput_usages)
    - [props](#cmpwithinput_props)
1. [\<EmailMisspelledSuggestFirst />](#cmpsuggestfirst)
    - [usages](#cmpsuggestfirst_usages)
    - [props](#cmpsuggestfirst_props)
1. [\<EmailMisspelledSuggestList />](#cmpsuggestall)
    - [usages](#cmpsuggestall_usages)
    - [props](#cmpsuggestall_props)
1. [Typescript support](#types)

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

<a id="cmpwithinput"></a>

<h2 align="center">< EmailMisspelledWithInput /></h2>

This component contains a div with a text input and the suggestions list

- [Usages](#cmpwithinput_usages)  
- [Props](#cmpwithinput_props)  
    - [label](cmpwithinput_props_label)

<a id="cmpwithinput_usages"></a>

### Usage
To use this components you just need to import the component and the domains list you want to check

```jsx
import { EmailMisspelledWithInput, top100 } from "react-email-misspelled"

export default FancyComponent () => {
    return <EmailMisspelledWithInput domains={top100} />
}

```

<br />


<a id="cmpwithinput_props"></a>

<h2 align="center">Component props</h2>

### `label` <a id="cmpwithinput_props_label"></a>

| Type | Required | Description |
| :--- | :------- | :---------- |
| `string` | false | String display in the label element |

<br />

```js
import { EmailMisspelledWithInput, top100 } from "react-email-misspelled"

export default FancyComponent () => {  
    return <EmailMisspelledWithInput  
        domains={top100}  
        label="Your email address"  
    />  
}  
```

<br />


















<a id="cmpsuggestfirst"></a>

<h2 align="center">< EmailMisspelledSuggestFirst /></h2>

This will just return a div with the more accurate result

- [Usages](#cmpsuggestfirst_usages)  
- [Props](#cmpsuggestfirst_props)  
    - [className](cmpsuggestfirst_props_classname)

<a id="cmpsuggestfirst_usages"></a>

### Usage
To use this components you just need to import the component and the domains list you want to check

```jsx
import { EmailMisspelledSuggestFirst, top100 } from "react-email-misspelled"

export default FancyComponent () => {
    return <EmailMisspelledSuggestFirst domains={top100} />
}

```

<br />


<a id="cmpsuggestfirst_props"></a>

<h2 align="center">Component props</h2>

### `label` <a id="cmpsuggestfirst_props_classname"></a>

| Type | Required | Description |
| :--- | :------- | :---------- |
| `string` | false | Add your classname |

<br />

```js
import { EmailMisspelledWithInput, top100 } from "react-email-misspelled"

export default FancyComponent () => {  
    return <EmailMisspelledSuggestFirst  
        domains={top100}  
        className="foo bar"  
    />  
}  
```

<br />



















<a id="cmpsuggestall"></a>

<h2 align="center">< EmailMisspelledSuggestList /></h2>

This will just return a div with the more accurate result

- [Usages](#cmpsuggestall_usages)  
- [Props](#cmpsuggestall_props)  
    - [className](cmpsuggestall_props_classname)

<a id="cmpsuggestall_usages"></a>

### Usage
To use this components you just need to import the component and the domains list you want to check

```jsx
import { EmailMisspelledSuggestList, top100 } from "react-email-misspelled"

export default FancyComponent () => {
    return <EmailMisspelledSuggestList domains={top100} />
}

```

<br />


<a id="cmpsuggestall_props"></a>

<h2 align="center">Component props</h2>

### `label` <a id="cmpsuggestall_props_classname"></a>

| Type | Required | Description |
| :--- | :------- | :---------- |
| `string` | false | Add your classname |

<br />

```js
import { EmailMisspelledSuggestList, top100 } from "react-email-misspelled"

export default FancyComponent () => {  
    return <EmailMisspelledSuggestList  
        domains={top100}  
        className="foo bar"  
    />  
}  
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
