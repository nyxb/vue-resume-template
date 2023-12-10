# [Vue Resume Template](https://ryanbalieiro.github.io/vue-resume-template/) by Dennis Ollhoff

<p align='center'>
<b>English</b> | <a href="https://github.com/nyxb/vue-resume-template/blob/main/README.de-DE.md">German</a>
<!-- Contributors: Thanks for getting interested, however we DON'T accept new translations to the README, thanks. -->
</p>

This theme offers a simple and clean design tailored for creating user-friendly website resumes or CV landing pages. It's built using Vue 3.0 (Composition API) and Bootstrap 5, presenting a cohesive one-page layout that blends functionality and aesthetics.

Key features:
- An anchored fixed side navigation bar for smooth scrolling through the page.
- Six custom section layouts showcasing work experience, educational background, professional skills, portfolio, and more.
- A tailored navigation mode specifically for mobile screens.
- Multi-language translation support included.
- Using Vite for faster build times and seamless integration.

## Preview

Check out a live version of the template **[here](https://dennis-ollhoff.space).**

## Getting Started

1. Clone the repo:
```
git clone https://github.com/ryanbalieiro/vue-resume-template
```

2. Navigate to the root directory of the project and install all dependencies with pnpm:
```
pnpm i
```

3. Run the project in developer mode:
```
pnpm run dev
```

4. To temporarily deactivate the preload animation during theme adjustments, navigate to `public/data/settings.json` and modify the following field:

```
 "preloaderEnabled": false
```

## Template Customization

### 1. Changing the content

The application content, including texts and images, is conveniently stored within the `public/` folder. Inside this directory, you'll come across two folders:

- `public/data` ➔ This directory hosts a collection of JSON files that house the entirety of the application's content.
- `public/images`➔ Here, you'll find a collection of icons and photos that the application utilizes.

You can personalize the app's content by modifying the data within these two folders according to your preferences. 

### 2. Quickly customizing the colors

Adjusting the theme colors can be done quickly by editing the variables found in `src/scss/_variables.scss`. To illustrate, a variation of the theme featuring shades of green can be created by modifying the following variables:

```scss
$primary: #13a452; /** changing the 'primary' color to green **/
$dark: #021307; /** changing the 'dark' color to a dark shade of green **/
$background-color: #f8fff8; 
```

### 3. Adding and removing languages

To add or remove languages, open `public/data/settings.json` and modify the `supportedLanguages` field as needed. Use the `default` property to specify the fallback language that should be used if the application doesn't support the user's preferred language.

```json
{
  "supportedLanguages": [
    {
      "name": "Deutsch",
      "id": "de",
      "flagUrl": "images/flags/de.png"
    },
    {
      "name": "English",
      "id": "en",
      "flagUrl": "images/flags/en.png",
      "default": true
    },
    {
      "name": "Italy",
      "id": "it",
      "flagUrl": "images/flags/it.png",
      "default": true
    }

  ]
}
```

The folder `public/images/flags/` already contains a collection of flags. If you need a specific flag symbol that is not there, you can download it free of charge from this [source](https://www.flaticon.com/packs/countrys-flags).

To deactivate support for multiple languages, keep only a single language within the array. This will automatically hide the language picker menu.

### 4. Adding, removing and reordering sections

Inside the `public/data/sections.json` file, you will come across two arrays: one for sections and the other for categories. Every section in the application should be linked to a corresponding category. These categories are used in grouping sections within the mobile navigation.

Adding, removing or reordering the portfolio sections and categories can be achieved by making modifications to these arrays as needed.

For localizing the section and category titles, ensure that the `id` of each section and category has a corresponding translation in `public/data/strings.json`.

*public/data/strings.json*
```json 
{
  "en": {
    "about": "About",
    "aboutProject": "About Project",
    "achievements": "Achievements"
  },

  "de": {
    "about": "Über",
    "aboutProject": "Über das Projekt",
    "achievements": "Erfolge"
  }
}
```

### 5. Customizing a section

Each section entry in `public/data/sections.json` comprises the following fields:

```json 
{
  "id": "experience",
  "categoryId": "background",
  "component": "TimelineSection",
  "jsonPath": "data/sections/experience.json",
  "faIcon": "fa-solid fa-briefcase"
}
```

- ***id*** ➔ A unique identifier for the section, also used as a key to fetch the section's name within `strings.json`
- ***categoryId*** ➔ Specifies the category to which the section belongs.
- ***component*** ➔ Indicates the Vue component responsible for rendering the section.
- ***jsonPath*** ➔ A reference pointing to the JSON file containing the section's content.
- ***faIcon*** ➔ The FontAwesome icon associated with the section.

To modify the content of a section, open and edit its respective JSON file. Keep in mind that each Vue component may require a specific JSON structure. For proper structuring of section JSON files, refer to the existing ones as a guide.

### 6. Localizing fields

To stay in line with the project's guidelines, put the translations for your static texts into the `public/data/strings.json` file. This file acts as a hub for all your global localization needs. For section and component-specific content, create a `locales` field to encapsulate the corresponding translations.

Each localizable object adheres to the following structure:

```
{
    "locales": {
        "en": {
            "hello": "Hello!",
            "age: "Age"
        },
        
        "de": {
            "hello": "Hallo!",
            "age": "Alter"
        },
        
        (...)
    }
}
```

### 7. Adding functionality to the contact form

Making the contact form functional requires the creation of your own server-side implementation within the `ContactForm.vue` file. Please note that the current template only includes the client-side implementation, accompanied by a simulated delay using a placeholder timeout to mimic the waiting period for requests:


```js
function _sendMessage(values) {
   const feedbackView = layout.getFeedbackView()
   feedbackView.showActivitySpinner(`${data.getString('sendingMessage')}...`)
   submitAttempts++

   /** The message sending logic goes here... */
   // setTimeout(() => {
   //    if(submitAttempts % 2 !== 0) {
   //        _onMessageSent()
   //    }
   //    else {
   //        _onMessageError()
   //    }
   // }, 1000)
   /** */
}
```

## Building for production

Certainly! If you're new to web development or deploying sites online, Netlify makes the process straightforward. Here’s a step-by-step guide tailored for beginners:

### Step-by-Step Guide to Hosting a Vue.js Application on Netlify:

1. **Sign Up for Netlify:**
   - Go to [Netlify](https://www.netlify.com/).
   - Click on the 'Sign up' button to create a new account. You can sign up using GitHub, GitLab, Bitbucket, or an email address.

2. **Create a New Site:**
   - Once you're logged in, click on 'New site from Git'.
   - You’ll be prompted to choose a Git provider such as GitHub, GitLab, or Bitbucket. This is where your project’s repository is located.

3. **Authorize Netlify:**
   - If it’s your first time connecting Netlify to your Git provider, you’ll need to authorize Netlify to access your repositories.
   - After authorization, select the repository that contains your Vue.js project.

4. **Configure Your Project:**
   - Netlify will ask for the build settings. Enter the following:
     - **Build command:** This is the command to create a production build of your site. For Vue.js projects, it’s usually `npm run build`.
     - **Publish directory:** This is where Netlify will look for your build output to deploy. For Vue.js projects, it’s usually `dist/`.
   - Click 'Deploy site'. Netlify will then start the build process and deploy your site.

5. **Check Your Site:**
   - Netlify will provide you with a temporary URL to view your live site, such as `https://yoursitename.netlify.app`.
   - Visit this URL to ensure that your site is working as expected.

6. **Continuous Deployment:**
   - By default, Netlify sets up continuous deployment for your site. This means any time you push new changes to your repository, Netlify will automatically rebuild and redeploy your site.

7. **Custom Domains:**
   - You can also set up a custom domain for your site through Netlify’s 'Domain management' section.

## About

This template was created by and is maintained by **[Dennis Ollhoff](https://nyxb.nexus/)**.

It's based on the [Bootstrap](https://getbootstrap.com/) framework created by Mark Otto and Jacob Thorton; and the [Vue](https://vuejs.org/) framework created by Evan You.

## Copyright and License

Code released under the [MIT](./LICENSE) license, providing complete freedom for utilization. Feel free to enhance and adapt it to suit your needs.
