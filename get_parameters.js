function get_parameters() {
    if (!window.location.search) {
      return {};
    }
    const paramString = window.location.search.slice(1);
    let paramList = [];
    if (paramString.includes("&amp;")) {
      paramList = paramString.split("&amp;");
    } else {
      paramList = paramString.split("&");
    }

    const params = {};

    for (let i = 0; i < paramList.length; i++) {
      const values = paramList[i].split("=");
      params[values[0]] = values[1];
    }
    return params;
  }
  
  export default get_parameters;