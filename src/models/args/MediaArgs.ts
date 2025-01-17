// PACKAGES
import { ArrayMaxSize, IsArray, IsNotEmpty, IsNumberString, validateSync } from 'class-validator';

// TYPES
import { IMediaArgs } from '../../types/request/args/MediaArgs';

// MODELS
import { DataValidationError } from '../errors/DataValidationError';

/**
 * User set query parameters that are used to specify the details of the media to be uploaded.
 *
 * @public
 */
export class MediaArgs implements IMediaArgs {
	@IsNotEmpty()
	@IsNumberString()
	public id: string;

	/**
	 * @remarks
	 * Maximum number of users that can be tagged is 10.
	 */
	@IsArray()
	@ArrayMaxSize(10)
	@IsNumberString(undefined, { each: true })
	public tags?: string[];

	/**
	 * Initializes a new MediaArgs object using the given arguments.
	 *
	 * @param args - The media arguments specifying the media.
	 */
	public constructor(args: MediaArgs) {
		this.id = args.id;
		this.tags = args.tags ?? [];

		// Validating this object
		const validationResult = validateSync(this);

		// If validation error occured
		if (validationResult.length) {
			throw new DataValidationError(validationResult);
		}
	}
}
