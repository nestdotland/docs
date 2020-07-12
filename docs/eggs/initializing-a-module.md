# Initializing a module

You'll need to initialize a module with eggs before publishing it. To do this, you need to type the following command in the root directory of your project:
```shell script
eggs init
```
By doing this, you'll be prompted with a setup screen, where you will be asked to enter:
#### module name
The name of your new module
#### module description
The description of your new module
#### Is this a stable version?
Whether the current version of your module is stable or not. You will be able to update this with each new publish.
#### Enter the files and relative directories that nest.land will publish separated by a comma.
All the files you want to publish with your module. You should include your `README.md` file here next to all the imported / required files of your module. 
#### Config format
Choose between your preferred config format: yaml or json.