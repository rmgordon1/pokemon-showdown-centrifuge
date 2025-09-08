/**
 * Battle Centrifuge Plus commands
 * Pokemon Showdown - http://pokemonshowdown.com/
 *
 * Commands for the Battle Centrifuge Plus format Pokemon selection feature.
 *
 * @license MIT
 */

export const commands: Chat.ChatCommands = {
	selectopponent(target, room, user) {
		room = this.requireRoom();
		if (!room.battle) return this.errorReply("This command can only be used in battle rooms.");
		
		if (!room.battle.battleCentrifugePlusData || !room.battle.battleCentrifugePlusData.pendingSelection) {
			return this.errorReply("No Pokemon selection is currently pending.");
		}
		
		room.battle.selectOpponentPokemon(target, user);
	},
	
	selectown(target, room, user) {
		room = this.requireRoom();
		if (!room.battle) return this.errorReply("This command can only be used in battle rooms.");
		
		if (!room.battle.battleCentrifugePlusData || !room.battle.battleCentrifugePlusData.pendingSelection) {
			return this.errorReply("No Pokemon selection is currently pending.");
		}
		
		room.battle.selectOwnPokemon(target, user);
	},
};



