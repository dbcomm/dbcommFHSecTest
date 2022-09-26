import { Dialog } from '@angular/cdk/dialog';
import { Component, Input } from '@angular/core';
import { GameManager, gameManager } from 'src/app/game/businesslogic/GameManager';
import { SettingsManager, settingsManager } from 'src/app/game/businesslogic/SettingsManager';
import { Monster } from 'src/app/game/model/Monster';
import { MonsterEntity } from 'src/app/game/model/MonsterEntity';
import { MonsterType } from 'src/app/game/model/MonsterType';
import { MonsterStatsDialogComponent } from './dialogs/stats-dialog';

@Component({
  selector: 'ghs-monster',
  templateUrl: './monster.html',
  styleUrls: [ './monster.scss' ]
})
export class MonsterComponent {

  @Input() monster!: Monster;
  MonsterType = MonsterType;
  gameManager: GameManager = gameManager;
  settingsManager: SettingsManager = settingsManager;

  constructor(private dialog: Dialog) { }

  emptyEntities(): boolean {
    return this.monster.entities.length == 0 || this.monster.entities.every((monsterEntity) => monsterEntity.dead);
  }

  monsterOff(): boolean {
    return this.monster.off || this.monster.entities.every((monsterEntity) => monsterEntity.dead);
  }

  sortedEntites(): MonsterEntity[] {
    return this.monster.entities.sort((a, b) => {
      if (settingsManager.settings.eliteFirst) {
        if (a.type == MonsterType.elite && b.type == MonsterType.normal) {
          return -1;
        } else if (a.type == MonsterType.normal && b.type == MonsterType.elite) {
          return 1;
        }
      }
      return a.number < b.number ? -1 : 1;
    })
  }

  isNormal() {
    return this.monster.stats.some((monsterStat) => {
      return monsterStat.type == MonsterType.normal || monsterStat.type == MonsterType.elite;
    });
  }

  getEntities(type: MonsterType): MonsterEntity[] {
    return this.monster.entities.filter((value) => value.type == type).sort((a, b) => a.number - b.number);
  }

  nonDead(): number {
    return this.monster.entities.filter((monsterEntity) => !monsterEntity.dead).length;
  }

  getEdition(): string {
    return gameManager.getEdition(this.monster);
  }

  openStatsPopup() {
    this.dialog.open(MonsterStatsDialogComponent, { panelClass: 'dialog', data: this.monster });
  }
}