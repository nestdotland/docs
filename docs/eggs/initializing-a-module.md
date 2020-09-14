# Initializing a module

It is not necessary to have a configuration file to publish to [nest.land](nest.land).
However, you can choose to create one, and we offer you a tool to do so.
To do this, you need to type the following command in the root directory of your project:
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
