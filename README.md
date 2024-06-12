# SVG Image Creator

This Node.js command-line application generates SVG logos based on user input. It allows users to select a color and shape, provide text for the logo, and then saves the generated SVG file. Follow the instructions below to get started with the SVG Image Creator.

## Installation

1. **Clone the Repository**: Clone this repository to your local machine using the following command:

    ```bash
    git clone https://github.com/AJKaur02/Challenge-10-SVGImageCreator
    ```

2. **Navigate to the Project Directory**: Change your current directory to the cloned project folder:

    ```bash
    cd svg-image-creator
    ```

3. **Install Dependencies**: Install the required dependencies by running:

    ```bash
    npm install
    ```

## Usage

To run the application, follow these steps:

1. **Start the Application**: Run the following command in your terminal:

    ```bash
    node index.js
    ```

2. **Follow the Prompts**: The application will prompt you to enter the following information:
   
    - Up to three characters for the logo text.
    - A color keyword or hexadecimal number for the text color.
    - Choose a shape for the logo from the list of available shapes: Circle, Triangle, or Square.
    - A color keyword or hexadecimal number for the shape color.

3. **Generate the SVG**: After providing all the required input, the application will generate the SVG file named `logo.svg`.

4. **View the SVG**: You can view the generated SVG file using any web browser. Open the `logo.svg` file located in the `examples` directory.

## Examples

![Generated SVG Example](./examples/logo.svg)

## Tests

To run the unit tests for the application, use the following command:

```bash
npm test
```

## Walkthrough Video

For a demonstration of the application's functionality and how to use it, watch the walkthrough video [here](./examples/My%20Movie.mp4).

## Built With

- [Node.js](https://nodejs.org/)
- [Inquirer](https://www.npmjs.com/package/inquirer)
- [Jest](https://jestjs.io/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
