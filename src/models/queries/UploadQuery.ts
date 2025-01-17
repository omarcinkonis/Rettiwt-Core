// MODELS
import { BaseQuery } from './BaseQuery';
import { UploadArgs } from '../args/UploadArgs';

// TYPES
import { IUploadQuery } from '../../types/request/queries/UploadQuery';

// TYPES
import { EUploadSteps } from '../../enums/Request';

/**
 * URL query parameters required while uploading a media file to Twitter.
 *
 * @public
 */
export class UploadQuery extends BaseQuery implements IUploadQuery {
	/* eslint-disable @typescript-eslint/naming-convention */
	public command: EUploadSteps;
	public total_bytes?: number;
	public media_id?: string;
	public segment_index?: number = 0;
	/* eslint-enable @typescript-eslint/naming-convention */

	/**
	 * Initializes a new query object for uploading a media file.
	 *
	 * @param step - The step of the upload process to be executed.
	 */
	public constructor(args: UploadArgs) {
		super();
		this.command = args.step;

		// Initializing based on the upload sted
		if (args.step == EUploadSteps.INITIALIZE) {
			this.total_bytes = args.size;
		} else {
			this.media_id = args.media;
		}
	}
}
