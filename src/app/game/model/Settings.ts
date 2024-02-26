import { ConditionName } from "./data/Condition";

export class Settings {

  [index: string]: any;

  abilities: boolean = true;
  abilityNumbers: boolean = true;
  abilityReveal: boolean = true;
  activeApplyConditions: boolean = true;
  activeApplyConditionsExcludes: ConditionName[] = [ConditionName.shield];
  activeStandees: boolean = true;
  activeSummons: boolean = true;
  addAllMonsters: boolean = false;
  allyAttackModifierDeck: boolean = true;
  alwaysAllyAttackModifierDeck: boolean = false;
  alwaysFhSolo: boolean = false;
  alwaysHazardousTerrain: boolean = false;
  alwaysLootApplyDialog = false;
  alwaysLootDeck: boolean = false;
  animations: boolean = true;
  applyBuildingRewards: boolean = true;
  applyConditions: boolean = true;
  applyConditionsExcludes: ConditionName[] = [ConditionName.shield];
  applyLongRest: boolean = true;
  applyLoot: boolean = true;
  applyLootRandomItem: boolean = true;
  applyRetirement: boolean = true;
  artwork: boolean = true;
  autoBackup: number = -1;
  autoBackupFinish: boolean = false;
  autoBackupUrl: { url: string, method: string, fileUpload: boolean, username: string | undefined, password: string | undefined, authorization: string | undefined } | undefined;
  automaticAttackModifierFullscreen: boolean = true;
  automaticPassTime: boolean = true;
  automaticStandees: boolean = true;
  automaticStandeesDialog: boolean = false;
  automaticTheme: boolean = true;
  automaticUnlocking: boolean = true;
  autoscroll: boolean = true;
  barsize: number = 1;
  backupHint: boolean = true;
  battleGoals: boolean = false;
  battleGoalsCharacter: boolean = false;
  battleGoalsFh: boolean = false;
  battleGoalsReminder: boolean = true;
  browserNavigation: boolean = false;
  buildingEffectsVisible: boolean = false;
  buildingInteractionsVisible: boolean = false;
  calculate: boolean = true;
  calculateStats: boolean = true;
  calculateShieldStats: boolean = true;
  calendarLocked: boolean = false;
  characterAttackModifierAnimate: boolean = true;
  characterAttackModifierDeck: boolean = true;
  characterAttackModifierDeckPermanent: boolean = false;
  characterAttackModifierDeckPermanentActive: boolean = false;
  characterCompact: boolean = false;
  characterHandSize: boolean = false;
  characterIdentities: boolean = true;
  characterIdentityHint: boolean = true;
  characterItems: boolean = false;
  characterItemsApply: boolean = false;
  characterItemsPermanent: boolean = false;
  characterItemsPermanentActive: boolean = false;
  characterItemsPermanentEquipped: boolean = true;
  characterItemsPermanentSorted: boolean = true;
  characterItemsPermanentZoom: number = 1;
  characterSheet: boolean = true;
  characterSheetCompact: boolean = false;
  characterShieldRetaliate: boolean = false;
  characterTraits: boolean = false;
  columns: boolean = true;
  columnsForce: boolean = false;
  combineSummonAction: boolean = true;
  debugRightClick: boolean = false;
  disableAnimations: boolean = false;
  disableArtwork: boolean = false;
  disableColumns: boolean = false;
  disableDragFigures: boolean = false;
  disablePinchZoom: boolean = false;
  disabledTurnConfirmation: boolean = false;
  disableSortFigures: boolean = false;
  disableStandees: boolean = false;
  disableWakeLock: boolean = false;
  dragFigures: boolean = true;
  dragValues: boolean = true;
  editionDataUrls: string[] = [];
  editions: string[] = [];
  eliteFirst: boolean = true;
  excludeEditionDataUrls: string[] = [];
  expireConditions: boolean = true;
  fhGhItems: boolean = false;
  fhStyle: boolean = false;
  fontsize: number = 1;
  globalFontsize: number = 1;
  fullscreen: boolean = false;
  hideAbsent: boolean = false;
  hideCharacterHP: boolean = false;
  hideCharacterLoot: boolean = false;
  hideCharacterXP: boolean = false;
  hideStats: boolean = false;
  hints: boolean = true;
  initiativeRequired: boolean = true;
  interactiveAbilities: boolean = true;
  locale: string = "en";
  logServerMessages: boolean = false;
  lootDeck: boolean = true;
  maxUndo: number = 100;
  portraitMode: boolean = true;
  monsters: boolean = true;
  monsterAttackModifierDeck: boolean = true;
  moveElements: boolean = true;
  partySheet: boolean = true;
  pinchZoom: boolean = true;
  pressDoubleClick: boolean = true;
  randomStandees: boolean = false;
  removeUnusedMonster: boolean = false;
  scenarioNumberInput: boolean = false;
  scenarioRewards: boolean = true;
  scenarioRewardsItems: boolean = true;
  scenarioRooms: boolean = true;
  scenarioRules: boolean = true;
  serverAutoconnect: boolean = true;
  serverCode: string | undefined;
  serverPassword: string | undefined;
  serverPort: number | undefined;
  serverSettings: boolean = false;
  serverUrl: string | undefined;
  serverWss: boolean = false;
  showBossMonster: boolean = true;
  showAllSections = false;
  showExpandedAbilityCard: boolean = false;
  showFullAbilityCard: boolean = false;
  showHiddenMonster: boolean = false;
  showOnlyUnfinishedScenarios = false;
  sortFigures: boolean = true;
  spoilers: string[] = [];
  standees: boolean = true;
  standeeStats: boolean = false;
  statAnimations: boolean = false;
  stats: boolean = true;
  summons: boolean = true;
  theme: string = "";
  tooltips: boolean = true;
  treasures: boolean = true;
  treasuresLoot: boolean = true;
  treasuresLootItem: boolean = true;
  treasuresLootScenario: boolean = true;
  turnConfirmation: boolean = true;
  unlockEnvelopeBuildings: boolean = true;
  wakeLock: boolean = true;
  zoom: number = 100;
}

export const localSettings: string[] = [
  "animations", "artwork", "automaticAttackModifierFullscreen", "autoBackup", "autoBackupFinish", "autoBackupUrl", "autoscroll", "automaticTheme", "barsize", "backupHint", "browserNavigation", "buildingEffectsVisible", "buildingInteractionsVisible", "calendarLocked", "characterAttackModifierAnimate", "characterAttackModifierDeckPermanent", "characterAttackModifierDeckPermanentActive", "characterItemsPermanent", "characterItemsPermanentActive", "characterItemsPermanentEquipped", "characterItemsPermanentSorted", "characterItemsPermanentZoom", "characterCompact", "characterSheetCompact", "columns", "columnsForce", "debugRightClick", "disableAnimations", "disableArtwork", "disableColumns", "disableDragFigures", "disablePinchZoom", "disableWakeLock", "dragFigures", "dragValues", "fhStyle", "fontsize", "globalFontsize", "fullscreen", "hideCharacterHP", "hideCharacterLoot", "hideCharacterXP", "hints", "logServerMessages", "pinchZoom", "portraitMode", "pressDoubleClick", "serverAutoconnect", "serverCode", "serverPassword", "serverPort", "serverSettings", "serverUrl", "serverWss", "showAllSections", "showBossMonster", "showHiddenMonster", "showOnlyUnfinishedScenarios", "statAnimations", "theme", "tooltips", "wakeLock", "zoom"
];