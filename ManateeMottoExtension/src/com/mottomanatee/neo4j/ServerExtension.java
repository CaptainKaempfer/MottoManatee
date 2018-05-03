package com.mottomanatee.neo4j;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.codehaus.jackson.map.ObjectMapper;
import org.neo4j.graphdb.GraphDatabaseService;

@Path( "/ServerExtension")
public class ServerExtension 
{
	private final GraphDatabaseService graphdb; 
	private final ObjectMapper objectMapper;
	
	public ServerExtension( @Context GraphDatabaseService graphDb)
    {
        this.graphDb = graphDb;
        this.objectMapper = new ObjectMapper();
        objectMapper.setVisibility(JsonMethod.FIELD, Visibility.ANY);
    }
	
//	@POST
//	@Produces(MediaType.APPLICATION_JSON)
//	@Path("/users/new/")
	
	 @GET
	 @Path("/{personName}")
	 
	
}
