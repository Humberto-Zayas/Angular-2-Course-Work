import {Component, Input, EventEmitter, Output} from 'angular2/core'

@Component({
	selector: 'vote',
	templateUrl: 'app/voter.template.html',
	styles: [`
		.glyphicon-heart {
			color: #ccc;
			cursor: pointer;
		}

		.highlighted {
			color: deeppink;
		}
	`]
})



export class VoterComponent {
	@Input() voteCount = 0;
	@Input() myVote = 0;

	@Output() vote = new EventEmitter();

	onVoteUp(){
		if(this.myVote == 1)
			return;

		this.myVote++;

		this.vote.emit({ myVote: this.myVote });
	}

	onVoteDown(){
		if(this.myVote == -1)
			return;

		this.myVote--;
		this.vote.emit({ myVote: this.myVote });
	}
}