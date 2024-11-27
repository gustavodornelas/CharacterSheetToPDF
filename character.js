document.addEventListener("DOMContentLoaded", () => {
  const inputs = {
    //Dados básicos
    charName: document.querySelector('input[name="charname"]'),
    classLevel: document.querySelector('input[name="classlevel"]'),
    background: document.querySelector('input[name="background"]'),
    playerName: document.querySelector('input[name="playername"]'),
    race: document.querySelector('input[name="race"]'),
    alignment: document.querySelector('input[name="alignment"]'),
    experiencePoints: document.querySelector('input[name="experiencepoints"]'),

    // Atributos
    strengthscore: document.querySelector('input[name="strengthscore"]'),
    strengthmod: document.querySelector('input[name="strengthmod"]'),
    dexterityscore: document.querySelector('input[name="dexterityscore"]'),
    dexteritymod: document.querySelector('input[name="dexteritymod"]'),
    constitutionscore: document.querySelector('input[name="constitutionscore"]'),
    constitutionmod: document.querySelector('input[name="constitutionmod"]'),
    wisdomscore: document.querySelector('input[name="wisdomscore"]'),
    wisdommod: document.querySelector('input[name="wisdommod"]'),
    intelligencescore: document.querySelector('input[name="intelligencescore"]'),
    intelligencemod: document.querySelector('input[name="intelligencemod"]'),
    charismascore: document.querySelector('input[name="charismascore"]'),
    charismamod: document.querySelector('input[name="charismamod"]'),


    inspiration: document.querySelector('input[name="inspiration"]'),
    proficiencyBonus: document.querySelector('input[name="proficiencybonus"]'),


    strengthsave: document.querySelector('input[name="Strength-save"]'),
    strengthsaveprof: document.querySelector('input[name="Strength-save-prof"]'),
    dexteritysave: document.querySelector('input[name="Dexterity-save"]'),
    dexteritysaveprof: document.querySelector('input[name="Dexterity-save-prof"]'),
    constitutionsave: document.querySelector('input[name="Constitution-save"]'),
    constitutionsaveprof: document.querySelector('input[name="Constitution-save-prof"]'),
    wisdomsave: document.querySelector('input[name="Wisdom-save"]'),
    wisdomsaveprof: document.querySelector('input[name="Wisdom-save-prof"]'),
    intelligencesave: document.querySelector('input[name="Intelligence-save"]'),
    intelligencesaveprof: document.querySelector('input[name="Intelligence-save-prof"]'),
    charismasave: document.querySelector('input[name="Charisma-save"]'),
    charismasaveprof: document.querySelector('input[name="Charisma-save-prof"]'),

    acrobatics: document.querySelector('input[name="Acrobatics"]'),
    acrobaticsprof: document.querySelector('input[name="Acrobatics-prof"]'),
    animalhandling: document.querySelector('input[name="Animal Handling"]'),
    animalhandlingprof: document.querySelector('input[name="Animal Handling-prof"]'),
    arcana: document.querySelector('input[name="Arcana"]'),
    arcanaprof: document.querySelector('input[name="Arcana-prof"]'),
    athletics: document.querySelector('input[name="Athletics"]'),
    athleticsprof: document.querySelector('input[name="Athletics-prof"]'),
    deception: document.querySelector('input[name="Deception"]'),
    deceptionprof: document.querySelector('input[name="Deception-prof"]'),
    history: document.querySelector('input[name="History"]'),
    historyprof: document.querySelector('input[name="History-prof"]'),
    insight: document.querySelector('input[name="Insight"]'),
    insightprof: document.querySelector('input[name="Insight-prof"]'),
    intimidation: document.querySelector('input[name="Intimidation"]'),
    intimidationprof: document.querySelector('input[name="Intimidation-prof"]'),
    investigation: document.querySelector('input[name="Investigation"]'),
    investigationprof: document.querySelector('input[name="Investigation-prof"]'),
    medicine: document.querySelector('input[name="Medicine"]'),
    medicineprof: document.querySelector('input[name="Medicine-prof"]'),
    nature: document.querySelector('input[name="Nature"]'),
    natureprof: document.querySelector('input[name="Nature-prof"]'),
    perception: document.querySelector('input[name="Perception"]'),
    perceptionprof: document.querySelector('input[name="Perception-prof"]'),
    performance: document.querySelector('input[name="Performance"]'),
    performanceprof: document.querySelector('input[name="Performance-prof"]'),
    persuasion: document.querySelector('input[name="Persuasion"]'),
    persuasionprof: document.querySelector('input[name="Persuasion-prof"]'),
    religion: document.querySelector('input[name="Religion"]'),
    religionprof: document.querySelector('input[name="Religion-prof"]'),
    sleightofhand: document.querySelector('input[name="Sleight of Hand"]'),
    sleightofhandprof: document.querySelector('input[name="Sleight of Hand-prof"]'),
    stealth: document.querySelector('input[name="Stealth"]'),
    stealthprof: document.querySelector('input[name="Stealth-prof"]'),
    survival: document.querySelector('input[name="Survival"]'),
    survivalprof: document.querySelector('input[name="Survival-prof"]'),
    passiveperception: document.querySelector('input[name="passiveperception"]'),
    otherprofs: document.querySelector('textarea[name="otherprofs"]'),
    ac: document.querySelector('input[name="ac"]'),
    initiative: document.querySelector('input[name="initiative"]'),
    speed: document.querySelector('input[name="speed"]'),
    maxHp: document.querySelector('input[name="maxhp"]'),

    // Armas
    weaponList: document.querySelector('#weaponsList tbody'),
    equipment: document.querySelector('textarea[placeholder="Equipment list here"]'),
    cp: document.querySelector('input[name="cp"]'),
    sp: document.querySelector('input[name="sp"]'),
    ep: document.querySelector('input[name="ep"]'),
    gp: document.querySelector('input[name="gp"]'),
    pp: document.querySelector('input[name="pp"]'),
    personality: document.querySelector('textarea[name="personality"]'),
    ideals: document.querySelector('textarea[name="ideals"]'),
    bonds: document.querySelector('textarea[name="bonds"]'),
    flaws: document.querySelector('textarea[name="flaws"]'),
    features: document.querySelector('textarea[name="features"]'),

    notes: document.querySelector('textarea[name="notes"]')
  };

  const xmlString = sessionStorage.getItem('xmlData');
  if (xmlString) {
    const xml = parseXml(xmlString);
    populateFields(xml, inputs);
  } else {
    alert('Nenhum dado XML encontrado.');
  }
});

function parseXml(xmlString) {
  const parser = new DOMParser();
  return parser.parseFromString(xmlString, 'text/xml');
}

function populateFields(xml, inputs) {
  const character = xml.querySelector('character');
  const fields = {
    classlevel: character.querySelector('classData') ? character.querySelector('classData').textContent.split('⊠')[0] : '',
    background: character.querySelector('backgroundCode') ? character.querySelector('backgroundCode').textContent : '',
    playername: character.querySelector('playername') ? character.querySelector('playername').textContent : '',
    race: character.querySelector('raceCode') ? character.querySelector('raceCode').textContent : '',
    alignment: character.querySelector('alignment') ? character.querySelector('alignment').textContent : '',
    experiencepoints: character.querySelector('experiencePoints') ? character.querySelector('experiencePoints').textContent : '',
    attributes: character.querySelector('abilityScores').textContent.split('⊠').slice(0, 6),
    ability: character.querySelector('abilityScores').textContent.split('⊠').slice(6, 12).map(value => value === "true"),
    profBonus: character.querySelector('proficiencyBonus').textContent,
    maxHp: character.querySelector('maxHealth').textContent,
    currentHp: character.querySelector('currentHealth').textContent,
    tempHp: character.querySelector('currentTempHP').textContent,
    ac: character.querySelector('armorBonus').textContent,
    initMod: character.querySelector('initMiscMod').textContent,
    speed: character.querySelector('baseSpeed').textContent,
    totalHd: character.querySelector('hitDiceList').textContent.split('⊠')[2] + 'd' + character.querySelector('hitDiceList').textContent.split('⊠')[1],
    remainingHd: character.querySelector('hitDiceList').textContent.split('⊠')[3],
    noteList: character.querySelector('noteList').textContent.split('⊠'),
    classData: character.querySelector('classData').textContent,
    weaponsQuantity: Number(character.querySelector('weaponList').textContent.split('⊠')[0]),
    weaponsData: character.querySelector('weaponList').textContent.split('⊠'),
    skillInfo: character.querySelector('skillInfo').textContent.split('⊠').map(value => value === "true")
  };

  console.log(fields)

  // nome do char
  inputs.charName.value = fields.noteList[15];

  // Classe e Niveis do char
  inputs.classLevel.value = fields.noteList[16].replace('\n        ', ' ');

  // Antecendentes
  inputs.background.value = fields.noteList[9];

  inputs.personality.value = fields.noteList[11];
  inputs.ideals.value = fields.noteList[12];
  inputs.bonds.value = fields.noteList[13];
  inputs.flaws.value = fields.noteList[14];

  inputs.pp.value = fields.noteList[17];
  inputs.gp.value = fields.noteList[18];
  inputs.ep.value = fields.noteList[19];
  inputs.sp.value = fields.noteList[20];
  inputs.cp.value = fields.noteList[21];

  // Raça
  inputs.race.value = fields.noteList[8];

  // Caracteristicas e Talentos
  inputs.features.value = fields.classData
    .replaceAll(/⊡-?\d+/g, '')
    .replaceAll(/⊠-?\d+/g, '')
    .replaceAll('⊡', ' - ')
    .replaceAll('⊠', '\n')
    .replaceAll('⊡Sorcery Pts⊡', ' : ')
    .replaceAll(/⊡-?\d+/g, '')
    .replaceAll(/⊠-?\d+/g, '')
    .replaceAll('⊟Resource⊡Resource', '\nRecursos\n')
    .replaceAll('⊡', ' - ')
    .replaceAll('⊠', '\n')
    .replaceAll(/⊡-?\d+/g, '')
    .replaceAll(/⊠-?\d+/g, '')
    .replaceAll(/-?\d+/g, '')
    .replaceAll(/-?\d+/g, '')
    .replaceAll('⊡', ' - ')
    .replaceAll('⊟', '\n')
    .replaceAll('⊠', '\n')

  // Outras proficiencias
  inputs.otherprofs.value = String('Armor Proficiences\n  • ' +
    fields.noteList[1].replaceAll('        ', '  • ') +
    '\nWeapons Proficiencies\n  • ' +
    fields.noteList[2].replaceAll('        ', '  • ') +
    '\nTool Proficiencies\n  • ' +
    fields.noteList[3].replaceAll('        ', '  • ') +
    '\nLanguages Proficiencies\n  • ' +
    fields.noteList[4].replaceAll('        ', '  • ').replaceAll('\n', ', ')
  )
  inputs.equipment.value = String('  • ' + fields.noteList[5].replaceAll('        ', '  • '))


  const [str, dex, con, int, wis, cha] = fields.attributes;

  // força
  inputs.strengthscore.value = str
  inputs.strengthmod.value = modificator(str)
  if (fields.ability[0]) {
    inputs.strengthsaveprof.checked = true
    inputs.strengthsave.value = Number(fields.profBonus)
  }
  inputs.strengthsave.value += "+ " + inputs.strengthsave.value + modificator(str)

  // Destreza
  inputs.dexterityscore.value = dex
  inputs.dexteritymod.value = modificator(dex)
  if (fields.ability[1]) {
    inputs.dexteritysaveprof.checked = true
    inputs.dexteritysave.value = Number(fields.profBonus)
  }
  inputs.dexteritysave.value += "+ " + inputs.dexteritysave.value + modificator(dex)

  // Constituição
  inputs.constitutionscore.value = con
  inputs.constitutionmod.value = modificator(con)
  if (fields.ability[2]) {
    inputs.constitutionsaveprof.checked = true
    inputs.constitutionsave.value = Number(fields.profBonus)
  }
  inputs.constitutionsave.value += "+ " + inputs.constitutionsave.value + modificator(con)

  // Inteligencia
  inputs.intelligencescore.value = int
  inputs.intelligencemod.value = modificator(int)
  if (fields.ability[3]) {
    inputs.intelligencesaveprof.checked = true
    inputs.intelligencesave.value = Number(fields.profBonus)
  }
  inputs.intelligencesave.value = "+ " + Number(Number(inputs.intelligencesave.value) + Number(modificator(int)))

  // Sabedoria
  inputs.wisdomscore.value = wis
  inputs.wisdommod.value = modificator(wis)
  if (fields.ability[4]) {
    inputs.wisdomsaveprof.checked = true
    inputs.wisdomsave.value = Number(fields.profBonus)
  }
  inputs.wisdomsave.value = "+ " + Number(Number(inputs.wisdomsave.value) + Number(modificator(wis)))

  // Carisma
  inputs.charismascore.value = cha
  inputs.charismamod.value = modificator(cha)
  if (fields.ability[5]) {
    inputs.charismasaveprof.checked = true
    inputs.charismasave.value = Number(fields.profBonus)
  }
  inputs.charismasave.value = "+ " + Number(Number(inputs.charismasave.value) + Number(modificator(cha)))

  // Habilidades
  skills(inputs.athletics, inputs.athleticsprof, fields.skillInfo[0], fields.profBonus, str)
  skills(inputs.acrobatics, inputs.acrobaticsprof, fields.skillInfo[1], fields.profBonus, dex)
  skills(inputs.sleightofhand, inputs.sleightofhandprof, fields.skillInfo[2], fields.profBonus, dex)
  skills(inputs.stealth, inputs.stealthprof, fields.skillInfo[3], fields.profBonus, dex)
  skills(inputs.arcana, inputs.arcana, fields.skillInfo[4], fields.profBonus, int)
  skills(inputs.history, inputs.historyprof, fields.skillInfo[5], fields.profBonus, int)
  skills(inputs.investigation, inputs.investigationprof, fields.skillInfo[6], fields.profBonus, int)
  skills(inputs.nature, inputs.natureprof, fields.skillInfo[7], fields.profBonus, int)
  skills(inputs.religion, inputs.religionprof, fields.skillInfo[8], fields.profBonus, int)
  skills(inputs.animalhandling, inputs.animalhandlingprof, fields.skillInfo[9], fields.profBonus, wis)
  skills(inputs.insight, inputs.insightprof, fields.skillInfo[10], fields.profBonus, wis)
  skills(inputs.medicine, inputs.medicineprof, fields.skillInfo[11], fields.profBonus, wis)
  skills(inputs.perception, inputs.perceptionprof, fields.skillInfo[12], fields.profBonus, wis)
  skills(inputs.survival, inputs.survivalprof, fields.skillInfo[13], fields.profBonus, wis)
  skills(inputs.deception, inputs.deceptionprof, fields.skillInfo[14], fields.profBonus, cha)
  skills(inputs.intimidation, inputs.intimidationprof, fields.skillInfo[15], fields.profBonus, cha)
  skills(inputs.performance, inputs.performanceprof, fields.skillInfo[16], fields.profBonus, cha)
  skills(inputs.persuasion, inputs.persuasionprof, fields.skillInfo[17], fields.profBonus, cha)

  // Proficiencia
  inputs.proficiencyBonus.value = fields.profBonus


  // Percepcao Passiva

  inputs.passiveperception.value = "+" + Number(Number(inputs.perception.value) + 10)

  // Classe de Armadura
  inputs.ac.value = fields.ac

  // Iniciativa
  inputs.initiative.value = fields.initMod

  // Deslocamento
  inputs.speed.value = fields.speed

  // Vida máxima
  inputs.maxHp.value = fields.maxHp


  // Armas 
  // Ignorar a primeira linha
  fields.weaponsData.shift();

  // Criar o array de objetos
  const weaponsArray = [];
  for (let i = 0; i < fields.weaponsData.length; i += 13) {
    const weapon = {
      "atkname": fields.weaponsData[i],      // Nome da arma ou outro campo
      "range": fields.weaponsData[i + 1], // Alcance ou outro campo
      "damageType": fields.weaponsData[i + 2], // Tipo do Dano (1101 - contundente, )
      "type": fields.weaponsData[i + 3], // Identificador
      "quantityDice": fields.weaponsData[i + 11],
      "dice": fields.weaponsData[i + 12],
    };
    weaponsArray.push(weapon);
  }
  console.log(weaponsArray);

  weaponsArray.forEach((weapon) => {
    const row = document.createElement('tr');

    const atkName = document.createElement('td');
    const atkNameInput = document.createElement('input');
    atkNameInput.value = weapon.atkname;
    atkName.appendChild(atkNameInput);
    row.appendChild(atkName);

    const range = document.createElement('td');
    const rangeInput = document.createElement('input');
    rangeInput.value = weapon.range;
    range.appendChild(rangeInput);
    row.appendChild(range);

    const atkBonus = document.createElement('td');
    const atkBonusInput = document.createElement('input')
    atkBonusInput.value = weapon.type === '0' ? "+" + modificator(str) : "+" + modificator(dex);
    atkBonus.appendChild(atkBonusInput);
    row.appendChild(atkBonus);

    const dices = document.createElement('td');
    const dicesInput = document.createElement('input');

    const dmgType = (damageType) => {
      if (damageType == '1101' || damageType == "2201")
        return "perfurante";
      if (damageType === "1200" || damageType == "1100")
        return "contundente";
      if (damageType == "1102" || damageType == "1202")
        return "cortante"
      return ""
    }


    dicesInput.value = weapon.quantityDice + "D" + weapon.dice + ", " + dmgType(weapon.damageType);
    dices.appendChild(dicesInput);
    row.appendChild(dices);

    inputs.weaponList.appendChild(row); // Adiciona a linha à tabela
  });


  inputs.notes.value = fields.noteList[0]

}


function skills(field, checkbox, skillValue, proficience, attribute) {
  field.value = skillValue ? "+" + (Number(modificator(attribute)) + Number(proficience)) : "+" + modificator(attribute);
  if (skillValue) checkbox.checked = true
}


function modificator(value) {
  return Math.floor((value - 10) / 2)
}