import React from 'react';
import './searchfield.scss'

const SearchField =()=>(
  <div id="wrap">
  <form action="" autocomplete="on">
  <input id="search" name="search" type="text" placeholder="What're we looking for ?"/><input id="search_submit" value="Rechercher" type="submit"/>
  </form>
</div>
)

export default SearchField
