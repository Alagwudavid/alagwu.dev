const currentTimeUTC = document.getElementById("currentTimeUTC");
      const now = new Date();
      const utcTime = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
      currentTimeUTC.innerText = utcTime.toUTCString();