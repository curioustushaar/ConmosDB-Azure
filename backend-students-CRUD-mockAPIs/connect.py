import os
from dotenv import load_dotenv
from azure.cosmos import CosmosClient, PartitionKey, exceptions

# Load environment variables from .env file
load_dotenv()

COSMOS_URI = os.getenv("COSMOS_URI")
COSMOS_KEY = os.getenv("COSMOS_KEY")
DATABASE_NAME = os.getenv("DATABASE_NAME", "mydatabase")
CONTAINER_NAME = os.getenv("CONTAINER_NAME", "users")

def connect_cosmos():
    try:
        # Validate environment variables
        if not COSMOS_URI or not COSMOS_KEY:
            raise ValueError("COSMOS_URI and COSMOS_KEY environment variables are required")
        
        # Create client
        client = CosmosClient(COSMOS_URI, credential=COSMOS_KEY)
        print("✔ Connected to Cosmos DB")

        # Create database if not exists
        database = client.create_database_if_not_exists(id=DATABASE_NAME)

        # Create container if not exists
        container = database.create_container_if_not_exists(
            id=CONTAINER_NAME,
            partition_key=PartitionKey(path="/group"),
            offer_throughput=400
        )

        print("✔ Database & container ready")
        return container

    except exceptions.CosmosHttpResponseError as e:
        print("❌ Error connecting to Cosmos DB:", e)
        raise
    except ValueError as e:
        print("❌ Configuration Error:", e)
        raise


if __name__ == "__main__":
    container = connect_cosmos()