import GameLocation from "./location/GameLocation";
import Location from "./location/Location";
import MovieLocation from "./location/MovieLocation";


let locacao: Location;
locacao = new GameLocation();
locacao.startItem();
locacao = new MovieLocation();
locacao.startItem();
