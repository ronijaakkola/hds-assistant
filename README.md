<h1 align="center">HDS Assistant</h1>

<div align="center">
  <strong>Sketch Assistant for Helsinki Design System team</strong>
</div>
<div align="center">
  Keeps our Sketch files consistent :gem: and tidy :broom:
</div>

<p align="center">
  <img src="./img/readme-image.png" alt="Helsinki Design System Assistant for Sketch" width="738">
</p>

<div align="center">
  <!-- HDS Tool -->
  <a href="http://hds.hel.fi">
  <img src="https://img.shields.io/badge/HDS-tool-blue?style=flat-square"
      alt="HDS Tool badge" />
  </a>
  <!-- Version -->
  <a href="https://github.com/ronijaakkola/hds-assistant/releases/latest">
    <img src="https://img.shields.io/github/v/release/ronijaakkola/hds-assistant?style=flat-square"
      alt="Version" />
  </a>
   <!-- Licence -->
  <a href="https://github.com/ronijaakkola/hds-assistant/blob/main/LICENSE.md">
    <img src="https://img.shields.io/github/license/ronijaakkola/hds-assistant?style=flat-square"
      alt="Licence (MIT)" />
  </a>
  <!-- Downloads -->
  <a href="https://github.com/ronijaakkola/hds-assistant/releases/latest">
    <img src="https://img.shields.io/github/downloads/ronijaakkola/hds-assistant/total?style=flat-square"
      alt="Downloads" />
  </a>
</div>

<div align="center">
  <h4>
    <a href="http://hds.hel.fi">
      HDS website
    </a>
    <span> | </span>
    <a href="http://hds.hel.fi">
      HDS Sketch guidelines
    </a>
    <span> | </span>
    <a href="https://github.com/ronijaakkola/hds-assistant/blob/main/CONTRIBUTING.md">
      Contributing
    </a>
    <span> | </span>
    <a href="https://developer.sketch.com/assistants/">
      Sketch Assistant docs
    </a>
  </h4>
</div>

### Features

- **Styles**: makes sure shared styles are used correctly 
- **Layout**: keeps everything aligned to the pixel grid
- **Naming**: prevents default names and enforces descriptive naming
- **Layers and groups**: keeps layers organised and removes redundant ones

### Usage

#### Installing
The easiest way to install HDS Assistant is [to click this link](sketch://add-assistant?url=https://github.com/ronijaakkola/hds-assistant/releases/latest/download/hds-assistant.tgz). The link will automatically install the assistant to your current Sketch file.

You can also download the latest tarball from [releases](https://github.com/ronijaakkola/hds-assistant/releases/latest) and add the archive manually in Sketch assistant window.

#### Updating
Currently Sketch does not update assistants automatically. The only way to update assistant to a newer version is to follow the install instructions again. Upon reinstalling, the old version will be replaced with the new one.

### Rules

#### Styles
<p>
<span>:heavy_check_mark: </span> Respect the shared layer styles. Don’t customise or break the linking to original style. <br />
<span>:heavy_check_mark: </span> Respect the shared text styles. Don’t customise or break the linking to original style. <br />
<span>:heavy_check_mark: </span> Remove disabled fills. <br />
<span>:heavy_check_mark: </span> Remove disabled borders. <br />
<span>:heavy_check_mark: </span> You have identical non-shared layer styles. All styles used in HDS components should be found in HDS libraries. <br />
<span>:heavy_check_mark: </span> You have identical non-shared text styles. All typography used in HDS components should be found in HDS libraries. <br />
<p>

#### Layout
<p>
<span>:heavy_check_mark: </span> Align elements and artboards to pixel grid. <br />
<p>

#### Naming
<p>
<span>:heavy_check_mark: </span> Give artboards names that state their purpose or content. <br />
<span>:heavy_check_mark: </span> Give pages names that state their purpose or content. <br />
<span>:heavy_check_mark: </span> Give groups names that state their purpose or content. <br />
<span>:heavy_check_mark: </span> Give shapes names that state their purpose or content. <br />
<span>:heavy_check_mark: </span> Give symbols names that state their purpose or content. Use forward slash separator. <br />
<p>

#### Layers and groups
<p>
<span>:heavy_check_mark: </span> Delete empty groups. <br />
<span>:heavy_check_mark: </span> Delete hidden groups and layers. <br />
<span>:heavy_check_mark: </span> Ungroup unnecessary groups. <br />
<span>:heavy_check_mark: </span> Avoid groups that have only one another group in them. <br />
<p>

### Development

#### Setting up
1. Install Node.js. You need at least version 12 or greater.
2. Clone this repository.
3. Go to the project root and run `npm install` to install dependencies.
4. To build assistant package, run `npm run package-tarball`.
5. There is now a file called `hds-assistant-<version>.tgz` in the project root folder.

#### Running tests
In the project root folder, run `npm test`. This will run the test set and show you the results.

#### Adding new rules
Follow instructions in [Sketch Assistant documentation](https://developer.sketch.com/assistants/write-a-rule). Remember also to add tests to your new rule. Tests are added to `index.test.ts` file in the `__tests__/` folder.


