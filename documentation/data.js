curl --request POST \
  --url http://localhost:8002/data \
  --header 'content-type: application/json' \
  --data '{
	"retailerName" : "string",
	"inTime" : "timeStamp",  // Time stamp value integer
	"outTime" : "timeStamp"   // Time stamp value integer
}'