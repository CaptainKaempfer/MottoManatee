
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.codehaus.jackson.annotate.JsonAutoDetect.Visibility;
import org.codehaus.jackson.annotate.JsonMethod;
import org.codehaus.jackson.map.ObjectMapper;
import org.neo4j.graphdb.*;

@Path("/ServerExtension")
public class ServerExtension {
	private final GraphDatabaseService graphdb;
	private final ObjectMapper objectMapper;

	public ServerExtension(@Context GraphDatabaseService graphdb) {
		this.graphdb = graphdb;
		this.objectMapper = new ObjectMapper();
		objectMapper.setVisibility(JsonMethod.FIELD, Visibility.ANY);
	}

	// @POST
	// @Produces(MediaType.APPLICATION_JSON)
	// @Path("/users/new/")

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("users/{nick}")
	public Response findUserByNick(@PathParam("nick") String nick) throws Exception {
		Node node = graphdb.getNodeById(0);
		String str = null;
		try
		{
			str = this.objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(node);
			return Response.ok(str, MediaType.APPLICATION_JSON).build();
		}
		catch(Exception ex)
		{
			str = ex.getMessage();
			return Response.ok(str,MediaType.APPLICATION_JSON).build();
		}
	}
	
}
