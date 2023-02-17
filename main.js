let clima=prompt("Ingrese el clima de su ciudad y le dire que tema de Taylor Swift escuchar: ");
switch (clima) {
    case "lluvia":
        let resultado = ("Fearless");
        alert (resultado);
       console.log("Fearless");
       break;
    
    case "nublado":
        let resultado1 = ("Anti-hero");
        alert (resultado1);
       console.log("Anti-hero");
        break;

    case "niebla":
        let resultado2 = ("Lavander haze");
        alert (resultado2);
        console.log("Lavender haze");
        break;

    case "otoñal":
        let resultado3 = ("All too well");
        alert (resultado3);
        console.log("All too well");
        break;

    case "calor":
        let resultado4 = ("Cruel summer");
        alert (resultado4);
        console.log("Cruel summer");
        break;

    case "primaveral":
        let resultado5 = ("ME!");
        alert (resultado5);
        console.log("ME!");
        break;

    case "frio":
        let resultado6 = ("Cold as you");
        alert (resultado6);
        console.log("Cold as you");
        break;
       default:
        let resultado7 = ("intente con lluvia, calor, frio, nublado, otoñal, primaveral o niebla");
        alert (resultado7);
      console.log("intente con lluvia, calor, frio, nublado, otoñal, primaveral, niebla");
       break;
}
