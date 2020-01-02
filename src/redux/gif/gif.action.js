import GifActionTypes from './gif.types'

export const GifStart =()=>({
type: GifActionTypes.GIF_START
});

export const GifSuccess =(gifs)=>({
  type: GifActionTypes.GIF_FETCH_SUCCESS,
  payload: gifs
});

export const GifFailure =(error) =>({
  type: GifActionTypes.GIF_FETCH_FAILURE,
  payload: error

});
