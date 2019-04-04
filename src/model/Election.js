
import { Record, List, Maybe } from 'typed-immutable';

const electionConfig = Record({
	key: String(),
	value: String(),
});

const Election = Record({
	id: String(),
	name: String(),
	moduleId: String(),
	nominationStart:  Maybe(Number),
	nominationEnd:  Maybe(Number),
	objectionStart: Maybe(Number),
	objectionEnd: Maybe(Number),
	moduleName: Maybe(String),
	approval_status: Maybe(String),
	electionConfig: List(electionConfig),
});

const AllElection = Record({
	id: String(),
	name: String(),
	createdBy: String(),
	createdAt: Number(),
	updatedAt: Number(),
	moduleId: String(),
});

const ElectionWithStatus = Record({
	id: String(),
	name: String(),
	moduleId: String(),
	createdBy: String(),
	lastModified: Number(),
	status: String(),
})

export {
	Election,
	AllElection,
	ElectionWithStatus,
}