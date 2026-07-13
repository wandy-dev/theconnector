## [1.0.0] - 2026-07-13

### Added

- Federation option in visibility modal with options full and limited
- Disable federation option when editing a status
- `federation` attribute exposed at `/api/v1/statuses`
- `TheconnectorAttribute` model
- Prevents calling `ActivityPub::DistributionWorker` in the `PostStatusService` if statuses federation policy is limted
- Icons on status card to display it's federation policy
- User setting for default federation policy in posting defaults

### Fixed

- use jsonb with proper defaults for theconnector_attributes metadata column

## [0.2.0] - 2026-07-01

### Added

- theconnector_attributes table

## [0.1.0] - 2026-07-01

### Added

- theconnector version info in the footer
