// Base44 disattivato per evitare errori nel front-end
// Simula solo una risposta valida così il form non si blocca

export const base44 = {
  entities: {
    create: async (entityName, data) => {
      console.log("Base44 disattivato. Dati ricevuti:", entityName, data);
      return { id: crypto.randomUUID() }; // ID finto per far proseguire il form
    }
  }
};
