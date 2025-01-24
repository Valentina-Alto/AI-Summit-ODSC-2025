
# Climbing Store AI Assistant

This notebook demonstrates the use of the LangChain library with Azure OpenAI to create a conversational agent capable of assisting customers of a climbing e-commerce. 

## Business scenario

We are the owners of a climbing e-store, and we want to enhance our customer experience by creating an AI assistant. This assistant leverages the Azure OpenAI service to provide real-time, intelligent support to our customers, helping them with various tasks such as product inquiries, recommendations and cart management.

### Key Features of our AI Assistant

1. Hyper personalisation:

Customers can benefit from a personalised experience, since the AI assistant will get access to their purchase history and make relevant recommendations.

2. "Add to Cart" tool

Once agreed on the item, the AI Agent will add it to customer's cart autonomously.

3. Conversational user interface

Customers can benefit from a conversational, chat experience that can improve the overall experience and increase engagement, differentiating the store in the market of e-commerce.

## Prerequisites
Before running this notebook, ensure you have the following prerequisites:

1. Python 3.8+: Make sure you have Python 3.8 or higher installed on your system.

2. Node.js: this will be needed to locally run the website and backend database. You can download the latest version [here](https://nodejs.org/)

2. Azure [OpenAI Service](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/create-resource?pivots=web-portal) OR [OpenAI account](https://platform.openai.com/signup/): You need access to either the Azure OpenAI service or OpenAI Account. Ensure you have the following details:
- AZURE_OPENAI_API_VERSION: The API version of the Azure OpenAI service.
- AZURE_OPENAI_ENDPOINT: The endpoint URL for the Azure OpenAI service.
- AZURE_OPENAI_API_KEY: The API key for accessing the Azure OpenAI service.
- AZURE_OPENAI_CHAT_DEPLOYMENT_NAME: The deployment name for the Azure OpenAI chat model.


**Note**: you can use other LLMs of your choice to run this notebook. If you are using a model different from the Azure OpenAI series, make sure to adjust the environment variables and the client library.

## Running the notebook
1. Clonte the repository:
```python
git clone <repository-url>
cd <repository-directory>
```
2. Install Dependencies
```python
pip install -r requirements.txt
```
3. Set environment variables
```python
os.environ["AZURE_OPENAI_API_VERSION"] = "<your-api-version>"
os.environ["AZURE_OPENAI_ENDPOINT"] = "<your-endpoint>"
os.environ["AZURE_OPENAI_API_KEY"] = "<your-api-key>"
os.environ["AZURE_OPENAI_CHAT_DEPLOYMENT_NAME"] = "<your-deployment-name>"
```
4. To run locally the `index.html` website, you have 2 options:
    - If you are using [VS code](https://code.visualstudio.com/download), you can install and enable the Live Server Extension and follow the instructions on the extension main page.
    - Otherwise, you can run the following command in your command line:
    ```python
    npm install -g http-server
    cd path/to/your/index.html
    http-server
    ```
    Your application will run at http://localhost:8080.

5. To run locally the `db.json` database:

    ```python
    npm install -g json-server
    cd path/to/your/db.json
    json-server --watch db.json
    ```
    Your database will run at http://localhost:3000.


