import React from "react";
import { useParams } from "react-router-dom";

import { useHistory } from "react-router-dom";
import PlaceList from "../components/PlaceList";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { useQuery } from "graphql-hooks";

const UserPlaces = () => {
  // const [loadedPlaces, setLoadedPlaces] = useState();
  const { error, clearError } = useHttpClient();
  const history = useHistory();

  const USER_PLACES_QUERY = `mutation($userId:String!){
  getPlacesByUserId(getPlacesByUserIdInput:{userId:$userId}){
    _id
    title
    description
    image
    address
    location{
      lat
      lng
    }
  }
}`;

  const userId = useParams().userId;
  const { loading, data } = useQuery(USER_PLACES_QUERY, {
    variables: {
      userId: userId,
    },
  });
  // if (error) return "Something Bad Happened";
  //console.log(data);
  // useEffect(() => {
  //   const fetchPlaces = async () => {
  //     try {
  //       // const responseData = await sendRequest(
  //       //   `http://localhost:5000/api/places/user/${userId}`
  //       // );
  //
  //       console.log(data);
  //       setLoadedPlaces(data);
  //     } catch (err) {}
  //   };
  //   fetchPlaces();
  // }, [data, userId]);

  const placeDeletedHandler = () => {
    // setLoadedPlaces((prevPlaces) =>
    //   prevPlaces.filter((place) => place.id !== deletedPlaceId)
    // );
    // data.filter((place) => place.id !== deletedPlaceId);
    history.push("/");
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {loading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!loading && (
        <PlaceList
          items={data.getPlacesByUserId}
          onDeletePlace={placeDeletedHandler}
        />
      )}
    </React.Fragment>
  );
};

export default UserPlaces;
