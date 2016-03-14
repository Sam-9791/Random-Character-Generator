var portrait = function(cclass, crace, csex, calign){
  switch (classes.indexOf(cclass)) {
    case 0: //barbarian
      switch (Math.floor(Math.random()*2)) {
        case 0:
          return "images/barbarian1.png";
          break;
        case 1:
          return "images/barbarian2.png";
          break;
        case 2:
            return "images/barbarian3.png";
            break;
      }
      break;
    case 1: //Fighter
       if(csex == "Female"){
         return "images/fighter_female.png";
       }else{
         var mfighters = ["images/fighter_male.png", "images/cleric_heronius_male.png", "images/male_fighter.png"];
         return mfighters[Math.floor(Math.random()*2)];
       }
       break;
    case 2: //rogue
      var thieves = ["images/thief_halfling_female.png", "images/human_monk.png"];
      return thieves[Math.floor(Math.random()*thieves.length)];
      break;
    case 3: //Cleric
      var mclerics = ["images/cleric_heronius_male.png", "images/cleric_human_female.png", "images/cleric_myhriss_male.png"];
      var fclerics = ["images/cleric_tritherion_female.png", "images/cleric_human_female.png"];
      if(csex == "Female"){
        return fclerics[Math.floor(Math.random()*fclerics.length)];
      }else{
        return mclerics[Math.floor(Math.random()*mclerics.length)];
      }
      break;
    //oh fuck I don't have any druids
    case 5: //rangers
      if(csex == "Female"){
        return "images/human_ranger_female.png";
      }else{
        var mbarbs = ["images/barbarian1.png", "images/barbarian2.png", "images/barbarian3.png"];
        return mbarbs[Math.floor(Math.random()*mbarbs.length)];
      }
      break;
    case 6: //think I got a paladin somewhere here...
      var mpals = ["images/cleric_heronius_male.png", ];
      var fpals = ["images/fighter_female.png"];
      if(csex == "Female"){
        return fpals[Math.floor(Math.random()*fpals.length)];
      }else{
        return mpals[Math.floor(Math.random()*mpals.length)];
      }
      break;
    case 7: //Monk
      var mmonks = ["images/human_monk.png"];
      return mmonks[Math.floor(Math.random()*mmonks.length)];
      break;
    case 8: //magic users
    case 9:
      var mmagic_users = ["images/magic_user_male.png", "images/magic_user_male2.png", "images/magic_user_male3.png", "images/magic_user_male4.png", "images/wizard_human_male.png"];
      var fmagic_users = ["images/cleric_tritherion_female.png", "images/magic_user_female.png"];
      if(csex == "Female"){
        return fmagic_users[Math.floor(Math.random()*fmagic_users.length)];
      }else{
        return mmagic_users[Math.floor(Math.random()*mmagic_users.length)];
      }
      break;
    case 10:
      var mbards = ["images/bard.png"];
      return mbards[Math.floor(Math.random()*mbards.length)];
    default:
      return "images/default_image.png";
  }
}